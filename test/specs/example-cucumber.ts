import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import { rpLoginPage } from '../pageobjects/login-page';
import { userCredantions } from '../../constants';
import { MainPage } from '../pageobjects/mainPage';
import { DashBoard } from '../pageobjects/dashboard-page';

const mainPage = new MainPage();
const dashBoardPage = new DashBoard();

Given(/^I am on the login page$/, async () => {
  await rpLoginPage.open();
});

Given(/^I login with user credantions$/, async () => {
  await rpLoginPage.login(userCredantions);
});

When(/^I should navigate to dashboard$/, async () => {
  await mainPage.waitLoaded();
  await mainPage.dashBoard.click();
});

Then(/^Dashboard page is open and title is equal (.*)$/, async (title: string) => {
  const titleText = await dashBoardPage.title.getTrimText();
  expect(titleText).to.equal(title);
});

Then(/^Should have correct number of widgets (.*)$/, async (widgets: number) => {
  const array = await dashBoardPage.widgets.getElementsArray();
  expect(`${array.length}`).to.equal(widgets);
});
