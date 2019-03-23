# Spotaroom

This is a web app for the room rental service Spotaroom. A request to its backend services allows the app to show 30 room ads in the city of Madrid, ready to be booked by the user.

Spotaroom is a completely online rental platform. Wherever you are in the world, you won't have to worry anymore about visiting the property or dealing with the landlord in a language you don't speak: Spotahome will do all of that for you!

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

To build the app for production, run `$ npm run build` / `$yarn build` to create the build folder.

Even though it's possible to publish the app in GitHub Pages, the rooms' data won't load because the API request is made through a proxy to the Spotaroom backend services.

### Testing the app

Run `$ npm test` / `$ yarn test` to launch the test runner included in Create React App. For the moment, there's only a test for the App component.

## Credits

I used one of [Luke Haas' CSS spinners](https://github.com/lukehaas/css-loaders) as a loader. Check them out for a CSS-only wonderful solution!
