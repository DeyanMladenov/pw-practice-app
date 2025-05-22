import {test} from '@playwright/test'


test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();
    await page.getByText('Form Layouts').click();
})

test.describe('Locators', () => {

    test.skip('All locators', async({page}) => {

        //by tag
        page.locator('input')

        //by id
        page.locator('#inputEmail1')

        //by attriburte
        page.locator('placeholder="Email"')

        //combine locator
        page.locator('input[placeholder="Email"]')

        //by partial text
        page.locator(':text("Using")')

        //by exact text
        page.locator(':text-is(""Using the Grid)')

    })

    //ALL GOOD LOCATORS
    test('User freandly path', async({page}) => {
        await page.getByRole('textbox', {name: "Email"}).first().click();
        await page.getByRole('button', {name: "Sign in"}).first().click();
        

        await page.getByLabel('Email').first().click();

        await page.getByPlaceholder('Jane Doe').click();

        await page.getByText('Using the Grid').click();

        await page.getByTitle('IoT Dashboard').click();
    })

    // FIND THE CHILD ELEMENT
    test('location child element', async({page}) => {
        //between both element 'nb-card' and 'nb-radio' should have a space.
        await page.locator('nb-card nb-radio :text-is("Option 1")').click();

        await page.locator('nb-card').getByRole('button', {name: "Sign in"}).first().click();

        //by index
        await page.locator('nb-card').nth(3).getByRole('button').click();
    })

    // PARENT ELEMENTS
    test('find parent locator', async({page}) => {
       // await page.locator('nb-card', {hasText: "Using the Grid"}).locator('placeholder="Email"').click();
       // await page.locator('nb-card', {hasText: "Using the Grid"}).getByRole('textbox', {name: "Email"}).click();
       // await page.locator('nb-card', {has: page.locator('#inputEmail1')}).getByRole('textbox',{name: 'Email'}).click();
        //await page.locator('nb-card').filter({hasText:"Basic form"}).getByRole('textbox',{name: "Email"}).click();
        //await page.locator('nb-card').filter({has: page.locator('.status.danger')}).getByRole('textbox',{name:"Password"}).click()
        await page.locator('nb-card').filter({has: page.locator(".custom-checkbox")}).filter({hasText:"Sign in"}).getByRole('textbox',{name:"Password"}).click();
        
    })

})
