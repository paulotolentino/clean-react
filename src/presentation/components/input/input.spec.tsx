import React from "react";
import faker from "faker";
import { fireEvent, render, RenderResult } from "@testing-library/react";
import Context from "@/presentation/contexts/form/form-context";
import Input from "./input";

const makeSut = (fieldName): RenderResult => {
  return render(
    <Context.Provider value={{ state: {} }}>
      <Input name={fieldName} />
      );
    </Context.Provider>
  );
};

describe("Input Component", () => {
  test("Should begin with readOnly", () => {
    const fieldName = faker.database.column();
    const sut = makeSut(fieldName);
    const input = sut.getByTestId(fieldName) as HTMLInputElement;
    expect(input.readOnly).toBe(true);
  });

  test("Should remove readOnly on focus", () => {
    const fieldName = faker.database.column();
    const sut = makeSut(fieldName);
    const input = sut.getByTestId(fieldName) as HTMLInputElement;
    fireEvent.focus(input);
    expect(input.readOnly).toBe(false);
  });
});
