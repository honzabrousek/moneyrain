// Define the suits and ranks as before
const suits = ["Hearts", "Bells", "Acorns", "Leaves"];
const ranks = ["7", "8", "9", "10", "Unter", "Ober", "King", "Ace"];

// Create an empty deck
const deck = [];

// Generate the deck by combining suits and ranks
for (const suit of suits) {
  for (const rank of ranks) {
    const card = `${rank[0]}${suit[0]}`; // Using shortcuts (e.g., H7)
    deck.push(card);
  }
}

// Shuffle the deck (optional)
function shuffleDeck(deck) {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
}

shuffleDeck(deck);

// Initialize variables for players and the table
const playerOne = [];
const playerTwo = [];
const table = [];

// Initialize the player divs and draw buttons
const playerOneDiv = document.getElementById("playerOneCards");
const playerTwoDiv = document.getElementById("playerTwoCards");
const deckDiv = document.getElementById("deck");
const drawPlayerOneButton = document.getElementById("drawPlayerOneCard");
const drawPlayerTwoButton = document.getElementById("drawPlayerTwoCard");

// Append the first 8 cards to the player divs
for (let i = 0; i < 8; i++) {
  const cardElement = document.createElement("div");
  cardElement.textContent = `${i + 1}: ${deck[i]}`;
  if (i < 4) {
    playerOneDiv.appendChild(cardElement);
    playerOne.push(deck[i]);
  } else {
    playerTwoDiv.appendChild(cardElement);
    playerTwo.push(deck[i]);
  }
}

// Append the remaining cards to the "deck" div
for (let i = 8; i < deck.length; i++) {
  const cardElement = document.createElement("div");
  cardElement.textContent = `${i + 1}: ${deck[i]}`;
  deckDiv.appendChild(cardElement);
}

let cardId = 0; // Initialize a variable to track unique card IDs

// Function to create a card element with a unique ID
function createCardElement(cardText) {
  const cardElement = document.createElement("div");
  cardElement.textContent = `${cardId}: ${cardText}`;
  cardElement.dataset.cardId = cardId; // Store the card's ID as a data attribute
  cardId++; // Increment the card ID for the next card
  return cardElement;
}

// Function to update Player One's hand display
function updatePlayerOneDisplay() {
  playerOneDiv.innerHTML = ''; // Clear the current display

  for (let i = 0; i < playerOne.length; i++) {
    const cardElement = createCardElement(playerOne[i]);
    playerOneDiv.appendChild(cardElement);
  }
}

// Function to update Player Two's hand display
function updatePlayerTwoDisplay() {
  playerTwoDiv.innerHTML = ''; // Clear the current display

  for (let i = 0; i < playerTwo.length; i++) {
    const cardElement = createCardElement(playerTwo[i]);
    playerTwoDiv.appendChild(cardElement);
  }
}

// Function to draw a card from the deck for Player One
function drawPlayerOneCard() {
  if (deck.length === 0) {
    alert("No more cards in the deck.");
    return;
  }

  const drawnCard = deck.pop();
  playerOne.push(drawnCard);
  updatePlayerOneDisplay(); // Update Player One's display
  updateDeckDisplay(); // Update deck display
  updateTableDisplay(); // Update table display
}

// Function to draw a card from the deck for Player Two
function drawPlayerTwoCard() {
  if (deck.length === 0) {
    alert("No more cards in the deck.");
    return;
  }

  const drawnCard = deck.pop();
  playerTwo.push(drawnCard);
  updatePlayerTwoDisplay(); // Update Player Two's display
  updateDeckDisplay(); // Update deck display
  updateTableDisplay(); // Update table display
}


// Function to draw a card from the deck for Player Two
function drawPlayerTwoCard() {
  if (deck.length === 0) {
    alert("No more cards in the deck.");
    return;
  }

  const drawnCard = deck.pop();
  playerTwo.push(drawnCard);
  updatePlayerTwoDisplay(); // Update Player Two's display
  updateDeckDisplay(); // Update deck display
}
// Function to update the table display
function updateTableDisplay() {
  const remainingCardsDiv = document.getElementById("remainingCards");
  remainingCardsDiv.innerHTML = ''; // Clear the current display

  for (let i = 0; i < table.length; i++) {
    const cardElement = document.createElement("div");
    cardElement.textContent = `${i + 1}: ${table[i]}`;
    remainingCardsDiv.appendChild(cardElement);
  }
}


// Add click event listeners to the draw buttons
drawPlayerOneButton.addEventListener("click", drawPlayerOneCard);
drawPlayerTwoButton.addEventListener("click", drawPlayerTwoCard);
