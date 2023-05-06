## MOCK_11

## Trello Board

# BACKEND

NODEJS EXPRESS

# DATABASE

- MONGODB

# TASKS

- CRUD OPERATIONS

# REQUIREMENTS

- Users can create the post notice
  i.e, the notice should be posted in the mongo backend.
- Users can Get all the information of the notice

- Users can update the notice data

- Users can Delete the notice data

# API

- Creating the POST NOTICE request

`http://localhost:8080/create `

``
{
      "_id": "6455ff81d2a3b15f043007d3",
      "Author_Name": "Ayushi",
      "Notice_Title": "lemon Tree",
      "Notice_Description": "Dance",
      "Date": "2023-12-09T00:00:00.000Z",
      "__v": 0
    },

    `
    {
      "_id": "6455ff74d2a3b15f043007d1",
      "Author_Name": "Chiku",
      "Notice_Title": "bike",
      "Notice_Description": "Iam riding the bike",
      "Date": "2024-12-09T00:00:00.000Z",
      "__v": 0
    },
    {
      "_id": "6455ff81d2a3b15f043007d3",
      "Author_Name": "Ayushi",
      "Notice_Title": "lemon Tree",
      "Notice_Description": "Dance",
      "Date": "2023-12-09T00:00:00.000Z",
      "__v": 0
    },

     {
      "_id": "6455ff9bd2a3b15f043007d5",
      "Author_Name": "Prerna",
      "Notice_Title": "rain",
      "Notice_Description": "Dance",
      "Date": "2023-12-09T00:00:00.000Z",
      "__v": 0
    }

    ``

- Getting the POST NOTICE request

`http://localhost:8080/get `



- Updating the POST NOTICE request

`http://localhost:8080/update/:id`

``
{
      "_id": "6455ff81d2a3b15f043007d3",
      "Author_Name": "Ayushi",
      "Notice_Title": "lemon Tree",
      "Notice_Description": "Dance",
      "Date": "2023-12-09T00:00:00.000Z",
      "__v": 0
    },

    ``

- Deleting the POST NOTICE request

`http://localhost:8080/delete/:id `

``
{
      "_id": "6455ff81d2a3b15f043007d3",
      "Author_Name": "Ayushi",
      "Notice_Title": "lemon Tree",
      "Notice_Description": "Dance",
      "Date": "2023-12-09T00:00:00.000Z",
      "__v": 0
    },

    ``

# MODEL

``````

"Author_Name": "Chiku",
"Notice_Title": "bike",
"Notice_Description": "Iam riding the bike",
"Date": "2024-12-09T00:00:00.000Z",

      
``````



