import { Given, When, Then } from 'cucumber';
import { expect } from 'chai';
import { rpLoginPage } from '../pageobjects/login-page';
import { dashBoardPageConstant, userCredantions } from '../../constants';
import { MainPage } from '../pageobjects/mainPage';
import { DashBoard } from '../pageobjects/dashboard-page';

const mainPage = new MainPage();
const dashBoardPage = new DashBoard();

Given('I should open login page', async function () {
  await rpLoginPage.open();
});

Given('I should login with user credantions', async function () {
  await rpLoginPage.login(userCredantions);
});

When('I should navigate to main dashboard', async function () {
  await mainPage.waitLoaded();
  await mainPage.dashBoard.click();
});

Then('Filters page is opened', async function () {
  const titleText = await dashBoardPage.title.getText();
  expect(titleText).to.equal(dashBoardPageConstant.title);
});
