import userInformPage from "../../support/pages/user_inform.page";

describe('User Information', () => {
    it('Successful create user with Valid Data', () => {
        userInformPage.launchUrl()
        userInformPage.successCreateUser({title:'Mr.', firstName:'John', middleName:'Michael', lastName:'Doe', email:`JohnDoe+${Date.now()}@gmail.com`, phoneNumber:'082314411321', dob:'1998-06-20', gender:'Female', province:'DKI Jakarta', city:'Jakarta Barat'})
    });

    it('Form Submission with Missing Required Fields - AllMandatoryField', () => {
        userInformPage.launchUrl()
        userInformPage.failedCreateUserWithEmptyAllMandatoryField()
    });

    it('Form Submission with Missing Required Fields - FirstName', () => {
        userInformPage.launchUrl()
        userInformPage.failedCreateUserWithEmptyFirstName({title:'Mr.', middleName:'Michael', lastName:'Doe', email:'JohnDoe@gmail.com', phoneNumber:'082314411321', dob:'1998-06-20', gender:'Female', province:'DKI Jakarta', city:'Jakarta Barat'})
    });

    it('Form Submission with Missing Required Fields - MiddleName', () => {
        userInformPage.launchUrl()
        userInformPage.failedCreateUserWithEmptyMiddleName({title:'Mr.', firstName:'John', lastName:'Doe', email:'JohnDoe@gmail.com', phoneNumber:'082314411321', dob:'1998-06-20', gender:'Female', province:'DKI Jakarta', city:'Jakarta Barat'})
    });

    it('Form Submission with Missing Required Fields - LastName', () => {
        userInformPage.launchUrl()
        userInformPage.failedCreateUserWithEmptyLastName({title:'Mr.', firstName:'John', middleName:'Doe', email:'JohnDoe@gmail.com', phoneNumber:'082314411321', dob:'1998-06-20', gender:'Male', province:'DKI Jakarta', city:'Jakarta Barat'})
    });

    it('Form Submission with Missing Required Fields - Email', () => {
        userInformPage.launchUrl()
        userInformPage.failedCreateUserWithEmptyEmail({title:'Mr.', firstName:'John', middleName:'Michael', lastName:'Doe', phoneNumber:'082314411321', dob:'1998-06-20', gender:'Male', province:'DKI Jakarta', city:'Jakarta Barat'})
    });

    it('Form Submission with Missing Required Fields - PhoneNumber', () => {
        userInformPage.launchUrl()
        userInformPage.failedCreateUserWithEmptyPhoneNumber({title:'Mr.', firstName:'John', middleName:'Michael', lastName:'Doe', email:'JohnDoe@gmail.com', dob:'1998-06-20', gender:'Male', province:'DKI Jakarta', city:'Jakarta Barat'})
    });

    it('Form Submission with Missing Required Fields - Dob', () => {
        userInformPage.launchUrl()
        userInformPage.failedCreateUserWithEmptyDob({title:'Mr.', firstName:'John', middleName:'Michael', lastName:'Doe', email:'JohnDoe@gmail.com', phoneNumber:'082314411321', gender:'Male', province:'DKI Jakarta', city:'Jakarta Barat'})
    });

    it('Form Submission with Missing Required Fields - Province', () => {
        userInformPage.launchUrl()
        userInformPage.failedCreateUserWithEmptyProvince({title:'Mr.', firstName:'John', middleName:'Michael', lastName:'Doe', email:'JohnDoe@gmail.com', phoneNumber:'082314411321',  dob:'1998-06-20', gender:'Male'})
    });

    it('Form Submission with Missing Required Fields - City', () => {
        userInformPage.launchUrl()
        userInformPage.failedCreateUserWithEmptyCity({title:'Mr.', firstName:'John', middleName:'Michael', lastName:'Doe', email:'JohnDoe@gmail.com', phoneNumber:'082314411321',  dob:'1998-06-20', gender:'Male',  province:'DKI Jakarta'})
    });

    it('Invalid Email Format', () => {
        userInformPage.launchUrl()
        userInformPage.failedCreateUserWithInvalidMail({title:'Mr.', firstName:'John', middleName:'Michael', lastName:'Doe', email:'user@domain', phoneNumber:'082314411321', dob:'1998-06-20', gender:'Male', province:'DKI Jakarta', city:'Jakarta Barat'})
    });

    it('Form Submission with Special Characters - FirstName,MiddleName,LastName', () => {
        userInformPage.launchUrl()
        userInformPage.failedCreateUserWithSpecialCharacter({title:'Mr.', firstName:'Jo^*&#%*@%*%*', middleName:'Jo^*&#%*@%*%*', lastName:'Jo^*&#%*@%*%*', email:'user@gmail.com', phoneNumber:'082314411321', dob:'1998-06-20', gender:'Male', province:'DKI Jakarta', city:'Jakarta Barat'})
    });

    it('Form Submission with Input Exceeding Max Length - FirstName,MiddleName,LastName', () => {
        userInformPage.launchUrl()
        userInformPage.failedCreateUserWithExceedMaxLength({title:'Mr.', firstName:'Johrweohrowhhdbfkjsbdksdbfskdbk', middleName:'Johrweohrowhhdbfkjsbdksdbfskdbk', lastName:'Johrweohrowhhdbfkjsbdksdbfskdbk', email:'user@gmail.com', phoneNumber:'082314411321', dob:'1998-06-20', gender:'Male', province:'DKI Jakarta', city:'Jakarta Barat'})
    });

    it('Form Submission with Input Boundary Phone Number', () => {
        userInformPage.launchUrl()
        userInformPage.failedCreateUserWithBoundaryPhone({title:'Mr.', firstName:'John', middleName:'Michael', lastName:'Doe', email:'user@gmail.com', phoneNumber:'082', dob:'1998-06-20', gender:'Male', province:'DKI Jakarta', city:'Jakarta Barat'})
    });

    it(' Form Submission with XSS Injection - FirstName,MiddleName,LastName', () => {
        userInformPage.launchUrl()
        userInformPage.failedCreateUserWithSpecialCharacter({title:'Mr.', firstName:`<script>alert('XSS')</script>`, middleName:`<script>alert('XSS')</script>`, lastName:`<script>alert('XSS')</script>`, email:'user@gmail.com', phoneNumber:'082314411321', dob:'1998-06-20', gender:'Male', province:'DKI Jakarta', city:'Jakarta Barat'})
    });
});