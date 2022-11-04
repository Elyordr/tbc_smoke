describe('Fifth step', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('Correct fifth step', function () {
    this.actionwords.finishedFourthStepLoanKey();
    // TODO: Implement action: "Go back to the loan"
    // TODO: Implement action: "Check if the all info in the contract is correct"
    // TODO: Implement result: "Номер заявки in the contract and on the top of the website should be the same"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Type the correct otp from phone"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Should open the sixth step"
    throw 'Not implemented';
  });

  it('Back button in the fifth step', function () {
    this.actionwords.finishedFourthStepLoanKey();
    // TODO: Implement action: "Tap on back button"
    // TODO: Implement result: "Should open the fourth step with disabled inputs"
    // TODO: Implement action: "Tap on fifth step's tab"
    // TODO: Implement result: "Contract should appear"
    throw 'Not implemented';
  });

  it('Exit from the fifth step', function () {
    this.actionwords.finishedFourthStepLoanKey();
    // TODO: Implement action: "Go to Возвраты page"
    // TODO: Implement action: "Go back to Loans page and tap on the previous loan"
    // TODO: Implement action: "Tap on fifth step's tab"
    // TODO: Implement result: "Contract should appear"
    throw 'Not implemented';
  });

  it('Delete the loan in the fifth step', function () {
    this.actionwords.finishedFourthStepLoanKey();
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

  it('Correct fifth step with Отправить заново in OTP', function () {
    this.actionwords.finishedFourthStepLoanKey();
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open otp entering page"
    // TODO: Implement action: "Wait for the 2 minutes, until Отправить заново will be available"
    // TODO: Implement action: "Tap on Отправить заново"
    // TODO: Implement action: "Type the first correct otp from phone"
    // TODO: Implement result: "Error message with Неправильный код should appear"
    // TODO: Implement action: "Type second correct otp and continue"
    // TODO: Implement result: "Should redirect to the sixth step"
    throw 'Not implemented';
  });

  it('Incorrect fifth step (expired otp)', function () {
    this.actionwords.finishedFourthStepLoanKey();
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open otp entering page"
    // TODO: Implement action: "Wait for the 2 minutes, until Отправить заново will be available"
    // TODO: Implement action: "Type correct otp and continue"
    // TODO: Implement result: "Error message with Код истёк should appear"
    throw 'Not implemented';
  });

  it('Incorrect fifth step (incorrect otp)', function () {
    this.actionwords.finishedFourthStepLoanKey();
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open otp entering page"
    // TODO: Implement action: "Type incorrect otp and continue"
    // TODO: Implement result: "Error message with Неправильный код should appear"
    throw 'Not implemented';
  });

  it('Incorrect fifth step (go back from otp)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Go back by back button"
    // TODO: Implement result: "Should redirect to the fifth step with contract"
    throw 'Not implemented';
  });
});
