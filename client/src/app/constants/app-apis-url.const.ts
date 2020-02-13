export const APP_APIS_URL = Object.freeze({
  employees_url: '/employees',
  getEmployeeDetailsUrl: (employeeId: string): string => `/employees/${employeeId}`,
  employees_reports_url: '/employees/report',
  managers_url: '/managers',
  getManagerDetailsUrl: (managerId: string) => `/managers/${managerId}`,
  managers_reports_url: '/managers/report',
  managers_assign_task_url: '/managers/assign-task'
});
