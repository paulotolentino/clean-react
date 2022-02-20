import { MinLengthError } from "@/validation/errors";
import { MinLengthValidation } from "./min-length-validation";

describe("MinLengthValidation", () => {
  test("Should return error if value is shortter than 8 characters", () => {
    const sut = new MinLengthValidation("field", 8);
    const error = sut.validate("123");
    expect(error).toEqual(new MinLengthError(8));
  });

  test("Should return falsy if value is equal or bigger than 6 characters", () => {
    const sut = new MinLengthValidation("field", 6);
    const error = sut.validate("1234567");
    expect(error).toBeFalsy();
  });
});
