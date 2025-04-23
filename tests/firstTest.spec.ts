import {test} from '@playwright/test'

test.beforeEach(async({page}) => {
    await page.goto('http://localhost:4200/');
})

test.describe('test suit: Forms', () => {

    test.beforeEach(async({page}) => {
        await page.getByText('Forms').click();
    })

    test('the first test', async ({page}) => {
        await page.getByText('Form Layouts').click();
    })
    
    test('navigate to datepicker page', async ({page}) => {
       await page.getByText('Datepicker').click();
    })
})


test.describe('test suit: Auth', () => {

    test.beforeEach(async({page}) => {
        await page.getByText('Auth').click();
    })

    test('the first test', async ({page}) => {
        await page.getByText('Login').click();
    })
    
})
