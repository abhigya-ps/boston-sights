# [Boston Sights](https://bostonsights.web.app/)
Photo sharing website focused on spots around Boston uploaded by locals. User login and signup required to add new places and upload photos.
Guests can view all users and photos posted.

* Built the frontend using React.js and React Hooks. User interface includes signup and login pages plus a form page to fill out information 
and upload images, whether it be a profile picture or an image of a spot users want to share.
* Built the backend in Node.js using the Express framework. Created a REST API that connects with the React app which takes requests and forwards 
to the database. Responds back to the frontend with data sent from the database. 
* Initialized a database using MongoDB. Created 2 main collections - one for user information and another for location data. Connected the two 
collections by populating location data to their users. 

### External Tech

* Established a connection to Google Maps Geocoding API to point out the user's location of choice on a standard Google map.
* Hosted images uploaded by users(profile pictures and location photos) as static files in S3 Buckets provided by AWS.
* Created a web app on Google Firebase to host the React.js portion of the project.
* Hosted the Express.js app on Heroku and passed the domain name to the React routes on Firebase to establish a connection 
between the frontend and the backend.

![bostonsights_image](https://github.com/abhigya-ps/boston-sights/blob/main/images/bostonsights_github.JPG)
