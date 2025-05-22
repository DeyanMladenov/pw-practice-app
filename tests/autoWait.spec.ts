import {test, expect} from '@playwright/test'
import { subscribeOn } from 'rxjs-compat/operator/subscribeOn'

test.beforeEach(async({page}) => {
    page.goto('our website') 
})

test('auto wait', async({page}) => {

    // For more information check all methods that have auto waiting
    const successButton = page.locator('.bg-success')

    await successButton.waitFor({state: 'attached'});
    await successButton.textContent(); 
})

test('alternative waits', async({page}) => {
    const successButton = page.locator('.bg-success')

    // wait for elements
    await page.waitForSelector('.bg-success')

    // wait for particulat response
    await page.waitForResponse('url of the reposne')
})