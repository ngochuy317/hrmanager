import jwt

from rest_framework import permissions
from rest_framework.exceptions import AuthenticationFailed

from accounts.models import User


class CustomBasePermission(permissions.BasePermission):

    def get_role(self):
        pass

    def has_permission(self, request, view):
        """
        Return `True` if permission is granted, `False` otherwise.
        """
        headers_auth = request.headers.get('Authorization')
        if headers_auth and headers_auth.startswith('Bearer'):
            token = headers_auth.split()[1] if len(headers_auth.split()) > 1 else None
            if token:
                try:
                    payload = jwt.decode(token, "secret", algorithms=["HS256"], encoding='utf-8')
                    id = payload.get('id')
                    user = User.objects.filter(id=id).first()
                    if user and user.role.lower() in self.get_role():
                        return True
                except jwt.ExpiredSignatureError:
                    return False
        return False


    def has_object_permission(self, request, view, obj):
        """
        Return `True` if permission is granted, `False` otherwise.
        """
        return True


class AdminPermission(CustomBasePermission):

    def get_role(self):
        return ["admin"]


class ManagerPermission(CustomBasePermission):

    def get_role(self):
        return ["manager"]


class UserPermission(CustomBasePermission):

    def get_role(self):
        return ["user"]


class AllowAnyUserPermission(CustomBasePermission):

    def get_role(self):
        return ["admin", "manager", "user"]
