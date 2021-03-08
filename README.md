# Tech-Assessment
  * While there is no time limit, this assessment should take anywhere from 1 to 3 hours to complete.
  * You will not be graded on how long it takes you to complete it, but please be aware of the time expectation.
  * Estimating the amount of time it takes to complete a task is a common practice within our team
  * **NOTE** - The time estimation does not include tasks marked as **extra-credit**

## Prerequisites
  * You will need the following installed:
    * [Node](https://nodejs.org/en/download/)
    * [Yarn](https://classic.yarnpkg.com/en/docs/install)
    * [Git](https://git-scm.com/)
    * [Docker](https://www.docker.com/)

## Installation
  * Clone this repo
    * Command: `git clone https://github.com/simpleviewinc/keg-tech-assessment`
  * Install the node_modules
    * Command: `yarn install`
  * Get the project running
    * Command: `yarn start`
      * This will start two servers a Webpack server and an API server
      * To start them separately run the commands
        * Command: `yarn web` - Webpack
        * Command `yarn api` - API

## Important
  * **Tests are strongly encouraged**
  * Not every change required is outlined above. We want to see how you think through a problem
  * Some tasks require updating multiple files for that task to be completed
    * Don't be afraid to add, move, or change parts of the app. Show us what you can do
  * You are encouraged to **show your work** through comments
    * You don't have to comment every little change, but we would like to see your thought process
  * While styles, look, and feel are not a priority, the app should look decent

## Tasks

1. **Setup the environment**
   * Use the commands listed in the `Installation` section above
   * Open your browser to http://localhost:3000
     * It should load the test application

2. **Fix the error messages**
   * Open your browser's inspector, to see all the errors on the page
   * In the following steps, you will be asked to implement features, marked by errors in the inspector. As you work on and complete each one, please remove the error message.
   * Once you have finished all the steps, there should be no errors showing in the browser's inspector

3. **Get Goat Facts**
   * When clicking the `Get Goat Facts` button, it should call the `onGetGoatFacts` method

4. **Add Goat Facts JSON API**
   * The server API has an endpoint that returns facts about goats when called
     * See the code in `server/endpoints/goats.js`
     * **Goat Facts Endpoint**
       * Method: `GET`
       * Path: `/goats`
   * Update the `server code` to ensure the `/goats` API endpoint is reachable
   * Next update the `code` in `getGoatFacts.js`
     * It should make a `GET /goats` call to the server API
     * It should return a `json` response with an array of goat facts under the data property

5. **Add Goat Facts to the Dom**
   * After getting the goat facts from the server API in step 4
   * Update the code in `addGoatFacts.js` to do the following
     * Clear out any past goat facts under the `ul#goat-facts-list` element
     * Add each new goat fact to the dom as an `li` element
       * Each element should be a **child** of the `ul#goat-facts-list` element

6. **Alternative Facts**
   * Add 2 new input elements to the dom
     * One should be for text
       * The text input should **only** allow a single word (i.e. No Spaces)
     * The other should be for numbers
       * The numbered input should **only** allow numbers
   * Update the code in `filterGoatFacts.js` to filter the goat facts with the following rules
     * The text input defines a word
     * The numbered input defines the index of that word within a sentence
     * Any goat fact that has a matching word at the defined index should be displayed
     * All **non-matching** goat facts should be hidden
       * For example, if the text input content is `test`, and the numbered input content is `3`
       * Then only a sentence with the word `test` as the third word, would match
       * `This test is lame` => DOES **NOT** MATCH (should be hidden)
       * `Doing this test is fun` => **DOES MATCH** (should be displayed)
         * Test is the third word in this sentence, so it would match the above defined filter
   * When a word is entered into the text input, and a number is entered into the numbered input
     * Then the `filterGoatFacts` code should run
     * It should **only** display goat facts that matching the defined inputs
     * All other goat facts should be hidden
     * If either or both text inputs are empty, **all** loaded goat facts should be displayed

7. **Dockerfile** - *extra credit*
   * In the `container` folder there is a `Dockerfile`
   * Write a docker file for this application
     * You should be able to run the following commands successfully
       * `yarn doc:build` - Command should build the docker image
       * `yarn doc:run` - Command should run the docker image, starting the app within it
       * `yarn doc:test` - Command should complete without throwing any errors
         * Run this command in a separate terminal tab while the docker container is running

8. **Deploy to the Cloud** - *extra credit*
   * How this is done is not important. It just needs to be accessible via the internet in some way

## Submit
   * Submit a pull request to this repo
   * Send an us an email, letting us know it has been submitted
