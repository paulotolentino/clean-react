import { HttpPostClientSpy } from "../../test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";

describe("RTemoteAuthentication", () => {
  test("should call HttpPostClient with correct URL", async () => {
    const URL = "any_url";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(URL, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(URL);
  });
});
