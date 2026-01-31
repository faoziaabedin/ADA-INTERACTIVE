// ============================================================================
// WEB DEV QUIZ BATTLE - A Team-Based Quiz Game
// ============================================================================
// 
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
// 
// ============================================================================


// ============================================================================
// SECTION 1: QUIZ QUESTIONS DATA
// ============================================================================
// 
// We organize questions by TOPIC (html, css, js)
// Each topic is a KEY in our object, and its VALUE is an array of questions
// Each question is an object with: q (question), a (answer), c (choices)
// 
// CONCEPT: Objects use curly braces {} and store key-value pairs
// CONCEPT: Arrays use square brackets [] and store ordered lists
// 
// ============================================================================

const questions = {
  
  // ========== HTML QUESTIONS ==========
  // HTML = HyperText Markup Language - the structure of web pages
  
  html: [
    {
      q: "What does HTML stand for?",
      a: "HyperText Markup Language",
      c: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks Text Mark Language", "Hyper Tool Multi Language"],
    },
    {
      q: "Which tag creates the largest heading?",
      a: "<h1>",
      c: ["<h1>", "<h6>", "<heading>", "<head>"],
    },
    {
      q: "Which tag creates a paragraph?",
      a: "<p>",
      c: ["<p>", "<para>", "<text>", "<paragraph>"],
    },
    {
      q: "Which tag creates a clickable link?",
      a: "<a>",
      c: ["<a>", "<link>", "<href>", "<url>"],
    },
    {
      q: "Which tag displays an image?",
      a: "<img>",
      c: ["<img>", "<image>", "<picture>", "<photo>"],
    },
    {
      q: "Which tag creates an unordered (bulleted) list?",
      a: "<ul>",
      c: ["<ul>", "<ol>", "<list>", "<li>"],
    },
    {
      q: "Which section contains visible page content?",
      a: "<body>",
      c: ["<body>", "<head>", "<html>", "<content>"],
    },
    {
      q: "Which tag creates a clickable button?",
      a: "<button>",
      c: ["<button>", "<btn>", "<click>", "<input>"],
    },
    {
      q: "What attribute specifies a unique identifier for an element?",
      a: "id",
      c: ["id", "class", "name", "identifier"],
    },
    {
      q: "What attribute is used for the destination of a link?",
      a: "href",
      c: ["href", "src", "link", "url"],
    },
    {
      q: "Which tag creates a line break?",
      a: "<br>",
      c: ["<br>", "<break>", "<lb>", "<newline>"],
    },
    {
      q: "Which tag is used for the main title in the browser tab?",
      a: "<title>",
      c: ["<title>", "<head>", "<h1>", "<name>"],
    },
    {
      q: "What tag wraps around each item in a list?",
      a: "<li>",
      c: ["<li>", "<item>", "<list>", "<ul>"],
    },
    {
      q: "Which attribute adds alt text to an image?",
      a: "alt",
      c: ["alt", "title", "text", "description"],
    },
    {
      q: "Which tag defines a division or section?",
      a: "<div>",
      c: ["<div>", "<section>", "<span>", "<container>"],
    },
  ],

  // ========== CSS QUESTIONS ==========
  // CSS = Cascading Style Sheets - the appearance of web pages
  
  css: [
    {
      q: "What does CSS stand for?",
      a: "Cascading Style Sheets",
      c: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
    },
    {
      q: "Which property changes text color?",
      a: "color",
      c: ["color", "text-color", "font-color", "foreground"],
    },
    {
      q: "Which property changes background color?",
      a: "background-color",
      c: ["background-color", "bg-color", "back-color", "color-background"],
    },
    {
      q: "Which property changes font size?",
      a: "font-size",
      c: ["font-size", "text-size", "size", "font"],
    },
    {
      q: "Which property makes text bold?",
      a: "font-weight",
      c: ["font-weight", "text-bold", "font-style", "bold"],
    },
    {
      q: "Which property adds space INSIDE an element's border?",
      a: "padding",
      c: ["padding", "margin", "spacing", "border-space"],
    },
    {
      q: "Which property adds space OUTSIDE an element's border?",
      a: "margin",
      c: ["margin", "padding", "spacing", "outer-space"],
    },
    {
      q: "How do you select an element by its ID in CSS?",
      a: "#id",
      c: ["#id", ".id", "id", "*id"],
    },
    {
      q: "How do you select an element by its class in CSS?",
      a: ".class",
      c: [".class", "#class", "class", "*class"],
    },
    {
      q: "Which property changes the font family?",
      a: "font-family",
      c: ["font-family", "font-type", "text-font", "typeface"],
    },
    {
      q: "Which property rounds the corners of an element?",
      a: "border-radius",
      c: ["border-radius", "corner-radius", "border-round", "round-corners"],
    },
    {
      q: "Which value hides an element completely?",
      a: "display: none",
      c: ["display: none", "visibility: hidden", "opacity: 0", "hidden: true"],
    },
    {
      q: "Which property centers text horizontally?",
      a: "text-align: center",
      c: ["text-align: center", "align: center", "center-text", "horizontal-align: center"],
    },
    {
      q: "Which property sets the width of an element?",
      a: "width",
      c: ["width", "size", "length", "horizontal"],
    },
    {
      q: "Which unit is relative to the root font size?",
      a: "rem",
      c: ["rem", "em", "px", "%"],
    },
    {
      q: "Which property changes cursor appearance on hover?",
      a: "cursor",
      c: ["cursor", "pointer", "mouse", "hover-style"],
    },
    {
      q: "What does 'px' stand for?",
      a: "pixels",
      c: ["pixels", "points", "percentage", "picas"],
    },
    {
      q: "Which property makes elements sit side by side?",
      a: "display: flex",
      c: ["display: flex", "display: inline", "float: left", "position: side"],
    },
  ],

  // ========== JAVASCRIPT QUESTIONS ==========
  // JavaScript = The programming language that makes pages interactive
  
  js: [
    {
      q: "What does JS stand for?",
      a: "JavaScript",
      c: ["JavaScript", "JavaSource", "JustScript", "JScript"],
    },
    {
      q: "Which keyword declares a variable that CAN be changed?",
      a: "let",
      c: ["let", "const", "var", "variable"],
    },
    {
      q: "Which keyword declares a variable that CANNOT be changed?",
      a: "const",
      c: ["const", "let", "var", "final"],
    },
    {
      q: "How do you write a single-line comment?",
      a: "// comment",
      c: ["// comment", "# comment", "/* comment */", "-- comment"],
    },
    {
      q: "How do you print something to the console?",
      a: "console.log()",
      c: ["console.log()", "print()", "echo()", "write()"],
    },
    {
      q: "Which method selects an element by ID?",
      a: "getElementById()",
      c: ["getElementById()", "getElement()", "selectById()", "findElement()"],
    },
    {
      q: "How do you write an array?",
      a: "[1, 2, 3]",
      c: ["[1, 2, 3]", "(1, 2, 3)", "{1, 2, 3}", "<1, 2, 3>"],
    },
    {
      q: "Which method adds an item to the END of an array?",
      a: "push()",
      c: ["push()", "add()", "append()", "insert()"],
    },
    {
      q: "What does addEventListener() do?",
      a: "Waits for an event like a click",
      c: ["Waits for an event like a click", "Creates HTML", "Styles elements", "Deletes events"],
    },
    {
      q: "Which operator checks if two values are equal?",
      a: "===",
      c: ["===", "=", "==", "!="],
    },
    {
      q: "How do you create a function?",
      a: "function name() {}",
      c: ["function name() {}", "def name():", "func name() {}", "create name() {}"],
    },
    {
      q: "What symbol starts a string?",
      a: "Quotes (\" or ')",
      c: ["Quotes (\" or ')", "Parentheses ()", "Brackets []", "Curly braces {}"],
    },
    {
      q: "How do you change text inside an element?",
      a: "textContent",
      c: ["textContent", "innerHTML", "innerText", "All of the above"],
    },
    {
      q: "Which event fires when a button is clicked?",
      a: "click",
      c: ["click", "press", "tap", "push"],
    },
    {
      q: "What does DOM stand for?",
      a: "Document Object Model",
      c: ["Document Object Model", "Data Object Model", "Document Order Model", "Display Object Map"],
    },
    {
      q: "How do you add a CSS class to an element in JS?",
      a: "classList.add()",
      c: ["classList.add()", "addClass()", "class.add()", "addClassName()"],
    },
    {
      q: "Which loop runs a set number of times?",
      a: "for loop",
      c: ["for loop", "while loop", "do loop", "each loop"],
    },
    {
      q: "What does innerHTML change?",
      a: "The HTML content inside an element",
      c: ["The HTML content inside an element", "Only text content", "CSS styles", "Element attributes"],
    },
  ],
};


