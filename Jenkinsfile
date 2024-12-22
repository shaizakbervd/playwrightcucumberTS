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
        
        stage('Deploying') {
            steps {
                echo "Deploying project"
            }
        }
    }

    post {
        success {
            emailext(
                to: 'shaiz.akber@venturedive.com',
                subject: "Jenkins Pipeline Success: Job ${env.JOB_NAME} #${env.BUILD_NUMBER}",
                body: """
                    <p>Hello,</p>
                    <p>Good news! The build was successful for Job <b>${env.JOB_NAME}</b> - Build #<b>${env.BUILD_NUMBER}</b>.</p>
                    <p><b>Parameters Used:</b></p>
                    <ul>
                        <li><b>SPEC:</b> ${params.SPEC}</li>
                        <li><b>BROWSER:</b> ${params.BROWSER}</li>
                    </ul>
                    <p>Check the <a href="${env.BUILD_URL}">build details</a> and <a href="${env.BUILD_URL}HTML_Report/index.html">HTML Report</a>.</p>
                    <p>Best Regards,<br>The Jenkins Pipeline</p>
                """,
                mimeType: 'text/html'
            )
        }
    }
}
