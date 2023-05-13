import { MainPage } from './mainPage';
import { UIElement } from '../../common/element-wrapper/lib/elements';
import { ElementsArrayHelper } from '../../common/element-wrapper';

export class DashBoard extends MainPage {
  protected titleLocator = '.dashboardItemPage__shared-caption--12vi7';
  protected widgetsDescLocator = '.react-grid-layout'
  protected widgetsLocator = '.react-grid-item'
  constructor() {
    super();
    this.pageUrl += `/14`;
  }

  get title() {
    return UIElement.getInstance(this.titleLocator);
  }

  get widgetsDesc() {
    return UIElement.getInstance(this.widgetsDescLocator)
  }

  get widgets(){
    return ElementsArrayHelper.getInstance(this.widgetsDescLocator, { childSelector: this.widgetsLocator });
  }
}
