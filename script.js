// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Gemini API Configuration
const GEMINI_API_KEY = 'AIzaSyCC0X3hc5GiId20L-qWJnZ-nju9uSiWewY'; // Replace with your actual API key from Google AI Studio
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=' + GEMINI_API_KEY;

// Function to call Gemini API
async function callGeminiAPI(message) {
    try {
        const response = await fetch(GEMINI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `You are EcoAI, an intelligent environmental assistant. Your primary goal is to directly and accurately answer the user's question about environmental topics.

IMPORTANT: Always answer the specific question asked. Don't give generic information unless asked. Be focused and relevant.

For the user's question, provide:
1. Direct answer to their specific question
2. Brief supporting facts or context
3. Practical implications or solutions if relevant
4. Keep responses clear and actionable

Environmental expertise areas:
- Climate change, global warming, greenhouse gases
- Waste management, recycling, circular economy
- Biodiversity, conservation, ecosystems
- Renewable energy, sustainability
- Environmental policy and solutions

Answer directly and stay on topic. Use current scientific consensus and data.

User question: ${message}`
                    }]
                }]
            })
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        console.error('Gemini API error:', error);
        // Return error message instead of fallback responses
        return "🤖 **EcoAI Error**: I'm currently unable to connect to my knowledge base. Please check your internet connection and try again. For immediate help, you can also visit environmental websites like EPA.gov or WWF.org for reliable information.";
    }
}

// Close menu when clicking a link

// Close menu when clicking a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Active navigation highlighting on scroll
const sections = document.querySelectorAll('article, section');
const navLinks = document.querySelectorAll('.nav-menu a');

function updateActiveLink() {
    let current = '';
    const scrollPosition = window.scrollY + 150;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === `#${current}`) {
            link.classList.add('active');
        }
        // Also highlight home link when at top
        if (current === 'home' && href === '#home') {
            link.classList.add('active');
        }
        if (current === null && href === '#home') {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);

// Scroll reveal animation for blog posts
function revealPosts() {
    const posts = document.querySelectorAll('.blog-post');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    posts.forEach(post => {
        const postTop = post.getBoundingClientRect().top;
        if (postTop < windowHeight - revealPoint) {
            post.classList.add('revealed');
        }
    });
}

window.addEventListener('scroll', revealPosts);
window.addEventListener('load', revealPosts);

// Add back to top button
const backToTop = document.createElement('button');
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.id = 'back-to-top';
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: #43a047;
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    box-shadow: 0 2px 10px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    z-index: 999;
`;

document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

backToTop.addEventListener('mouseenter', () => {
    backToTop.style.background = '#2e7d32';
    backToTop.style.transform = 'translateY(-3px)';
});

backToTop.addEventListener('mouseleave', () => {
    backToTop.style.background = '#43a047';
    backToTop.style.transform = 'translateY(0)';
});

// Add hover effects for navigation links
const navItems = document.querySelectorAll('.nav-menu a');
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-2px)';
    });
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0)';
    });
});

// Add reading progress indicator
const progressBar = document.createElement('div');
progressBar.id = 'reading-progress';
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #2e7d32, #43a047, #ffd54f);
    z-index: 1001;
    transition: width 0.1s ease;
`;

document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
});

// Add console greeting
console.log('%c🌍 Welcome to EcoVoices! 🌱', 'color: #43a047; font-size: 20px; font-weight: bold;');
console.log('%cLearn about environmental issues and take action for a sustainable future!', 'color: #ffd54f; font-size: 12px;');

// Initialize reveal on load
document.addEventListener('DOMContentLoaded', () => {
    revealPosts();
    updateActiveLink();
    
    // Add fade-in animation to blog posts with delay
    const posts = document.querySelectorAll('.blog-post');
    posts.forEach((post, index) => {
        post.style.transitionDelay = `${index * 0.05}s`;
    });
});

// ==================== CHAT AI ASSISTANT - SEPARATE FUNCTIONALITY ====================

// Toggle Chat Widget
function toggleChatAI() {
    const widget = document.getElementById('chatAiWidget');
    widget.classList.toggle('open');
}

