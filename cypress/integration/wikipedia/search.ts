/// <reference types="cypress" />
import { RobotEyes, RobotHands, Dependencies } from '../../robots/AmazonAssingment/AmazonRobot';

context("Search Test", () => {
const robotEyes = new RobotEyes();
const robotHands = new RobotHands();
const dependencies = new Dependencies();

    describe('Testing Green comute webpage', ()=>{

        it("Navigating to Green commute webpage", function()  {
            dependencies.visitamazaon();
        });

        it("Giving the current destination", () => {
            robotHands.currentDestination()    
            robotEyes.asserting()
        })
        it("Giving the Job destination", () => {
            robotHands.jobDestination()    
            robotEyes.asserting()
        })


    });

});