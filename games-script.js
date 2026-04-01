// ==================== GAME DATA ====================

// Quiz Questions
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

// Waste Items for Eco Sort Game (No category hints)
const wasteItems = [
    { id: 1, name: "Banana Peel", icon: "fa-apple-alt", category: "biodegradable" },
    { id: 2, name: "Plastic Bottle", icon: "fa-wine-bottle", category: "recyclable" },
    { id: 3, name: "Diaper", icon: "fa-baby", category: "residual" },
    { id: 4, name: "Newspaper", icon: "fa-newspaper", category: "recyclable" },
    { id: 5, name: "Apple Core", icon: "fa-apple-alt", category: "biodegradable" },
    { id: 6, name: "Glass Bottle", icon: "fa-wine-bottle", category: "recyclable" },
    { id: 7, name: "Used Tissue", icon: "fa-hand-holding-heart", category: "residual" },
    { id: 8, name: "Aluminum Can", icon: "fa-trash-alt", category: "recyclable" },
    { id: 9, name: "Coffee Grounds", icon: "fa-mug-hot", category: "biodegradable" },
    { id: 10, name: "Styrofoam", icon: "fa-box", category: "residual" },
    { id: 11, name: "Cardboard Box", icon: "fa-box", category: "recyclable" },
    { id: 12, name: "Leaves", icon: "fa-leaf", category: "biodegradable" }
];

// Game State Variables
let currentQuizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

let currentPuzzleIndex = 0;
let puzzleScore = 0;

let matchCards = [];
let selectedCardIndex = null;
let matchScore = 0;
let matchedPairs = 0;

let currentTFIndex = 0;
let tfScore = 0;
let tfAnswered = false;

// Eco Sort Game Variables
let currentWasteItems = [];
let selectedItemId = null;
let ecosortScore = 0;
let sortedCount = 0;

