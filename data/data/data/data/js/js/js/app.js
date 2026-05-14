/**
 * Cosmic Blueprint - Main Application
 * Handles user interactions, form processing, and app initialization
 */

// Global state
let currentReading = null;
let selectedRating = 0;

// ============== INITIALIZATION ==============

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Initialize form elements
    populateDateSelects();
    populatePartnerDateSelects();
    
    // Set up event listeners
    setupFormListeners();
    setupTabListeners();
    setupStarRating();
    setupFloatingSymbols();
    
    // Render initial reviews
    renderReviews();
    
    // Check for saved reading
    loadSavedReading();
    
    console.log('✨ Cosmic Blueprint initialized');
}

// ============== FORM SETUP ==============

function populateDateSelects() {
    const daySelect = document.getElementById('birth-day');
    const yearSelect = document.getElementById('birth-year');
    
    // Populate days
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
    
    // Populate years (1920 to current year)
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1920; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

function populatePartnerDateSelects() {
    const daySelect = document.getElementById('partner-day');
    const yearSelect = document.getElementById('partner-year');
    
    if (!daySelect || !yearSelect) return;
    
    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }
    
    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1920; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

function setupFormListeners() {
    // Main form
    const form = document.getElementById('numerology-form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
    
    // Compatibility form
    const compatForm = document.getElementById('compatibility-form');
    if (compatForm) {
        compatForm.addEventListener('submit', handleCompatibilitySubmit);
    }
    
    // Review text counter
    const reviewText = document.getElementById('review-text');
    if (reviewText) {
        reviewText.addEventListener('input', function() {
            const count = document.getElementById('char-count');
            if (count) {
                count.textContent = this.value.length;
            }
        });
    }
}

function setupTabListeners() {
    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.dataset.tab;
            switchTab(tabId);
        });
    });
}

function setupStarRating() {
    const stars = document.querySelectorAll('.star-rating .star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.dataset.rating);
            updateStarDisplay();
        });
        
        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.dataset.rating);
            highlightStars(rating);
        });
    });
    
    const container = document.querySelector('.star-rating');
    if (container) {
        container.addEventListener('mouseleave', function() {
            updateStarDisplay();
        });
    }
}

function highlightStars(rating) {
    const stars = document.querySelectorAll('.star-rating .star');
    stars.forEach((star, index) => {
        star.classList.toggle('active', index < rating);
    });
}

function updateStarDisplay() {
    highlightStars(selectedRating);
}

function setupFloatingSymbols() {
    const container = document.getElementById('floating-symbols');
    if (!container) return;
    
    const symbols = ['☿', '♀', '♂', '♃', '♄', '♅', '♆', '♇', '☉', '☽', 
                     '♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓',
                     '✧', '✦', '⚝', '✶', '❋', '※'];
    
    for (let i = 0; i < 20; i++) {
        const symbol = document.createElement('span');
        symbol.className = 'floating-symbol';
        symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        symbol.style.left = Math.random() * 100 + '%';
        symbol.style.animationDelay = Math.random() * 25 + 's';
        symbol.style.animationDuration = (20 + Math.random() * 15) + 's';
        container.appendChild(symbol);
    }
}

// ============== FORM HANDLING ==============

