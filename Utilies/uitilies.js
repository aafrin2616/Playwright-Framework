
export async function selectDropDown(page,locator,value){
    await page.locator(locator).selectOption(value)
}

export async function WindowHandle(page,locator){
    let [newpage] = await Promise.all([page.waitForEvent('popup'),
        await page.locator(locator).click()
    ])
    await newpage.waitForLoadState()

    return newpage;
}