// ============================================================================
// SECTION 2: TEAM DATA
// ============================================================================
// 
// An array of team objects - each team has a name, emoji, score, and streak
// 
// CONCEPT: Arrays can hold objects
// CONCEPT: We access items by index: teams[0] = first team
// 
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
// 
// These variables track the current state of our game
// They change as the game progresses
// 
// CONCEPT: "let" allows reassignment (value can change)
// CONCEPT: "null" means "intentionally empty"
// 
// ============================================================================

let currentTeamIndex = null;   // Which team is playing? (0-4, or null)
let running = false;           // Is a round in progress? (true/false)
let maxTime = 30;              // Maximum seconds per round
let timeLeft = 30;             // Current countdown value
let timer = null;              // Reference to our interval timer
let currentQuestion = null;    // The current question object
let questionCount = 0;         // Questions asked this round
let totalCorrect = 0;          // Total correct answers (all rounds)
let totalAsked = 0;            // Total questions asked (all rounds)
let currentTopic = null;       // Current question's topic (html/css/js)


// ============================================================================
// SECTION 4: HELPER FUNCTIONS
// ============================================================================
// 
// Small utility functions that make our code cleaner
// 
// CONCEPT: Arrow functions are a shorter way to write functions
//          (param) => expression
//          is the same as
//          function(param) { return expression; }
// 
// ============================================================================

