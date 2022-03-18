import { InvalidFieldError } from '@/validation/errors'
import { EmailValidation } from './email-validation'
import faker from 'faker'

const makeSut = (fieldName: string): EmailValidation =>
  new EmailValidation(fieldName)

describe('EmailValidation', () => {
  test('Should return error if email is invalid', () => {
    const fieldName = faker.database.column()
    const sut = makeSut(fieldName)
    const error = sut.validate(faker.database.column())
    expect(error).toEqual(new InvalidFieldError(fieldName))
  })

  test('Should return falsy if email is valid', () => {
    const sut = makeSut(faker.database.column())
    const error = sut.validate(faker.internet.email())
    expect(error).toBeFalsy()
  })

  test('Should return falsy if email is empty', () => {
    const sut = makeSut(faker.database.column())
    const error = sut.validate('')
    expect(error).toBeFalsy()
  })
})
