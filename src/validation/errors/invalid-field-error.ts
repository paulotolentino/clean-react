export class InvalidFieldError extends Error {
  constructor(field: string) {
    super(`Campo ${field}: Valor inválido`);
  }
}