async function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form values
    const month = parseInt(document.getElementById('birth-month').value);
    const day = parseInt(document.getElementById('birth-day').value);
    const year = parseInt(document.getElementById('birth-year').value);
    const hour = document.getElementById('birth-hour').value;
    const minute = document.getElementById('birth-minute').value;
    const location = document.getElementById('birth-location').value;
    const fullName = document.getElementById('full-name').value.trim();
    const currentName = document.getElementById('current-name').value.trim();
    
    // Validate
    if (!month || !day || !year || !fullName) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Show loading
    showLoading();
    
    // Generate reading (with artificial delay for effect)
    try {
        await simulateCalculation();
        
        const birthData = {
            month,
            day,
            year,
            hour: hour !== '' ? parseInt(hour) : null,
            minute: minute !== '' ? parseInt(minute) : null,
            location,
            fullName,
            currentName
        };
        
        currentReading = generateCompleteReading(birthData);
        
        // Save reading
        saveReading(currentReading);
        
        // Display results
        displayResults(currentReading);
        
        // Hide loading and show results
        hideLoading();
        document.getElementById('hero').classList.add('hidden');
        document.getElementById('input-section').classList.add('hidden');
        document.getElementById('results-section').classList.remove('hidden');
        document.getElementById('compatibility-section').classList.remove('hidden');
        
        // Scroll to results
        document.getElementById('results-section').scrollIntoView({ behavior: 'smooth' });
        
    } catch (error) {
        console.error('Error generating reading:', error);
        hideLoading();
        alert('There was an error generating your reading. Please try again.');
    }
}

function handleCompatibilitySubmit(e) {
    e.preventDefault();
    
    if (!currentReading) {
        alert('Please generate your reading first');
        return;
    }
    
    const month = parseInt(document.getElementById('partner-month').value);
    const day = parseInt(document.getElementById('partner-day').value);
    const year = parseInt(document.getElementById('partner-year').value);
    const name = document.getElementById('partner-name').value.trim();
    
    if (!month || !day || !year || !name) {
        alert('Please fill in all partner fields');
        return;
    }
    
    // Calculate partner's numbers
    const partnerLifePath = calculateLifePath(month, day, year).number;
    const partnerDestiny = calculateDestiny(name).number;
    const partnerSoulUrge = calculateSoulUrge(name).number;
    const partnerSunSign = getZodiacSign(month, day);
    
    const person1 = {
        lifePath: currentReading.coreNumbers.lifePath.number,
        destiny: currentReading.coreNumbers.destiny.number,
        soulUrge: currentReading.coreNumbers.soulUrge.number,
        sunSign: Object.keys(ZODIAC_SIGNS).find(k => 
            ZODIAC_SIGNS[k].name === currentReading.astrology.sunSign?.name
        )
    };
    
    const person2 = {
        lifePath: partnerLifePath,
        destiny: partnerDestiny,
        soulUrge: partnerSoulUrge,
        sunSign: partnerSunSign
    };
    
    const results = calculateCompatibility(person1, person2);
    renderCompatibilityResults(results);
}

// ============== LOADING ANIMATION ==============

function showLoading() {
    const overlay = document.getElementById('loading-overlay');
    overlay.classList.remove('hidden');
    
    // Animate steps
    const steps = overlay.querySelectorAll('.step');
    steps.forEach((step, index) => {
        setTimeout(() => {
            step.classList.add('active');
            if (index > 0) {
                steps[index - 1].classList.remove('active');
                steps[index - 1].classList.add('completed');
            }
        }, index * 400);
    });
}

function hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    overlay.classList.add('hidden');
    
    // Reset steps
    const steps = overlay.querySelectorAll('.step');
    steps.forEach(step => {
        step.classList.remove('active', 'completed');
    });
}

function simulateCalculation() {
    return new Promise(resolve => setTimeout(resolve, 3200));
}

// ============== DISPLAY RESULTS ==============

