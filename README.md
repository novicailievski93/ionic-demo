# ionic-demo

## Requirements
- NPM ^6
- Ionic CLI 4.1.1
- Cordova 8
- Node.js ^10
- json-sever

## Installation

If all requirements above are installed you can simply install the application by running:
```
npm install
```

If you have not installed ionic in your machine, run this command
```
npm install -g ionic
```

Also, you need to install json-server if already not installed on your local machine with this command
```
npm install -g json-server
```

## Development
To run our fake REST API with the help of json-server use the following command:
```
json-server --watch db.json
```

To run the application in development mode and check it out in your browser you can use the following command:
```
ionic serve
```
or
```
ionic serve --lab
```
to see the application look and feel on multiple platforms.
