# MoviesApp



MoviesApp is an application that allows you to classify movies in lists. It offers you to keep an order for the movies that you have seen or you want to see, in addition you can create your own movies lists.



![App](./docs/App.png)





## Table of contents

1. [Technologies](#techs)
2. [File Structure](#filesStr)
3. [Prerequisites](#pre)
4. [Installing](#installing)
5. [Deployment](#dep)
6. [Contributing](#contributing)
7. [BUGs or comments](#bugs)
8. [Version](#version)
9. [Authors](#autors)





<a name="techs"></a>

## Technologies

This project uses the following technologies:

- [React](https://reactjs.org) ,  [React Router](https://reacttraining.com/react-router/) and [React-bootstrap](https://react-bootstrap.github.io/) for frontend

- [Express](http://expressjs.com/) and [Node](https://nodejs.org/en/) for the backend

- [MongoDB](https://www.mongodb.com/) for the database

  

  - Dependencies

  | **Backend**                                          | Frontend                                             |
  | ---------------------------------------------------- | ---------------------------------------------------- |
  | ![dependenciesServer](./docs/dependenciesServer.png) | ![dependenciesClient](./docs/dependenciesClient.png) |



<a name="filesStr"></a>

## File Structure

```bash
MoviesApp
  ├── docs/
  └── client
      ├── node_modules/
      ├── package.json
      ├── package-lock.json
      ├── public/
      └── src
          ├── components
          │   ├── lists/
          │   ├── movies/
          │   ├── partials/
          │   └── users/
          ├── helpers/
          ├── styles/
          ├── svg/
          ├── views/
          ├── App.js
          ├── index.js
          └── setupProxy.js
  ├── node_modules/
  ├── package.json
  ├── package-lock.json
  ├── README.md
  └── server
      ├── config
      │   └── serverAuth.js
      ├── controllers
      │   ├── lists.controllers.js
      │   ├── movies.controllers.js
      │   └── users.controllers.js
      ├── database.js
      ├── index.js
      ├── models
      │   ├── List.js
      │   ├── Movie.js
      │   └── User.js
      ├── routes
      │   ├── index.js
      │   ├── lists.routes.js
      │   ├── movies.routes.js
      │   └── users.routes.js
      ├── server.js
      └── validator
          ├── login.js
          └── register.js
```




<a name="pre"></a>

## Prerequisites

- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/)
- [npm](https://nodejs.org/en/download/package-manager/)

You need to create a .env file on the root of the project and put your JWT_SECRET key like that:

```
JWT_SECRET=secret
```



<a name="installing"></a>

## Installing

1. Fork, then download or clone the repo.
```bash
git clone https://github.com/mariobalrod/MoviesApp.git
```
2. *Make sure MongoDB service is running.*

3. For the **back-end**, install the dependencies once via the terminal.
```bash
npm install
```

4. For the **front-end**, install the dependencies once via the terminal.
```bash
cd client/
npm install
```


<a name="dep"></a>

## Deployment

To deploy simply run the next command on the root of the project

```
npm run dev
```

<a name="contributing"></a>

## Contributing

Please feel free to send pull request if you want to contribute!


<a name="bugs"></a>

## BUGs or comments

[Create new Issues](https://github.com/mariobalrod/MoviesApp/issues) (preferred)

or Email Me: marioballestero.rdg@gmail.com 

<a name="version"></a>

## Version

1.0.0

<a name="autors"></a>

## Authors

- **Mario Ballestero** - _Development_ - [mariobalrod](https://github.com/mariobalrod)