import changeLanguage from '../changeLanguage';

const str = 'dream';

describe('changeLanguage', () => {
  it('Should be an instanse function', () => {
    expect(changeLanguage).toBeInstanceOf(Function);
  });

  it('Should be an instanse string', () => {
    expect(str).toBeTruthy();
  });

  it('Should be an instanse string', () => {
    expect(str).not.toMatch(/^[а-яё]*$/);
  });
});
