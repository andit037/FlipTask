class UserInformPage {

    launchUrl(){
        cy.visit('https://flip-sample-form.onrender.com')
    }

    successCreateUser({title, firstName, middleName, lastName, email, phoneNumber, dob, gender, province, city}){
        cy.get('#title').select(title)
        cy.get('#title').should('contain.text', title)

        cy.get('#firstName').type(firstName)
        cy.get('#firstName').should('have.value', firstName)

        cy.get('#middleName').type(middleName)
        cy.get('#middleName').should('have.value', middleName)

        cy.get('#lastName').type(lastName)
        cy.get('#lastName').should('have.value', lastName)

        cy.get('#email').type(email)
        cy.get('#email').should('have.value', email)

        cy.get('#phone').type(phoneNumber).and('be.focused')
        cy.get('#phone').should('have.value', phoneNumber)

        cy.get('#dob').type(dob)
        cy.get('#dob').should('have.value', dob)

        if (gender === 'Female'){
            cy.get('.slider').click()
            cy.get('label[for="genderToggle"]').contains('Female').should('exist');
        }

        cy.get('#province').select(province)
        cy.get('#province').should('contain.text', province)

        cy.get('#city', { timeout: 10000 }).should('not.contain.text', 'loading cities list');

        cy.get('#city', { timeout: 10000 }).should('not.be.disabled').select(city)
        cy.get('#city').should('contain.text', city)

        //submit
        cy.get('.space-y-6 > .px-4').click()

        cy.get('#pleaseWaitOverlay', { timeout: 10000 }).should('not.be.visible');

        cy.get(':nth-child(1) > strong').should('contain.text', `${title} ${firstName} ${middleName} ${lastName}`)
        cy.get('#modalContent > :nth-child(2) > :nth-child(1)').should('contain.text', `${gender}`)
        cy.get('#modalContent > :nth-child(3) > :nth-child(1)').should('contain.text', `${phoneNumber}`)
        cy.get('#modalContent > :nth-child(3) > :nth-child(2)').should('contain.text', `${email}`)
        cy.get('#modalContent > :nth-child(4) > :nth-child(2)').should('contain.text', `${province}`)
        cy.get('#modalContent > :nth-child(4) > :nth-child(1)').should('contain.text', `${city}`)

    }

    failedCreateUserWithEmptyAllMandatoryField(){
        //submit
        cy.get('.space-y-6 > .px-4').click()

        cy.get('#firstName-error').should('contain.text', `First name is required`)
        cy.get('#middleName-error').should('contain.text', `Middle name is required`)
        cy.get('#lastName-error').should('contain.text', `Last name is required`)
        cy.get('#email-error').should('contain.text', 'Email is required')
        cy.get('#phone-error').should('contain.text', 'Phone number is required')
        cy.get('#dob-error').should('contain.text', 'Date of birth is required')
        cy.get('#province-error').should('contain.text', 'Province is required')
        cy.get('#city-error').should('contain.text', 'City is required')
    }

    failedCreateUserWithEmptyFirstName({title, middleName, lastName, email, phoneNumber, dob, gender, province, city}){
        cy.get('#title').select(title)
        cy.get('#title').should('contain.text', title)

        cy.get('#middleName').type(middleName)
        cy.get('#middleName').should('have.value', middleName)

        cy.get('#lastName').type(lastName)
        cy.get('#lastName').should('have.value', lastName)

        cy.get('#email').type(email)
        cy.get('#email').should('have.value', email)

        cy.get('#phone').type(phoneNumber).and('be.focused')
        cy.get('#phone').should('have.value', phoneNumber)

        cy.get('#dob').type(dob)
        cy.get('#dob').should('have.value', dob)

        if (gender === 'Female'){
            cy.get('.slider').click()
            cy.get('label[for="genderToggle"]').contains('Female').should('exist');
        }

        cy.get('#province').select(province)
        cy.get('#province').should('contain.text', province)

        cy.get('#city', { timeout: 10000 }).should('not.contain.text', 'loading cities list');

        cy.get('#city', { timeout: 10000 }).should('not.be.disabled').select(city)
        cy.get('#city').should('contain.text', city)

        //submit
        cy.get('.space-y-6 > .px-4').click()

        cy.get('#firstName-error').should('contain.text', `First name is required`)

    }
    
    failedCreateUserWithEmptyMiddleName({title, firstName, lastName, email, phoneNumber, dob, gender, province, city}){
        cy.get('#title').select(title)
        cy.get('#title').should('contain.text', title)

        cy.get('#firstName').type(firstName)
        cy.get('#firstName').should('have.value', firstName)

        cy.get('#lastName').type(lastName)
        cy.get('#lastName').should('have.value', lastName)

        cy.get('#email').type(email)
        cy.get('#email').should('have.value', email)

        cy.get('#phone').type(phoneNumber).and('be.focused')
        cy.get('#phone').should('have.value', phoneNumber)

        cy.get('#dob').type(dob)
        cy.get('#dob').should('have.value', dob)

        if (gender === 'Female'){
            cy.get('.slider').click()
            cy.get('label[for="genderToggle"]').contains('Female').should('exist');
        }

        cy.get('#province').select(province)
        cy.get('#province').should('contain.text', province)

        cy.get('#city', { timeout: 10000 }).should('not.contain.text', 'loading cities list');

        cy.get('#city', { timeout: 10000 }).should('not.be.disabled').select(city)
        cy.get('#city').should('contain.text', city)

        //submit
        cy.get('.space-y-6 > .px-4').click()

        cy.get('#middleName-error').should('contain.text', `Middle name is required`)


    }

    failedCreateUserWithEmptyLastName({title, firstName, middleName, email, phoneNumber, dob, gender, province, city}){
        cy.get('#title').select(title)
        cy.get('#title').should('contain.text', title)

        cy.get('#firstName').type(firstName)
        cy.get('#firstName').should('have.value', firstName)

        cy.get('#middleName').type(middleName)
        cy.get('#middleName').should('have.value', middleName)

        cy.get('#email').type(email)
        cy.get('#email').should('have.value', email)

        cy.get('#phone').type(phoneNumber).and('be.focused')
        cy.get('#phone').should('have.value', phoneNumber)

        cy.get('#dob').type(dob)
        cy.get('#dob').should('have.value', dob)

        if (gender === 'Female'){
            cy.get('.slider').click()
            cy.get('label[for="genderToggle"]').contains('Female').should('exist');
        }

        cy.get('#province').select(province)
        cy.get('#province').should('contain.text', province)

        cy.get('#city', { timeout: 10000 }).should('not.contain.text', 'loading cities list');

        cy.get('#city', { timeout: 10000 }).should('not.be.disabled').select(city)
        cy.get('#city').should('contain.text', city)

        //submit
        cy.get('.space-y-6 > .px-4').click()

        cy.get('#lastName-error').should('contain.text', `Last name is required`)


    }

    failedCreateUserWithEmptyEmail({title, firstName, middleName, lastName, phoneNumber, dob, gender, province, city}){
        cy.get('#title').select(title)
        cy.get('#title').should('contain.text', title)

        cy.get('#firstName').type(firstName)
        cy.get('#firstName').should('have.value', firstName)

        cy.get('#middleName').type(middleName)
        cy.get('#middleName').should('have.value', middleName)

        cy.get('#lastName').type(lastName)
        cy.get('#lastName').should('have.value', lastName)

        cy.get('#phone').type(phoneNumber).and('be.focused')
        cy.get('#phone').should('have.value', phoneNumber)

        cy.get('#dob').type(dob)
        cy.get('#dob').should('have.value', dob)

        if (gender === 'Female'){
            cy.get('.slider').click()
            cy.get('label[for="genderToggle"]').contains('Female').should('exist');
        }

        cy.get('#province').select(province)
        cy.get('#province').should('contain.text', province)

        cy.get('#city', { timeout: 10000 }).should('not.contain.text', 'loading cities list');

        cy.get('#city', { timeout: 10000 }).should('not.be.disabled').select(city)
        cy.get('#city').should('contain.text', city)

        //submit
        cy.get('.space-y-6 > .px-4').click()

        cy.get('#email-error').should('contain.text', 'Email is required')

    }

    failedCreateUserWithEmptyPhoneNumber({title, firstName, middleName, lastName, email, dob, gender, province, city}){
        cy.get('#title').select(title)
        cy.get('#title').should('contain.text', title)

        cy.get('#firstName').type(firstName)
        cy.get('#firstName').should('have.value', firstName)

        cy.get('#middleName').type(middleName)
        cy.get('#middleName').should('have.value', middleName)

        cy.get('#lastName').type(lastName)
        cy.get('#lastName').should('have.value', lastName)

        cy.get('#email').type(email)
        cy.get('#email').should('have.value', email)

        cy.get('#dob').type(dob)
        cy.get('#dob').should('have.value', dob)

        if (gender === 'Female'){
            cy.get('.slider').click()
            cy.get('label[for="genderToggle"]').contains('Female').should('exist');
        }

        cy.get('#province').select(province)
        cy.get('#province').should('contain.text', province)

        cy.get('#city', { timeout: 10000 }).should('not.contain.text', 'loading cities list');

        cy.get('#city', { timeout: 10000 }).should('not.be.disabled').select(city)
        cy.get('#city').should('contain.text', city)

        //submit
        cy.get('.space-y-6 > .px-4').click()

        cy.get('#phone-error').should('contain.text', 'Phone number is required')
    }

    failedCreateUserWithEmptyDob({title, firstName, middleName, lastName, email, phoneNumber, gender, province, city}){
        cy.get('#title').select(title)
        cy.get('#title').should('contain.text', title)

        cy.get('#firstName').type(firstName)
        cy.get('#firstName').should('have.value', firstName)

        cy.get('#middleName').type(middleName)
        cy.get('#middleName').should('have.value', middleName)

        cy.get('#lastName').type(lastName)
        cy.get('#lastName').should('have.value', lastName)

        cy.get('#email').type(email)
        cy.get('#email').should('have.value', email)

        cy.get('#phone').type(phoneNumber).and('be.focused')
        cy.get('#phone').should('have.value', phoneNumber)

        if (gender === 'Female'){
            cy.get('.slider').click()
            cy.get('label[for="genderToggle"]').contains('Female').should('exist');
        }

        cy.get('#province').select(province)
        cy.get('#province').should('contain.text', province)

        cy.get('#city', { timeout: 10000 }).should('not.contain.text', 'loading cities list');

        cy.get('#city', { timeout: 10000 }).should('not.be.disabled').select(city)
        cy.get('#city').should('contain.text', city)

        //submit
        cy.get('.space-y-6 > .px-4').click()

        cy.get('#dob-error').should('contain.text', 'Date of birth is required')
    }

    failedCreateUserWithEmptyProvince({title, firstName, middleName, lastName, email, phoneNumber, dob, gender}){
        cy.get('#title').select(title)
        cy.get('#title').should('contain.text', title)

        cy.get('#firstName').type(firstName)
        cy.get('#firstName').should('have.value', firstName)

        cy.get('#middleName').type(middleName)
        cy.get('#middleName').should('have.value', middleName)

        cy.get('#lastName').type(lastName)
        cy.get('#lastName').should('have.value', lastName)

        cy.get('#email').type(email)
        cy.get('#email').should('have.value', email)

        cy.get('#phone').type(phoneNumber).and('be.focused')
        cy.get('#phone').should('have.value', phoneNumber)

        cy.get('#dob').type(dob)
        cy.get('#dob').should('have.value', dob)

        if (gender === 'Female'){
            cy.get('.slider').click()
            cy.get('label[for="genderToggle"]').contains('Female').should('exist');
        }

        //submit
        cy.get('.space-y-6 > .px-4').click()

        cy.get('#province-error').should('contain.text', 'Province is required')
    }

    failedCreateUserWithEmptyCity({title, firstName, middleName, lastName, email, phoneNumber, dob, gender, province}){
        cy.get('#title').select(title)
        cy.get('#title').should('contain.text', title)

        cy.get('#firstName').type(firstName)
        cy.get('#firstName').should('have.value', firstName)

        cy.get('#middleName').type(middleName)
        cy.get('#middleName').should('have.value', middleName)

        cy.get('#lastName').type(lastName)
        cy.get('#lastName').should('have.value', lastName)

        cy.get('#email').type(email)
        cy.get('#email').should('have.value', email)

        cy.get('#phone').type(phoneNumber).and('be.focused')
        cy.get('#phone').should('have.value', phoneNumber)

        cy.get('#dob').type(dob)
        cy.get('#dob').should('have.value', dob)

        if (gender === 'Female'){
            cy.get('.slider').click()
            cy.get('label[for="genderToggle"]').contains('Female').should('exist');
        }

        cy.get('#province').select(province)
        cy.get('#province').should('contain.text', province)

        //submit
        cy.get('.space-y-6 > .px-4').click()

        cy.get('#city-error').should('contain.text', 'City is required')
    }

    failedCreateUserWithInvalidMail({title, firstName, middleName, lastName, email, phoneNumber, dob, gender, province, city}){
        cy.get('#title').select(title)
        cy.get('#title').should('contain.text', title)

        cy.get('#firstName').type(firstName)
        cy.get('#firstName').should('have.value', firstName)

        cy.get('#middleName').type(middleName)
        cy.get('#middleName').should('have.value', middleName)

        cy.get('#lastName').type(lastName)
        cy.get('#lastName').should('have.value', lastName)

        cy.get('#email').type(email)
        cy.get('#email').should('have.value', email)

        cy.get('#phone').type(phoneNumber).and('be.focused')
        cy.get('#phone').should('have.value', phoneNumber)

        cy.get('#dob').type(dob)
        cy.get('#dob').should('have.value', dob)

        if (gender === 'Female'){
            cy.get('.slider').click()
            cy.get('label[for="genderToggle"]').contains('Female').should('exist');
        }

        cy.get('#province').select(province)
        cy.get('#province').should('contain.text', province)

        cy.get('#city', { timeout: 10000 }).should('not.contain.text', 'loading cities list');

        cy.get('#city', { timeout: 10000 }).should('not.be.disabled').select(city)
        cy.get('#city').should('contain.text', city)

        //submit
        cy.get('.space-y-6 > .px-4').click()

        cy.get('#email-error').should('contain.text', 'Invalid email format')

    }

    failedCreateUserWithSpecialCharacter({title, firstName, middleName, lastName, email, phoneNumber, dob, gender, province, city}){
        cy.get('#title').select(title)
        cy.get('#title').should('contain.text', title)

        cy.get('#firstName').type(firstName)
        cy.get('#firstName').should('have.value', firstName)

        cy.get('#middleName').type(middleName)
        cy.get('#middleName').should('have.value', middleName)

        cy.get('#lastName').type(lastName)
        cy.get('#lastName').should('have.value', lastName)

        cy.get('#email').type(email)
        cy.get('#email').should('have.value', email)

        cy.get('#phone').type(phoneNumber).and('be.focused')
        cy.get('#phone').should('have.value', phoneNumber)

        cy.get('#dob').type(dob)
        cy.get('#dob').should('have.value', dob)

        if (gender === 'Female'){
            cy.get('.slider').click()
            cy.get('label[for="genderToggle"]').contains('Female').should('exist');
        }

        cy.get('#province').select(province)
        cy.get('#province').should('contain.text', province)

        cy.get('#city', { timeout: 10000 }).should('not.contain.text', 'loading cities list');

        cy.get('#city', { timeout: 10000 }).should('not.be.disabled').select(city)
        cy.get('#city').should('contain.text', city)

        //submit
        cy.get('.space-y-6 > .px-4').click()

        cy.get('#firstName-error').should('contain.text', `First name can only consists of letters`)
        cy.get('#middleName-error').should('contain.text', `Middle name can only consists of letters`)
        cy.get('#lastName-error').should('contain.text', `Last name can only consists of letters`)
    }

    failedCreateUserWithExceedMaxLength({title, firstName, middleName, lastName, email, phoneNumber, dob, gender, province, city}){
        cy.get('#title').select(title)
        cy.get('#title').should('contain.text', title)

        cy.get('#firstName').type(firstName)
        cy.get('#firstName').should('have.value', firstName)

        cy.get('#middleName').type(middleName)
        cy.get('#middleName').should('have.value', middleName)

        cy.get('#lastName').type(lastName)
        cy.get('#lastName').should('have.value', lastName)

        cy.get('#email').type(email)
        cy.get('#email').should('have.value', email)

        cy.get('#phone').type(phoneNumber).and('be.focused')
        cy.get('#phone').should('have.value', phoneNumber)

        cy.get('#dob').type(dob)
        cy.get('#dob').should('have.value', dob)

        if (gender === 'Female'){
            cy.get('.slider').click()
            cy.get('label[for="genderToggle"]').contains('Female').should('exist');
        }

        cy.get('#province').select(province)
        cy.get('#province').should('contain.text', province)

        cy.get('#city', { timeout: 10000 }).should('not.contain.text', 'loading cities list');

        cy.get('#city', { timeout: 10000 }).should('not.be.disabled').select(city)
        cy.get('#city').should('contain.text', city)

        //submit
        cy.get('.space-y-6 > .px-4').click()

        cy.get('#firstName-error').should('contain.text', `First name cannot be more than 30 characters`)
        cy.get('#middleName-error').should('contain.text', `Middle name cannot be more than 30 characters`)
        cy.get('#lastName-error').should('contain.text', `Last name cannot be more than 30 characters`)
    }

    failedCreateUserWithBoundaryPhone({title, firstName, middleName, lastName, email, phoneNumber, dob, gender, province, city}){
        cy.get('#title').select(title)
        cy.get('#title').should('contain.text', title)

        cy.get('#firstName').type(firstName)
        cy.get('#firstName').should('have.value', firstName)

        cy.get('#middleName').type(middleName)
        cy.get('#middleName').should('have.value', middleName)

        cy.get('#lastName').type(lastName)
        cy.get('#lastName').should('have.value', lastName)

        cy.get('#email').type(email)
        cy.get('#email').should('have.value', email)

        cy.get('#phone').type(phoneNumber).and('be.focused')
        cy.get('#phone').should('have.value', phoneNumber)

        cy.get('#dob').type(dob)
        cy.get('#dob').should('have.value', dob)

        if (gender === 'Female'){
            cy.get('.slider').click()
            cy.get('label[for="genderToggle"]').contains('Female').should('exist');
        }

        cy.get('#province').select(province)
        cy.get('#province').should('contain.text', province)

        cy.get('#city', { timeout: 10000 }).should('not.contain.text', 'loading cities list');

        cy.get('#city', { timeout: 10000 }).should('not.be.disabled').select(city)
        cy.get('#city').should('contain.text', city)

        //submit
        cy.get('.space-y-6 > .px-4').click()

        cy.get('#phone-error').should('contain.text','Phone number must be 10-12 digits')
    }
}

export default new UserInformPage()