// Send Message
async function sendMessageAI() {
    const input = document.getElementById('chatAIInput');
    const message = input.value.trim();
    
    if (message === '') return;
    
    addMessageAI(message, 'user');
    input.value = '';
    input.style.height = 'auto';
    
    showTypingAI();
    
    try {
        const response = await callGeminiAPI(message);
        removeTypingAI();
        addMessageAI(response, 'bot');
    } catch (error) {
        removeTypingAI();
        addMessageAI("Sorry, I'm having trouble connecting right now. Please try again!", 'bot');
    }
}

// Send Suggestion
async function sendSuggestionAI(suggestion) {
    addMessageAI(suggestion, 'user');
    
    showTypingAI();
    
    try {
        const response = await callGeminiAPI(suggestion);
        removeTypingAI();
        addMessageAI(response, 'bot');
    } catch (error) {
        removeTypingAI();
        addMessageAI("Sorry, I'm having trouble connecting right now. Please try again!", 'bot');
    }
}

// Add Message to Chat
function addMessageAI(text, sender) {
    const messagesContainer = document.getElementById('chatAIMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-ai-message ${sender}`;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Format text - convert markdown-like formatting
    let formattedText = text;
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    formattedText = formattedText.replace(/\n/g, '<br>');
    formattedText = formattedText.replace(/•/g, '•');
    
    messageDiv.innerHTML = `
        <div class="chat-ai-message-avatar">
            <i class="fas ${sender === 'bot' ? 'fa-robot' : 'fa-user'}"></i>
        </div>
        <div class="chat-ai-message-content">
            <p>${formattedText}</p>
        </div>
        <div class="chat-ai-message-time">${time}</div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Show Typing Indicator
function showTypingAI() {
    const messagesContainer = document.getElementById('chatAIMessages');
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chat-ai-message bot';
    typingDiv.id = 'typingAIIndicator';
    typingDiv.innerHTML = `
        <div class="chat-ai-message-avatar">
            <i class="fas fa-robot"></i>
        </div>
        <div class="chat-ai-message-content">
            <div class="typing-indicator-chat">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    messagesContainer.appendChild(typingDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// Remove Typing Indicator
function removeTypingAI() {
    const typingIndicator = document.getElementById('typingAIIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Reset Chat
function resetChatAI() {
    const messagesContainer = document.getElementById('chatAIMessages');
    messagesContainer.innerHTML = `
        <div class="chat-ai-message bot">
            <div class="chat-ai-message-avatar">
                <i class="fas fa-robot"></i>
            </div>
            <div class="chat-ai-message-content">
                <p>👋 Hello! I'm EcoAI, your environmental assistant. I can help you with questions about:</p>
                <div class="chat-ai-topics">
                    <span class="topic-tag">🌡️ Global Warming</span>
                    <span class="topic-tag">🌊 Climate Change</span>
                    <span class="topic-tag">🗑️ Waste Management</span>
                    <span class="topic-tag">🔄 The 5Rs</span>
                    <span class="topic-tag">🤝 Environmental Orgs</span>
                </div>
                <p>What would you like to know about our environment? 🇵🇭</p>
            </div>
            <div class="chat-ai-message-time">Just now</div>
        </div>
    `;
}

// Handle Enter Key
function handleChatAIKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessageAI();
    }
}

// Auto-resize textarea
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.getElementById('chatAIInput');
    if (textarea) {
        textarea.addEventListener('input', function() {
            this.style.height = 'auto';
            this.style.height = Math.min(this.scrollHeight, 100) + 'px';
        });
    }
});

// ==================== EDUCATIONAL GAMES ====================

// Game Data - Quiz Questions
const quizQuestions = [
    {
        question: "What is the primary cause of global warming?",
        options: ["Deforestation", "Burning of fossil fuels", "Volcanic eruptions", "Ocean currents"],
        correct: 1,
        explanation: "Burning fossil fuels (coal, oil, gas) releases carbon dioxide and other greenhouse gases, which trap heat in the atmosphere."
    },
    {
        question: "How many typhoons enter the Philippine Area of Responsibility (PAR) annually on average?",
        options: ["10", "15", "20", "25"],
        correct: 2,
        explanation: "The Philippines experiences an average of 20 typhoons each year, making it one of the most typhoon-prone countries."
    },
    {
        question: "What is the Philippines' rank in the World Risk Report for being most at-risk to climate change?",
        options: ["#1", "#3", "#5", "#10"],
        correct: 0,
        explanation: "The Philippines is ranked #1 most at-risk country to climate change according to the World Risk Report 2023."
    },
    {
        question: "What percentage of ocean plastic pollution comes from the Philippines?",
        options: ["15%", "25%", "36%", "50%"],
        correct: 2,
        explanation: "The Philippines contributes 36% of the world's ocean plastic pollution, making it the 3rd largest contributor globally."
    },
    {
        question: "Which of the following is the most effective R in waste management?",
        options: ["Recycle", "Reuse", "Reduce", "Refuse"],
        correct: 3,
        explanation: "REFUSE is the most effective R because it prevents waste before it's created by saying no to unnecessary items."
    },
    {
        question: "What is the name of the law that governs solid waste management in the Philippines?",
        options: ["Clean Air Act", "RA 9003", "Philippine Environment Code", "Waste Management Act"],
        correct: 1,
        explanation: "RA 9003 or the Ecological Solid Waste Management Act of 2000 is the primary law governing waste management in the Philippines."
    },
    {
        question: "How many local government units in the Philippines have implemented plastic bag bans?",
        options: ["50+", "100+", "200+", "500+"],
        correct: 2,
        explanation: "Over 200 local governments have passed ordinances regulating single-use plastics."
    },
    {
        question: "What is the annual waste generated in the Philippines?",
        options: ["30,000 million kg", "45,000 million kg", "61,000 million kg", "80,000 million kg"],
        correct: 2,
        explanation: "The Philippines generates approximately 61,000 million kilograms of waste annually."
    },
    {
        question: "Which organization is known as the Philippines' first environmental NGO?",
        options: ["Greenpeace Philippines", "Haribon Foundation", "EcoWaste Coalition", "Mother Earth Foundation"],
        correct: 1,
        explanation: "Haribon Foundation, established in 1972, is the Philippines' first environmental NGO."
    },
    {
        question: "What is the main cause of coral reef bleaching?",
        options: ["Plastic pollution", "Overfishing", "Rising ocean temperatures", "Ocean acidification"],
        correct: 2,
        explanation: "Rising ocean temperatures cause corals to expel the algae living in their tissues, leading to bleaching."
    }
];

// True/False Questions
const trueFalseQuestions = [
    { statement: "Global warming is caused by natural factors only.", answer: false, explanation: "Human activities, particularly burning fossil fuels, are the primary cause of global warming." },
    { statement: "The Philippines experiences about 20 typhoons annually.", answer: true, explanation: "Yes, an average of 20 typhoons enter the Philippine Area of Responsibility each year." },
    { statement: "Recycling is the most effective way to reduce waste.", answer: false, explanation: "Refusing and reducing are more effective than recycling." },
    { statement: "RA 9003 bans open dumpsites in the Philippines.", answer: true, explanation: "Yes, RA 9003 prohibits open dumpsites and mandates sanitary landfills." },
    { statement: "The Philippines is the largest contributor to ocean plastic pollution.", answer: false, explanation: "The Philippines is #3, behind China and Indonesia." },
    { statement: "Haribon Foundation was established in 1972.", answer: true, explanation: "Yes, Haribon is the Philippines' first environmental NGO." },
    { statement: "The 5Rs include Refuse, Reduce, Reuse, Repair, and Recycle.", answer: true, explanation: "Yes, these are the 5Rs of waste management hierarchy." },
    { statement: "Climate change only affects polar regions.", answer: false, explanation: "Climate change affects all regions, with the Philippines being one of the most vulnerable." },
    { statement: "One reusable bag can replace 500 single-use plastic bags.", answer: true, explanation: "A reusable bag can replace up to 500 disposable plastic bags over its lifetime." },
    { statement: "Methane is 28 times more potent than CO₂ over 100 years.", answer: true, explanation: "Yes, methane traps significantly more heat than carbon dioxide." }
];

// Word Puzzle Words
const puzzleWords = [
    { word: "GLOBALWARMING", hint: "The long-term heating of Earth's climate system" },
    { word: "CLIMATECHANGE", hint: "Long-term shifts in temperatures and weather patterns" },
    { word: "DEFORESTATION", hint: "Clearing of forests for other land uses" },
    { word: "GREENHOUSE", hint: "Gases that trap heat in the atmosphere" },
    { word: "RECYCLING", hint: "Converting waste into new materials" },
    { word: "COMPOSTING", hint: "Converting organic waste into fertilizer" },
    { word: "BIODIVERSITY", hint: "Variety of life in the world" },
    { word: "SUSTAINABLE", hint: "Meeting needs without compromising future generations" }
];

// Match Pairs Data
const matchPairs = [
    { term: "Global Warming", definition: "Long-term heating of Earth's climate system" },
    { term: "Climate Change", definition: "Long-term shifts in temperatures and weather patterns" },
    { term: "5Rs", definition: "Refuse, Reduce, Reuse, Repair, Recycle" },
    { term: "RA 9003", definition: "Ecological Solid Waste Management Act" },
    { term: "Haribon Foundation", definition: "Philippines' first environmental NGO" },
    { term: "Zero Waste", definition: "Goal of eliminating waste through the 5Rs" }
];

// Game State Variables
let currentQuizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

let currentPuzzleIndex = 0;
let puzzleScore = 0;
let puzzleTimer = null;
let puzzleTimeSeconds = 0;

let matchCards = [];
let selectedCardIndex = null;
let matchScore = 0;
let matchedPairs = 0;

let currentTFIndex = 0;
let tfScore = 0;
let tfAnswered = false;

// Switch Games
function switchGame(gameName) {
    // Update tabs
    document.querySelectorAll('.game-tab').forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    // Hide all games
    document.querySelectorAll('.game-container').forEach(container => container.classList.remove('active'));
    
    // Show selected game
    document.getElementById(`${gameName}-game`).classList.add('active');
    
    // Reset game if needed
    if (gameName === 'quiz') resetQuiz();
    if (gameName === 'wordpuzzle') resetPuzzle();
    if (gameName === 'match') resetMatchGame();
    if (gameName === 'truefalse') resetTrueFalse();
}

// ==================== QUIZ GAME ====================
function loadQuizQuestion() {
    const question = quizQuestions[currentQuizIndex];
    const content = document.getElementById('quiz-content');
    
    content.innerHTML = `
        <div class="quiz-question">
            <h3>${question.question}</h3>
            <div class="quiz-options">
                ${question.options.map((opt, idx) => `
                    <div class="quiz-option" onclick="checkQuizAnswer(${idx})">
                        <div class="quiz-option-letter">${String.fromCharCode(65 + idx)}</div>
                        <div class="quiz-option-text">${opt}</div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    document.getElementById('quiz-current').textContent = currentQuizIndex + 1;
    document.getElementById('quiz-total').textContent = quizQuestions.length;
    document.getElementById('quiz-progress').style.width = `${((currentQuizIndex) / quizQuestions.length) * 100}%`;
    quizAnswered = false;
}

function checkQuizAnswer(selectedIndex) {
    if (quizAnswered) return;
    
    const question = quizQuestions[currentQuizIndex];
    const isCorrect = selectedIndex === question.correct;
    
    if (isCorrect) {
        quizScore++;
        document.getElementById('quiz-score').textContent = quizScore;
    }
    
    // Highlight correct/wrong answers
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, idx) => {
        opt.classList.add('disabled');
        if (idx === question.correct) {
            opt.classList.add('correct');
        }
        if (idx === selectedIndex && !isCorrect) {
            opt.classList.add('wrong');
        }
    });
    
    // Show feedback
    const feedback = document.createElement('div');
    feedback.className = isCorrect ? 'puzzle-feedback correct' : 'puzzle-feedback wrong';
    feedback.innerHTML = isCorrect ? 
        '✓ Correct! ' + question.explanation : 
        '✗ Wrong! The correct answer is: ' + question.options[question.correct] + '. ' + question.explanation;
    feedback.style.marginTop = '20px';
    feedback.style.padding = '15px';
    feedback.style.borderRadius = '10px';
    
    const content = document.getElementById('quiz-content');
    const existingFeedback = content.querySelector('.puzzle-feedback');
    if (existingFeedback) existingFeedback.remove();
    content.appendChild(feedback);
    
    quizAnswered = true;
    
    // Move to next question after delay
    setTimeout(() => {
        if (currentQuizIndex + 1 < quizQuestions.length) {
            currentQuizIndex++;
            loadQuizQuestion();
        } else {
            showQuizResult();
        }
    }, 2000);
}

