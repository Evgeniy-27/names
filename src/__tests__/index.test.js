import Validator from '../index';

test('Шаблон', () => {
  const validator = new Validator();
  expect(validator.validateUsername('abc_1s3j9-b')).toBeTruthy();
});

test('цифр больше трёх', () => {
  const validator = new Validator();
  expect(validator.validateUsername('abc123456-b')).toBeFalsy();
});

test('Наинаеться и заканчивается цифрами', () => {
  const validator = new Validator();
  expect(validator.validateUsername('123_abc-56')).toBeFalsy();
});

test('Наинаеться и заканчивается подчёркиванием и тире', () => {
  const validator = new Validator();
  expect(validator.validateUsername('_a123_adc-')).toBeFalsy();
});

test('Не латинские буквы', () => {
  const validator = new Validator();
  expect(validator.validateUsername('Ля-Ля-Фа')).toBeFalsy();
});
