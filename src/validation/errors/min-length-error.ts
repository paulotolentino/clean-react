export class MinLengthError extends Error {
  constructor (minLength: number) {
    super(`Deve conter ${minLength} caracteres.`)
  }
}
