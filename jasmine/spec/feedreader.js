/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has URL defined', function() {
            for (var x =0; x < allFeeds.length; x++) {
                expect(allFeeds[x].url).toBeDefined();
                expect(allFeeds[x].url.length).not.toBe(0);
            };
        });



        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has name defined', function() {
            for (var x =0; x < allFeeds.length; x++) {
                expect(allFeeds[x].name).toBeDefined();
                expect(allFeeds[x].name.length).not.toBe(0);
            };
        });

    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */
        // store a boolean value after checking whether the menu has class menu-hidden
        var lmenu= $('body').hasClass('menu-hidden');

        it('is hidden by default', function() {
           expect(lmenu).toBe(true);
        });

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        describe('hamburger icon', function() {

            // triggers a click before each test and stores menu status in a variable
            beforeEach(function() {
                $('.menu-icon-link').trigger('click');
                lMenu= $('body').hasClass('menu-hidden');
            });
 
            // checks whether menu is visible
            it('menu is visible', function() {
                expect(lMenu).toBe(false);
            });

            // checks whether menu is hidden
            it('menu is hidden', function(){
                expect(lMenu).toBe(true);
            });


        });
    });

    /* TODO: Write a new test suite named "Initial Entries" */
    describe ('Initial Entries', function() {

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            // load function and pass done to let Jasmine know that the async
            // request is complete and it can move on from the beforeEach
            loadFeed(0, done);
        });

        it('has atleast one content heading for that feed', function(){
            numEntries = $('.entry').length;
            expect(numEntries).toBeGreaterThan(0);
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection"*/
    describe('New Feed Selection', function() {

        var content, pheading;
        var numFeeds = allFeeds.length-1;

        // selects a random number for link id 
        // does not select first link as it is displayed when page opens
        var randomLink = Math.floor((Math.random() * numFeeds + 1));

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

        // load feed 0 and save the content of first result in a variable
        beforeEach(function(done) {
            loadFeed(0, function() {
                content = $('.feed h2').html();
                pheading = $('.header-title').html();
                done();
            });
        });

        // return feed to original feed after testing
        afterEach(function(done) {
            loadFeed(0, done);
        });

        // spec to change feed, check content with earlier content 
        it('loads new content', function(done) {
            loadFeed(randomLink, function() {
                var newContent = $('.feed h2').html();
                var newHeading = $('.header-title').html();
                // ADDEDCHECKS: check to ensure earlier test did not pass because
                // the new was undefined and thus did not match
                expect(newContent).toBeDefined();
                // check content not to equal earlier content
                expect(newContent).not.toEqual(content);
                // ADDEDCHECKS: check to ensure heading of page changes as well
                expect(newHeading).not.toEqual(pheading);

                done();
            })
        });
    });

}());
