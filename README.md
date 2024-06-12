User Stories

As a user,  
I should be able to filter events by city  
so that I can see a list of events taking place in that city.

As a user,  
I should be able to show/hide event details  
so that I can see event details and hide them if I want.

As a user,  
I should be able to specify number of events  
so that the I can easily see the number of events.

As a user,  
I should be able to use the app when offline  
so that I can use the app without a connection to the internet.

As a user,  
I should be able to add an app shortcut to the home screen  
so that I can access the app with ease.

As a user,  
I should be able to display charts visualizing event details  
so that I can easily understand the details of an event.

Given-When-Then (Gherkin)

Feature: Filter events by city

  As a user,
  I want to filter events by city
  So that I can see a list of events taking place in that city.

  Scenario: User filters events by city
    Given the user is on the events page
    When the user selects a city from the city filter
    Then the user should see a list of events taking place in the selected city

Feature: Show/Hide event details

  As a user,
  I want to show or hide event details
  So that I can see event details and hide them if I want.

  Scenario: User shows event details
    Given the user is on the events page
    When the user clicks on an event
    Then the event details should be displayed

  Scenario: User hides event details
    Given the event details are displayed
    When the user clicks on the hide button
    Then the event details should be hidden

Feature: Specify number of events

  As a programmer,
  I want to specify the number of events
  So that the user can easily see the number of events.

  Scenario: User specifies number of events
    Given the user is on the events page
    When the user sets a number for the events to be displayed
    Then the user should see the specified number of events

Feature: Use the app when offline

  As a user,
  I want to use the app when offline
  So that I can use the app without a connection to the internet.

  Scenario: User uses the app offline
    Given the user has previously loaded the app with an internet connection
    And the user is now offline
    When the user navigates through the app
    Then the app should function without an internet connection

Feature: Add an app shortcut to the home screen

  As a user,
  I want to add an app shortcut to the home screen
  So that I can access the app with ease.

  Scenario: User adds app shortcut to home screen
    Given the user is on the app
    When the user selects the option to add a shortcut to the home screen
    Then a shortcut to the app should be added to the home screen

Feature: Display charts visualizing event details

  As a user,
  I want to display charts visualizing event details
  So that I can easily understand the details of an event.

  Scenario: User views charts visualizing event details
    Given the user is on the event details page
    When the user clicks on the charts visualization option
    Then charts visualizing the event details should be displayed
