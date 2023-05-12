import { MainPage } from './mainPage';
import { UIElement } from '../../common/element-wrapper/lib/elements';

export class DashBoard extends MainPage {
  protected titleLocator = '.dashboardItemPage__globe-icon--1rEDy';
  constructor() {
    super();
    this.pageUrl += `/14`;
  }

  get title() {
    return UIElement.getInstance(this.titleLocator);
  }
}
