import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitamazaon(){
        this.accessUrl('https://www.amazon.in/');
    }
}

export class RobotEyes extends BaseEyes{
    login(){
        this.login()
        this.seesTextWtihDataTestId("aqi",1,"Delhi")
        this.seesTextWtihDataTestId("nextbutton",0,"Next")
    }
    verifiyingcart(){
        this.seesTextWithId("sc-subtotal-label-buybox","\n\n\n\n\n\n\n\n\nSubtotal (1 item):")
    }
    verifiyingorder(){
        this.seesDomVisible("[class='a-row shipment-top-row js-shipment-info-container']")
    }
    verifyingOrderStatus(){
        this.seesDomVisible("[class='a-box-inner a-alert-container']")
    }
}

export class RobotHands extends BaseHands{

    singin(){
        this.clickOnDomElement("#nav-link-accountList-nav-line-1")
    }
    login(){
        this.typeTextonDom("type", "email", "9123128573")
        this.clickOnId("continue")
        this.wait(1000)
        this.typeTextonDom("type", "password", "SHAZADKHAN123")
        this.clickOnId("signInSubmit")
    }
    todaysDeals(){
        this.clickOnText("Today's Deals")
        this.ClickOnChildDomElement("[class='DealGridItem-module__dealItem_2X_WLYkJ3-dM0LtXI9THcu DealGridItem-module__withBorders_2jNNLI6U1oDls7Ten3Dttl DealGridItem-module__withoutActionButton_2OI8DAanWNRCagYDL2iIqN']",2)
    }
    firstOption(){
        this.ClickOnChildDomElement("[class='a-list-normal a-spacing-none no-margin-right overflow-hidden octopus-response-li-width']",0)
    }
    addingToCart(){
        this.clickOnId("add-to-cart-button")
        this.wait(5000)
    }
    checkingCart(){
        this.clickOnId("nav-cart-count-container")
    }
    searchingMobiles(){
        this.typeTextonDom("id","twotabsearchtextbox","Mobiles")
        this.clickOnId("nav-search-submit-button")
    }
    lastMobile(){
        this.ClickOnInvokedChildDomElement("[class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']",24)
        this.navigation(-1)
    }
    menubar(){
        this.clickOnId("nav-hamburger-menu")
     }
    mobilescomputers(){
        this.clickOnDomElement("[data-menu-id='8']")
        this.clickOnText("All Mobile Phones")
    }
    firstMobile(){
        this.ClickOnChildDomElement("[class='bxc-grid__column  bxc-grid__column--3-of-12 bxc-grid__column--light bxc-grid__column--beauty bxc-grid__column--beauty']",0)
    }
    accounts(){
        this.wait(5000)
        this.clickOnText("Account & Lists")
    }
    orders(){
        this.ClickOnChildDomElement("[class='a-box ya-card--rich']",0)
        this.ClickOnChildDomElement("[class='a-link-normal yohtmlc-order-details-link']",0)
        this.wait(2000)
        
    }
    selectingYear(){
        this.navigation(-1)
        this.clickOnId("a-autoid-1")
        this.clickOnId("time-filter_3")
    }
    selectingOrder(){
        this.clickOnDomElement("[id='View-Return/Refund-Status_1']")
        
    }
    Address(){

        this.clickOnText("Account & Lists")
        this.ClickOnChildDomElement("[class='a-box ya-card--rich']",3)
       
    }
    addAddressIcon(){
        this.clickOnDomElement("[class='a-box first-desktop-address-tile']")
        }
    enteringAddress(){
        this.typeTextonDom("name","address-ui-widgets-enterAddressFullName","abc")
        this.typeTextonDom("name","address-ui-widgets-enterAddressPhoneNumber","7857014243")
        this.typeTextonDom("name","address-ui-widgets-enterAddressPostalCode","831012")
        this.typeTextonDom("name","address-ui-widgets-enterAddressLine1","h.no-1, road.no-1,lane-no 1")
        this.typeTextonDom("name","address-ui-widgets-enterAddressLine2","mango")
        this.typeTextonDom("name","address-ui-widgets-landmark","Eifel Tower")
        // this.typeTextonDom("name","address-ui-widgets-enterAddressCity","Jamshedpur")
        // this.clickOnText("Choose a state")
        // this.clickOnText("JHARKHAND")
       
    }
    selectingAddressType(){
        this.clickOnDomElement("[id='address-ui-widgets-addr-details-address-type-and-business-hours']")
        this.clickOnId("dropdown1_1")

    
    }
    adding(){
        this.clickOnId("address-ui-widgets-form-submit-button")
    }

}