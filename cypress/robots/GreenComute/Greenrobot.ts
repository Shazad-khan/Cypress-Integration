import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitGreencomute(){
        this.accessUrl('http://3.12.149.188:3000/');
    }
}

export class RobotEyes extends BaseEyes{
    inputCheck(){
        this.seesIdVisible("combo-box-demo")
    }
    nextButton(){
        this.seesDomVisible("[data-testid='nextButton']")
    }
    firstJob(){
        this.seesDomVisible("[class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root makeStyles-root-61 css-1lik5q-MuiPaper-root-MuiCard-root']")
    }

    saveButton(){
        this.seesDomVisible("[class='MuiTypography-root MuiTypography-caption makeStyles-saveTypo-83 css-1w444da-MuiTypography-root']")
    }

    savedJobsTab(){
        this.seesDomVisible("[class='MuiTypography-root MuiTypography-body2 makeStyles-navtext-20 css-1i51xdo-MuiTypography-root']")

    }

    findJobsTab(){
        this.seesDomVisible("[data-testid='findJobs']")
    }
    unsaveButton(){
        this.seesDomVisible("[class='MuiTypography-root MuiTypography-caption makeStyles-saveTypo-172 css-1w444da-MuiTypography-root']")
    }
    filterButton(){
        this.seesDomVisible("[data-testid='filter-button']")
    }
    applyingFilter(){
        this.seesDomVisible("[class='MuiTypography-root MuiTypography-caption makeStyles-applyButton-131 css-1w444da-MuiTypography-root']")
    }
    clearAll(){
        this.seesDomVisible("[data-testid='clearAllChip']")
    }
    greenCommuteRoutes(){
        this.seesDomVisible("[class='MuiTypography-root MuiTypography-subtitle1 css-19zpkew-MuiTypography-root']")

    }

    carsIcon(){
        this.seesDomVisible("[data-testid='DirectionsCarIcon']")
    }

    busIcon(){
        this.seesDomVisible("[data-testid='DirectionsBusIcon']")
    }
    appliedButton(){
        this.seesDomVisible("Applied")
    }


    
   
    
}

export class RobotHands extends BaseHands{

    currentLocation(){
        this.typeTextonId("combo-box-demo","Hyderabad")
        this.clickOnId("combo-box-demo-option-0")
        this.clickOnDomElement("[data-testid='nextButton']")
    }

    jobLocation(){
        
        this.typeTextonId("combo-box-demo","Hyderabad")
        this.clickOnId("combo-box-demo-option-0")
        
        this.typeTextonId("combo-box-demo","Delhi")
        this.clickOnId("combo-box-demo-option-0")
        this.clickOnDomElement("[data-testid='nextButton']")
   }

    jobDiscription(){
        
        this.typeTextonId("combo-box-demo","User Experience designer")
        this.clickOnId("combo-box-demo-option-0")
        
        this.typeTextonId("combo-box-demo","Product designer")
        this.clickOnId("combo-box-demo-option-0")
        this.clickOnDomElement("[data-testid='nextButton']")
   }

    firstJob(){
        this.ClickOnChildDomElement("[class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root makeStyles-root-61 css-1lik5q-MuiPaper-root-MuiCard-root']",0)
    }

    saveButton(){
        this.clickOnDomElement("[class='MuiTypography-root MuiTypography-caption makeStyles-saveTypo-83 css-1w444da-MuiTypography-root']")
    }

    savedJobsTab(){
        this.ClickOnChildDomElement("[class='MuiTypography-root MuiTypography-body2 makeStyles-navtext-20 css-1i51xdo-MuiTypography-root']",1)

    }

    findJobsTab(){
        this.clickOnDomElement("[data-testid='findJobs']")
        this.wait(1000)
        this.ClickOnChildDomElement("[class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation1 MuiCard-root makeStyles-root-150 css-1lik5q-MuiPaper-root-MuiCard-root']",0)
    }

    unsaveButton(){
        this.clickOnDomElement("[class='MuiTypography-root MuiTypography-caption makeStyles-saveTypo-172 css-1w444da-MuiTypography-root']")
    }
    filterButton(){
        this.clickOnDomElement("[data-testid='filter-button']")
    }
    seclectingFilters(){
        //for filtering date posted
        this.clickOnDomElement("[value='Past 24 hours']")
        this.clickOnDomElement("[value='Past week']")
        this.clickOnDomElement("[value='Past month']")
        this.clickOnDomElement("[value='Anytime']")

        //for filtering job type
        this.clickOnDomElement("[value='Internship']")
        this.clickOnDomElement("[value='Full time']")
        
        //for filtering Experienced level
        this.clickOnDomElement("[value='Fresher']")
        this.clickOnDomElement("[value='Mid - level']")
        this.clickOnDomElement("[value='Director']")


        //for Greencomute
        this.clickOnDomElement("[value='Yes']")
    }
    applyingFilter(){
        this.clickOnDomElement("[class='MuiTypography-root MuiTypography-caption makeStyles-applyButton-131 css-1w444da-MuiTypography-root']")
    }

    clearAll(){
        this.wait(5000)
        this.clickOnDomElement("[data-testid='clearAllChip']")
        
        this.ClickOnChildDomElement("[data-testid='CloseIcon']",0)
    }
    greenCommuteRoutes(){
        this.clickOnDomElement("[class='MuiTypography-root MuiTypography-subtitle1 css-19zpkew-MuiTypography-root']")

    }

    carsIcon(){
        this.clickOnDomElement("[data-testid='DirectionsCarIcon']")
    }

    busIcon(){
        this.clickOnDomElement("[data-testid='DirectionsBusIcon']")
    }
    appliedButton(){
        this.clickOnText("Applied")
    }

}