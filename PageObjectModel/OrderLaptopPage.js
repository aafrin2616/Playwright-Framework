import{expect, test} from "@playwright/test"

export class OrderLaptopPage{
    constructor(page){
        this.page=page
        this.SearchItem = page.locator('.search-box-text')
        this.SearchBtn = page.locator('input[value="Search"]')
        this.ItemBtn = page.getByAltText("Picture of 14.1-inch Laptop")
        this.AvailabelItem = page.locator('div[class="stock"]',{hasText: "In stock"})
        this.AddCampareBtn = page.locator('input[value="Add to compare list"]')
        this.Prod_Name = page.locator('[class="product-name"]', {hasText: "14.1-inch Laptop"})
        this.ClearList = page.getByText('Clear list')
        this.EmptyList = page.locator('//div[@class="page-body"]',{hasText:"You have no items to compare."})
    

    }

    async searchItem(){
        await this.SearchItem.fill("laptop")
        await this.SearchBtn.click()
        await expect(this.page.getByAltText('Picture of 14.1-inch Laptop')).toBeVisible()
        //await expect(this.page.locator('.add-info')).toBeVisible()
        await this.page.waitForTimeout(2000)
        await this.page.getByAltText("Picture of 14.1-inch Laptop").click()
    }
    async  OrderItem(){
        await this.page.waitForTimeout(3000)
        await this.AvailabelItem
        await expect(this.AvailabelItem).toBeVisible()
        console.log(this.AvailabelItem);
    }
    async campareItem(){
        
        await this.AddCampareBtn.click()
        await this.Prod_Name
        await expect(this.Prod_Name).toBeVisible()
        await this.ClearList.click()
        await this.EmptyList
        console.log(this.EmptyList);
        await expect(this.EmptyList).toBeVisible()
    }
}