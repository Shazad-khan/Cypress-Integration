pipeline{
    
    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the scripts path that you want to execute")
        choice(name: 'BROWSER', choices:['chrome','edge','firefox'], description: "Choice the browser where you want to execute your scripts")
    }
    stages{
        stage('Building'){
            steps{
            echo "Building the application"
        }
       }
        stage('Testing'){
            steps{
            sh "npm i"
            sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
           }
        }
        stage('Deploying'){
            steps{
            echo "Deplouing the application"
        }
       }     
    }
}
