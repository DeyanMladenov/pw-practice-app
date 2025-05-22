import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
})

test('Reusing locators', async({page}) => {

    //Basic locator
    const basicLocator = page.locator('nb-card').filter({hasText:"Basic form"})

    //Multiple chaining
    const emailField = basicLocator.getByRole('textbox',{name: "Email"})
    await emailField.fill("Pesho123@test.bg");

    await basicLocator.getByRole('textbox',{name: "Password"}).fill("pass123$");
    await basicLocator.locator('nb-checkbox').click();
    await basicLocator.getByRole('button',{name: "Submit"}).click();

    await expect(emailField).toHaveValue('Pesho123@test.bg')
})