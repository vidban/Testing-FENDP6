click [here](http://vidban.github.io/Testing-FENDP6/) to see it in action

# Project Overview

Perform tests on a pre-existing web-based application that reads RSS feeds.

## How to view this project

- Clone the repo to your local drive
- Double click on index.html to view the application in your browser

## What I learned?

- How to use Jasmine to write a number of tests against a pre-existing application, to test the underlying business logic of the application as well as the event handling and DOM manipulation.

## Additional Checks Performed

- In the New Feed Selection Test:
  - made sure a random feeds was loaded to perform the check
  - When checking that the content actually changes, the changed content could be undefined and thus changed from previously defined content. But that would be useless. So tested to make sure the new content was not undefined
  - Added test to make sure the heading of the page changed with the loading of new feed

## Files

- HTML (*./index.html*)
- CSS (*./css/style.css*)
- JavaScript (*./js/app.js*)
- Jasmine spec file (*./jasmine/spec/feedreader.js*)

## Resources

- Udacity Course - JavaScript Testing
- Jasmine Documentation
