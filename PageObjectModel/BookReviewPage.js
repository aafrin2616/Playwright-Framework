import { log } from "node:console"
import { expect } from "@playwright/test"

export class BookCategoryPage{
    constructor(page){
        this.page=page
        this.BookBtn = page.locator('//ul[@class="top-menu"]//li')
        this.OrderBy = page.locator('#products-orderby')
        this.ProdPageSize = page.locator('#products-pagesize')
        this.item = page.locator('//div[@class="product-grid"]')
        this.NextPage = page.locator('li[class="next-page"]')
        this.Product_grid = page.locator('div[class="product-grid"]')
        this.BookTitle = page.getByTitle("Show details for Science")
        this.AddReviewLink = page.getByText("Add your review")
        this.ProdReviewTitle = page.locator("#AddProductReview_Title")
        this.ProdReviewText =page.locator("#AddProductReview_ReviewText")
        this.PrdoRating = page.locator('#addproductrating_5')
        this.AddReviewBtn = page.locator('input[name="add-review"]')
        
    }

    async BookReview(){
        await this.BookBtn.first().click()
        await this.OrderBy.selectOption({label : "Name: A to Z"})
        await this.ProdPageSize.selectOption({label: "4"})
        let count = await this.item.count()
        console.log(count);
        await this.NextPage.click()
        let url = await this.page.url()
        console.log(url);
        await this.Product_grid.isVisible()
        await this.BookTitle.first().click()
        await this.AddReviewLink.click()
        await this.ProdReviewTitle.fill("Product is very useful")
        await this.ProdReviewText.fill("Prodcut is very helpful and nice")
        await this.PrdoRating.click()
        await this.AddReviewBtn.click()
        let R = await this.page.locator('div[class="result"]').allTextContent()
        await expect(this.page.locator('div[class="result"]')).toBeVisible()
        console.log(R)
        await this.page.waitForTimeout(2000)
       
    }
}