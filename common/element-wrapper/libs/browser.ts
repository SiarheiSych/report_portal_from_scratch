import { getLogger } from '../../utils/lib/logger';
const logger = getLogger('[Browser Wrapper]');

class BrowserWrapper {
  get defaultUrl(): string {
    return browser.config.baseUrl;
  }

  async navigate(path?: string, params: { overrideFullPath: boolean } | null = { overrideFullPath: false }) {
    const pageUrl = params.overrideFullPath ? path : path ? `${this.defaultUrl}${path}` : this.defaultUrl;
    logger.debug(`Opening url: ${pageUrl}`);
    return browser.url(pageUrl);
  }

  async refreshPage() {
    return browser.refresh
  }

  async getCurrentUrl() {
    return browser.getUrl();
  }

  async pressBackspace() {
    return browser.keys('Backspace');
  }

  async pressTab() {
    return browser.keys('Tab');
  }

  async throttleNetwork(option: 'offline' | 'GPRS' | 'Regular2G' | 'Good2G' | 'Regular3G' | 'Good3G' | 'Regular4G' | 'DSL' | 'WiFi' | 'online') {
    return browser.throttle(option);
  }

  async getWindowSize() {
    return browser.getWindowSize();
  }

  async setWindowSize(width: number, height: number) {
    return browser.setWindowSize(width, height);
  }

  async performActions(actions: object[]) {
    logger.debug('Performing custom actions');
    return browser.performActions(actions);
  }
}

export const browserWrapper = new BrowserWrapper();
