import { FieldValidationSpy } from "../test/mock-field-validation";
import { ValidationComposite } from "./validation-composite";

describe("ValidationComposite", () => {
  test("Should return error if any validation fails", () => {
    const fieldvalidationSpy = new FieldValidationSpy("any_field");
    fieldvalidationSpy.error = new Error("first_error_message");
    const fieldvalidationSpy2 = new FieldValidationSpy("any_field");
    fieldvalidationSpy2.error = new Error("second_error_message");
    const sut = new ValidationComposite([
      fieldvalidationSpy,
      fieldvalidationSpy2,
    ]);
    const error = sut.validate("any_field", "any_value");
    expect(error).toBe("first_error_message");
  });
});
