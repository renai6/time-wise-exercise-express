# Coding Test

Let's build a simple, full-stack 'notes' application. Don't worry about authentication or styling.

Back End (Node.js & DynamoDB):

Define a DynamoDB table Notes with a simple primary key (e.g., id as a string).

Create a Node.js/Express API with two endpoints:

GET /api/notes: Fetches all notes from the DynamoDB table.

POST /api/notes: Takes a JSON body like { "content": "My new note" }, generates a unique ID (like a uuid), and saves it to DynamoDB.

Front End (Vue.js):

Create a simple Vue component.

It should have a text input and a 'Save Note' button.

It should have a list that displays all the notes.

When the component loads, it should call GET /api/notes and display them.

When the 'Save Note' button is clicked, it should POST the new note to /api/notes and then refresh the list."

## Tech Stack

Backend
Express uuid cors mysql
Frontend
Vue

## Setup and Run

1. Create the database and table:

   ```CREATE DATABASE notes_app;

   USE notes_app;

   CREATE TABLE notes (
   id VARCHAR(36) PRIMARY KEY,
   content TEXT NOT NULL
   );```

2. Install Packages
   
   `npm install`

4. Run the server:

   `node server.js`
