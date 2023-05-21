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
  mainPage: 'ui/#sergei_advanced/dashboard'
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



