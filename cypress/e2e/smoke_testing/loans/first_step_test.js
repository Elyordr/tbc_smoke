describe('First step', function () {
  beforeEach(function () {
    this.actionwords = Object.create(require('../../actionwords.js').Actionwords);
  });

  it('Correct loan creation', function () {
    this.actionwords.loginKey();
    // TODO: Implement action: "Create новая заявка"
    // TODO: Implement result: "Should open Основные сведения typing page"
    // TODO: Implement action: "Correctly fill all fields and attach correct photo, then continue"
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Enter correct otp and continue"
    // TODO: Implement result: "Should open Сведения о клиенте page"
    // TODO: Implement action: "Correctly fill all fields and continue"
    // TODO: Implement action: "Loading circle should appear"
    // TODO: Implement result: "Confirm-pre-scoring api should work in Devtools > Network"
    // TODO: Implement action: "Wait for the response from confirm-pre-scoring and opening the third step"
    // TODO: Implement result: "After some time, should open Ответ скоринга page"
    // TODO: Implement action: "Choose any Предложение and continue"
    // TODO: Implement result: "Should open Дополнительные сведения page"
    // TODO: Implement action: "Choose any product, set any price"
    // TODO: Implement action: "Choose another product by searching it and set any price"
    // TODO: Implement result: "All choosen products info should be correctly shown"
    // TODO: Implement action: "Fill other fields correctly and continue"
    // TODO: Implement result: "Loading circle should appear"
    // TODO: Implement action: "Wait for the response from post-scoring and opening the fifth step"
    // TODO: Implement result: "After some time, should open Договор page with document related to your purchase"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open otp entering page"
    // TODO: Implement action: "Type correct otp from phone sms"
    // TODO: Implement result: "Should open Фото клиента page with signed document"
    // TODO: Implement action: "Download and look at that file"
    // TODO: Implement result: "The document should be signed"
    // TODO: Implement action: "Attach file and continue"
    // TODO: Implement result: "Should open Loans page with the created loan and with Оформлено статус"
    // TODO: Implement action: "Open the test-admin website"
    // TODO: Implement action: "Go to Заявки > Все рассрочки, filter by date"
    // TODO: Implement result: "Previously created loan should be in the list"
    // TODO: Implement action: "Open that loan"
    // TODO: Implement action: "Check all data in Общие сведения page"
    // TODO: Implement result: "All data should be as you have written while creating the loan"
    // TODO: Implement action: "Go to История инцидента"
    // TODO: Implement result: "The last status should be Оформлена, dates should be correct"
    // TODO: Implement action: "Go to Файлы"
    // TODO: Implement result: "All attached files should be there"
    throw 'Not implemented';
  });

  it('Incorrect loan creation(short passport info in the first step)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with incorrect data
    // Ex.: Number - 99120020
    // Birth date - 10.02.200
    // Passport series - A
    // Passport number - 658654
    // And continue"
    // TODO: Implement result: "Red alert should appear on all incorrectly written fields with Вы не до конца заполнили поле"
    throw 'Not implemented';
  });

  it('Incorrect loan creation(No photo)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data without uploading the photo"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Error message with Фото не найдено should appear"
    throw 'Not implemented';
  });

  it('Incorrect loan creation(incorrect passport info in the first step)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data, except any one field, where should write incorrect(eg. incorrect passport number)"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Type correct otp from phone sms and continue"
    // TODO: Implement result: "Error message with Паспортные Данные Введены Неправильно should appear and should redirect to the first page without attached photo, but with other info saved"
    throw 'Not implemented';
  });

  it('Incorrect loan creation(incorrect photo)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data"
    // TODO: Implement action: "Attach photo of another person"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Type correct otp from phone sms and continue"
    // TODO: Implement result: "Error message with Не Удалось Распознать should appear and should redirect to the first page without attached photo, but with other info saved"
    throw 'Not implemented';
  });

  it('Incorrect loan creation(go back from first otp)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data"
    // TODO: Implement action: "Attach photo of another person"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Go back by back button"
    // TODO: Implement result: "Should redirect to the first page where only number is saved, other fields should be empty"
    throw 'Not implemented';
  });

  it('Incorrect loan creation(incorrect otp)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open otp entering page"
    // TODO: Implement action: "Type incorrect otp and continue"
    // TODO: Implement result: "Error message with Неправильный код should appear"
    throw 'Not implemented';
  });

  it('Incorrect loan creation(expired otp)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open otp entering page"
    // TODO: Implement action: "Wait for the 2 minutes, until Отправить заново will be available"
    // TODO: Implement action: "Type correct otp and continue"
    // TODO: Implement result: "Error message with Код истёк should appear"
    throw 'Not implemented';
  });

  it('Correct loan creation with only Отправить заново in first otp', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open otp entering page"
    // TODO: Implement action: "Wait for the 2 minutes, until Отправить заново will be available"
    // TODO: Implement action: "Tap on Отправить заново"
    // TODO: Implement action: "Type the first correct otp from phone"
    // TODO: Implement result: "Error message with Неправильный код should appear"
    // TODO: Implement action: "Type second correct otp and continue"
    // TODO: Implement result: "Should redirect to second step"
    throw 'Not implemented';
  });

  it('Try to upload photo in desctop(in prod)', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data"
    // TODO: Implement action: "Tap on Upload photo button"
    // TODO: Implement result: "Should be error message Загрузите фото через телефон"
    throw 'Not implemented';
  });

  it('Отправить заново for Myid', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data"
    // TODO: Implement action: "Upload correct photo and Продолжить"
    // TODO: Implement result: "Should open first otp page"
    // TODO: Implement action: "Type correct otp from phone sms and tap on Продолжить"
    // TODO: Implement result: "Error message with Данные не обработаны may appear"
    // TODO: Implement action: "Tap on Отправить заново button"
    // TODO: Implement result: "Should open second step"
    throw 'Not implemented';
  });

  it('Correct loan with MRZ', function () {
    this.actionwords.firstStepLoanKey();
    // TODO: Implement action: "Fill all fields with the correct data"
    // TODO: Implement action: "Press Продолжить"
    // TODO: Implement result: "Should open otp entering page"
    // TODO: Implement action: "Type correct otp and continue"
    // TODO: Implement result: "Should redirect to First step and Error message with GET_CRED_ERROR should appear
    // MRZ input should appear"
    // TODO: Implement action: "Chosoe type of mrz(biometric passport or ID card)"
    // TODO: Implement action: "If biometric passport, write 88 numbered mrz
    // If ID card, write 90 numbered mrz and Продолжить"
    // TODO: Implement result: "Should open otp typing page"
    // TODO: Implement action: "Type correct OTP"
    // TODO: Implement result: "Should go tot the second step"
    throw 'Not implemented';
  });
});
