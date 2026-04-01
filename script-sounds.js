// EcoAI Sounds + TTS - COMPLETE SYSTEM (API unchanged)
let audioContext = null;
let soundEnabled = true;
let currentSpeech = null;

function initAudio() {
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.warn('AudioContext not supported');
        }
    }
}

function playSound(type) {
    if (!soundEnabled || !audioContext) return;
    const now = audioContext.currentTime;
    let osc = audioContext.createOscillator();
    let gain = audioContext.createGain();
    osc.connect(gain);
    gain.connect(audioContext.destination);

    switch(type) {
        case 'click':
            osc.frequency.value = 800; osc.type = 'sine';
            gain.gain.setValueAtTime(0.3, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            osc.start(now); osc.stop(now + 0.1); break;
        case 'ding':
            osc.frequency.setValueAtTime(800, now); osc.frequency.linearRampToValueAtTime(600, now + 0.1); osc.type = 'triangle';
            gain.gain.setValueAtTime(0.2, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            osc.start(now); osc.stop(now + 0.3); break;
        case 'whoosh':
            osc.frequency.setValueAtTime(400, now); osc.frequency.exponentialRampToValueAtTime(100, now + 0.3); osc.type = 'sine';
            gain.gain.setValueAtTime(0.2, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
            osc.start(now); osc.stop(now + 0.3); break;
        case 'error':
            osc.frequency.setValueAtTime(300, now); osc.frequency.linearRampToValueAtTime(200, now + 0.2); osc.type = 'sawtooth';
            gain.gain.setValueAtTime(0.1, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);
            osc.start(now); osc.stop(now + 0.2); break;
        case 'typing':
            osc.frequency.value = 600; osc.type = 'square';
            gain.gain.setValueAtTime(0.05, now); gain.gain.exponentialRampToValueAtTime(0.01, now + 0.05);
            osc.start(now); osc.stop(now + 0.05); break;
    }
}

function toggleSounds() {
    soundEnabled = !soundEnabled;
    const btn = document.getElementById('soundsToggle');
    btn.querySelector('i').className = soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';
    btn.title = soundEnabled ? 'Mute sounds' : 'Unmute sounds';
    if (soundEnabled) playSound('ding');
    else if (window.speechSynthesis) speechSynthesis.cancel();
}

function speakBotResponse(text) {
    if (!soundEnabled || !window.speechSynthesis) return;
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.9; utterance.pitch = 1.1; utterance.volume = 0.8;
    const voices = speechSynthesis.getVoices();
    const voice = voices.find(v => v.lang.includes('en'));
    if (voice) utterance.voice = voice;
    speechSynthesis.speak(utterance);
}

// Auto add 🔊 buttons to bot messages
function addListenButton(messageDiv) {
    if (messageDiv.querySelector('.speak-btn')) return;
    const content = messageDiv.querySelector('.chat-ai-message-content');
    const p = content.querySelector('p');
    const btn = document.createElement('button');
    btn.className = 'speak-btn';
    btn.innerHTML = '🔊';
    btn.title = 'Listen';
    btn.style.cssText = 'margin-left:10px;background:#43a047;color:white;border:none;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:12px';
    btn.onclick = () => speakBotResponse(p.textContent);
    content.appendChild(btn);
}

// MutationObserver for dynamic messages
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1 && node.matches('.chat-ai-message.bot')) {
                setTimeout(() => addListenButton(node), 200);
            }
        });
    });
});
observer.observe(document.getElementById('chatAIMessages'), {childList: true, subtree: true});

// Auto TTS on new bot messages
const msgObserver = new MutationObserver(mutations => {
    mutations.forEach(() => {
        if (soundEnabled) {
            const lastMsg = document.querySelector('.chat-ai-message.bot:last-child .chat-ai-message-content p');
            if (lastMsg && lastMsg.textContent) speakBotResponse(lastMsg.textContent);
        }
    });
});
msgObserver.observe(document.getElementById('chatAIMessages'), {childList: true, subtree: true});

// Init
document.addEventListener('DOMContentLoaded', initAudio);

// Hook toggle button click
document.addEventListener('click', e => {
    if (e.target.id === 'soundsToggle') toggleSounds();
});
