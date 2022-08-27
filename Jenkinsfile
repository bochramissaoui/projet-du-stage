def FAILED_STAGE =''

pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5'))
  }
  environment {
    PATH = "$PATH:/usr/bin"
    
    /* Docker info */
    DOCKERHUB_CREDENTIALS = credentials('DockerHubCred')
    DOCKERHUB_IMAGE_NAME = 'rayen98/relead-app-frontend'
    DOCKERHUB_IAMGE_TAG = 'dev'
    //DOCKERHUB_CONTAINER_NAME='relead-app-frontend'
    /* Server info */
    VPS_CREDENTIALS = credentials('platformVPSCred')
    USER ='ubuntu'
    IP_ADDRESS = '37.187.198.202'
    /* Utils */
    EMAIL_RECEIVER = 'rayen.cherni1160@gmail.com'
  }
  stages {
      stage('Build') {
        steps {
          /*Some Groovy scripts */
          script {
            FAILED_STAGE=env.STAGE_NAME
          }
          echo "Build Docker image: $DOCKERHUB_IMAGE_NAME:$DOCKERHUB_IAMGE_TAG"
          sh 'docker build --force-rm -t $DOCKERHUB_IMAGE_NAME:$DOCKERHUB_IAMGE_TAG .'
          echo "Docker image $DOCKERHUB_IMAGE_NAME:$DOCKERHUB_IAMGE_TAG is built."

        }
      }
      stage('Push') {
        steps {
          script {
            FAILED_STAGE=env.STAGE_NAME
          }
          echo "Login to Docker Hub using $DOCKERHUB_CREDENTIALS_USR account"
          sh 'docker login -u $DOCKERHUB_CREDENTIALS_USR -p $DOCKERHUB_CREDENTIALS_PSW'
          echo "Push Docker image $DOCKERHUB_IMAGE_NAME:$DOCKERHUB_IAMGE_TAG to Docker Hub using $DOCKERHUB_CREDENTIALS_USR account"
          sh 'docker push $DOCKERHUB_IMAGE_NAME:$DOCKERHUB_IAMGE_TAG'
          echo "Docker image $DOCKERHUB_IMAGE_NAME:$DOCKERHUB_IAMGE_TAG is pushed."
          sh 'docker logout'
        }
      }
      
      stage('Pull') {
        steps {
          script {
            FAILED_STAGE=env.STAGE_NAME
          }
          echo "SSH access to the prod server. \nIP address: @$IP_ADDRESS \nUsername: $USER"
          echo "Start pulling the $DOCKERHUB_IMAGE_NAME:$DOCKERHUB_IAMGE_TAG"
          sh 'ssh $USER@$IP_ADDRESS "docker pull $DOCKERHUB_IMAGE_NAME:$DOCKERHUB_IAMGE_TAG && exit"'
          echo "Docker image is uploaded."
        }
      }
      /*
      stage('Deploy'){
        //Re-run the docker containers 
        echo "Deploy Docker image $DOCKERHUB_IMAGE_NAME:$DOCKERHUB_IAMGE_TAG"
        sh 'docker-compose up -d --force-recreate'
      }
      */
       
  }

  post {
      //Send email if the pipeline execution failed.
      failure {
        mail bcc: '',
         body: "Something is wrong with ${env.JOB_NAME} \n Failed stage name: ${FAILED_STAGE}",
         cc: '',
         subject: "[FAILURE PIPELINES] Relead SAAS Frontend ",
         to: "${EMAIL_RECEIVER}"
        echo "Email is sent to $EMAIL_RECEIVER "
      }
     success{
        //Send email if the pipeline execution success.
        mail bcc: '',
         body: "Job: ${env.JOB_NAME} is done. \n The docker image $DOCKERHUB_IMAGE_NAME:$DOCKERHUB_IAMGE_TAG is available on $IP_ADDRESS !",
         cc: '',
         subject: "[SUCCESSFUL PIPELINES] Relead SAAS Frontend",
         to: "${EMAIL_RECEIVER}"
       echo "Email is sent to $EMAIL_RECEIVER "
     }
  }

}