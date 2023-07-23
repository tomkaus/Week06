// Card class
class Card {
    constructor(value, suit) {
      this.value = value; // Numeric value (2-14) representing the card value (J = 11, Q = 12, K = 13, A = 14)
      this.suit = suit;   // Suit of the card (Spades, Hearts, Diamonds, Clubs)
    }
  
    // Method to get a string representation of the card, e.g., "2 of Spades"
    getCardString() {
      return `${this.valueToString()} of ${this.suit}`;
    }
  
    // Helper method to convert numeric card values to their corresponding string representation
    valueToString() {
      switch (this.value) {
        case 11:
          return "J";
        case 12:
          return "Q";
        case 13:
          return "K";
        case 14:
          return "A";
        default:
          return String(this.value); // For numeric values 2-10, convert to a string
      }
    }
  }
  
  // Deck class
  class Deck {
    constructor() {
      this.cards = []; // Array to store the cards in the deck
    }
  
    // Method to generate a standard deck of cards (52 cards)
    generateDeck() {
      const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]; // Numeric values (2-14)
      const suits = ["Spades", "Hearts", "Diamonds", "Clubs"]; // Suits
  
      for (let suit of suits) {
        for (let value of values) {
          this.cards.push(new Card(value, suit)); // Create a card for each value and suit and add it to the deck
        }
      }
    }
  
    // Method to shuffle the cards in the deck using the Fisher-Yates algorithm
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swap elements to shuffle the deck
      }
    }
  
    // Method to deal a card from the deck (remove the last card from the array)
    dealCard() {
      return this.cards.pop();
    }
  }
  
  // Player class
  class Player {
    constructor(name) {
      this.name = name; // Player's name
      this.hand = []; // Array to store the cards in the player's hand
      this.score = 0; // Player's score (number of rounds won)
    }
  
    // Method to play a card from the player's hand (remove the last card from the array)
    playCard() {
      return this.hand.pop();
    }
  
    // Method to add a card to the player's hand (insert at the beginning of the array)
    addCard(card) {
      this.hand.unshift(card);
    }
  
    // Method to increment the player's score by 1
    incrementScore() {
      this.score++;
    }
  
    // Method to get the player's current score
    getScore() {
      return this.score;
    }
  }
  
  // Function to play the card game
  function playCardGame() {
    // Create two players and a deck of cards
    const player1 = new Player("Player 1");
    const player2 = new Player("Player 2");
    const deck = new Deck();
  
    // Generate and shuffle the deck
    deck.generateDeck();
    deck.shuffle();
  
    // Deal 26 cards to each player
    for (let i = 0; i < 26; i++) {
      player1.addCard(deck.dealCard());
      player2.addCard(deck.dealCard());
    }
  
    // Loop to play the game until one of the players runs out of cards
    while (player1.hand.length > 0) {
      const card1 = player1.playCard();
      const card2 = player2.playCard();
  
      console.log(`Player 1 plays: ${card1.getCardString()}`);
      console.log(`Player 2 plays: ${card2.getCardString()}`);
  
      // Compare the values of the played cards to determine the round winner
      if (card1.value > card2.value) {
        player1.incrementScore();
        console.log("Player 1 wins the round!");
      } else if (card1.value < card2.value) {
        player2.incrementScore();
        console.log("Player 2 wins the round!");
      } else {
        console.log("It's a tie!");
      }
  
      console.log();
    }
  
    // Display the final scores and determine the game winner
    console.log(`Final Scores: ${player1.name}: ${player1.getScore()}, ${player2.name}: ${player2.getScore()}`);
  
    if (player1.getScore() > player2.getScore()) {
      console.log(`Player 1 wins the game!`);
    } else if (player1.getScore() < player2.getScore()) {
      console.log(`Player 2 wins the game!`);
    } else {
      console.log("It's a tie!");
    }
  }
  
  // Start the game
  playCardGame();
  