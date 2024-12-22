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
                        cc: '',
                        bcc: '',
                        from: '',
                        replyTo: '',
                        subject: 'Jenkins Report',
                        body: 'Hello, this is the email from the Jenkins job.',
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
