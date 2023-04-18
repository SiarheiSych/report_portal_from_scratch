import { browserWrapper } from "../element-wrapper";
import { getLogger } from "log4js";
import { LoginPage, User } from "../constant";

const logger = getLogger("[Login helper]");

let rpLoginPage: LoginPage;

let userCredantions: User = {
  userName: "Sergei",
  password: "Eva1995@",
};

export async function loginAsUser() {
  try {
    await browserWrapper.navigate("http://localhost:8080/");
    await rpLoginPage.login(userCredantions);
  } catch (error) {
    logger.info("Page failed to load");
  }
}
