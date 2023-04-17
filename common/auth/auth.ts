import { browserWrapper } from "common/element-wrapper";
import { getLogger } from "log4js";
import { LoginPage, User } from "common/constant";

const logger = getLogger("[Login helper]");
let loginPage: LoginPage;
let userCredantions: User = {
  userName: "Sergei",
  password: "Eva1995@",
};

export async function login() {
  try {
    await browserWrapper.navigate("http://localhost:8080/");
    await loginPage.login(userCredantions);
  } catch (error) {
    logger.info("Page failed to load");
  }
}
