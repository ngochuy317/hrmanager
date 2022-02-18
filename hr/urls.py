from rest_framework import routers
from .views import EmployeeViewSet, DepartmentViewSet

router = routers.DefaultRouter()
router.register('employee', EmployeeViewSet, 'employee')
router.register('department', DepartmentViewSet, 'department')

urlpatterns = router.urls