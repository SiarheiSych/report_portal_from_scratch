import { browserWrapper } from '../element-wrapper/libs/browser';
import { getLogger } from '../utils/lib/logger';
import { LoginPage, User } from '../constant/lib/models';

const logger = getLogger('[Login helper]');
let loginPage :LoginPage;
let userCredantions: User = {
  userName:'Sergei',
  password: 'Eva1995@'
}

export async function login( ) {
  try{
    await browserWrapper.navigate('http://localhost:8080/');
    await loginPage.login(userCredantions)
  } catch(error) {
    logger.info('Page failed to load');
  }
}
