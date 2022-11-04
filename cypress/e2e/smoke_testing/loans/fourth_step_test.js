describe('Fourth step', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('Correct fourth step with Humo (new bank card)', function () {
    this.actionwords.finishedThirdStepLoanKey();
    // TODO: Implement action: "Look at Рекомендация агента по клиенту and Грин карта inputs"
    // TODO: Implement result: "They defaultly should be green with Рекомендую and Нет, respectively"
    // TODO: Implement action: "Correctly fill all the fields and continue"
    // TODO: Implement result: "Should open Scoring loading circle and afetr some time should open OTP typing page"
    // TODO: Implement action: "Typre correct OTP from phone sms"
    // TODO: Implement result: "Should open the fifth step"
    this.actionwords.openTheTestadminWebsite();
    throw 'Not implemented';
  });

  it('Correct fourth step with Uzcard (new bank card)', function () {
    this.actionwords.finishedThirdStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Should open Scoring loading circle and after some time should open six-digit OTP typing page"
    // TODO: Implement action: "Type correct OTP from phone"
    // TODO: Implement result: "Should open the fifth step"
    this.actionwords.openTheTestadminWebsite();
    throw 'Not implemented';
  });

  it('Correct fourth step (added bank card)', function () {
    this.actionwords.finishedThirdStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Should open Scoring loading circle and after some time should open fifth step"
    this.actionwords.openTheTestadminWebsite();
    throw 'Not implemented';
  });

  it('InCorrect fourth step (Continue without filling any field)', function () {
    this.actionwords.finishedThirdStepLoanKey();
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "All iputs should become red with Обязательное поле"
    throw 'Not implemented';
  });

  it('Correct fourth step with two or more profucts', function () {
    this.actionwords.finishedThirdStepLoanKey();
    // TODO: Implement action: "Choose any product, type any price"
    // TODO: Implement action: "Tap on Добавить товар"
    // TODO: Implement result: "New product fields should appear"
    // TODO: Implement action: "Choose any product, type any price"
    // TODO: Implement action: "Correctly fill all the fields and continue"
    // TODO: Implement result: "Should open Scoring loading circle and afetr some time should open fifth step"
    this.actionwords.openTheTestadminWebsite();
    throw 'Not implemented';
  });

  it('Correct fourth step with new profuct', function () {
    this.actionwords.finishedThirdStepLoanKey();
    // TODO: Implement action: "Tap on Новый near Название товара"
    // TODO: Implement action: "Type any product in Название товара and choose any Подкатегория, also choose if it is Eco or not"
    // TODO: Implement action: "Correctly fill all the fields and continue"
    // TODO: Implement result: "Should open Scoring loading circle and afetr some time should open fifth step"
    this.actionwords.openTheTestadminWebsite();
    throw 'Not implemented';
  });

  it('InCorrect fourth step (Price of product less than 150k or more than 35kk sum)', function () {
    this.actionwords.finishedThirdStepLoanKey();
    // TODO: Implement action: "Choose any product and on price type 140.000 sum or 36.000.000 sum"
    // TODO: Implement action: "Fill all other fields correctly"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Red alert should appear on Price input with Цена должна быть от 150.000 до 35.000.000 сум"
    throw 'Not implemented';
  });

  it('InCorrect fourth step (Negative price of product, negative child number)', function () {
    this.actionwords.finishedThirdStepLoanKey();
    // TODO: Implement action: "Choose any product and on price type negative price, e.g. -1.000 sum
    // In child's number type -1 child"
    // TODO: Implement result: "'-' symbol shouldn't be typebale in both fields"
    throw 'Not implemented';
  });

  it('InCorrect fourth step (two Identical additional numbers)', function () {
    this.actionwords.finishedThirdStepLoanKey();
    // TODO: Implement action: "In both Номер телефона inputs type identical numbers"
    // TODO: Implement action: "Fill all other fields correctly"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Error message with Дополнительные Контакты Не Должны Быть Одинаковыми should appear"
    throw 'Not implemented';
  });

  it('Exit from fourth step(New Humo/Uzcard)', function () {
    this.actionwords.oTPOfFourthStep();
    // TODO: Implement action: "Go to Возвраты page"
    // TODO: Implement action: "Go back to Loans page and tap on the previous loan"
    // TODO: Implement action: "Tap on fourth step's tab"
    // TODO: Implement result: "All inputs in the fourth step should be editable"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Should open OTP page"
    throw 'Not implemented';
  });

  it('Back button in the fourth step', function () {
    this.actionwords.finishedThirdStepLoanKey();
    // TODO: Implement action: "Tap on back button"
    // TODO: Implement result: "Should open the third step with disabled inputs"
    // TODO: Implement action: "Tap on fourth step's tab"
    // TODO: Implement result: "All inputs in the fourth step should be editable"
    throw 'Not implemented';
  });

  it('Delete the loan in the fourth step', function () {
    this.actionwords.finishedThirdStepLoanKey();
    // TODO: Implement action: "Tap on delete button"
    // TODO: Implement result: "Popup with Отменить заявку should appear"
    // TODO: Implement action: "Choose any reason and continue"
    // TODO: Implement result: "Should open Loans page and previous loan's status should be Отменен"
    // TODO: Implement action: "Open the test-admin website"
    // TODO: Implement action: "Go to Заявки > Все рассрочки, filter by date and choose previously created loan"
    // TODO: Implement action: "Go to История изменений"
    // TODO: Implement result: "The last status should be Отменена"
    throw 'Not implemented';
  });

  it('Correct fourth step (Search for name of second product)', function () {
    this.actionwords.finishedThirdStepLoanKey();
    // TODO: Implement action: "Choose any product and type any price"
    // TODO: Implement action: "Tap on Добавить товар"
    // TODO: Implement result: "Should create inputs for another product"
    // TODO: Implement action: "Type any product in the second product name input"
    // TODO: Implement result: "The name of the first product shouldn't disappear"
    throw 'Not implemented';
  });

  it('Exit from the fourth step OTP', function () {
    this.actionwords.finishedFourthStepLoanKey();
    // TODO: Implement action: "Go to Возвраты page"
    // TODO: Implement action: "Go back to Loans page and tap on the previous loan"
    // TODO: Implement action: "Tap on fifth step's tab"
    // TODO: Implement result: "Contract should appear"
    throw 'Not implemented';
  });

  it('Back button in the fourth step OTP', function () {
    this.actionwords.oTPOfFourthStep();
    // TODO: Implement action: "Tap on back button"
    // TODO: Implement result: "Should open the fourth step with disabled inputs"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "OTP typing page should be opened"
    throw 'Not implemented';
  });
});