function displayResults(reading) {
    // Header info
    document.getElementById('user-name-display').textContent = reading.name;
    document.getElementById('user-birthdate-display').textContent = 
        formatDate(reading.birthDate.month, reading.birthDate.day, reading.birthDate.year);
    
    // Zodiac badges
    const zodiacDisplay = document.getElementById('user-zodiac-display');
    zodiacDisplay.innerHTML = `
        <div class="zodiac-badge">
            <span class="zodiac-symbol">${reading.astrology.sunSign?.symbol || ''}</span>
            <span>${reading.astrology.sunSign?.name || ''} Sun</span>
        </div>
        ${reading.astrology.moonSign ? `
            <div class="zodiac-badge">
                <span class="zodiac-symbol">${reading.astrology.moonSign.symbol}</span>
                <span>${reading.astrology.moonSign.name} Moon</span>
            </div>
        ` : ''}
        ${reading.astrology.risingSign ? `
            <div class="zodiac-badge">
                <span class="zodiac-symbol">${reading.astrology.risingSign.symbol}</span>
                <span>${reading.astrology.risingSign.name} Rising</span>
            </div>
        ` : ''}
    `;
    
    // Render all sections
    renderCoreNumbers(reading.coreNumbers);
    renderEssence(reading.coreNumbers);
    renderAstrology(reading.astrology);
    renderDestinyMatrix(reading.matrix);
    renderChakras(reading.chakras);
    renderDetailedReadings(reading);
    renderReflectionQuestions(reading.reflectionQuestions);
}

// ============== TAB SWITCHING ==============

function switchTab(tabId) {
    // Update buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.tab === tabId);
    });
    
    // Update content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.toggle('active', content.id === tabId + '-content');
    });
}

// ============== MODAL FUNCTIONS ==============

function showModal(type) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    
    body.innerHTML = getModalContent(type);
    modal.classList.remove('hidden');
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

