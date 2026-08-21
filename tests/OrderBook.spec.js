import{expect, test} from "@playwright/test"
import { log } from "node:console"
import Login from "../testData/Login.json"
import { LoginPage } from "../PageObjectModel/LoginPage"
import { OrderBookPage } from "../PageObjectModel/OrderBookPage"
import { LogoutPage } from "../PageObjectModel/LogoutPage"

test("Order book",async({page})=>{
    page.goto('https://demowebshop.tricentis.com/')

     
    let LoginP = new LoginPage(page)
    await LoginP.login(Login.email,Login.password)

    let orderBookP = new OrderBookPage(page)
    await orderBookP.BookOrder()
    await orderBookP.updateCart()
    await orderBookP.removeItem()

    let logOutP = new LogoutPage(page)
    await logOutP.logOut()

//     await page.locator('//ul[@class="top-menu"]//li').first().click()
//     let addcart = await page.locator('input[value="Add to cart"]')
//     console.log(addcart);
//    for(let c=0;c<3;c++){
//     await addcart.nth(c).click()
//    }
//     await page.locator('//span[text()="Shopping cart"]').click()
//     let cart_row = await page.locator('tr[class="cart-item-row"]')
//     for(let c=0; c<3;c++){
//         let prod_name = cart_row.nth(c).locator('.product-name')
//         await expect(prod_name).toBeVisible()
//         console.log(prod_name);
        

//         let prod_price = cart_row.nth(c).locator('.product-unit-price')
//         await expect(prod_price).toBeVisible()
//         console.log(prod_price);

//         let quntity = cart_row.nth(c).locator('.qty-input')
//         await expect(quntity).toBeVisible()
//         console.log(quntity);
//     }
//     await page.waitForTimeout(3000)
//     await page.locator('input.qty-input').nth(1).fill("2");
//     await page.locator('input[name="updatecart"]').click()
//     let BT = await page.locator('td[class="cart-total-right"]').first().innerText()
//     let BeforeTotal = parseInt(BT)
//     console.log(BeforeTotal);

//     // for(let i =0 ;i<3;i++){
//     //     let pp = cart_row.nth(i).locator('.product-unit-price').innerText()
//     //     let price = Number((await pp).slice(1))
//     //     if(price>20){
//     //         await page.locator('input[name="removefromcart"]').check()
//     //     }   
//     // }

//     await page.locator('input[name="removefromcart"]').first().check()

//     await page.locator('input[name="updatecart"]').click()
//     let AT = await page.locator('td[class="cart-total-right"]').first().innerText()
//     let AfterTotal = parseInt(AT)
//     console.log(AfterTotal);

//     await expect(AfterTotal).toBeLessThan(BeforeTotal)
//     await page.waitForTimeout(3000)
//     await page.getByText('Log out').click()

})