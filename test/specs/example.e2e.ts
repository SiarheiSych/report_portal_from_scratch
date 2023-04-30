import { mainPageConstant, userCredantions } from "../../constants";
import { rpLoginPage } from "../pageobjects/login-page";
import { MainPage } from "../pageobjects/mainPage";

let mainPage = new MainPage();

describe("My Login application", () => {
  before("Login to app", async () => {
    await rpLoginPage.open();
    await rpLoginPage.login(userCredantions);
  });

  it("should have correct title", async () => {
    await mainPage.waitLoaded();
    const title = await mainPage.title.getText();
    expect(title).toEqual(mainPageConstant.title);
  });

  it("should have correct name of setting button breadcrumb", async () => {
    const name = await mainPage.title.getText();
    expect(name).toEqual(mainPageConstant.buttons.settingButton);
  });
});
