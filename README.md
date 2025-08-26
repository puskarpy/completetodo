# Complete Todo App
A full-stack MERN (MongoDB, Express, React, Node.js) Todo application with features for adding, editing, deleting, and marking tasks as completed. Built with React Query for state management and Axios for API requests.

## Features

- Add new todo tasks

- Edit existing todos

- Delete todos

- Mark todos as completed with strikethrough

- Persistent storage using MongoDB

- React Query for optimized data fetching and caching

## Tech Stack

- **Frontend**: React, Tailwind CSS, React Query, Axios

- **Backend**: Node.js, Express.js, Mongoose

- **Database**: MongoDB

## Project Structure

```bash
todoapp/
│
├─ client/                 
│   ├─ src/
│   │   ├─ components/     
│   │   ├─ hooks/          
│   │   ├─ App.jsx
│   │   └─ main.jsx
│
├─ server/                 
│   ├─ models/             
│   ├─ routes/             
│   ├─ index.js
│   └─ .env               
│
├─ .gitignore
├─ README.md
└─ .sample.env 
```

## How to run

1. Clone the repository
```bash
git clone https://github.com/puskarpy/completetodo.git
cd completetodo
```
1. For backend
```bash
cd server
npm install
npm start
```
1. Clone the repository
```bash
cd client
npm install
npm run dev
```

## Environment Variables
- **.sample.env**  files contains placholders for all environment variables. Insert your own values for variables.

## Author
[Pushkar Niraula](https://www.pushkarniraula.com.np)