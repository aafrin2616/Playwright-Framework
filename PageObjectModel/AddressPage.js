import * as utilities from "../Utilies/uitilies"

export class AddressPage {
    constructor(page){
        this.page=page
        this.AddressBtn = page.getByText("Addresses")
        this.AddNewBtn = page.locator('//input[@value="Add new"]')
        this.FirstName = page.locator('#Address_FirstName')
        this.LastName = page.locator('#Address_LastName')
        this.Email = page.locator('#Address_Email')
        this.AddCountery = page.locator('#Address_CountryId')
        this.City = page.getByLabel('City:')
        this.Add1 = page.getByLabel('Address 1:')
        this.Add2 = page.getByLabel('Address 2:')
        this.Zipcode = page.locator('#Address_ZipPostalCode')
        this.Phone = page.locator('#Address_PhoneNumber')
        this.saveBtn = page.locator('//input[@value="Save"]')
        this.LogOut = page.getByText('Log out')
    }

    async AddressField(firstname,lastname,email,city,add1,add2,zipcode,phone){
        await this.AddressBtn.click()
        await this.AddNewBtn.click()
        await this.FirstName.fill(firstname)
        await this.LastName.fill(lastname)
        await this.Email.fill(email)
        await this.AddCountery.click()
        await utilities.selectDropDown(this.page,"#Address_CountryId","India")
        await this.City.fill(city)
        await this.Add1.fill(add1)
        await this.Add2.fill(add2)
        await this.Zipcode.fill(zipcode)
        await this.Phone.fill(phone)
        await this.saveBtn.click()
        await this.LogOut.click()
    }
}