// $ is a shortcut for document.getElementById
// Instead of: document.getElementById("myId")
// We write:   $("myId")
const $ = (id) => document.getElementById(id);

// shuffle() randomizes array order
// CONCEPT: [...arr] creates a copy using spread operator
// CONCEPT: .sort() with comparison function reorders array
// CONCEPT: Math.random() - 0.5 gives random positive/negative
const shuffle = (arr) => [...arr].sort(() => Math.random() - 0.5);


// ============================================================================
// SECTION 5: INITIALIZATION
// ============================================================================
// 
// DOMContentLoaded fires when HTML is fully loaded
// This ensures elements exist before we try to use them!
// 
// CONCEPT: addEventListener(event, callback) runs callback when event happens
// 
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
  // Render initial UI
  renderTeams();       // Draw team buttons
  renderScoreboard();  // Draw scoreboard
  updateStats();       // Update stats display
  
  // Set up button click handlers
  $("resetAllBtn").addEventListener("click", resetAll);
  
  // Update timer when input changes
  $("roundTime").addEventListener("change", updateRoundTime);
});


// ============================================================================
// SECTION 6: RENDER FUNCTIONS
// ============================================================================
// 
// These functions update what users see on the page
// 
// CONCEPT: innerHTML sets/replaces HTML content
// CONCEPT: createElement() creates new HTML elements
// CONCEPT: appendChild() adds element as child of another
// 
// ============================================================================

/**
 * renderTeams() - Creates team selection buttons
 * 
 * Steps:
 * 1. Get the container element
 * 2. Clear existing buttons
 * 3. Loop through teams array
 * 4. Create a button for each team
 * 5. Add click event to start that team's round
 */
function renderTeams() {
  // Get container where buttons go
  const container = $("groupsRow");
  
  // Clear existing content
  container.innerHTML = "";
  
  // Loop through each team
  // CONCEPT: forEach(callback) runs callback for each array item
  //          callback receives (item, index)
  teams.forEach((team, idx) => {
    // Create button element
    const btn = document.createElement("button");
    
    // Set CSS class - add "active" if this team is playing
    // CONCEPT: Ternary operator: condition ? ifTrue : ifFalse
    btn.className = `team-btn ${idx === currentTeamIndex ? "active" : ""}`;
    
    // Set button HTML using template literal
    // CONCEPT: Template literals use backticks `` 
    //          and allow ${variable} inside
    btn.innerHTML = `
      <span class="team-emoji">${team.emoji}</span>
      <span class="team-name">${team.name}</span>
      <span class="team-score">${team.score} pts</span>
    `;
    
    // When clicked, start round for this team
    // CONCEPT: Arrow function () => startRound(idx) 
    //          "closes over" idx variable (closure)
    btn.addEventListener("click", () => startRound(idx));
    
    // Add button to container
    container.appendChild(btn);
  });
}


