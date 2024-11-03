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

        stage('Publish Report') {
            steps {
                publishHTML([
                    allowMissing: false, 
                    alwaysLinkToLastBuild: true, 
                    keepAll: false, 
                    reportDir: "report", // Update this to your report directory if different
                    reportFiles: "index.html", 
                    reportName: 'HTML Report', 
                    reportTitles: ''
                ])
            }
        }
    }
}
