# Paper-dragon

## setup
* currently only supporting node v20.18.0
run `npm  i`
make sure you have firebase-tools installed: `npm i -g firebase-tools`
and you are loged in `firebase login`
start emulators: `firabase emulators:start`

## copy data to local emulators
make sure you have firebase-tools installed: `npm i -g firebase-tools`
and the gcloud tools.

check if firebase and gcloud have are using the correct project 
`firebase login`
`firebase projects:list`
`firebase use project-id`
`gcloud projects list`
`gcloud config set project project-id`

get the gcloud bucket info: 
google cloud console -> storage 
bucket-url = configuration -> gsutil uri
bucket-folder = folder name can be found if folddown the bucket

copy bucket to local project
`gsutil -m cp -r gs://bucket-url/bucket-folder ./functions`

import data
`firebase emulators:start --import ./functions/bucket-folder`

## making a new firestore bucket
`gcloud firestore export gs://bucket-url/.`