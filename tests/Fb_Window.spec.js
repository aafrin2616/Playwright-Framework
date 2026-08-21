import{expect, test} from "@playwright/test"
import { log } from "node:console"
import Login from "../testData/Login.json"
import Registration from "../testData/Registration.json"
import { WindowHandle } from "../Utilies/uitilies"

test("Facebook",async({page})=>{
    page.goto(Registration.url)

     await page.getByText('Log in').click()                        
    await page.locator('#Email').fill(Login.email)   
    await page.locator('#Password').fill(Login.password)
    await page.locator('//input[@value="Log in"]').click()

    await page.getByText("Follow us").scrollIntoViewIfNeeded()
    // let [newpage] = await Promise.all([page.waitForEvent('popup'),
    //     await page.locator('li[class="facebook"]').click()
    // ])
    let newpage = await WindowHandle(page,'li[class="facebook"]')
    
    let url = await newpage.url()
    console.log(url);
    let title = await newpage.title()
    console.log(title);
    await newpage.close()
    await page.waitForTimeout(3000)
    await page.close()
})