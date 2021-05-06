## How to handle file structure?

Before I learn how to use a proper database, I'll need to set up a file
structure that can serve that purpose, at least for testing.

### Idea #1:
    - data/
        - users/
            - jstameus/
                - events.json
                - profile.json
                - collection.json
            - preston/
                - events.json
                - profile.json
                - collection.json
        - auth/ 
            - credentials.json
            - sessions.json

Maybe this is the worst possible solution(need to look up how to properly setup
authentication) but it should work for getting the basic functionality down for
now.
