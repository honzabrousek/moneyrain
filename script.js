// Define the suits and ranks as before
const suits = ["hearts", "bells", "acorns", "leaves"];
const ranks = ["7", "8", "9", "10", "unter", "ober", "king", "ace"];

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

// innit game
// Draw 4 cards for Player One
for (let i = 0; i < 4; i++) {
  drawPlayerOneCard();
}

// Draw 4 cards for Player Two
for (let i = 0; i < 4; i++) {
  drawPlayerTwoCard();
}


// Function to create a card element with a unique ID and class names
function createCardElement(cardText) {
  const cardElement = document.createElement("div");
  const cardSuit = cardText.slice(-1); // Extract the suit from the card text
  const cardRank = cardText.slice(0, -1); // Extract the rank from the card text

  cardElement.textContent = `${cardText}`;
  cardElement.classList.add("card"); // Adding the 'card' class to the element

  // Adding classes for suit and rank
  cardElement.classList.add(`card-${cardRank}${cardSuit}`);

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
  updateTableDisplay(); // Update table display
  updateCardsLeft();
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
  updateTableDisplay(); // Update table display
  updateCardsLeft();
}
// Update the table display to include rotation for newly appended cards
function updateTableDisplay() {
  const remainingCardsDiv = document.getElementById("remainingCards");

  for (let i = remainingCardsDiv.children.length; i < table.length; i++) {
    const cardElement = createCardElement(table[i]);
    cardElement.textContent = `${i + 1}: ${table[i]}`;
    cardElement.classList.add(`card-table`);
    cardElement.style.transform = `rotate(${getRandomRotation()}deg)`;
    remainingCardsDiv.appendChild(cardElement);
  }
}

// Function to update the cards left count
function updateCardsLeft() {
  const cardsLeftElement = document.getElementById("cardsLeft");
  if (cardsLeftElement) {
      cardsLeftElement.textContent = `cards left: ${deck.length}`;
  }
}
// Function to handle card click event
function cardClickHandler(event) {
  const clickedCard = event.target;

  // Check if the clicked card is from Player One's hand
  if (clickedCard.parentElement === playerOneDiv) {
    const index = Array.from(playerOneDiv.children).indexOf(clickedCard);
    if (index !== -1) {
      const selectedCard = playerOne.splice(index, 1)[0];
      table.push(selectedCard);
      updatePlayerOneDisplay();
      updateTableDisplay();
      updateCardsLeft();
    }
  }

  // Check if the clicked card is from Player Two's hand
  if (clickedCard.parentElement === playerTwoDiv) {
    const index = Array.from(playerTwoDiv.children).indexOf(clickedCard);
    if (index !== -1) {
      const selectedCard = playerTwo.splice(index, 1)[0];
      table.push(selectedCard);
      updatePlayerTwoDisplay();
      updateTableDisplay();
      updateCardsLeft();
    }
  }
}

// Add click event listeners to cards
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("card")) {
    cardClickHandler(event);
  }
});

// Add click event listeners to the draw buttons
drawPlayerOneButton.addEventListener("click", drawPlayerOneCard);
drawPlayerTwoButton.addEventListener("click", drawPlayerTwoCard);

const dealer1 = document.querySelector('.dealer1');
const dealer2 = document.querySelector('.dealer2');

// Function to show dealer for a specified duration
function showDealer(dealer) {
  dealer.style.visibility = 'visible';
  setTimeout(() => {
    dealer.style.visibility = 'hidden';
  }, 2500); // Hide dealer after 2 seconds
}

// Event listeners for drawing cards
document.getElementById('drawPlayerOneCard').addEventListener('click', () => {
  showDealer(dealer1); // Show dealer 2 for 2 seconds
});

document.getElementById('drawPlayerTwoCard').addEventListener('click', () => {
  showDealer(dealer2); // Show dealer 1 for 2 seconds
});

// Function to generate a random rotation value between 0 and 360 degrees
// Function to generate a random rotation value between 0-20 and 340-360 degrees
function getRandomRotation() {
  const random = Math.random();
  if (random < 0.5) {
    return Math.floor(Math.random() * 21); // Random number from 0 to 20
  } else {
    return Math.floor(Math.random() * 21) + 340; // Random number from 340 to 360
  }
}

