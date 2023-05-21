import { Then, Given, When } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import { HamburgerButtons } from '../../../constants';

import { LaunchesPage } from '../launches-page';

const launchesPage = new LaunchesPage();

Then(/^Count of launches (.*)$/, async (count: number) => {
  const quantityOfLaunches = await launchesPage.allLaunches.getElementsArray();
  expect(`${quantityOfLaunches.length}`).to.equal(count);
});

Given(/^Switch to latest launches$/, async () => {
  await launchesPage.switchToLatest();
});

When(/^Open hamburger icon and click on buttons (.*)$/, async (text: string) => {
  await launchesPage.hamburgerIcon.click();
  const actualResult= await launchesPage.buttonsText(HamburgerButtons.Analysis);
  await launchesPage.hamburgerMenuButtons(HamburgerButtons.Analysis);
  expect(actualResult).to.equal(text);
});
