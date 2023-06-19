import puppeteer from "puppeteer";
import { IBrowser } from '../../../constants';
import { getLogger } from '../../utils/lib/logger';
const logger = getLogger('[Browser Wrapper]');

  
export class Browser implements IBrowser {
  private browser: puppeteer.browser
  private readonly TIMEOUT: number;
  private readonly USER_AGENT = 'INSERT_USERAGENT';

  constructor(_timeout = 30000) {
    this.TIMEOUT = _timeout;

    (async () => {
      await this.Init();
    })();
  }

  public async GetBrowserInstance(): Promise<puppeteer.Browser> {
    return this.browser;
  }

  public async CreatePage(URL: string, options: puppeteer.DirectNavigationOptions = { waitUntil: 'load' }): Promise<puppeteer.Page> {
    const page = await this.browser.newPage();

    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
      hasTouch: false,
      isLandscape: false,
      isMobile: false
    });

    await page.setDefaultNavigationTimeout(this.TIMEOUT);
    await page.setRequestInterception(true);

    try {
      await page.goto(URL, options);
    } catch (err) {
      await page.close();
      throw err;
    }

    return page;
  }

  private async Init(HeadLess = true, SlowDown = 0, DevTools = false) {
    logger.info('Puppeteer browser init. Timeout set to: ' + this.TIMEOUT.toString());
    this.browser = await this.StartBrowser(HeadLess, SlowDown, DevTools);

    // Listen to Disconnect event, and restart.
    this.browser.on('disconnected', async () => {
      logger.error('Puppeteer browser crashed, Restarting browser.');
      await this.ReleaseBrowser();
      if (this.browser && this.browser.process() != null) this.browser.process().kill('SIGINT');
      await this.Init();
    });
  }

  private async ReleaseBrowser() {
    logger.warn('Puppeteer browser releasing and closing.');
    if (this.browser) await this.browser.close();
  }

  private async StartBrowser(HeadLess: boolean, SlowDown: number, DevTools: boolean): Promise<puppeteer.Browser> {
    logger.info('Puppeteer browser starting up with slowdown set to: ' + SlowDown);

    return await puppeteer.launch({
      headless: HeadLess,
      devtools: DevTools,
      ignoreHTTPSErrors: true,
      slowMo: SlowDown,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-dev-shm-usage',
        '--disable-accelerated-2d-canvas',
        '--no-first-run',
        '--no-zygote',
        '--disable-gpu'
      ]
    });
  }
}

