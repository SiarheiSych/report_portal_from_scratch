import { login } from "../../common/auth/auth";

describe("aaa", () => {
  before(async () => {
    await login();
  });

  it("should have correct choosen date", async () => {});
});
