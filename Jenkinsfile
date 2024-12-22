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
                bat 'npm ci'
                bat 'npm run TestScenarios' // Command to run all scenarios
            }
        }

        stage('Publish Report') {
            steps {
                script {
                    publishHTML([
                        allowMissing: false, 
                        alwaysLinkToLastBuild: true, 
                        keepAll: false, 
                        reportDir: 'cypress', 
                        reportFiles: 'index.html', 
                        reportName: 'HTML Report', 
                        reportTitles: 'Cypress Test Results'
                    ])
                }
            }
        }

        stage('Send Email') {
            steps {
                script {
                    emailext(
                        to: 'shaiz.akber@venturedive.com',
                        subject: 'Jenkins Report',
                        body: """
                            <p>Hello, this is the email from the Jenkins job.</p>
                            <p>Check the <a href="${env.BUILD_URL}">build details</a> and 
                            <a href="${env.BUILD_URL}HTML_Report/index.html">HTML Report</a>.</p>
                        """,
                        mimeType: 'text/html'
                    )
                }
            }
        }

        stage('Deploying') {
            steps {
                echo "Deploying project"
            }
        }
    }
}
