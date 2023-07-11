# notesAPI

Simple note taking api whith authentication
* set your enviroment variables in .env file

## Authentication endpoints

### Signup
* endpoint -> `/users/signup` using `POST`
* payload  - { "username":"name" , "email":"user.com" , "password":"1234"}

### Signin
* endpoint -> `/users/signin` using `POST`
* payload   - { "username":"name" , "email":"user.com" , "password":"1234"}


## notes endpoints

### Create notes
* endpoint -> `/notes/` using `POST`
* payload -> {"title":"weather forcast" , "description":"first rain"}
* add token for authentication in header created during signup

### Get notes
* endpoint -> `/notes/` using `GET`
* add token for authentication in header created during signup

### Update notes
* endpoint -> `/notes/:id` using `PUT`
* payload -> {"title":"weather forcast" , "description":"first rain"}

### Delete notes
* endpoint -> `/notes/:id` using `DELETE`
