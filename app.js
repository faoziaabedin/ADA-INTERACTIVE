// ============================================================================
// JAVASCRIPT QUIZ BATTLE - A Team-Based Quiz Game
// ============================================================================
// This file demonstrates many core JavaScript concepts:
// - Variables (const, let)
// - Data structures (objects, arrays)
// - Functions (regular, arrow, callbacks)
// - DOM manipulation (getElementById, createElement, innerHTML)
// - Event handling (addEventListener, click events)
// - Timers (setInterval, setTimeout, clearInterval)
// - Array methods (forEach, map, sort, filter, includes)
// - Template literals (backtick strings with ${variables})
// - Conditional logic (if/else, ternary operator)
// ============================================================================


// ============================================================================
// SECTION 1: DATA - Our Quiz Questions
// ============================================================================
// We store questions in an OBJECT with three ARRAYS (easy, medium, hard)
// Each question is an OBJECT with properties: q (question), a (answer), c (choices)
// 
// CONCEPT: Objects use curly braces {} and store key-value pairs
// CONCEPT: Arrays use square brackets [] and store ordered lists
// ============================================================================

const questions = {
  // "easy" is a KEY, and its VALUE is an array of question objects
  easy: [
    {
      q: "What does DOM stand for?",                    // q = the question text
      a: "Document Object Model",                       // a = the correct answer
      c: ["Data Object Method", "Document Object Model", "Dynamic Output Mode", "Design Object Map"],  // c = all choices
    },
    {
      q: "Which keyword declares a variable that cannot be reassigned?",
      a: "const",
      c: ["var", "let", "const", "static"],
    },
    {
      q: "What symbol is used for single-line comments in JavaScript?",
      a: "//",
      c: ["#", "//", "/*", "--"],
    },
    {
      q: "Which method adds an element to the END of an array?",
      a: "push()",
      c: ["push()", "pop()", "shift()", "unshift()"],
    },
    {
      q: "What does console.log() do?",
      a: "Prints output to the console",
      c: ["Creates a variable", "Prints output to the console", "Declares a function", "Imports a module"],
    },
    {
      q: "Which operator checks BOTH value AND type?",
      a: "===",
      c: ["==", "===", "!=", "="],
    },
    {
      q: "What is the correct way to write an array?",
      a: "[1, 2, 3]",
      c: ["(1, 2, 3)", "{1, 2, 3}", "[1, 2, 3]", "<1, 2, 3>"],
    },
    {
      q: "Which event fires when a button is clicked?",
      a: "click",
      c: ["hover", "submit", "click", "load"],
    },
  ],

  medium: [
    {
      q: "What does addEventListener() do?",
      a: "Attaches an event handler to an element",
      c: ["Creates new HTML", "Attaches an event handler to an element", "Removes an event", "Styles an element"],
    },
    {
      q: "Which method selects an element by its ID?",
      a: "getElementById()",
      c: ["querySelector()", "getElementById()", "getElementByClass()", "selectById()"],
    },
    {
      q: "What is the output of: typeof []",
      a: "object",
      c: ["array", "object", "list", "undefined"],
    },
    {
      q: "Which method converts a JSON string to a JavaScript object?",
      a: "JSON.parse()",
      c: ["JSON.stringify()", "JSON.parse()", "JSON.convert()", "JSON.toObject()"],
    },
    {
      q: "What does the 'this' keyword refer to?",
      a: "The object that owns the current code",
      c: ["The previous function", "The object that owns the current code", "The global window always", "The parent element"],
    },
    {
      q: "Which array method creates a NEW array with filtered elements?",
      a: "filter()",
      c: ["find()", "filter()", "forEach()", "includes()"],
    },
    {
      q: "What is a callback function?",
      a: "A function passed as an argument to another function",
      c: ["A function that calls itself", "A function passed as an argument to another function", "A function that returns void", "A function with no parameters"],
    },
    {
      q: "Which CSS property hides an element but keeps its space?",
      a: "visibility: hidden",
      c: ["display: none", "visibility: hidden", "opacity: 0", "hidden: true"],
    },
    {
      q: "What does the spread operator (...) do?",
      a: "Expands an iterable into individual elements",
      c: ["Combines two strings", "Expands an iterable into individual elements", "Declares a rest parameter only", "Creates a copy of a function"],
    },
    {
      q: "Which method removes the LAST element from an array?",
      a: "pop()",
      c: ["push()", "pop()", "shift()", "slice()"],
    },
  ],

  hard: [
    {
      q: "What is the output of: console.log(1 + '2' + 3)",
      a: "123",
      c: ["6", "123", "15", "Error"],
    },
    {
      q: "What is closure in JavaScript?",
      a: "A function that has access to its outer scope variables",
      c: ["A way to close browser tabs", "A function that has access to its outer scope variables", "A method to end loops", "A type of error handling"],
    },
    {
      q: "What is the output of: console.log(typeof NaN)",
      a: "number",
      c: ["NaN", "undefined", "number", "object"],
    },
    {
      q: "Which method returns a Promise?",
      a: "fetch()",
      c: ["setTimeout()", "fetch()", "addEventListener()", "querySelector()"],
    },
    {
      q: "What is event bubbling?",
      a: "Events propagate from child to parent elements",
      c: ["Events propagate from child to parent elements", "Events only fire once", "Events are cancelled automatically", "Events propagate from parent to child"],
    },
    {
      q: "What does 'use strict' do?",
      a: "Enables strict mode with stricter parsing and error handling",
      c: ["Makes code run faster", "Enables strict mode with stricter parsing and error handling", "Prevents all errors", "Enables TypeScript features"],
    },
    {
      q: "What is the output of: [1,2,3].map(x => x * 2)",
      a: "[2, 4, 6]",
      c: ["[1, 2, 3]", "[2, 4, 6]", "6", "undefined"],
    },
    {
      q: "What is the difference between null and undefined?",
      a: "null is intentional absence, undefined means not assigned",
      c: ["They are exactly the same", "null is intentional absence, undefined means not assigned", "undefined is for objects only", "null is for numbers only"],
    },
    {
      q: "What is hoisting in JavaScript?",
      a: "Variable and function declarations are moved to the top",
      c: ["Variable and function declarations are moved to the top", "Code runs from bottom to top", "Functions are deleted after use", "Variables are made global"],
    },
    {
      q: "What does async/await do?",
      a: "Makes asynchronous code look synchronous",
      c: ["Speeds up code execution", "Makes asynchronous code look synchronous", "Pauses the browser", "Creates multiple threads"],
    },
  ],
};


