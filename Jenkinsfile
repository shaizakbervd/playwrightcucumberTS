pipeline {
    agent any

    stages {
        stage('Building') {
            steps {
                echo "Building the project"
            }
        }

        stage('Testing') {
            steps {
                bat "npm ci"
                bat "npm run TestScenarios" // Command to run all scenarios
            }
        }

        stage('Generate Report') {
            steps {
                bat "npx ts-node generateReport.ts" // Command to generate reports
            }
        }

        stage('Deploying') {
            steps {
                echo "Deploying project"
            }
        }
    }
}