// ==================== SWITCH GAMES ====================
function switchGame(gameName) {
    const tabs = document.querySelectorAll('.game-tab-btn');
    tabs.forEach(tab => tab.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    } else {
        tabs.forEach(tab => {
            if (tab.textContent.includes(gameName === 'quiz' ? 'Quiz' : 
                gameName === 'wordpuzzle' ? 'Word' :
                gameName === 'match' ? 'Match' :
                gameName === 'truefalse' ? 'True' : 'Eco')) {
                tab.classList.add('active');
            }
        });
    }
    
    document.querySelectorAll('.game-container').forEach(container => container.classList.remove('active'));
    document.getElementById(`${gameName}-game`).classList.add('active');
    
    if (gameName === 'ecosort') {
        resetEcoSort();
    }
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
    document.getElementById('puzzle-hint-text').textContent = wordData.hint;
    document.getElementById('puzzle-current').textContent = currentPuzzleIndex + 1;
    document.getElementById('puzzle-total').textContent = puzzleWords.length;
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
    const cards = [];
    matchPairs.forEach((pair, idx) => {
        cards.push({ id: idx * 2, type: 'term', text: pair.term, pairId: idx, matched: false });
        cards.push({ id: idx * 2 + 1, type: 'definition', text: pair.definition, pairId: idx, matched: false });
    });
    
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
    if (card.matched) return;
    
    if (selectedCardIndex === null) {
        selectedCardIndex = index;
        highlightCard(index);
        return;
    }
    
    const firstCard = matchCards[selectedCardIndex];
    const secondCard = card;
    
    if (firstCard.pairId === secondCard.pairId) {
        firstCard.matched = true;
        secondCard.matched = true;
        matchedPairs++;
        matchScore += 10;
        
        document.getElementById('match-score').textContent = matchScore;
        document.getElementById('match-count').textContent = matchedPairs;
        
        renderMatchGrid();
        selectedCardIndex = null;
        
        if (matchedPairs === matchPairs.length) {
            showMatchResult();
        }
    } else {
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
    
    document.querySelectorAll('.tf-btn').forEach(btn => {
        btn.disabled = true;
        btn.style.opacity = '0.5';
    });
    
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

// ==================== ECO SORT CHALLENGE GAME ====================

function initializeEcoSort() {
    // Create fresh copy of waste items
    currentWasteItems = wasteItems.map(item => ({
        ...item,
        sorted: false
    }));
    
    // Shuffle the items
    for (let i = currentWasteItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentWasteItems[i], currentWasteItems[j]] = [currentWasteItems[j], currentWasteItems[i]];
    }
    
    selectedItemId = null;
    ecosortScore = 0;
    sortedCount = 0;
    
    // Reset UI elements
    document.getElementById('ecosort-score').textContent = '0';
    document.getElementById('ecosort-count').textContent = '0';
    document.getElementById('ecosort-total').textContent = wasteItems.length;
    document.getElementById('ecosort-progress').style.width = '0%';
    document.getElementById('ecosort-feedback').innerHTML = '';
    document.getElementById('ecosort-feedback').className = '';
    
    // Show game content, hide result
    document.getElementById('ecosort-game-content').style.display = 'block';
    document.getElementById('ecosort-result').style.display = 'none';
    
    // Render items
    renderEcoSortItems();
    clearSelectedBin();
}

function renderEcoSortItems() {
    const container = document.getElementById('ecosort-items');
    container.innerHTML = currentWasteItems.map(item => `
        <div class="waste-item ${item.sorted ? 'sorted' : ''}" data-id="${item.id}" onclick="selectWasteItem(${item.id})">
            <div class="waste-item-icon"><i class="fas ${item.icon}"></i></div>
            <div class="waste-item-name">${item.name}</div>
        </div>
    `).join('');
}

function selectWasteItem(itemId) {
    const item = currentWasteItems.find(i => i.id === itemId);
    if (item.sorted) return;
    
    // Remove previous selection
    document.querySelectorAll('.waste-item').forEach(el => {
        el.classList.remove('selected');
    });
    
    // Add selection to current item
    const selectedElement = document.querySelector(`.waste-item[data-id="${itemId}"]`);
    if (selectedElement) {
        selectedElement.classList.add('selected');
    }
    
    selectedItemId = itemId;
    clearSelectedBin();
}

function sortToBin(binType) {
    if (selectedItemId === null) {
        showEcoSortFeedback('📦 Please select a waste item first!', 'wrong');
        return;
    }
    
    const item = currentWasteItems.find(i => i.id === selectedItemId);
    if (item.sorted) {
        showEcoSortFeedback('⚠️ This item has already been sorted!', 'wrong');
        selectedItemId = null;
        return;
    }
    
    const isCorrect = item.category === binType;
    
    if (isCorrect) {
        item.sorted = true;
        ecosortScore += 10;
        sortedCount++;
        
        document.getElementById('ecosort-score').textContent = ecosortScore;
        document.getElementById('ecosort-count').textContent = sortedCount;
        document.getElementById('ecosort-progress').style.width = `${(sortedCount / wasteItems.length) * 100}%`;
        
        showEcoSortFeedback(`✅ Correct! ${item.name} goes to the ${getBinName(binType)} bin. Great job!`, 'correct');
        
        selectedItemId = null;
        renderEcoSortItems();
        
        if (sortedCount === wasteItems.length) {
            showEcoSortResult();
        }
    } else {
        const correctBin = getBinName(item.category);
        showEcoSortFeedback(`❌ Wrong! ${item.name} does NOT belong to the ${getBinName(binType)} bin. It belongs to the ${correctBin} bin. Try again!`, 'wrong');
        selectedItemId = null;
        renderEcoSortItems();
    }
    
    clearSelectedBin();
    
    // Visual feedback for bin click
    const binElement = document.querySelector(`.bin-card[data-bin="${binType}"]`);
    if (binElement) {
        binElement.style.transform = 'scale(0.98)';
        setTimeout(() => {
            binElement.style.transform = '';
        }, 200);
    }
}

function getBinName(binType) {
    switch(binType) {
        case 'biodegradable': return 'Biodegradable';
        case 'recyclable': return 'Recyclable';
        case 'residual': return 'Residual';
        default: return '';
    }
}

function showEcoSortFeedback(message, type) {
    const feedbackDiv = document.getElementById('ecosort-feedback');
    feedbackDiv.innerHTML = message;
    feedbackDiv.className = `ecosort-feedback ${type}`;
    
    setTimeout(() => {
        if (feedbackDiv.innerHTML === message) {
            feedbackDiv.innerHTML = '';
            feedbackDiv.className = '';
        }
    }, 2500);
}

function clearSelectedBin() {
    document.querySelectorAll('.bin-card').forEach(bin => {
        bin.classList.remove('selected');
    });
}

function showEcoSortResult() {
    const resultDiv = document.getElementById('ecosort-result');
    const resultIcon = document.getElementById('ecosort-result-icon');
    const resultTitle = document.getElementById('ecosort-result-title');
    const resultMessage = document.getElementById('ecosort-result-message');
    const percentage = (ecosortScore / (wasteItems.length * 10)) * 100;
    
    // Hide game content, show result
    document.getElementById('ecosort-game-content').style.display = 'none';
    resultDiv.style.display = 'block';
    
    if (percentage === 100) {
        resultIcon.innerHTML = '🏆';
        resultIcon.className = 'result-icon success';
        resultTitle.textContent = 'Eco Champion!';
        resultMessage.textContent = `Perfect score! You sorted all ${wasteItems.length} items correctly! You're a waste management expert! 🌟🌟🌟`;
    } else if (percentage >= 80) {
        resultIcon.innerHTML = '🎯';
        resultIcon.className = 'result-icon success';
        resultTitle.textContent = 'Great Sorter!';
        resultMessage.textContent = `You sorted ${sortedCount}/${wasteItems.length} items correctly! Score: ${ecosortScore} points. Keep practicing proper waste segregation! 💚`;
    } else if (percentage >= 60) {
        resultIcon.innerHTML = '📚';
        resultIcon.className = 'result-icon success';
        resultTitle.textContent = 'Good Start!';
        resultMessage.textContent = `You sorted ${sortedCount}/${wasteItems.length} items correctly! Score: ${ecosortScore} points. Review the waste management blog to learn more! 🌱`;
    } else {
        resultIcon.innerHTML = '🌿';
        resultIcon.className = 'result-icon failed';
        resultTitle.textContent = 'Keep Learning!';
        resultMessage.textContent = `You sorted ${sortedCount}/${wasteItems.length} items correctly. Don't worry! Read our Waste Management blog and try again! 💪`;
    }
}

function resetEcoSort() {
    // Re-initialize the game with fresh items
    initializeEcoSort();
}

// ==================== INITIALIZE ALL GAMES ====================
document.addEventListener('DOMContentLoaded', () => {
    loadQuizQuestion();
    loadPuzzle();
    initializeMatchGame();
    loadTrueFalse();
    initializeEcoSort();
});