// ============================================================================
// SECTION 2: TEAM DATA
// ============================================================================
// An array of team objects - each team has name, emoji, score, and streak
// 
// CONCEPT: Arrays can hold objects, and we can access them by index
//          teams[0] = first team, teams[1] = second team, etc.
// ============================================================================

const teams = [
  { name: "Team Alpha", emoji: "🦁", score: 0, streak: 0 },
  { name: "Team Beta", emoji: "🐉", score: 0, streak: 0 },
  { name: "Team Gamma", emoji: "🦅", score: 0, streak: 0 },
  { name: "Team Delta", emoji: "🐺", score: 0, streak: 0 },
  { name: "Team Omega", emoji: "🦈", score: 0, streak: 0 },
];


// ============================================================================
// SECTION 3: STATE VARIABLES
// ============================================================================
// These variables track the current state of our game
// 
// CONCEPT: "let" allows us to reassign values later (unlike "const")
// CONCEPT: "null" means "intentionally empty" - no team selected yet
// ============================================================================

let currentTeamIndex = null;   // Which team is currently playing (0-4, or null if none)
let running = false;           // Is a round currently in progress? (true/false)
let maxTime = 30;              // Maximum time for a round (in seconds)
let timeLeft = 30;             // Current countdown timer value
let timer = null;              // Holds reference to our setInterval timer
let currentQuestion = null;    // The question currently being displayed
let questionCount = 0;         // How many questions asked in current round
let totalCorrect = 0;          // Total correct answers across all rounds
let totalAsked = 0;            // Total questions asked across all rounds


// ============================================================================
// SECTION 4: HELPER FUNCTIONS
// ============================================================================
// Small utility functions that make our code cleaner and more reusable
// 
// CONCEPT: Arrow functions are a shorter way to write functions
//          (id) => document.getElementById(id)  is the same as:
//          function(id) { return document.getElementById(id); }
// ============================================================================