function showQuizResult() {
    const resultDiv = document.getElementById('quiz-result');
    const contentDiv = document.getElementById('quiz-content');
    const percentage = (quizScore / quizQuestions.length) * 100;
    
    contentDiv.style.display = 'none';
    resultDiv.style.display = 'block';
    
    const resultIcon = document.getElementById('result-icon');
    const resultTitle = document.getElementById('result-title');
    const resultMessage = document.getElementById('result-message');
    
    if (percentage >= 80) {
        resultIcon.innerHTML = '🏆';
        resultIcon.className = 'result-icon success';
        resultTitle.textContent = 'Excellent!';
        resultMessage.textContent = `You scored ${quizScore}/${quizQuestions.length} (${percentage}%). You're an environmental expert! 🌟`;
    } else if (percentage >= 60) {
        resultIcon.innerHTML = '👍';
        resultIcon.className = 'result-icon success';
        resultTitle.textContent = 'Good Job!';
        resultMessage.textContent = `You scored ${quizScore}/${quizQuestions.length} (${percentage}%). Keep learning about our environment! 💚`;
    } else {
        resultIcon.innerHTML = '📚';
        resultIcon.className = 'result-icon failed';
        resultTitle.textContent = 'Keep Learning!';
        resultMessage.textContent = `You scored ${quizScore}/${quizQuestions.length} (${percentage}%). Try reading the blog posts and play again! 🌱`;
    }
}

function resetQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    quizAnswered = false;
    
    document.getElementById('quiz-score').textContent = '0';
    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('quiz-result').style.display = 'none';
    
    loadQuizQuestion();
}

// ==================== WORD PUZZLE GAME ====================
function scrambleWord(word) {
    let scrambled = word.split('');
    for (let i = scrambled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [scrambled[i], scrambled[j]] = [scrambled[j], scrambled[i]];
    }
    return scrambled.join('');
}

function loadPuzzle() {
    const wordData = puzzleWords[currentPuzzleIndex];
    const scrambled = scrambleWord(wordData.word);
    
    document.getElementById('scrambled-word').textContent = scrambled;
    document.getElementById('puzzle-answer').value = '';
    document.getElementById('puzzle-feedback').innerHTML = '';
    document.getElementById('puzzle-feedback').className = '';
    
    // Update hint
    const hintDiv = document.querySelector('.puzzle-hint span');
    hintDiv.textContent = wordData.hint;
}

function checkPuzzleAnswer() {
    const userAnswer = document.getElementById('puzzle-answer').value.trim().toUpperCase();
    const correctWord = puzzleWords[currentPuzzleIndex].word;
    
    if (userAnswer === correctWord) {
        puzzleScore++;
        document.getElementById('puzzle-score').textContent = puzzleScore;
        
        const feedback = document.getElementById('puzzle-feedback');
        feedback.innerHTML = '✓ Correct! Well done!';
        feedback.className = 'puzzle-feedback correct';
        
        if (currentPuzzleIndex + 1 < puzzleWords.length) {
            setTimeout(() => {
                currentPuzzleIndex++;
                loadPuzzle();
            }, 1500);
        } else {
            showPuzzleResult();
        }
    } else {
        const feedback = document.getElementById('puzzle-feedback');
        feedback.innerHTML = `✗ Wrong! The correct answer is: ${correctWord}`;
        feedback.className = 'puzzle-feedback wrong';
        
        setTimeout(() => {
            if (currentPuzzleIndex + 1 < puzzleWords.length) {
                currentPuzzleIndex++;
                loadPuzzle();
            } else {
                showPuzzleResult();
            }
        }, 2000);
    }
}

