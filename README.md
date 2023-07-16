

![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# Feedback Loop

## Description

_Duration: Weekend Project_

This is a weekend project created to provide feedback for a client through tracking number and comment submissions. The client would then be able to submit the feedback, which gets saved to a database for later review. The client would then be able to re-start the survey in a loop to submit further feedback as needed. This requires both usage of Redux and SQLDatabase management. 

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)


### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- [MaterialUI](https://mui.com/)
- [Redux](https://redux.js.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Redux](https://react.dev/)

## Installation

The project has all dependencies sources in the package.json file. However, additional icons were used from the MaterialUI project which can be sourced from https://mui.com/material-ui/material-icons/. 

1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. The client will be directed to the page labeled 'Feeling', allowing to select a drop down of 1 to 5 in support. 
2. Upon clicking next, the client will be taken to Understanding to fill out the rest, then Support, and finally comments.
3. After filling out any required fields, the client will be taken to a review page to show all previously filled out information. 
4. By clicking submit on the review page, the information will be sent to a database to keep track.
5. The client will then be offered a final page to leave more feedback. Clicking the button will return them to the first page to begin another submission.



## Built With

 - Javascript
 - React
 - Redux
 - Node.js
 - MaterialUI
 - Axios

## License
[MIT](https://choosealicense.com/licenses/mit/)



## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality, Peder and Quynh giving me tips and teaching me along the way!. 

## Support
If you have suggestions or issues, please email me at [grav0165@gmail.com](grav0165@gmail.com)