// $ is a shortcut function - instead of typing document.getElementById("myId")
// we can just type $("myId") - much shorter!
const $ = (id) => document.getElementById(id);

// shuffle() randomizes the order of an array
// CONCEPT: The spread operator [...arr] creates a COPY of the array
//          so we don't modify the original
// CONCEPT: .sort() with a comparison function sorts the array
//          Math.random() - 0.5 gives random positive or negative numbers
//          which randomizes the sort order
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);


// ============================================================================
// SECTION 5: INITIALIZATION - Runs When Page Loads
// ============================================================================
// DOMContentLoaded fires when the HTML is fully loaded and parsed
// This ensures we don't try to access elements before they exist!
// 
// CONCEPT: addEventListener attaches a function to run when an event happens
// CONCEPT: The arrow function () => {} is the callback that runs on the event
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Render the initial UI
  renderTeams();       // Draw the team selection buttons
  renderScoreboard();  // Draw the scoreboard
  updateStats();       // Update the stats display
  
  // Set up event listeners for our control buttons
  // When "Reset All" is clicked, run the resetAll function
  $("resetAllBtn").addEventListener("click", resetAll);
  
  // When the round time input changes, update the timer
  $("roundTime").addEventListener("change", updateRoundTime);
});


// ============================================================================
// SECTION 6: RENDER FUNCTIONS - Update What Users See
// ============================================================================
// These functions update the HTML to show current game state
// 
// CONCEPT: innerHTML lets us set/replace HTML content of an element
// CONCEPT: createElement() creates new HTML elements in JavaScript
// CONCEPT: appendChild() adds an element as a child of another element
// ============================================================================

/**
 * renderTeams() - Creates and displays the team selection buttons
 * 
 * This function:
 * 1. Clears any existing buttons
 * 2. Loops through each team
 * 3. Creates a button for each team
 * 4. Adds click event to start that team's round
 */
function renderTeams() {
  // Get the container element where buttons will go
  const container = $("groupsRow");
  
  // Clear out any existing buttons (innerHTML = "" removes all children)
  container.innerHTML = "";
  
  // Loop through each team using forEach
  // CONCEPT: forEach runs a function for each item in an array
  //          (team, idx) means: team = current item, idx = current index (0,1,2,3,4)
  teams.forEach((team, idx) => {
    // Create a new button element
    const btn = document.createElement("button");
    
    // Set the CSS class - add "active" class if this is the current team
    // CONCEPT: Template literal with ternary operator:
    //          condition ? valueIfTrue : valueIfFalse
    btn.className = `team-btn ${idx === currentTeamIndex ? "active" : ""}`;
    
    // Set the button's HTML content using a template literal
    // CONCEPT: Template literals use backticks `` and allow ${variable} inside
    btn.innerHTML = `
      <span class="team-emoji">${team.emoji}</span>
      <span class="team-name">${team.name}</span>
      <span class="team-score">${team.score} pts</span>
    `;
    
    // When this button is clicked, start a round for this team
    // CONCEPT: Arrow function () => startRound(idx) captures the current idx value
    //          This is called a "closure" - the function remembers idx
    btn.addEventListener("click", () => startRound(idx));
    
    // Add the button to the container
    container.appendChild(btn);
  });
}


/**
 * renderScoreboard() - Displays teams sorted by score (highest first)
 * 
 * CONCEPT: This shows method chaining - calling multiple methods in sequence
 *          [...teams].map().sort().map().join()
 */
function renderScoreboard() {
  // Create a sorted copy of teams array
  // CONCEPT: [...teams] creates a copy (spread operator)
  //          .map() transforms each item, adding originalIndex
  //          .sort() reorders by score (b.score - a.score = descending order)
  const sorted = [...teams]
    .map((t, i) => ({ ...t, originalIndex: i }))  // Add index to each team object
    .sort((a, b) => b.score - a.score);            // Sort by score (highest first)
  
  // Arrays for rank display
  const rankEmojis = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"];
  const rankClasses = ["first", "second", "third", "", ""];
  
  // Build HTML for scoreboard using map() and join()
  // CONCEPT: .map() transforms array items into HTML strings
  // CONCEPT: .join("") combines array of strings into one string
  $("scoreboard").innerHTML = sorted
    .map((team, i) => `
      <div class="score-row ${rankClasses[i]}">
        <div class="score-left">
          <span class="rank-emoji">${rankEmojis[i]}</span>
          <span class="score-name">${team.emoji} ${team.name}</span>
        </div>
        <span class="score-points">${team.score} pts</span>
      </div>
    `)
    .join("");  // Join array elements with no separator
}


