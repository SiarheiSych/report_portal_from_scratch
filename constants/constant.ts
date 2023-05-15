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
export const dashBoardPageConstant = {
  title: 'Dashboard has been shared by superadmin'
};

export const pageUrls = {
  mainPage: 'ui/#sergei_advanced/dashboard',
  api: 'api'
};

export const requestConstants = {
  statusCodes: {
    success: 200,
    created: 201,
    accepted: 202,
    noContent: 204,
    movedPermanently: 301,
    found: 302,
    notModified: 304,
    badRequest: 400,
    unauthorized: 401,
    forbidden: 403,
    notFound: 404,
    methodNotAllowed: 405,
    conflict: 409,
    internalServerError: 500
  },
  defaultTimeout: 40000,
  authorization: {
    bearer: 'Bearer'
  }
};
