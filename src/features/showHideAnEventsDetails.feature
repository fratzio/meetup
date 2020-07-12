Feature: SHOW/HIDE AN EVENT’S DETAILS

    Scenario: An event element is collapsed by default.
        Given the user hasn't clicked on any events
        When the user receives a list of events
        Then they should see all events with their information collapsed

    Scenario: User can expand an event to see its details.
        Given the user has received a list of upcoming events
        When the user clicks on an event
        Then the event's details are expanded in the app

    Scenario: User can collapse an event to hide its details.
        Given the user is viewing an expanded event's details
        When the user clicks to close the event
        Then the event's details collapse