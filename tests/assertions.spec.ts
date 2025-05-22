import {test, expect} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
})

test('assertions', async({page}) => {
    // General assertion - Its general and we do not using "await" because we have already extracted text/value from our element
    const basicForm = await page.locator('nb-card').filter({hasText: 'Basic form'})
    const submitButton = await basicForm.getByRole('button', {name: 'Submit'})
    await submitButton.click();


    const whatIsTheButtonName = await submitButton.textContent();
    expect(whatIsTheButtonName).toEqual('Submit');

    // Locator assertion - we  have to put await in fron of the expect because we itarate direct with the button/element
    await expect(submitButton).toHaveText('Submit')

    // Soft assertion - If our currect step failed test will countinue
    await expect.soft(submitButton).toHaveText('Submitt');
    await submitButton.click();

})