# travel_blog_project

## Website

https://poetic-custard-8b32aa.netlify.app/

## Main Features

This is a full stack MERN(React, Node.js, Express & MongoDB) application that allows users to post events with photos, tags, and messages. It has the following main features:
- Sign in and sign out with Google accounts.
- Sign up, log in, and log out with emails.
- Users are able to view posts if not logged in. 
- Users can create, view, like posts once they log in.
- Users can only delete and update their own posts when logging in.

## Configurations

- Clone the repository to the local.
- Visit [mongodb atlas](https://www.mongodb.com/cloud/atlas) to create a new MongoDB database and update the connection url in server/.env
- Visit [Google developers console](https://console.cloud.google.com/apis/dashboard?pli=1) to generate a new google client id and update it in the client/.env file.
- Install frontend/backend dependencies and start client/server side development using the following command.

```
cd client 
npm i
npm start
cd ..
cd server
npm i
npm start
```

## Acknowledgement

- https://www.youtube.com/playlist?list=PL6QREj8te1P7VSwhrMf3D3Xt4V6_SRkhu