/**
 * updateStats() - Updates the game statistics display
 * 
 * CONCEPT: .textContent sets the text inside an element (safer than innerHTML)
 * CONCEPT: Ternary operator for conditional display
 */
function updateStats() {
  // Update total questions asked
  $("totalQuestions").textContent = totalAsked;
  
  // Update total correct answers
  $("totalCorrect").textContent = totalCorrect;
  
  // Calculate and display accuracy percentage
  // CONCEPT: Ternary operator: condition ? valueIfTrue : valueIfFalse
  //          This prevents division by zero when totalAsked is 0
  $("accuracy").textContent = totalAsked > 0 
    ? Math.round((totalCorrect / totalAsked) * 100) + "%" 
    : "0%";
}


// ============================================================================
// SECTION 7: QUIZ LOGIC - Question Selection and Answer Handling
// ============================================================================
// Core game mechanics for selecting questions and processing answers
// ============================================================================

/**
 * getQuestionPool() - Returns the array of questions based on difficulty setting
 * 
 * CONCEPT: Accessing object properties with bracket notation: questions[difficulty]
 * CONCEPT: Spread operator to combine multiple arrays: [...arr1, ...arr2]
 */
function getQuestionPool() {
  // Get the selected difficulty from the dropdown
  const difficulty = $("difficulty").value;
  
  // If "mixed" is selected, combine all question arrays
  if (difficulty === "mixed") {
    // CONCEPT: Spread operator (...) unpacks arrays
    // This creates one big array with all questions from all difficulties
    return [...questions.easy, ...questions.medium, ...questions.hard];
  }
  
  // Otherwise, return the array for the selected difficulty
  // CONCEPT: Bracket notation questions[difficulty] is like questions.easy
  //          but lets us use a variable for the key name
  // The || provides a fallback if difficulty is undefined
  return questions[difficulty] || questions.medium;
}


/**
 * pickQuestion() - Selects a random question and displays it with answer choices
 * 
 * This is a complex function that:
 * 1. Gets the question pool
 * 2. Picks a random question
 * 3. Determines the difficulty for display
 * 4. Updates the UI with question and shuffled choices
 */
function pickQuestion() {
  // Get available questions based on difficulty setting
  const pool = getQuestionPool();
  
  // Pick a random question from the pool
  // CONCEPT: Math.random() returns 0-0.999...
  //          Multiply by array length and floor to get valid index
  currentQuestion = pool[Math.floor(Math.random() * pool.length)];
  
  // Increment question counter for this round
  questionCount++;
  
  // Determine difficulty level for the badge display
  let diffLevel = $("difficulty").value;
  if (diffLevel === "mixed") {
    // Check which array contains this question using .includes()
    // CONCEPT: .includes() returns true if array contains the item
    if (questions.easy.includes(currentQuestion)) diffLevel = "easy";
    else if (questions.hard.includes(currentQuestion)) diffLevel = "hard";
    else diffLevel = "medium";
  }
  
  // Update the question number display
  $("questionNum").textContent = `Q${questionCount}`;
  
  // Update difficulty badge text and styling
  // CONCEPT: charAt(0).toUpperCase() capitalizes first letter
  //          slice(1) gets rest of string
  $("difficultyTag").textContent = diffLevel.charAt(0).toUpperCase() + diffLevel.slice(1);
  $("difficultyTag").className = `difficulty-tag ${diffLevel}`;
  
  // Display the question text
  $("qText").textContent = currentQuestion.q;
  
  // Get the choices container and clear it
  const choicesEl = $("choices");
  choicesEl.innerHTML = "";
  
  // Clear any previous feedback
  setFeedback("", "");
  
  // Create buttons for each answer choice (A, B, C, D)
  const letters = ["A", "B", "C", "D"];
  
  // Shuffle the choices so correct answer isn't always in same position
  // Then create a button for each choice
  shuffle(currentQuestion.c).forEach((choice, i) => {
    // Create button element
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    
    // Set button content with letter and choice text
    btn.innerHTML = `
      <span class="choice-letter">${letters[i]}</span>
      <span>${choice}</span>
    `;
    
    // Disable button if round isn't running
    btn.disabled = !running;
    
    // Add click handler - passes both the choice text and button element
    // CONCEPT: We pass the button element so we can add CSS classes to it later
    btn.addEventListener("click", () => answer(choice, btn));
    
    // Add button to the choices container
    choicesEl.appendChild(btn);
  });
}