/**
 * renderScoreboard() - Shows teams sorted by score
 * 
 * Uses method chaining: [...teams].map().sort().map().join()
 */
function renderScoreboard() {
  // Create sorted copy of teams
  // CONCEPT: [...teams] copies array (spread operator)
  // CONCEPT: .map() transforms each item
  // CONCEPT: .sort() reorders array
  const sorted = [...teams]
    .map((t, i) => ({ ...t, originalIndex: i }))
    .sort((a, b) => b.score - a.score);  // Descending order
  
  const rankEmojis = ["🥇", "🥈", "🥉", "4️⃣", "5️⃣"];
  const rankClasses = ["first", "second", "third", "", ""];
  
  // Build HTML string with map and join
  // CONCEPT: .map() returns new array of transformed items
  // CONCEPT: .join("") combines array into single string
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
    .join("");
}


/**
 * updateStats() - Updates game statistics display
 */
function updateStats() {
  // .textContent sets text inside element
  $("totalQuestions").textContent = totalAsked;
  $("totalCorrect").textContent = totalCorrect;
  
  // Calculate accuracy percentage
  // CONCEPT: Ternary prevents division by zero
  $("accuracy").textContent = totalAsked > 0 
    ? Math.round((totalCorrect / totalAsked) * 100) + "%" 
    : "0%";
}


// ============================================================================
// SECTION 7: QUIZ LOGIC
// ============================================================================
// 
// Core game mechanics for questions and answers
// 
// ============================================================================

/**
 * getQuestionPool() - Returns questions based on topic selection
 */
function getQuestionPool() {
  const topic = $("topic").value;
  
  if (topic === "all") {
    // Combine all topics into one array
    // CONCEPT: Spread operator unpacks arrays
    return [
      ...questions.html.map(q => ({ ...q, topic: "html" })),
      ...questions.css.map(q => ({ ...q, topic: "css" })),
      ...questions.js.map(q => ({ ...q, topic: "js" })),
    ];
  }
  
  // Return selected topic with topic label added
  return questions[topic].map(q => ({ ...q, topic: topic }));
}


/**
 * pickQuestion() - Selects random question and displays it
 * 
 * Steps:
 * 1. Get question pool based on settings
 * 2. Pick random question
 * 3. Update UI with question text
 * 4. Create shuffled answer buttons
 */
function pickQuestion() {
  const pool = getQuestionPool();
  
  // Pick random question
  // CONCEPT: Math.random() returns 0 to 0.999...
  // CONCEPT: Math.floor() rounds down to integer
  const randomIndex = Math.floor(Math.random() * pool.length);
  currentQuestion = pool[randomIndex];
  currentTopic = currentQuestion.topic;
  
  questionCount++;
  
  // Update question number
  $("questionNum").textContent = `Q${questionCount}`;
  
  // Update topic badge
  const topicNames = { html: "HTML 📄", css: "CSS 🎨", js: "JavaScript ⚡" };
  $("topicTag").textContent = topicNames[currentTopic];
  $("topicTag").className = `topic-tag ${currentTopic}`;
  
  // Display question text
  $("qText").textContent = currentQuestion.q;
  
  // Get choices container and clear it
  const choicesEl = $("choices");
  choicesEl.innerHTML = "";
  setFeedback("", "");
  
  // Create answer buttons (A, B, C, D)
  const letters = ["A", "B", "C", "D"];
  
  // Shuffle choices so correct answer isn't always same position
  shuffle(currentQuestion.c).forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "choice-btn";
    btn.innerHTML = `
      <span class="choice-letter">${letters[i]}</span>
      <span>${choice}</span>
    `;
    btn.disabled = !running;  // Disable if not playing
    
    // Handle click - pass choice and button element
    btn.addEventListener("click", () => answer(choice, btn));
    
    choicesEl.appendChild(btn);
  });
}


/**
 * answer() - Handles answer selection
 * 
 * @param {string} choice - The selected answer text
 * @param {HTMLElement} btnEl - The button that was clicked
 */
