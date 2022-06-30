/// <reference types="cypress" />
import { RobotEyes, RobotHands, Dependencies } from '../../robots/AmazonAssingment/AmazonRobot';

context("Search Test", () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies();

    describe('Testing Green comute webpage', ()=>{

        it("Navigating to amazon webpage", function()  {
            dependencies.visitamazaon();
        });

        it("Singing in to amazon", () => {
            
            robotHands.singin()    
            robotHands.login()
            
        })
        it("Getting todays third deals", () => {
            robotHands.todaysDeals()
            robotHands.firstOption()
            robotHands.addingToCart()
            robotHands.checkingCart()
            robotEyes.verifiyingcart()    
            
        })
        it("Searching mobiles",()=>{
            robotHands.searchingMobiles()
            robotHands.lastMobile()
        })
        it("Navigating Menubar for mobiles",()=>{
            robotHands.menubar()
            robotHands.mobilescomputers()
            robotHands.firstMobile()
        })
        it("Moving to order Section ",()=>{
            robotHands.singin()
            robotHands.login()
            robotHands.accounts()
            robotHands.orders()
            robotEyes.verifiyingorder()
            robotHands.selectingYear()
            robotHands.selectingOrder()
            robotEyes.verifyingOrderStatus()
        })
        it("Adding addreess",()=>{
            robotHands.Address()
            robotHands.login()
            robotHands.addAddressIcon()
            robotHands.enteringAddress()
            robotHands.selectingAddressType()
            robotHands.adding()
        })


    });

});