/**
 * answer() - Handles when a player clicks an answer choice
 * 
 * @param {string} choice - The answer text that was clicked
 * @param {HTMLElement} btnEl - The button element that was clicked
 * 
 * This function:
 * 1. Checks if the answer is correct
 * 2. Updates score and streak
 * 3. Shows visual feedback
 * 4. Loads next question after delay
 */
function answer(choice, btnEl) {
  // Guard clause: exit early if game isn't running or no team selected
  // CONCEPT: Early return pattern prevents nested if statements
  if (!running || currentTeamIndex === null) return;
  
  // Check if the chosen answer matches the correct answer
  const correct = choice === currentQuestion.a;
  
  // Increment total questions asked (for stats)
  totalAsked++;
  
  // Disable ALL choice buttons to prevent multiple clicks
  // CONCEPT: querySelectorAll returns a NodeList of all matching elements
  // CONCEPT: forEach works on NodeLists too, not just arrays
  const allBtns = $("choices").querySelectorAll("button");
  allBtns.forEach(b => b.disabled = true);
  
  // Handle correct answer
  if (correct) {
    totalCorrect++;  // Update global stats
    teams[currentTeamIndex].streak++;  // Increment team's streak
    
    // Calculate points with streak bonuses
    // Base: 1 point, 3+ streak: 2 points, 5+ streak: 3 points
    let points = 1;
    let bonusText = "";
    
    if (teams[currentTeamIndex].streak >= 3) {
      points = 2;
      bonusText = " (+1 streak bonus!)";
    }
    if (teams[currentTeamIndex].streak >= 5) {
      points = 3;
      bonusText = " (+2 streak bonus! 🔥)";
    }
    
    // Add points to team's score
    teams[currentTeamIndex].score += points;
    
    // Add visual feedback - green highlight on correct button
    btnEl.classList.add("correct");
    
    // Show success message
    setFeedback(
      `<span class="correct-text">✅ Correct!${bonusText}</span>`,
      `+${points} point${points > 1 ? "s" : ""}!`  // Pluralize "point" if needed
    );
    
    // Trigger confetti animation!
    createConfetti(5);
    
  } else {
    // Handle wrong answer
    
    // Reset streak to 0 (streak broken)
    teams[currentTeamIndex].streak = 0;
    
    // Add visual feedback - red highlight on wrong button
    btnEl.classList.add("wrong");
    
    // Also highlight the correct answer in green
    // CONCEPT: .includes() checks if string contains substring
    allBtns.forEach(b => {
      if (b.textContent.includes(currentQuestion.a)) {
        b.classList.add("correct");
      }
    });
    
    // Show the correct answer
    setFeedback(
      `<span class="wrong-text">❌ Incorrect!</span> The answer was: <strong>${currentQuestion.a}</strong>`,
      ""
    );
  }
  
  // Update the streak display
  $("streakCount").textContent = teams[currentTeamIndex].streak;
  
  // Re-render UI to show updated scores
  renderTeams();
  renderScoreboard();
  updateStats();
  
  // After a short delay, load the next question
  // CONCEPT: setTimeout(callback, milliseconds) runs code after a delay
  //          1200 = 1.2 seconds, giving time to see feedback
  setTimeout(() => {
    if (running) pickQuestion();  // Only if round is still active
  }, 1200);
}


/**
 * setFeedback() - Updates the feedback message displayed to users
 * 
 * @param {string} html - HTML string for the feedback message
 * @param {string} celebrate - Text for the celebration message
 */
function setFeedback(html, celebrate) {
  $("feedback").innerHTML = html;         // Can contain HTML tags
  $("celebrate").textContent = celebrate; // Plain text only
}