function answer(choice, btnEl) {
  // Guard clause: exit if not playing
  // CONCEPT: Early return prevents deep nesting
  if (!running || currentTeamIndex === null) return;
  
  // Check if answer is correct
  const correct = choice === currentQuestion.a;
  totalAsked++;
  
  // Disable all buttons
  // CONCEPT: querySelectorAll returns all matching elements
  const allBtns = $("choices").querySelectorAll("button");
  allBtns.forEach(b => b.disabled = true);
  
  if (correct) {
    // CORRECT ANSWER
    totalCorrect++;
    teams[currentTeamIndex].streak++;
    
    // Calculate points (bonus for streaks!)
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
    
    teams[currentTeamIndex].score += points;
    
    // Visual feedback
    btnEl.classList.add("correct");
    setFeedback(
      `<span class="correct-text">✅ Correct!${bonusText}</span>`,
      `+${points} point${points > 1 ? "s" : ""}!`
    );
    
    // Confetti!
    createConfetti(5);
    
  } else {
    // WRONG ANSWER
    teams[currentTeamIndex].streak = 0;  // Reset streak
    
    btnEl.classList.add("wrong");
    
    // Highlight correct answer
    allBtns.forEach(b => {
      if (b.textContent.includes(currentQuestion.a)) {
        b.classList.add("correct");
      }
    });
    
    setFeedback(
      `<span class="wrong-text">❌ Incorrect!</span> The answer was: <strong>${currentQuestion.a}</strong>`,
      ""
    );
  }
  
  // Update displays
  $("streakCount").textContent = teams[currentTeamIndex].streak;
  renderTeams();
  renderScoreboard();
  updateStats();
  
  // Next question after delay
  // CONCEPT: setTimeout(callback, ms) runs callback after delay
  setTimeout(() => {
    if (running) pickQuestion();
  }, 1200);
}


/**
 * setFeedback() - Updates feedback messages
 */
function setFeedback(html, celebrate) {
  $("feedback").innerHTML = html;
  $("celebrate").textContent = celebrate;
}


// ============================================================================
// SECTION 8: ROUND MANAGEMENT
// ============================================================================
// 
// Controls timed gameplay rounds
// 
// ============================================================================

/**
 * startRound() - Begins timed round for a team
 * 
 * @param {number} idx - Team index (0-4)
 */
function startRound(idx) {
  stopRound();  // Stop any current round
  
  currentTeamIndex = idx;
  $("currentGroupLabel").textContent = teams[idx].name;
  $("streakCount").textContent = teams[idx].streak;
  
  // Get and validate round time
  // CONCEPT: parseInt() converts string to integer
  // CONCEPT: || 30 provides default if parseInt fails
  maxTime = parseInt($("roundTime").value) || 30;
  maxTime = Math.max(10, Math.min(120, maxTime));  // Clamp to range
  timeLeft = maxTime;
  
  $("timeLeft").textContent = timeLeft;
  updateTimerBar();
  
  running = true;
  questionCount = 0;
  renderTeams();
  pickQuestion();
  
  // Start countdown timer
  // CONCEPT: setInterval(callback, ms) runs callback every ms
  //          Returns ID to stop it later
  timer = setInterval(() => {
    timeLeft--;
    $("timeLeft").textContent = timeLeft;
    updateTimerBar();
    
    if (timeLeft <= 0) {
      endRound();
    }
  }, 1000);  // 1000ms = 1 second
}


/**
 * updateTimerBar() - Updates visual progress bar
 */
function updateTimerBar() {
  const bar = $("timerBar");
  const percent = (timeLeft / maxTime) * 100;
  
  // Set width as percentage
  bar.style.width = percent + "%";
  
  // Change color based on time remaining
  bar.classList.remove("warning", "danger");
  if (percent <= 20) {
    bar.classList.add("danger");  // Red
  } else if (percent <= 40) {
    bar.classList.add("warning"); // Yellow
  }
}


/**
 * endRound() - Called when time runs out
 */
function endRound() {
  running = false;
  clearInterval(timer);  // Stop the timer
  timer = null;
  
  const team = teams[currentTeamIndex];
  $("quizCard").classList.add("round-end");
  
  // Disable all choice buttons
  $("choices").querySelectorAll("button").forEach(b => b.disabled = true);
  
  // Show final score
  $("qText").textContent = `⏱️ Time's up! ${team.name} scored ${team.score} points!`;
  setFeedback("", "Round Complete! 🎉");
  
  // Big confetti!
  createConfetti(30);
  
  setTimeout(() => {
    $("quizCard").classList.remove("round-end");
  }, 500);
}


