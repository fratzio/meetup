Feature: SPECIFY NUMBER OF EVENTS

    Scenario: When user hasn’t specified a number, 32 is the default number
        Given the user hasn't specified a number
        When the user searches for events in a certain location
        Then the default number of results is 32

    Scenario: User can change the number of events they want to see
        Given the user opens the app
        When the user changes the number of events
        Then the number of events displayed in the results matches the number selected by the user