// ============================================================================
// SECTION 8: ROUND MANAGEMENT - Starting, Stopping, and Ending Rounds
// ============================================================================
// Controls the timed gameplay rounds for each team
// ============================================================================

/**
 * startRound() - Begins a timed round for the specified team
 * 
 * @param {number} idx - The index of the team starting their round (0-4)
 * 
 * CONCEPT: setInterval runs a function repeatedly at set intervals
 *          It returns an ID we save to stop it later with clearInterval
 */
function startRound(idx) {
  // Stop any currently running round first
  stopRound();
  
  // Set the current team
  currentTeamIndex = idx;
  
  // Update the display to show which team is playing
  $("currentGroupLabel").textContent = teams[idx].name;
  $("streakCount").textContent = teams[idx].streak;
  
  // Get and validate the round time from the input
  // CONCEPT: parseInt() converts string to integer
  //          || 30 provides default if parseInt fails (returns NaN)
  maxTime = parseInt($("roundTime").value) || 30;
  
  // Clamp time between 10 and 120 seconds
  // CONCEPT: Math.max and Math.min limit a value to a range
  maxTime = Math.max(10, Math.min(120, maxTime));
  timeLeft = maxTime;
  
  // Update timer display
  $("timeLeft").textContent = timeLeft;
  updateTimerBar();
  
  // Set game state to running
  running = true;
  questionCount = 0;  // Reset question count for this round
  
  // Re-render teams to show active state
  renderTeams();
  
  // Load the first question
  pickQuestion();
  
  // Start the countdown timer
  // CONCEPT: setInterval(callback, interval) runs callback every interval ms
  //          1000ms = 1 second
  timer = setInterval(() => {
    timeLeft--;  // Decrease time by 1
    $("timeLeft").textContent = timeLeft;  // Update display
    updateTimerBar();  // Update progress bar
    
    // Check if time has run out
    if (timeLeft <= 0) {
      endRound();
    }
  }, 1000);
}


/**
 * updateTimerBar() - Updates the visual timer progress bar
 * 
 * Changes color based on remaining time:
 * - Green (>40%): Plenty of time
 * - Yellow (20-40%): Getting low
 * - Red (<20%): Almost out of time!
 */
function updateTimerBar() {
  const bar = $("timerBar");
  
  // Calculate percentage of time remaining
  const percent = (timeLeft / maxTime) * 100;
  
  // Set the width of the bar (CSS transition makes it smooth)
  bar.style.width = percent + "%";
  
  // Remove existing color classes
  bar.classList.remove("warning", "danger");
  
  // Add appropriate color class based on time remaining
  if (percent <= 20) {
    bar.classList.add("danger");   // Red - almost out of time!
  } else if (percent <= 40) {
    bar.classList.add("warning");  // Yellow - getting low
  }
  // If > 40%, no extra class needed (uses default green)
}


/**
 * endRound() - Called when time runs out, ends the current round
 * 
 * Displays final score and triggers celebration
 */
function endRound() {
  // Stop the game
  running = false;
  
  // Stop the timer
  // CONCEPT: clearInterval(timerId) stops a setInterval that's running
  clearInterval(timer);
  timer = null;
  
  // Get the team that just finished
  const team = teams[currentTeamIndex];
  
  // Add animation class to quiz card
  $("quizCard").classList.add("round-end");
  
  // Disable all choice buttons
  $("choices").querySelectorAll("button").forEach(b => b.disabled = true);
  
  // Show final score message
  $("qText").textContent = `⏱️ Time's up! ${team.name} scored ${team.score} points!`;
  setFeedback("", "Round Complete! 🎉");
  
  // Big confetti celebration!
  createConfetti(30);
  
  // Remove animation class after it completes
  setTimeout(() => {
    $("quizCard").classList.remove("round-end");
  }, 500);
}


/**
 * stopRound() - Immediately stops any running round
 * 
 * Used when starting a new round or resetting the game
 */
function stopRound() {
  running = false;
  clearInterval(timer);  // Stop the timer
  timer = null;          // Clear the reference
}


/**
 * updateRoundTime() - Called when user changes the round time input
 * 
 * Only updates if a round isn't currently running
 */
