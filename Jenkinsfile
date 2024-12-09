pipeline {
    agent any

    environment {
        GIT_CREDENTIALS_ID = '528c0651-e59e-4007-b766-3fc962af6593' // Replace with your credential ID
        REPO_URL = 'https://github.com/SoumyadeepBasu909/Microservice.git' // Replace with your repository URL
        KUBECONFIG = credentials('kubernetes') // Replace with your Kubernetes credentials ID
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    // Checkout the repository using credentials
                    checkout([$class: 'GitSCM', 
                              branches: [[name: '*/main']], // Replace 'main' with your branch
                              doGenerateSubmoduleConfigurations: false,
                              extensions: [],
                              submoduleCfg: [],
                              userRemoteConfigs: [[
                                  credentialsId: env.GIT_CREDENTIALS_ID,
                                  url: env.REPO_URL
                              ]]
                    ])
                }
            }
        }

        stage('Setup Kubernetes Config') {
            steps {

                // Optionally verify the kubeconfig file
                bat 'echo $KUBECONFIG > kubeconfig'
                bat 'kubectl version --client'
            }
        }

        stage('Apply Kubernetes Configuration') {
            steps {
                bat 'kubectl apply -f kube.yaml'
            }
        }
    }
}