# ap-admin
Contains the application which will be used by the Administrator of the University, to manage their admission process.

# Structure
Our App basically have three types of components named **component** which can be defined probably as the smallest reusable components being utilized or used by other two types,**containers** are the components that utilizes the the first type of components and the last one are **Page** components, that *mostly* use the component of other two types.

1. **Components :**
     contains all the components that are being utilized by one or more containers or pages present in the ```src/containers``` and ```src/pages```.

2. **Containers :**
     This has the components which utilizes components and will itself get utilized by the pages' component

3. **Contexts :**
Contains the context used by the different components of the application. Also, this solves the problem of prop drilling

4. **Helper :**
    contains ```/charts```, which have Bar, line and Pie(doughnut) charts. Which is being utilized by 
    
6. **Pages :**
   These are the main fully visible components of the build version of the app, which utilizes the components & containers. Can be also understood as *Views*

7. **Routes :**
    contains  ```ProtectedRoute.js```, which protects the required components from unauthenticated users, that means ,unauthenticated users can not access those components. 



## Set Up the Dev Env :
To get started with the setup , you must have NodeJS(LTS) installed in your Local machine.

NOTE: Please check [NVM](https://github.com/coreybutler/nvm-windows/releases/download/1.1.9/nvm-setup.zip) or [Rush](https://rushjs.io/pages/developer/new_developer/), to control the Node version with ease. 

In the project directory, you can run:

### `npm install` or `yarn` or `yarn install`
To install the Dependencies of the application mentioned in `package.json`

### `npm start` or `yarn start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test` or `yarn test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` or `yarn build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

