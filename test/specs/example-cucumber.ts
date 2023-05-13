import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import { rpLoginPage } from '../pageobjects/login-page';
import { dashBoardPageConstant, userCredantions } from '../../constants';
import { MainPage } from '../pageobjects/mainPage';
import { DashBoard } from '../pageobjects/dashboard-page';

const mainPage = new MainPage();
const dashBoardPage = new DashBoard();

Given(/^I am on the (\w+) page$/, async () => {
  await rpLoginPage.open();
});

Given(/^I login with user credantions$/, async () => {
  await rpLoginPage.login(userCredantions);
});

When(/^I should navigate to main (\w+) $/, async () => {
  await mainPage.waitLoaded();
  await mainPage.dashBoard.click();
});

Then(/^(\w+) page is open $/, async () => {
  const titleText = await dashBoardPage.title.getText();
  expect(titleText).to.equal(dashBoardPageConstant.title);
});
