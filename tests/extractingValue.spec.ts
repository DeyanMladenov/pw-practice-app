import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
})

test('Keeping in variables', async({page}) => {

    //Basic locator
    const basicLocator = page.locator('nb-card').filter({hasText:"Basic form"})

    //Multiple chaining
    const emailField = basicLocator.getByRole('textbox',{name: "Email"})

    // Basic form - Submit button
    const submitButton = basicLocator.filter({has: page.getByRole('button', {name:"Submit"})}).click()

})

test('Extractiong value', async({page}) => {

    // single text
    const basicForm  = page.locator('nb-card').filter({hasText:"Basic form"})
    const buttonName = await basicForm.locator('button').textContent();
    expect(buttonName).toEqual('Submit')

    // All text value
    const listOfRadioButtons = await page.locator('nb-radio').allTextContents();
    expect(listOfRadioButtons).toContain('Option 1');

    // Input value (Entered from us)
    const emailField = basicForm.getByRole('textbox', {name:'Email'});
    await emailField.fill('test@test.bg');
    const emailValue = await emailField.inputValue();
    expect(emailValue).toEqual('test@test.bg')

    // Validate element attribute - placeholder="Email"
    const placeholderValue = await emailField.getAttribute('placeholder');
    expect(placeholderValue).toEqual('Email');
})