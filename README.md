### install the packages

npm install

### Running the app

Runs like a typical express app: (server)

    node app.js

## Directory Layout
    
    app.js              --> app config
    package.json        --> for npm
    public/             --> all of the files to be used in on the client side
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      js/               --> javascript files
        script.js          --> declare top-level app module
        angular.js            --> the latest angular js
        angular.min.js        --> the latest minified angular js
        angular-*.js          --> angular add-on modules
    routes/
      api.js            --> route for serving JSON
      index.js          --> route for serving HTML pages and partials
    templates/
                        --> To Load the templates



## Run the Application

http://localhost:3000/

## Usability

-->Home page will have list of profiles
-->Click on profile list will open a new view where user can edit the profile.
-->Click on NEW PROFILE button on home page will open a new view where user can create a new profile which will be displayed in list of profile on Home page.
-->Click on DELETE button to remove entry of a profile from the list.