function getModalContent(type) {
    const contents = {
        'about-numerology': `
            <h3>About Numerology</h3>
            <p>Numerology is the ancient study of numbers and their spiritual significance. It reveals the hidden patterns and meanings in your birth date and name.</p>
            <h4>The Five Core Numbers</h4>
            <ul>
                <li><strong>Life Path:</strong> Your main life purpose and journey</li>
                <li><strong>Destiny:</strong> Your talents and how you express yourself</li>
                <li><strong>Soul Urge:</strong> Your inner desires and motivation</li>
                <li><strong>Personality:</strong> How others perceive you</li>
                <li><strong>Birthday:</strong> A special gift or talent</li>
            </ul>
            <h4>Master Numbers</h4>
            <p>11, 22, and 33 are master numbers carrying heightened spiritual potential and greater life challenges.</p>
        `,
        'about-astrology': `
            <h3>About Astrology</h3>
            <p>Astrology studies the positions of celestial bodies at your birth to understand your personality, strengths, and life path.</p>
            <h4>The Big Three</h4>
            <ul>
                <li><strong>Sun Sign:</strong> Your core identity and ego</li>
                <li><strong>Moon Sign:</strong> Your emotional nature and inner self</li>
                <li><strong>Rising Sign:</strong> How others first perceive you</li>
            </ul>
            <h4>Planets and Houses</h4>
            <p>Each planet represents different life areas, and the houses show where these energies manifest in your life.</p>
        `,
        'about-chakras': `
            <h3>About Chakras</h3>
            <p>Chakras are energy centers in the body that influence our physical, emotional, and spiritual well-being.</p>
            <h4>The Seven Main Chakras</h4>
            <ul>
                <li><strong>Root (1):</strong> Security and survival</li>
                <li><strong>Sacral (2):</strong> Creativity and emotions</li>
                <li><strong>Solar Plexus (3):</strong> Personal power</li>
                <li><strong>Heart (4):</strong> Love and compassion</li>
                <li><strong>Throat (5):</strong> Communication</li>
                <li><strong>Third Eye (6):</strong> Intuition</li>
                <li><strong>Crown (7):</strong> Spirituality</li>
            </ul>
        `,
        'about-matrix': `
            <h3>About Destiny Matrix</h3>
            <p>The Destiny Matrix uses the 22 Major Arcana energies to reveal your soul's journey, talents, karmic lessons, and life purpose.</p>
            <h4>Key Matrix Points</h4>
            <ul>
                <li><strong>Soul Purpose:</strong> What your soul came to experience</li>
                <li><strong>Comfort Zone:</strong> Your natural talents</li>
                <li><strong>Karmic Lessons:</strong> Past life energies to balance</li>
                <li><strong>Talents:</strong> Masculine and feminine gifts</li>
            </ul>
        `,
        'master-numbers': `
            <h3>Master Numbers Guide</h3>
            <h4>11 - The Intuitive</h4>
            <p>The spiritual messenger with heightened intuition and inspiration. Challenges: nervous tension and self-doubt.</p>
            <h4>22 - The Master Builder</h4>
            <p>The practical visionary who can manifest dreams into reality on a grand scale. Challenges: overwhelm and pressure.</p>
            <h4>33 - The Master Teacher</h4>
            <p>The master healer who uplifts humanity through unconditional love. Challenges: martyrdom and self-sacrifice.</p>
        `,
        'zodiac-guide': `
            <h3>Zodiac Sign Guide</h3>
            <h4>Fire Signs (Aries, Leo, Sagittarius)</h4>
            <p>Passionate, energetic, and inspiring. They take action and lead with enthusiasm.</p>
            <h4>Earth Signs (Taurus, Virgo, Capricorn)</h4>
            <p>Practical, grounded, and reliable. They build lasting structures and value stability.</p>
            <h4>Air Signs (Gemini, Libra, Aquarius)</h4>
            <p>Intellectual, communicative, and social. They connect ideas and people.</p>
            <h4>Water Signs (Cancer, Scorpio, Pisces)</h4>
            <p>Emotional, intuitive, and deep. They feel and understand on profound levels.</p>
        `,
        'compatibility-guide': `
            <h3>Compatibility Guide</h3>
            <p>Compatibility is complex and involves multiple factors:</p>
            <h4>Life Path Compatibility</h4>
            <p>When Life Paths harmonize, you share similar life approaches and goals.</p>
            <h4>Soul Urge Compatibility</h4>
            <p>Compatible Soul Urges mean you understand each other's deepest needs.</p>
            <h4>Elemental Harmony</h4>
            <p>Fire + Air and Earth + Water are naturally compatible combinations.</p>
            <p><em>Remember: Any combination can work with awareness, effort, and love!</em></p>
        `,
        'faq': `
            <h3>Frequently Asked Questions</h3>
            <h4>How accurate is this reading?</h4>
            <p>Our calculations use traditional numerology, astrology, and chakra systems. The interpretations are meant for self-reflection and entertainment.</p>
            <h4>Do I need my exact birth time?</h4>
            <p>Birth time is needed for an accurate Rising sign. Without it, we can still calculate all numerology and sun/moon signs.</p>
            <h4>Can I save my reading?</h4>
            <p>Your reading is saved in your browser. Use the Print/Save PDF button to create a permanent copy.</p>
        `,
        'privacy': `
            <h3>Privacy Policy</h3>
            <p>Your data stays in your browser. We don't collect, store, or share any personal information.</p>
            <p>All calculations happen locally on your device.</p>
        `,
        'contact': `
            <h3>Contact</h3>
            <p>Cosmic Blueprint was created by Spencer McGee.</p>
            <p>For questions or feedback, please reach out through the review section.</p>
        `
    };
    
    return contents[type] || '<p>Content not found.</p>';
}

// ============== NUMBER DETAIL MODAL ==============

