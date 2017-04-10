[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

## Tic Tac Toe

Development process:

1) Get authentication working
   1) pretty simple mostly cut and paste
2) Build bare bones UI
   1) boostrapped this and ran with it
   2) came back in end of development phase and made it play
      nicer on screen - at least mildly more responsive after
3) Build logic for UI
   1) big props go out to my boy Jayson. My win-checking is
      pretty much identical to what he has. He and Rachel
      really assisted with this portion
4) Connect back end to rest of game
   1) again, Rachel helped me out here - was not too bad.
      got the main bits working and left trying to calculate
      wins off the server for later. I kind of regret that
      as I found sooooo many bugs when I introduced this code.
   2) also assisted several coworkers with these principles
      so I feel really comofortable with the basics, but
      the bugs...omg the bugs....
5) Flesh out required features
    1) this was the hardest phase (see above) - once I had the
      site working it took a GREAT deal more effort than i realized
      to seal up all the holes and make it smooth
6) Add some finishing touches
    1) would have liked to add more to the site, but once i got
       to the end and didn't have much time left, adding features
       was clearly a bad idea. i did not want to be up until 3 am
       trying to get a new feature up and running- multi player
       will have to wait
7) 99 bugs in my 99 bugs! I took one down, tested around...101 bugs in my code..
8) More bugs fixing....
9) Pray I got all the bugs
   ....I think the last 3 points speak for themselves...

## Problems and problem solving
Ultimately the bugs i found were mostly with UI doing weird things. I would attempt
to isolate what code was firing to cause the issue - e.g. when player O would win
the modal would change to player X won during the board refresh. Ultmiately, I
am not certain what caused this. I do know I isolated it to the retrieval of
the win loss stats. I also found that the screen doesn't update like one might
expect. I can see in the console when I debug the wins and loses appear accurately
tracked but take a full game cycle to update.

I recognize the latter as a possible bug to fix, but it does not break anything
so I am ok with it for now.

## Technologies used

1) Bootstrap - main layout is reliant on some bootstrap
2) Jquery all over the place
3) Ajax - mostly for my api calls
4) CSS - as best I could piece things together...its a messs tbh
5) HTML - obv
6) Javascript - this handles most of the heavy lifting in my code

## Wireframes and User Stories
wireframe: http://imgur.com/a/X7hiG

1) As a user I would like to be able play a game of tic tac toe with a friend
    without having to worry about when each of us takes our turn.
2) As a user I would like to make my gameboard personalized.
3) As a developer I would like the ability to track the number of games played
    and by what users so I can use this data later on.
4) As a user I would like to interact with the other player or leave messages.

## Installation

1) Run command 'npm install'
2) Start front end server 'grunt server'
3) Run backend server with bundle exec rails server

## URL
Prod URL:
https://antleo1995.github.io/tic-tac-toe-client/
Repo:
https://github.com/antleo1995/tic-tac-toe-client

## [License](LICENSE)

1)  All content is licensed under a CC­BY­NC­SA 4.0 license.
1)  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
