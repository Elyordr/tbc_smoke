describe('Second step', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('Correct second step with Humo', function () {
    this.actionwords.finishedSecondStepLoanKey();
  });

  it('Correct second step with Uzcard', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly and continue"
    // TODO: Implement result: "Should open six-digit otp entering page "
    // TODO: Implement action: "Type correct otp from sms"
    // TODO: Implement result: "Should open Scoring loading circle and afetr some time should open third step"
    throw 'Not implemented';
  });

  it('InCorrect second step(Short card number)', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly, but type card number >15 numbers"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Red alert should be on card number input with Некорректный формат"
    throw 'Not implemented';
  });

  it('InCorrect second step(Short card expire date)', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly, but type on card expire date 11/2"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Red alert should be on card expire date input with Некорректный формат"
    throw 'Not implemented';
  });

  it('InCorrect second step(Expired card date)', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly, but type on card expire date 11/21"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Should be error message with Пожалуйста, Введите Номер Карты, Срок Действия Которой Не Истекает В Течение 11 Месяцев."
    throw 'Not implemented';
  });

  it('InCorrect second step(Nonexistent card number)', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly, but type random numbers in card number input"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Error message with Card not found! should appear"
    throw 'Not implemented';
  });

  it('InCorrect second step(Zero salary)', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly, but type 0 on Зарплата field"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Red alert should be on card expire date input with Зарплата должна быть больше 0 "
    throw 'Not implemented';
  });

  it('Delete the new loan from the second step', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Tap on delete button on the top right"
    // TODO: Implement result: "Popup with Отменить заявку should appear"
    // TODO: Implement action: "Choose any reason and continue"
    // TODO: Implement action: "Go to Loans page and look at status of previous loan"
    // TODO: Implement result: "Status should be Отменен"
    // TODO: Implement action: "Open that loan and go to second step"
    // TODO: Implement result: "Data in the second step should not be editable"
    throw 'Not implemented';
  });

  it('InCorrect second step(Card number of another person)', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly, but type another person's car number in card number input"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Should open Third step"
    // TODO: Implement action: "Choose any option and tap on Продолжить"
    // TODO: Implement result: "Should open the fourth step"
    // TODO: Implement action: "Fill all the fields and tap on Продолжить"
    // TODO: Implement result: "Error message with Смс информирование подключено к другому телефону should appear"
    throw 'Not implemented';
  });

  it('Exit from the second step and reopen loan', function () {
    this.actionwords.secondStepLoanKey();
    // TODO: Implement action: "Go to Заявки page and reopen the previous loan"
    // TODO: Implement result: "Should open first step with all written data and data should not be editable"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Should open empty second step and data should be editable"
    throw 'Not implemented';
  });
});