function showNumberDetail(position, number) {
    const data = NUMEROLOGY_DATA[number] || {};
    const positionNames = {
        lifePath: 'Life Path',
        destiny: 'Destiny/Expression',
        soulUrge: 'Soul Urge',
        personality: 'Personality',
        birthday: 'Birthday'
    };
    
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <h3>${positionNames[position] || position}: ${number} - ${data.name || ''}</h3>
        <p>${data.shortDescription || ''}</p>
        <h4>Keywords</h4>
        <p>${data.keywords?.join(', ') || ''}</p>
        <h4>Strengths</h4>
        <ul>${(data.strengths || []).map(s => `<li>${s}</li>`).join('')}</ul>
        <h4>Challenges</h4>
        <ul>${(data.challenges || []).map(c => `<li>${c}</li>`).join('')}</ul>
        <h4>Associations</h4>
        <p><strong>Color:</strong> ${data.color || ''}</p>
        <p><strong>Planet:</strong> ${data.planet || ''}</p>
        <p><strong>Element:</strong> ${data.element || ''}</p>
        <p><strong>Tarot:</strong> ${data.tarot || ''}</p>
        <p><strong>Crystals:</strong> ${data.crystals?.join(', ') || ''}</p>
    `;
    
    document.getElementById('modal').classList.remove('hidden');
}

function showMatrixPointDetail(position, arcanaNum) {
    const arcana = MAJOR_ARCANA[arcanaNum] || {};
    const posInfo = MATRIX_POSITIONS[position] || {};
    
    const body = document.getElementById('modal-body');
    body.innerHTML = `
        <h3>${arcanaNum} - ${arcana.name || 'Arcana'}</h3>
        <p><strong>Position:</strong> ${posInfo.name || position}</p>
        <p>${posInfo.description || ''}</p>
        <h4>Keywords</h4>
        <p>${arcana.keywords?.join(', ') || ''}</p>
        <h4>Light Energy</h4>
        <p>${arcana.lightEnergy || ''}</p>
        <h4>Shadow Energy</h4>
        <p>${arcana.shadowEnergy || ''}</p>        <h4>Life Lesson</h4>
        <p>${arcana.lifeLesson || ''}</p>
        <h4>Spiritual Gift</h4>
        <p>${arcana.spiritualGift || ''}</p>
        <h4>Guidance</h4>
        <p>${arcana.guidance || ''}</p>
        <h4>Associations</h4>
        <p><strong>Element:</strong> ${arcana.element || ''}</p>
        <p><strong>Planet:</strong> ${arcana.planet || ''}</p>
        <p><strong>Body Connection:</strong> ${arcana.bodyConnection || ''}</p>
    `;
    
    document.getElementById('modal').classList.remove('hidden');
}

// ============== UTILITY FUNCTIONS ==============

function scrollToForm() {
    document.getElementById('input-section').scrollIntoView({ behavior: 'smooth' });
}

function startNewReading() {
    // Reset form
    document.getElementById('numerology-form').reset();
    
    // Hide results, show form
    document.getElementById('results-section').classList.add('hidden');
    document.getElementById('compatibility-section').classList.add('hidden');
    document.getElementById('hero').classList.remove('hidden');
    document.getElementById('input-section').classList.remove('hidden');
    
    // Clear compatibility results
    const compatResults = document.getElementById('compatibility-results');
    if (compatResults) {
        compatResults.classList.add('hidden');
        compatResults.innerHTML = '';
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    currentReading = null;
}

function toggleCalculations() {
    const display = document.getElementById('calculation-breakdown');
    if (!display || !currentReading) return;
    
    if (display.classList.contains('hidden')) {
        display.classList.remove('hidden');
        display.innerHTML = `
            <h4 style="margin-bottom: 1rem;">Calculation Breakdown</h4>
            
            <div style="margin-bottom: 1rem;">
                <strong>Life Path Number:</strong>
                ${currentReading.coreNumbers.lifePath.steps.map(s => `<div class="calc-step">${s}</div>`).join('')}
            </div>
            
            <div style="margin-bottom: 1rem;">
                <strong>Destiny Number:</strong>
                ${currentReading.coreNumbers.destiny.steps.map(s => `<div class="calc-step">${s}</div>`).join('')}
            </div>
            
            <div style="margin-bottom: 1rem;">
                <strong>Soul Urge Number:</strong>
                ${currentReading.coreNumbers.soulUrge.steps.map(s => `<div class="calc-step">${s}</div>`).join('')}
            </div>
            
            <div style="margin-bottom: 1rem;">
                <strong>Personality Number:</strong>
                ${currentReading.coreNumbers.personality.steps.map(s => `<div class="calc-step">${s}</div>`).join('')}
            </div>
        `;
    } else {
        display.classList.add('hidden');
    }
}

function shareReading() {
    if (!currentReading) return;
    
    const text = `✨ My Cosmic Blueprint ✨
    
Life Path: ${currentReading.coreNumbers.lifePath.number} - ${NUMEROLOGY_DATA[currentReading.coreNumbers.lifePath.number]?.name || ''}
Destiny: ${currentReading.coreNumbers.destiny.number} - ${NUMEROLOGY_DATA[currentReading.coreNumbers.destiny.number]?.name || ''}
Sun Sign: ${currentReading.astrology.sunSign?.name || ''}

Discover your cosmic blueprint at this site!`;

    if (navigator.share) {
        navigator.share({
            title: 'My Cosmic Blueprint',
            text: text
        }).catch(console.error);
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(text).then(() => {
            alert('Reading summary copied to clipboard!');
        }).catch(() => {
            alert('Unable to share. Please copy manually.');
        });
    }
}

// ============== LOCAL STORAGE ==============

function saveReading(reading) {
    try {
        localStorage.setItem('cosmicBlueprint_lastReading', JSON.stringify(reading));
    } catch (e) {
        console.warn('Could not save reading to localStorage:', e);
    }
}

function loadSavedReading() {
    try {
        const saved = localStorage.getItem('cosmicBlueprint_lastReading');
        if (saved) {
            // Don't auto-load, but could offer to restore
            console.log('Previous reading found in storage');
        }
    } catch (e) {
        console.warn('Could not load saved reading:', e);
    }
}

function submitReview() {
    const name = document.getElementById('review-name').value.trim();
    const text = document.getElementById('review-text').value.trim();
    
    if (!name || !text || selectedRating === 0) {
        alert('Please fill in your name, review, and select a rating');
        return;
    }
    
    const review = {
        name,
        text,
        rating: selectedRating,
        date: new Date().toISOString()
    };
    
    // Save to localStorage
    try {
        const reviews = JSON.parse(localStorage.getItem('cosmicBlueprint_reviews') || '[]');
        reviews.unshift(review);
        localStorage.setItem('cosmicBlueprint_reviews', JSON.stringify(reviews.slice(0, 50)));
        
        // Reset form
        document.getElementById('review-name').value = '';
        document.getElementById('review-text').value = '';
        document.getElementById('char-count').textContent = '0';
        selectedRating = 0;
        updateStarDisplay();
        
        // Re-render reviews
        renderReviews();
        
        alert('Thank you for your review! ✨');
    } catch (e) {
        console.error('Could not save review:', e);
        alert('There was an error saving your review. Please try again.');
    }
}

// ============== KEYBOARD NAVIGATION ==============

document.addEventListener('keydown', function(e) {
    // Close modal on Escape
    if (e.key === 'Escape') {
        const modal = document.getElementById('modal');
        if (!modal.classList.contains('hidden')) {
            closeModal();
        }
    }
});

// ============== WINDOW EVENTS ==============

// Handle print
window.addEventListener('beforeprint', function() {
    // Expand all tabs for printing
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = 'block';
    });
});

window.addEventListener('afterprint', function() {
    // Restore tab visibility
    document.querySelectorAll('.tab-content').forEach(content => {
        content.style.display = '';
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// ============== EXPORT FOR GLOBAL ACCESS ==============

// Make functions globally available
window.scrollToForm = scrollToForm;
window.startNewReading = startNewReading;
window.toggleCalculations = toggleCalculations;
window.shareReading = shareReading;
window.showModal = showModal;
window.closeModal = closeModal;
window.showNumberDetail = showNumberDetail;
window.showMatrixPointDetail = showMatrixPointDetail;
window.submitReview = submitReview;
window.toggleExpand = toggleExpand;
