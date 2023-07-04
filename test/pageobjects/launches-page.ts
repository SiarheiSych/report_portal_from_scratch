import { ElementsArrayHelper, UIElement } from '../../common/element-wrapper';
import { HamburgerButtons } from '../../constants';
import { MainPage } from './main-page';

export class LaunchesPage extends MainPage {
  private containerLocator = '.layout__page-container--qkF50';
  private tableLocator = '.grid__grid--utIJA';
  private dropDownLocator = '.allLatestDropdown__arrow--11d0M';
  private dropDownContainer = '.allLatestDropdown__option-list--1F7D4';
  private hamburgerMenu = '.hamburger__hamburger-menu--mU2ng';

  constructor() {
    super();
    this.pageUrl += `/launches/all`;
  }

  get container() {
    return UIElement.getInstance(this.containerLocator);
  }

  get allLaunches() {
    return ElementsArrayHelper.getInstance(this.containerLocator, { childSelector: '.gridRow__grid-row-wrapper--1dI9K' });
  }

  get dropDownButtons() {
    return UIElement.getInstance(this.dropDownContainer);
  }

  get hamburgerIcon() {
    return UIElement.getInstance('.hamburger__hamburger-icon--3X-GF');
  }

  get buttonsLocator() {
    return ElementsArrayHelper.getInstance(this.hamburgerMenu, { childSelector: '.hamburgerMenuItem__hamburger-menu-item--cZv-9' });
  }

  async dropDownMenu() {
    const button = UIElement.getInstance(this.dropDownLocator);
    await button.click();
  }

  async switchToLatest() {
    await this.dropDownMenu();
    const latestLaunchesLocator = await this.dropDownButtons.getChildArray('div');
    const latest = await latestLaunchesLocator.getElementsArray();
    await latest[1].click();
  }

  async switchToAll() {
    await this.dropDownMenu();
    const latestLaunchesLocator = await this.dropDownButtons.getChildArray('div');
    const latest = await latestLaunchesLocator.getElementsArray();
    await latest[0].click();
  }

  async hamburgerMenuButtons(ind: HamburgerButtons) {
    const button = await this.buttonsLocator.getElementsArray();
    return await button[ind].click();
  }

  async buttonsText(ind: HamburgerButtons) {
    const button = await this.buttonsLocator.getElementsArray();
    const text = await button[ind].getText()
    return text;
  }
}
