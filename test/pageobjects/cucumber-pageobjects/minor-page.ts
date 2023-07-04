import { Given, When } from '@wdio/cucumber-framework';

import { rpLoginPage } from '../login-page';
import { Buttons, userCredantions } from '../../../constants';
import { MainPage } from '..';

const mainPage = new MainPage();

Given(/^I am on the login page$/, async () => {
  await rpLoginPage.open();
});

Given(/^I login with user credantions$/, async () => {
  await rpLoginPage.login(userCredantions);
});

When(/^I should navigate to dashboard$/, async () => {
  await mainPage.waitLoaded();
  await mainPage.dashBoardButton.click();
});

When(/^I should navigate to launches$/, async () => {
  await mainPage.waitLoaded();
  await mainPage.sideBarButton(Buttons.launches);
});
