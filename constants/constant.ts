import { User } from './models';

export const userCredantions: User = {
  userName: 'Sergei',
  password: 'Eva1995@'
};

export const mainPageConstant = {
  title: 'All Dashboards',
  buttons: {
    settingsButton: {
      dashBoards: 'Dashboards',
      launches: 'Launches',
      filters: 'Filters',
      projectSettings: 'Project settings',
      profile: 'Profile',
      administrate: 'Administrate',
      logout: 'Logout'
    }
  },
  columnName: {
    dashboardName: 'DASHBOARD NAME',
    description: 'DESCRIPTION',
    owner: 'OWNER',
    shared: 'SHARED',
    edit: 'EDIT',
    delete: 'DELETE'
  }
};
