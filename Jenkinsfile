pipeline{
  agent any
  stages{
    stage("verify tooling"){
      steps{
        sh '''
          docker version
          docker info
          docker-compose -v
        '''
      }
    }
    stage("Prune Docker Data"){
      steps{
        sh "docker system prune -a --volumes -f"
      }
    }
    stage("Start container"){
      steps{
        sh "docker-compose up -d"
        sh "docker-compose ps"
      }
    }
  }

  post {
    always {
      sh "docker-compose down --remove-orphans -v"
      sh "docker-compose ps"
    }
  }

}