# Spotaroom

## How to use this repo

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In order to make it work, first you need to have a package manager installed, such as npm in [Node.js](https://nodejs.org/) or [Yarn](https://yarnpkg.com/lang/en/). Then you'll need to install `create-react-app` globally:

`$ npm install -g create-react-app`

or

`$ yarn install -g create-react-app`

Now you can:

1. Clone the repo.
2. Install the dependencies by running `$ npm install` / `$ yarn install`.
3. In the project directory, type `$ npm start` / `$ yarn start` to run the app in the development mode.
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
5. Start coding! :)

### Production build

To build the app for production, run `$ npm run build` / `$yarn build` to create the build folder. If you also want to publish the production version in GitHub Pages, follow the next steps **before running the build command**:

1. Make sure the package.json includes the following field: `"homepage": "./"`. This is a **very important step**!!! It's necessary to make the file routes relative to our files. Otherwise the scripts, images and other resources won't be properly compiled.
2. All the http resources should be **https**. For example, image urls, API requests...
3. Now you can run `$ npm run build` / `$yarn build`.
4. Run `$ mv build docs`. This change in the folder name is necessary for GitHub Pages to recognise the build version.
5. Add, commit and push these changes in the master branch of your project, configure GitHub Pages in your GitHub repo, and enjoy your page! :)

### Testing the app

Run `$ npm test` / `$ yarn test` to launch the test runner included in Create React App. For the moment, there's only a test for the App component.