/**
 * stopRound() - Immediately stops current round
 */
function stopRound() {
  running = false;
  clearInterval(timer);
  timer = null;
}


/**
 * updateRoundTime() - Updates time when input changes
 */
function updateRoundTime() {
  if (!running) {
    const t = parseInt($("roundTime").value) || 30;
    maxTime = Math.max(10, Math.min(120, t));
    timeLeft = maxTime;
    $("timeLeft").textContent = timeLeft;
    updateTimerBar();
  }
}


/**
 * resetAll() - Resets entire game to initial state
 */
function resetAll() {
  stopRound();
  
  currentTeamIndex = null;
  questionCount = 0;
  totalCorrect = 0;
  totalAsked = 0;
  
  // Reset all team scores
  teams.forEach(t => {
    t.score = 0;
    t.streak = 0;
  });
  
  // Reset UI
  $("currentGroupLabel").textContent = "Select a team";
  $("streakCount").textContent = "0";
  $("qText").textContent = "👆 Pick a team to start the quiz!";
  $("choices").innerHTML = "";
  setFeedback("", "");
  
  timeLeft = parseInt($("roundTime").value) || 30;
  $("timeLeft").textContent = timeLeft;
  updateTimerBar();
  
  renderTeams();
  renderScoreboard();
  updateStats();
}


// ============================================================================
// SECTION 9: CONFETTI EFFECT
// ============================================================================
// 
// Creates fun visual celebration!
// 
// ============================================================================

/**
 * createConfetti() - Creates falling confetti pieces
 * 
 * @param {number} count - Number of pieces to create
 */
function createConfetti(count) {
  const container = $("confetti");
  const colors = ["#6366f1", "#10b981", "#f59e0b", "#ef4444", "#ec4899", "#8b5cf6"];
  
  // Create 'count' confetti pieces
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    
    // Random position (0-100%)
    confetti.style.left = Math.random() * 100 + "%";
    
    // Random color
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Random animation delay (staggered effect)
    confetti.style.animationDelay = Math.random() * 0.5 + "s";
    
    // Random size (5-15px)
    confetti.style.width = (Math.random() * 10 + 5) + "px";
    confetti.style.height = (Math.random() * 10 + 5) + "px";
    
    // Random shape (circle or square)
    confetti.style.borderRadius = Math.random() > 0.5 ? "50%" : "0";
    
    container.appendChild(confetti);
    
    // Remove after animation (cleanup)
    // CONCEPT: Closure - function remembers 'confetti' variable
    setTimeout(() => confetti.remove(), 3000);
  }
}


// ============================================================================
// JAVASCRIPT CONCEPTS SUMMARY
// ============================================================================
// 
// VARIABLES:
// - const: Cannot be reassigned
// - let: Can be reassigned
// 
// DATA TYPES:
// - String: "hello" or 'hello'
// - Number: 42, 3.14
// - Boolean: true, false
// - Array: [1, 2, 3]
// - Object: { key: value }
// - null: Intentionally empty
// - undefined: Not assigned
// 
// FUNCTIONS:
// - Regular: function name(params) { }
// - Arrow: (params) => expression
// - Callback: Function passed to another function
// 
// DOM METHODS:
// - getElementById(): Select by ID
// - querySelector(): Select by CSS selector
// - createElement(): Create new element
// - appendChild(): Add child element
// - innerHTML: Set HTML content
// - textContent: Set text content
// - classList.add/remove(): Modify CSS classes
// 
// EVENTS:
// - addEventListener(event, callback)
// - Common events: click, change, submit, load
// 
// ARRAY METHODS:
// - forEach(): Loop through items
// - map(): Transform items
// - filter(): Filter items
// - sort(): Reorder items
// - push(): Add to end
// - includes(): Check if contains
// 
// TIMERS:
// - setTimeout(callback, ms): Run once after delay
// - setInterval(callback, ms): Run repeatedly
// - clearInterval(id): Stop interval
// 
// OPERATORS:
// - === : Strict equality
// - !== : Strict inequality
// - && : AND
// - || : OR
// - ? : : Ternary (condition ? ifTrue : ifFalse)
// 
// ============================================================================
