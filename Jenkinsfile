// pipeline {
//     agent {
//         docker {
//             image 'mcr.microsoft.com/playwright:v1.17.2-focal'
//         }
//     }
//     stages {
//         stage('install playwright') {
//             steps {
//                 sh '''
//                     npm i -D @playwright/test
//                     npx playwright install
//                 '''
//             }
//         }
//         stage('help'){
//             steps {
//                 sh 'npx playwright test --help'
//             }
//         }
//         stage('test'){
//             steps {
//                 sh '''
//                     npx playwright test --list
//                     npx playwright test
//                 '''
//             }
//         }
//     }
// }

pipeline {
   agent { docker { image 'mcr.microsoft.com/playwright/python:v1.47.0-noble' } }
   stages {
      stage('e2e-tests') {
         steps {
            // sh 'pip install -r requirements.txt'
            // sh 'pytest'
            sh '''
            python -m venv .venv
            . .venv/bin/activate
            pip install -r requirements.txt
            pytest -v
            '''
         }
      }
   }
}