function showPuzzleResult() {
    const resultDiv = document.getElementById('puzzle-result');
    const contentDiv = document.getElementById('puzzle-content');
    
    contentDiv.style.display = 'none';
    resultDiv.style.display = 'block';
    
    const resultIcon = document.getElementById('puzzle-result-icon');
    const resultTitle = document.getElementById('puzzle-result-title');
    const resultMessage = document.getElementById('puzzle-result-message');
    
    if (puzzleScore === puzzleWords.length) {
        resultIcon.innerHTML = '🎉';
        resultIcon.className = 'result-icon success';
        resultTitle.textContent = 'Perfect Score!';
        resultMessage.textContent = `You unscrambled all ${puzzleWords.length} words correctly! You're a vocabulary champion! 🏆`;
    } else {
        resultIcon.innerHTML = '📖';
        resultIcon.className = 'result-icon failed';
        resultTitle.textContent = 'Great Try!';
        resultMessage.textContent = `You unscrambled ${puzzleScore}/${puzzleWords.length} words. Keep learning environmental terms! 💚`;
    }
}

function resetPuzzle() {
    currentPuzzleIndex = 0;
    puzzleScore = 0;
    
    document.getElementById('puzzle-score').textContent = '0';
    document.getElementById('puzzle-content').style.display = 'block';
    document.getElementById('puzzle-result').style.display = 'none';
    
    loadPuzzle();
}

