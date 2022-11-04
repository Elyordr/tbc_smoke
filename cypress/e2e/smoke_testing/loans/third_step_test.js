describe('Third step', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('Correct third step', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement result: "In third step should be some options depend on scoring results"
    // TODO: Implement action: "Choose any option and continue"
    // TODO: Implement result: "Should open the fourth step"
    // TODO: Implement action: "Open the Admin website > Все рассрочки > Choose previous loan > История изменений"
    // TODO: Implement result: "The last status should be В работе"
    throw 'Not implemented';
  });

  it('Клиент отказался', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement result: "In third step should be some options depend on scoring results"
    // TODO: Implement action: "Tap on Клиент отказался"
    // TODO: Implement result: "Should open popup with reasons of canceling"
    // TODO: Implement action: "Choose any reason and continue"
    // TODO: Implement result: "Should open Loans page and previous loan's status should be Отменен"
    // TODO: Implement action: "Open the Admin website > Все рассрочки > Choose previous loan > История изменений"
    // TODO: Implement result: "The last status should be Отменена"
    throw 'Not implemented';
  });

  it('Back button in the third step', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement result: "In third step should be some options depend on scoring results"
    // TODO: Implement action: "Tap on back button"
    // TODO: Implement result: "Should open the second step with disabled inputs and all previously written data"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Should open third step with editable options"
    throw 'Not implemented';
  });

  it('Exit from the third step', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement result: "In third step should be some options depend on scoring results"
    // TODO: Implement action: "Exit from the loan"
    // TODO: Implement action: "Open the previous loan again"
    // TODO: Implement result: "Should open the first step with disabled inputs and all previously written data"
    // TODO: Implement action: "Tap on third step's tab"
    // TODO: Implement result: "Should open third step with editable options"
    throw 'Not implemented';
  });

  it('Delete the new loan from the third step', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement action: "Tap on delete button on the top right"
    // TODO: Implement result: "Popup with Отменить заявку should appear"
    // TODO: Implement action: "Choose any reason and continue"
    // TODO: Implement action: "Go to Loans page and look at status of previous loan"
    // TODO: Implement result: "Status should be Отменен"
    // TODO: Implement action: "Open that loan and go to third step"
    // TODO: Implement result: "Third step should be editable"
    throw 'Not implemented';
  });

  it('Incorrect third step (Continue without any choice)', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Should not be any action"
    throw 'Not implemented';
  });

  it('Multiple choice of options', function () {
    this.actionwords.finishedSecondStepLoanKey();
    // TODO: Implement action: "Try to choose several options"
    // TODO: Implement result: "Only the last option should be chosen"
    throw 'Not implemented';
  });
});
