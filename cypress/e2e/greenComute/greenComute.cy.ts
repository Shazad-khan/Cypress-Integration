/// <reference types="cypress" />
import { RobotEyes, RobotHands, Dependencies } from '../../robots/GreenComute/Greenrobot';

context("Search Test", () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies();

    describe('Testing Green comute webpage', ()=>{

        it("Navigating to Green Commute webpage", function()  {
            dependencies.visitGreencomute();
        });

        it("Current destination", () => {
            robotEyes.inputCheck()
            robotHands.currentLocation()
           
        })
        it("Job destination", () => {
            robotEyes.inputCheck()
            robotHands.jobLocation()
           
            
        })
        it("Job discription",()=>{
            robotEyes.inputCheck()
            robotHands.jobDiscription()
     
        })
        it("Getting the first job",()=>{
            robotEyes.firstJob()
            robotHands.firstJob()
            
        })
        it("Clicking on save button ",()=>{
            robotEyes.saveButton()
            robotHands.saveButton()
           
        })
        it("Clicking on saved Jobs tab",()=>{
            robotEyes.savedJobsTab()
            robotHands.savedJobsTab()
            
        })
        it("Clicking on find jobs tab",()=>{
            robotHands.findJobsTab()
    
            
        })
        it("Clicking on filter button",()=>{
            robotEyes.filterButton()
            robotHands.filterButton()
           
        })
        it("Selecting filters",()=>{
            robotHands.seclectingFilters()
        })
        it("Applying filters",()=>{
            robotHands.applyingFilter()
            robotHands.applyingFilter()
            
        })
        it("Clearing filters",()=>{
            robotHands.clearAll()
           
        })
        it("Clicking on Green Commute Routes",()=>{
            robotEyes.greenCommuteRoutes()
            robotHands.greenCommuteRoutes()
            
        })
        it("Clicking on bus icon",()=>{
            robotEyes.busIcon()
            robotHands.busIcon()
           
        })
        it("Clicking on car icon",()=>{
            robotEyes.carsIcon
            robotHands.carsIcon()
            
        })
        it("Clicking on Applied button",()=>{
            robotHands.appliedButton() 
        })

    });

});