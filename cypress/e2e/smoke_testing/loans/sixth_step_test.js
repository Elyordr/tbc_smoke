describe('Sixth step', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('Correct sixth step', function () {
    this.actionwords.finishedFifthStepLoanKey();
    // TODO: Implement action: "Download the contract and check it"
    // TODO: Implement result: "All data should be as you have written while creating the loan"
    // TODO: Implement action: "Upload the required photo and continue"
    // TODO: Implement result: "Should open Loans page with Оформлено статус of previous loan"
    this.actionwords.checkFromAdmin();
    throw 'Not implemented';
  });

  it('InCorrect sixth step (Without uploading the photo)', function () {
    this.actionwords.finishedFifthStepLoanKey();
    // TODO: Implement action: "Download the contract and check it"
    // TODO: Implement result: "All data should be as you have written while creating the loan"
    // TODO: Implement action: "Tap on Продолжить without uploading the photo"
    // TODO: Implement result: "Error message with Файл Не Найден should appear"
    throw 'Not implemented';
  });

  it('Back button in the sixth step', function () {
    this.actionwords.finishedFifthStepLoanKey();
    // TODO: Implement action: "Tap on back button"
    // TODO: Implement result: "Should open the fourth step with disabled inputs"
    // TODO: Implement action: "Tap on sixth step's tab"
    // TODO: Implement result: "Upload photo input should be available"
    throw 'Not implemented';
  });

  it('Exit from the sixth step', function () {
    this.actionwords.finishedFifthStepLoanKey();
    // TODO: Implement action: "Go to Возвраты page"
    // TODO: Implement action: "Go back to Loans page and tap on the previous loan"
    // TODO: Implement action: "Tap on sixth step's tab"
    // TODO: Implement result: "Upload photo input should be available"
    throw 'Not implemented';
  });

  it('Delete the loan in the sixth step', function () {
    this.actionwords.finishedFifthStepLoanKey();
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

  it('Correct sixth step (two or more photo upload)', function () {
    this.actionwords.finishedFifthStepLoanKey();
    // TODO: Implement action: "Download the contract and check it"
    // TODO: Implement result: "All data should be as you have written while creating the loan"
    // TODO: Implement action: "Upload the required photo"
    // TODO: Implement action: "Upload the another photo and continue"
    // TODO: Implement result: "Should open Loans page with Оформлено статус of previous loan"
    this.actionwords.checkFromAdmin();
    throw 'Not implemented';
  });

  it('Uploading the photo after the loan is finished', function () {
    this.actionwords.finishedFifthStepLoanKey();
    // TODO: Implement action: "Download the contract and check it"
    // TODO: Implement result: "All data should be as you have written while creating the loan"
    // TODO: Implement action: "Upload the required photo"
    // TODO: Implement action: "Upload the another photo and continue"
    // TODO: Implement result: "Should open Loans page with Оформлено статус of previous loan"
    this.actionwords.checkFromAdmin();
    // TODO: Implement action: "Open the previous loan again and go to the sixth step"
    // TODO: Implement action: "Upload another photo and continue"
    this.actionwords.checkFromAdmin();
    throw 'Not implemented';
  });
});
