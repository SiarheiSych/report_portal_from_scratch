import { Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import { Details } from '../../../constants';
import { DashBoardPage } from '../dash-board-page';

const dashBoardPage = new DashBoardPage();

Then(/^Dashboard page is open and title is equal (.*)$/, async (title: string) => {
  const titleText = await dashBoardPage.title.getTrimText();
  expect(titleText).to.equal(title);
});

Then(/^Should have correct number of widgets (.*)$/, async (widgets: number) => {
  const array = await dashBoardPage.tables.getElementsArray();
  expect(`${array.length}`).to.equal(widgets);
});

Then(/^Should have correct sum of total and details (.*)$/, async (count: number) => {
  const detailLocator = await dashBoardPage.detailsResult(Details.amount);
  const detailCount = await detailLocator.getTrimText();
  const expectedResult = await detailCount.map(el => parseInt(el));
  const elementaryExpectedResult = expectedResult.reduce((a, b) => a + b, 0);
  expect(`${elementaryExpectedResult}`).to.deep.equal(count, 'Count of tables incorrect');
});

Then(/^Should have to contain (.*)+$/, async (name: string) => {
  const detailLocator = await dashBoardPage.detailsResult(Details.details);
  const actualResult = await detailLocator.getTrimText();
  const actual = actualResult.toString();
  expect(actual).to.equal(name, 'Test case behavior has incorrect name');
});
