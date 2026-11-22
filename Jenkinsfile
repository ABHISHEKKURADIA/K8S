pipeline{
    agent any

    stages{
        stage('Build')
        {
            echo 'Build Started'
        }

        stage('Test')
        {
            echo 'Test Started'
        }

        stage('Deploy')
        {
            echo 'Deploy Started'
        }
    }
    post
    {
        success
        {
            echo 'Pipeline Sucessful'
        }
        failure
        {
            echo 'Pipeline Failed'
        }
    }
}