function updateRoundTime() {
  // Only allow changes when not actively playing
  if (!running) {
    const t = parseInt($("roundTime").value) || 30;
    
    // Clamp between 10 and 120 seconds
    maxTime = Math.max(10, Math.min(120, t));
    timeLeft = maxTime;
    
    // Update displays
    $("timeLeft").textContent = timeLeft;
    updateTimerBar();
  }
}


/**
 * resetAll() - Resets the entire game to initial state
 * 
 * Clears all scores, resets UI, ready for a fresh game
 */
function resetAll() {
  // Stop any running round
  stopRound();
  
  // Reset state variables
  currentTeamIndex = null;
  questionCount = 0;
  totalCorrect = 0;
  totalAsked = 0;
  
  // Reset all team scores and streaks
  // CONCEPT: forEach to iterate and modify each team object
  teams.forEach(t => {
    t.score = 0;
    t.streak = 0;
  });
  
  // Reset UI displays
  $("currentGroupLabel").textContent = "Select a team";
  $("streakCount").textContent = "0";
  $("qText").textContent = "👆 Pick a team to start the quiz!";
  $("choices").innerHTML = "";  // Clear answer buttons
  setFeedback("", "");          // Clear feedback
  
  // Reset timer
  timeLeft = parseInt($("roundTime").value) || 30;
  $("timeLeft").textContent = timeLeft;
  updateTimerBar();
  
  // Re-render everything
  renderTeams();
  renderScoreboard();
  updateStats();
}


// ============================================================================
// SECTION 9: VISUAL EFFECTS - Confetti Animation
// ============================================================================
// Fun visual feedback when players get correct answers!
// ============================================================================

/**
 * createConfetti() - Creates falling confetti animation
 * 
 * @param {number} count - Number of confetti pieces to create
 * 
 * This demonstrates:
 * - Dynamic element creation
 * - Random values for variation
 * - CSS animations triggered by JavaScript
 * - Cleanup with setTimeout
 */
function createConfetti(count) {
  // Get the container for confetti pieces
  const container = $("confetti");
  
  // Array of colors for confetti
  const colors = ["#6366f1", "#10b981", "#f59e0b", "#ef4444", "#ec4899", "#8b5cf6"];
  
  // Create 'count' number of confetti pieces
  for (let i = 0; i < count; i++) {
    // Create a div element for each confetti piece
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    
    // Randomize position (0-100% across screen)
    // CONCEPT: Math.random() * 100 gives 0-99.99...
    confetti.style.left = Math.random() * 100 + "%";
    
    // Pick random color from array
    // CONCEPT: Math.floor(Math.random() * array.length) gives random valid index
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Random animation delay for staggered effect (0-0.5 seconds)
    confetti.style.animationDelay = Math.random() * 0.5 + "s";
    
    // Random size (5-15 pixels)
    confetti.style.width = (Math.random() * 10 + 5) + "px";
    confetti.style.height = (Math.random() * 10 + 5) + "px";
    
    // Randomly make circle or square
    // CONCEPT: Ternary with Math.random() > 0.5 for 50/50 chance
    confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
    
    // Add to container
    container.appendChild(confetti);
    
    // Remove confetti piece after animation completes (3 seconds)
    // CONCEPT: Arrow function () => confetti.remove() captures confetti variable
    //          This is closure - the function "remembers" which confetti to remove
    setTimeout(() => confetti.remove(), 3000);
  }
}


// ============================================================================
// END OF FILE
// ============================================================================
// 
// KEY JAVASCRIPT CONCEPTS DEMONSTRATED:
// 
// 1. Variables: const (can't reassign), let (can reassign)
// 2. Data Types: strings, numbers, booleans, null, objects, arrays
// 3. Objects: { key: value } - store related data together
// 4. Arrays: [item1, item2] - ordered lists of items
// 5. Functions: Reusable blocks of code
// 6. Arrow Functions: Shorter syntax for functions
// 7. DOM Manipulation: Getting and changing HTML elements
// 8. Event Listeners: Responding to user actions (clicks, etc.)
// 9. Timers: setInterval (repeat), setTimeout (delay)
// 10. Array Methods: forEach, map, sort, filter, includes
// 11. Template Literals: `string with ${variables}`
// 12. Ternary Operator: condition ? ifTrue : ifFalse
// 13. Closures: Functions that remember their outer scope
// 14. Spread Operator: [...array] to copy/expand arrays
// 
// ============================================================================
