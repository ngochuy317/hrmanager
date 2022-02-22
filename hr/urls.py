from rest_framework import routers
from .views import DepartmentViewSet, EmployeeViewSet

router = routers.DefaultRouter()
router.register('employee', EmployeeViewSet, 'employee')
# router.register('employee/<pk>', EmployeeDetailView.as_view(), 'employee_detail')
router.register('department', DepartmentViewSet, 'department')

urlpatterns = router.urls