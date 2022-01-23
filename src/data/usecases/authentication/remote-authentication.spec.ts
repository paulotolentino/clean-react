import { HttpPostClientSpy } from "../../test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";
import { mockAuthentication } from "@/domain/test/mock-authentication";
import faker from "faker";

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return {
    sut,
    httpPostClientSpy,
  };
};

describe("RemoteAuthentication", () => {
  test("should call HttpPostClient with correct URL", async () => {
    const URL = faker.internet.url();
    const { httpPostClientSpy, sut } = makeSut(URL);
    await sut.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(URL);
  });
});

describe("RemoteAuthentication", () => {
  test("should call HttpPostClient with correct body", async () => {
    const authenticationParams = mockAuthentication();
    const { httpPostClientSpy, sut } = makeSut();
    await sut.auth(authenticationParams);
    expect(httpPostClientSpy.body).toEqual(authenticationParams);
  });
});