function handlePuzzleKeyPress(event) {
    if (event.key === 'Enter') {
        checkPuzzleAnswer();
    }
}

// ==================== MATCH THE PAIRS GAME ====================
function initializeMatchGame() {
    // Create cards array
    const cards = [];
    matchPairs.forEach((pair, idx) => {
        cards.push({ id: idx * 2, type: 'term', text: pair.term, pairId: idx });
        cards.push({ id: idx * 2 + 1, type: 'definition', text: pair.definition, pairId: idx });
    });
    
    // Shuffle cards
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    
    matchCards = cards;
    selectedCardIndex = null;
    matchScore = 0;
    matchedPairs = 0;
    
    renderMatchGrid();
}

function renderMatchGrid() {
    const grid = document.getElementById('match-grid');
    grid.innerHTML = matchCards.map((card, idx) => `
        <div class="match-card ${card.type} ${card.matched ? 'matched' : ''}" onclick="selectMatchCard(${idx})">
            ${card.text}
        </div>
    `).join('');
    
    document.getElementById('match-score').textContent = matchScore;
    document.getElementById('match-count').textContent = matchedPairs;
    document.getElementById('match-total').textContent = matchPairs.length;
}

function selectMatchCard(index) {
    const card = matchCards[index];
    
    // Don't allow clicking matched cards
    if (card.matched) return;
    
    // No card selected yet
    if (selectedCardIndex === null) {
        // Select this card
        selectedCardIndex = index;
        highlightCard(index);
        return;
    }
    
    // Second card selected
    const firstCard = matchCards[selectedCardIndex];
    const secondCard = card;
    
    // Check if they match
    if (firstCard.pairId === secondCard.pairId) {
        // Match found
        firstCard.matched = true;
        secondCard.matched = true;
        matchedPairs++;
        matchScore += 10;
        
        document.getElementById('match-score').textContent = matchScore;
        document.getElementById('match-count').textContent = matchedPairs;
        
        renderMatchGrid();
        selectedCardIndex = null;
        
        // Check if game is complete
        if (matchedPairs === matchPairs.length) {
            showMatchResult();
        }
    } else {
        // No match - show temporary error and reset
        showTemporaryError(selectedCardIndex, index);
        selectedCardIndex = null;
        renderMatchGrid();
    }
}

function highlightCard(index) {
    const cards = document.querySelectorAll('.match-card');
    cards.forEach((card, i) => {
        if (i === index) {
            card.classList.add('selected');
        }
    });
}

function showTemporaryError(index1, index2) {
    const cards = document.querySelectorAll('.match-card');
    cards[index1].style.background = '#ffebee';
    cards[index2].style.background = '#ffebee';
    
    setTimeout(() => {
        renderMatchGrid();
    }, 800);
}

function showMatchResult() {
    const resultDiv = document.getElementById('match-result');
    const contentDiv = document.getElementById('match-game');
    
    const resultIcon = document.getElementById('match-result-icon');
    const resultTitle = document.getElementById('match-result-title');
    const resultMessage = document.getElementById('match-result-message');
    
    resultIcon.innerHTML = '🎯';
    resultIcon.className = 'result-icon success';
    resultTitle.textContent = 'Perfect Match!';
    resultMessage.textContent = `You matched all ${matchPairs.length} pairs! Score: ${matchScore} points. Great job learning environmental terms! 🌟`;
    
    resultDiv.style.display = 'block';
}

