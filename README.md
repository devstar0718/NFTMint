# NFTMint

## Run Frontend

In the project Frontend directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**




## Run Backend

In the project Backend directory, you can run:

### import Mysql database
Import nft.sql in Backend/__backupDB/nft.sql
Default config database name is nft(database, chartset UTF8)

### Config backend
Backend/app/config/index.js
module.exports = {
  corsOrigin: "*",
  expressPort: 8080,
  HOST: "localhost",
  USER: "root",
  PASSWORD: "",
  DB: "nft",
  PORT: 3306
};

### `yarn dev`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### API list
GET    [http://localhost:8080/nftmint](http://localhost:8080/nftmint) <br/>
POST   [http://localhost:8080/nftmint/](http://localhost:8080/nftmint/) <br/>
GET    [http://localhost:8080/nftmint/:id](http://localhost:8080/nftmint/0) <br/>



## Run SmartContract

In the project SmartContract directory, you can run:

### `yarn compile`

Compile smart contract
