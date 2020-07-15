import Validator from '../index';

test('Шаблон', () => {
  const validator = new Validator();
  expect(validator.validateUsername('abc_1s3j9-b')).toBeTruthy();
});

test('цифр большех', () => {
  const validator = new Validator();
  expect(validator.validateUsername('abc123456-b')).toBeTruthy();
});

test('Шаблон', () => {
  const validator = new Validator();
  expect(validator.validateUsername('a123_abc-f')).toBeTruthy();
});

test('Наинаеться и заканчивается цифрами', () => {
  const validator = new Validator();
  expect(validator.validateUsername('123_abc-f')).toBeTruthy();
});

test('Наинаеться и заканчивается подчёркиванием и тире', () => {
  const validator = new Validator();
  expect(validator.validateUsername('_a123_adc-')).toBeTruthy();
});

test('Не латинские буквы', () => {
  const validator = new Validator();
  expect(validator.validateUsername('Ля-Ля-Фа')).toBeTruthy();
});
