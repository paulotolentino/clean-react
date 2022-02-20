import { MinLengthError } from "@/validation/errors";
import { MinLengthValidation } from "./min-length-validation";
import faker from "faker";

const makeSut = (minLength: number): MinLengthValidation =>
  new MinLengthValidation(faker.database.column(), minLength);

describe("MinLengthValidation", () => {
  test("Should return error if value is shortter than 8 characters", () => {
    const sut = makeSut(8);
    const error = sut.validate(faker.random.alphaNumeric(7));
    expect(error).toEqual(new MinLengthError(8));
  });

  test("Should return falsy if value is equal or bigger than 6 characters", () => {
    const sut = makeSut(6);
    const error = sut.validate(faker.random.alphaNumeric(6));
    expect(error).toBeFalsy();
  });
});
