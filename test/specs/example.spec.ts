import { rpLoginPage } from "test/pageobjects";
import { userCredantions } from "test/pageobjects/constant";

describe("aaa", () => {
  before("aaa", () => {
    rpLoginPage.login(userCredantions);
  });
  it("aaa", () => {});
});
