import { BaseHands, BaseEyes, BaseDependencies } from '../BaseRobot';


export class Dependencies extends BaseDependencies {
   
    visitWikipedia(){
        this.accessUrl('http://3.12.149.188:3000');
    }
}

export class RobotEyes extends BaseEyes{
    asserting(){
        this.seesDomContainText("[class='MuiButton-root']", "Next")
    }  
    jobDestination(){
        this.seesTextWtihDataTestId("aqi",0,"Hyderabad")
        this.seesTextWtihDataTestId("aqi",1,"Delhi")
        this.seesTextWtihDataTestId("nextbutton",0,"Next")
    }
}

export class RobotHands extends BaseHands{

    currentDestination(){
        this.typeTextonDom("id", "combo-box-demo", "Hyderabad")
            .clickOnDomElement("[class='MuiAutocomplete-listbox']")
            .clickOnDomElement(".MuiButton-root")
    }
    jobDestination(){
        this.typeTextonDom("id","combo-box-demo","Hyderabad")
        .clickOnDomElement(".MuiAutocomplete-listbox")
        this.typeTextonDom("id","combo-box-demo","Delhi")
        .clickOnDomElement(".MuiAutocomplete-listbox")
        this.clickOnDomElement("data-testid=['nextButton']",)

        
    }
}