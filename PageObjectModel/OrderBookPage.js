import { expect } from "@playwright/test"

export class OrderBookPage{
    constructor(page){
        this.page=page
        this.BookBtn = page.locator('//ul[@class="top-menu"]//li')
        this.AddCart = page.locator('input[value="Add to cart"]')
        this.ShoppingCart = page.locator('//span[text()="Shopping cart"]')
        this.CartRow = page.locator('tr[class="cart-item-row"]')
        this.ItemQuantity = page.locator('input.qty-input')
        this.BeforeTotal = page.locator('td[class="cart-total-right"]')
        this.UpdateCartBtn = page.locator('input[name="updatecart"]')
        this.RemoveItem = page.locator('input[name="removefromcart"]')
    }
    async BookOrder(){
        await this.BookBtn.first().click()
        console.log(await this.AddCart);
        for(let c=0;c<3;c++){
            await this.AddCart.nth(c).click()
        }
        await this.ShoppingCart.click()
        for(let c=0; c<3;c++){
            let prod_name = this.CartRow.nth(c).locator('.product-name')
            await expect(prod_name).toBeVisible()

            let prod_price = this.CartRow.nth(c).locator('.product-unit-price')
            await expect(prod_price).toBeVisible()
            console.log(prod_price);
            
            let quntity = this.CartRow.nth(c).locator('.qty-input')
            await expect(quntity).toBeVisible()
            console.log(quntity);
        }

    }

    async updateCart(){
        await this.page.waitForTimeout(3000)
        await this.ItemQuantity.nth(1).fill("2")
        await this.UpdateCartBtn.click()
        let BT = await this.BeforeTotal.first().innerText()
        let BeforeT = parseInt(BT)
        console.log(BeforeT);
    }

    async removeItem(){
        await this.RemoveItem.first().check()
        await this.UpdateCartBtn.click()
        let AT = await this.page.locator('td[class="cart-total-right"]').first().innerText()
        let AfterTotal = parseInt(AT)
        console.log(AfterTotal);
        await expect(AfterTotal).toBeLessThan(BeforeT)
        await this.page.waitForTimeout(3000)
    }
}