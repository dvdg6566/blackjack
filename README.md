# Blackjack
Blackjack app with dynamic bustscore.

Desgined to accept bustscores between the range 20-26.

Automated re-shuffling of deck when deck runs out.

Built with Facebook's React Native Framework.

Running: run create-react-native-app via yarn or npm. Paste the files "app.js" and folder components in and then run "yarn start" or "npm start" in the command line. 

Features
__________

1. A functional player's draw

When player draws, his card value is added to his total and his card is shown on screen. 
If he busts the game ends.

2. Functional dealer's turn

When the player stands the dealer follows th following rules (disregarding aces):

	a. He cannot stand while his score + 5 < bustscore.

	b. He logically cannot stand if he is less than the player, even if he is 2 away from a bust as this would be unnecessarily concedeing the game. 

Between card draws, 0.4 seconds is left for the player to see the cards

3. Automatic restocking of cards

Whenever the deck is finished, it is restocked with underscorejs' shuffle function.

There will be a visual notification on screen (status bar) that tells you the cards have been re-shuffled.

4. Working Aces

Aces can be taken as 1 or 11.

This app assumes that it is unfeasible for someone to draw more than 2 aces in the same hand.

Caluclations:
	Aces are by default taken to be 11.

	In the event that the player busts, if he had drawn and ace, he would minus 10 from his score. 
	
	For the dealer's hand, aces are defaulted to be 11. He will stand when appropriate according to this. If he does not bust, then his score will be taken at face value
	If he busts, then he will use his ace(s) as 1. 

5. End of Game screen displaying scores

App will lead to an end of game screen where the player's score, dealer's score, the verdict(winner) and rationale for verdict are shown. 

Options available to reset the busting limit or to start a new game.

6. Dynamic busting limit

At the start of the game, there is a modal requesting for the player's chosen bust-score (input field provided).

There is a button to give a random score. The random score is acquired from random.org API's random call. At https://www.random.org/integers/ with an API call "https://www.random.org/integers/?num=1&min=20&max=26&col=1&base=10&format=plain&rnd=new".

Page can also be called up at the end of each round of blackjack. 
