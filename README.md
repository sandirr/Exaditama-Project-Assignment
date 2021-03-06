# Football League

![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/License-Beerware-yellowgreen.svg)

<h1 align="center">Exaditama Project Assignment</h1>
<hr id='#'>
<h2>Table of Contents</h2>
<ul>
  <li><a href='#prerequiste'>Prerequiste</a></li>
  <li><a href='#database'>Database</a></li>
  <li><a href='#install'>Installation</a>
    <ul type='circle'>
      <li><a href='#clone'>Clone</a></li>
      <li><a href='#env'>Environment</a></li>
      <li><a href='#start'>Start</a></li>
    </ul>
  </li>
  <li><a href='#endpoints'>Endpoints</a></li>
  <li><a href='#def'>Defendencies</a></li>
  <li><a href='#license'>License</a></li>
</ul>
<hr>

<h2 id='prerequiste'>Prerequiste</h2>
<ul>
  <li>Node.js - Download and Install <a href='https://nodejs.org/en/'>Node.js</a> - Simple bash script to manage multiple active node.js versions.</li>
  <li>Nodemon - Download and Install <a href='https://nodemon.io/'>Nodemon</a> - nodemon is a tool that automatically restarting the node application when file changes in the directory are detected.</li>
  <li>Express JS - Download and Install <a href='https://expressjs.com/'>Express JS</a> - web framework for Node.js</li>
</ul>
<hr>

<h2 id='database'>Database</h2>
<p>This project using MySQL as DBMS</p>
<p>Clone/download football_league.sql above then import to phpmyadmin !</p>
<hr>

<h2 id='install'>Installation</h2>
<h3 id='clone'>Clone</h3>

```bash
$ git clone https://github.com/sandirr/Exaditama-Project-Assignment.git
$ cd Exaditama-Project-Assignment
$ npm install
```

<hr>
<h3 id='env'>Create Environment Variable</h3>

```bash
$ npm i dotenv
```

- **create .env file and copy this**:

```
PORT = 8000

DB_HOST = 'localhost'
DB_USER = 'root'
DB_PASS = ''
DB_NAME = 'football_league'
```

<hr>
<h3 id='start'>Start Development Server</h3>

```bash
$ npm start
```

<hr>

<h2 id='def'>Other Dependencies</h2>

- [body-parser](#)
- [cors](#)
- [morgan](#)
- [mysql](#)

<hr id="endpoints">

## Endpoints

**Download postman collection**

https://www.getpostman.com/collections/da1e0587feb6a97945f9

## Screenshot

**Record Game**

![1](https://user-images.githubusercontent.com/50796200/80045861-e7151900-8532-11ea-8984-1277a6a9a32d.JPG)

**League Standing**

![2](https://user-images.githubusercontent.com/50796200/80045863-ea100980-8532-11ea-96bd-36449709bcc9.JPG)

**Club Standing**

![3](https://user-images.githubusercontent.com/50796200/80045856-e4b2bf00-8532-11ea-98ca-66efb6d026ea.JPG)

<h2 id='license'>License</h2>
&copy; <a href='https://en.wikipedia.org/wiki/Beerware'>Beerware</a>
&copy; <a href='https://github.com/sandirr/'>Andi Irsandi</a>
