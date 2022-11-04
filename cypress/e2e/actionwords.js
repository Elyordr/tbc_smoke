const url = 'https://test-new-agent.tbcfin.uz/'

exports.Actionwords = {
  openTheTestadminWebsite: function () {
    // TODO: Implement action: "Open the test-admin website"
    // TODO: Implement action: "Go to Заявки > Все рассрочки, filter by date and choose previously created loan"
    // TODO: Implement action: "Go to История изменений"
    // TODO: Implement result: "The last status should be Утверждена"
    // TODO: Implement action: "Go to Общие сведения and look at Список товаров"
    // TODO: Implement result: "All chosen products should be in the list"
    throw 'Not implemented';
  },
  loginKey: function () {
    // TODO: Implement action: "Open the test-new-agent website"
    // cy.viewport('iphone-x')
    cy.visit(url)
    // TODO: Implement result: "Should open login page"
    // TODO: Implement action: "Type correct login and password"
    cy.get('input[name="phone_number"]').type('777777777')
    cy.get('input[name="password"]').type('testalina')
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Should open Филиал choosing page"
    // TODO: Implement action: "Choose Офис and continue"
    cy.get('input[name="branch_name"]').type('офи')
    cy.contains('Офис').click()
    cy.contains('Продолжить').click()
    // TODO: Implement result: "Popup with Проверка филиала should appear"
    // TODO: Implement action: "Press Продолжить"
    cy.get('.MuiPaper-root').contains('Продолжить').click()
    // TODO: Implement result: "Should open the main page of new-agent"
    // throw 'Not implemented';
  },
  firstStepLoanKey: function () {
    this.loginKey();
    // TODO: Implement action: "Create новая заявка"
    // TODO: Implement result: "Should open Основные сведения typing page"
    throw 'Not implemented';
  },
  secondStepLoanKey: function () {
    this.loginKey();
    // TODO: Implement action: "Create новая заявка"
    // TODO: Implement result: "Should open Основные сведения typing page"
    // TODO: Implement action: "Correctly fill all fields and attach correct photo, then continue"
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Enter correct otp and continue"
    // TODO: Implement result: "Should open Сведения о клиенте page"
    throw 'Not implemented';
  },
  finishedSecondStepLoanKey: function () {
    this.secondStepLoanKey();
    // TODO: Implement action: "Fill all the fields correctly and continue"
    // TODO: Implement result: "Should open Scoring loading circle and afetr some time should open third step"
    throw 'Not implemented';
  },
  finishedThirdStepLoanKey: function () {
    this.finishedSecondStepLoanKey();
    // TODO: Implement result: "In third step should be some options depend on scoring results"
    // TODO: Implement action: "Choose any option and continue"
    // TODO: Implement result: "Should open the fourth step"
    // TODO: Implement action: "Open the Admin website > Все рассрочки > Choose previous loan > История изменений"
    // TODO: Implement result: "The last status should be В работе"
    // TODO: Implement action: "Go back to the loan in new-agent"
    throw 'Not implemented';
  },
  finishedFourthStepLoanKey: function () {
    this.finishedThirdStepLoanKey();
    // TODO: Implement action: "Look at Рекомендация агента по клиенту and Грин карта inputs"
    // TODO: Implement result: "They defaultly should be green with Рекомендую and Нет, respectively"
    // TODO: Implement action: "Correctly fill all the fields and continue"
    // TODO: Implement result: "Should open Scoring loading circle and afetr some time should open OTP typing page"
    // TODO: Implement action: "Typre correct OTP from phone sms"
    // TODO: Implement result: "Should open the fifth step"
    this.openTheTestadminWebsite();
    // TODO: Implement action: "Go back to the loan"
    throw 'Not implemented';
  },
  finishedFifthStepLoanKey: function () {
    this.finishedFourthStepLoanKey();
    // TODO: Implement action: "Go back to the loan"
    // TODO: Implement action: "Check if the all info in the contract is correct"
    // TODO: Implement result: "Номер заявки in the contract and on the top of the website should be the same"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Type the correct otp from phone"
    // TODO: Implement action: "Tap on Продолжить"
    // TODO: Implement result: "Should open the sixth step"
    throw 'Not implemented';
  },
  checkFromAdmin: function () {
    // TODO: Implement action: "Open the test-admin website"
    // TODO: Implement action: "Go to Заявки > Все рассрочки, filter by date and choose previously created loan"
    // TODO: Implement action: "Go to История изменений"
    // TODO: Implement result: "The last status should be Оформлено"
    // TODO: Implement action: "Go to Файлы"
    // TODO: Implement result: "All attached files and contracts should be there"
    throw 'Not implemented';
  },
  oTPOfFourthStep: function () {
    this.finishedThirdStepLoanKey();
    // TODO: Implement action: "Look at Рекомендация агента по клиенту and Грин карта inputs"
    // TODO: Implement result: "They defaultly should be green with Рекомендую and Нет, respectively"
    // TODO: Implement action: "Correctly fill all the fields and continue"
    // TODO: Implement result: "Should open Scoring loading circle and afetr some time should open OTP typing page"
    throw 'Not implemented';
  }
};