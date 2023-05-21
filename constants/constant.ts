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

export const dashBoardPageConstant = {
  header: 'Dashboard has been shared by superadmin',
  title: 'ALL DASHBOARDSDEMO DASHBOARD',
  tablesName: {
    launchStatisticsArea: 'LAUNCH STATISTICS AREA',
    launchStatisticBar: 'LAUNCH STATISTICS BAR',
    investigatedLaunchesPercentage: 'INVESTIGATED PERCENTAGE OF LAUNCHES',
    testCaseTrendChart: 'TEST CASES GROWTH TREND CHART',
    overallStatisticsPanel: 'OVERALL STATISTICS PANEL',
    launchesDurationChart: 'LAUNCHES DURATION CHART',
    overallStatisticDonut: 'OVERALL STATISTICS DONUT',
    failedCasesTrendChart: 'FAILED CASES TREND CHART'
  }
};

export enum Details {
  amount,
  details
}

export enum Buttons {
  dashBoards = 0,
  launches = 1,
  filters = 2,
  projectSettings = 3
}

export enum HamburgerButtons {
  forceFinish = 0,
  Analysis = 1,
  uniqueErrorAnalysis = 2,
  patternAnalysis = 3,
  delete = 4
}