function resetMatchGame() {
    const resultDiv = document.getElementById('match-result');
    resultDiv.style.display = 'none';
    initializeMatchGame();
}

// ==================== TRUE OR FALSE GAME ====================
function loadTrueFalse() {
    const question = trueFalseQuestions[currentTFIndex];
    const content = document.getElementById('tf-content');
    
    content.innerHTML = `
        <div class="tf-question">
            <h3>${question.statement}</h3>
            <div class="tf-buttons">
                <button class="tf-btn true" onclick="checkTrueFalse(true)">✓ TRUE</button>
                <button class="tf-btn false" onclick="checkTrueFalse(false)">✗ FALSE</button>
            </div>
            <div id="tf-feedback" class="tf-feedback"></div>
        </div>
    `;
    
    document.getElementById('tf-current').textContent = currentTFIndex + 1;
    document.getElementById('tf-total').textContent = trueFalseQuestions.length;
    document.getElementById('tf-progress').style.width = `${((currentTFIndex) / trueFalseQuestions.length) * 100}%`;
    tfAnswered = false;
}

function checkTrueFalse(userAnswer) {
    if (tfAnswered) return;
    
    const question = trueFalseQuestions[currentTFIndex];
    const isCorrect = userAnswer === question.answer;
    const feedbackDiv = document.getElementById('tf-feedback');
    
    if (isCorrect) {
        tfScore++;
        document.getElementById('tf-score').textContent = tfScore;
        feedbackDiv.innerHTML = `✓ Correct! ${question.explanation}`;
        feedbackDiv.className = 'tf-feedback correct';
    } else {
        feedbackDiv.innerHTML = `✗ Wrong! ${question.explanation}`;
        feedbackDiv.className = 'tf-feedback wrong';
    }
    
    tfAnswered = true;
    
    // Disable buttons
    document.querySelectorAll('.tf-btn').forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
    });
    
    // Move to next question after delay
    setTimeout(() => {
        if (currentTFIndex + 1 < trueFalseQuestions.length) {
            currentTFIndex++;
            loadTrueFalse();
        } else {
            showTrueFalseResult();
        }
    }, 2000);
}

function showTrueFalseResult() {
    const resultDiv = document.getElementById('tf-result');
    const contentDiv = document.getElementById('tf-content');
    const percentage = (tfScore / trueFalseQuestions.length) * 100;
    
    contentDiv.style.display = 'none';
    resultDiv.style.display = 'block';
    
    const resultIcon = document.getElementById('tf-result-icon');
    const resultTitle = document.getElementById('tf-result-title');
    const resultMessage = document.getElementById('tf-result-message');
    
    if (percentage >= 80) {
        resultIcon.innerHTML = '🎓';
        resultIcon.className = 'result-icon success';
        resultTitle.textContent = 'Fact Master!';
        resultMessage.textContent = `You got ${tfScore}/${trueFalseQuestions.length} correct! You really know your environmental facts! 🌟`;
    } else if (percentage >= 60) {
        resultIcon.innerHTML = '📚';
        resultIcon.className = 'result-icon success';
        resultTitle.textContent = 'Good Work!';
        resultMessage.textContent = `You scored ${tfScore}/${trueFalseQuestions.length}. Keep learning and you'll become an expert! 💚`;
    } else {
        resultIcon.innerHTML = '🌱';
        resultIcon.className = 'result-icon failed';
        resultTitle.textContent = 'Keep Growing!';
        resultMessage.textContent = `You got ${tfScore}/${trueFalseQuestions.length} correct. Review the blog posts and try again! 🌿`;
    }
}

function resetTrueFalse() {
    currentTFIndex = 0;
    tfScore = 0;
    tfAnswered = false;
    
    document.getElementById('tf-score').textContent = '0';
    document.getElementById('tf-content').style.display = 'block';
    document.getElementById('tf-result').style.display = 'none';
    
    loadTrueFalse();
}

// Initialize games when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadQuizQuestion();
    loadPuzzle();
    initializeMatchGame();
    loadTrueFalse();
});