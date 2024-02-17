# Thunder ⚡

## Introduction
Thunder is the name of the Core “mothership”, the idea of this system is to take care of the entire platform ecosystem.

## Pre-requisites

[Node.js](https://nodejs.org/) - __Only Version == 20.10.0__ <br>
[NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) (Recommended) <br>
[Docker](https://www.docker.com/) <br>
[Docker Compose](https://docs.docker.com/compose/) <br>


## Development

Main IDE: [Visual Studio Code](https://code.visualstudio.com) <br>
Engine: [Node](https://nodejs.org) <br>
Database: [PostgreSQL](https://www.postgresql.org/)


## Running Project 
- Make sure you have NVM installed on your machine.
- Make sure you have Docker and Docker Compose installed on your machine.
<br/>
1. Use NVM to ensure you are using the correct version of Node.js. Run the following command in the terminal to use the correct version: <br/> <br/>

```
nvm use
```
<br/>
2. Create a .env file based on .env.example.
<br/> <br/>
3. Start the required services using Docker Compose. You can do this with the following command: <br/> <br/>

```
docker compose up -d
```
<br/>
4. Now all that’s left to do is run the following command to start the API: <br/> <br/>

```
npm run dev
```


<br><br>
Made with ❤️ by the Fifty team.
