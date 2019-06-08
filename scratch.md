## configure the serverless package - 

`serverless config credentials --provider aws --key AccessKey --secret SecretKey --region=us-west-1 --profile=slsconfig`


## verify - 

`cat ~/.aws/credentials`

## install the depencies - 

`cd sls-offline-demo/sls-offline-api`
`npm install`

## Run the server

 sls offline --apiKey=123 --stage=local
