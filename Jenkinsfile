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

        stage('Send Email') {
            steps {
                script {
                    emailext(
                        to: 'shaiz.akber@venturedive.com',
                        subject: 'Jenkins Report',
                        body: 'Hello, this is the email from the Jenkins job.'
                        <p>Check the <a href="${env.BUILD_URL}">build details</a> and <a href="${env.BUILD_URL}HTML_Report/index.html">HTML Report</a>.</p>,
                        mimeType: 'text/plain'
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
