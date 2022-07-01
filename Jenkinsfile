pipeline{
    
    agent any

    parameters{
        string(name: 'SPEC', defaultValue: "cypress/e2e/**/**", description: "Enter the scripts path that you want to execute")
        choice(name: 'BROWSER', choices['chrome','edge','firefox'], description: "Choice the browser where you want to execute your scripts")
    }

    options{
        ansiColor('xterm')
    }
    stages{
        stage('Building'){
            echo "Building the application"
        }
        stage('Testing'){
            steps{
            sh 'npm install typescript'


			sh 'npm install cypress --save-dev'              

                
            sh "npx cypress run --browser ${BROWSER} --spec ${SPEC}"
           }
        }
        stage('Deploying'){
            echo "Deplouing the application"
        }

    }
}
