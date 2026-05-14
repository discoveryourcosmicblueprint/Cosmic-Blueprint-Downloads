/**
 * Cosmic Blueprint - Display Module
 * Handles all UI rendering and display logic
 */

// ============== CORE NUMBERS DISPLAY ==============

/**
 * Render core numbers grid
 */
function renderCoreNumbers(coreNumbers) {
    const grid = document.getElementById('core-numbers-grid');
    if (!grid) return;
    
    const numbers = [
        { key: 'lifePath', label: 'Life Path', description: 'Your life purpose and journey' },
        { key: 'destiny', label: 'Destiny/Expression', description: 'Your talents and how you express yourself' },
        { key: 'soulUrge', label: 'Soul Urge', description: 'Your inner desires and motivation' },
        { key: 'personality', label: 'Personality', description: 'How others perceive you' },
        { key: 'birthday', label: 'Birthday', description: 'Your special gift and talent' }
    ];
    
    grid.innerHTML = numbers.map(item => {
        const data = coreNumbers[item.key];
        const numberData = NUMEROLOGY_DATA[data.number] || {};
        const isMaster = [11, 22, 33].includes(data.number);
        
        return `
            <div class="number-card ${isMaster ? 'master-number' : ''}" 
                 onclick="showNumberDetail('${item.key}', ${data.number})"
                 data-number="${data.number}">
                ${isMaster ? '<span class="master-badge">Master</span>' : ''}
                <span class="number-label">${item.label}</span>
                <span class="number-value">${data.number}</span>
                <span class="number-name">${numberData.name || 'The Number'}</span>
                <div class="number-keywords">
                    ${(numberData.keywords || []).slice(0, 3).map(k => 
                        `<span class="keyword">${k}</span>`
                    ).join('')}
                </div>
            </div>
        `;
    }).join('');
}

/**
 * Render essence summary
 */
function renderEssence(coreNumbers) {
    const container = document.getElementById('essence-content');
    if (!container) return;
    
    const lpData = NUMEROLOGY_DATA[coreNumbers.lifePath.number] || {};
    const destData = NUMEROLOGY_DATA[coreNumbers.destiny.number] || {};
    const suData = NUMEROLOGY_DATA[coreNumbers.soulUrge.number] || {};
    
    container.innerHTML = `
        <p><strong>At your core,</strong> you are a ${lpData.name || 'unique soul'} on a journey of 
        ${lpData.lifePath?.purpose || 'self-discovery'}. 
        Your ${lpData.keywords?.[0] || 'essence'} nature drives you to 
        ${lpData.lifePath?.meaning || 'fulfill your potential'}.</p>
        
        <p><strong>Your destiny</strong> calls you to express yourself as ${destData.destiny?.worldRole || 'a unique contributor'}. 
        The world sees your ${destData.name || 'qualities'} energy, and you're here to 
        ${destData.destiny?.fulfillment || 'make your mark'}.</p>
        
        <p><strong>Deep within,</strong> your soul yearns for ${suData.soulUrge?.innerDesires || 'fulfillment'}. 
        This inner drive fuels your ${suData.soulUrge?.motivation || 'actions'}, 
        though you may not always recognize its influence on your choices.</p>
        
        <p><strong>Your spiritual lesson</strong> in this lifetime is ${lpData.lifePath?.spiritualLesson || 
        'to grow and evolve through your experiences'}.</p>
    `;
}

// ============== ASTROLOGY DISPLAY ==============

/**
 * Render astrology section
 */
function renderAstrology(astrology) {
    const grid = document.getElementById('astrology-grid');
    const extended = document.getElementById('astro-extended');
    if (!grid) return;
    
    // Main astrology cards
    const cards = [];
    
    // Sun Sign
    if (astrology.sunSign) {
        cards.push(createAstroCard('Sun Sign', astrology.sunSign, 'Core identity and ego'));
    }
    
    // Moon Sign
    if (astrology.moonSign) {
        cards.push(createAstroCard('Moon Sign', astrology.moonSign, 'Emotions and inner self'));
    }
    
    // Rising Sign
    if (astrology.risingSign) {
        cards.push(createAstroCard('Rising Sign', astrology.risingSign, 'How others see you'));
    }
    
    grid.innerHTML = cards.join('');
    
    // Extended details
    if (extended) {
        extended.innerHTML = `
            <h4 style="text-align: center; margin-bottom: 1rem;">Planetary Positions</h4>
            <div class="reading-grid">
                ${Object.entries(astrology.planets).map(([planet, data]) => `
                    <div class="reading-card">
                        <h6>${PLANETS[planet]?.symbol || ''} ${PLANETS[planet]?.name || planet}</h6>
                        <p style="color: var(--color-primary-light); margin-bottom: 0.5rem;">
                            in ${ZODIAC_SIGNS[data.sign]?.name || data.sign}
                        </p>
                        <p style="font-size: 0.85rem; color: var(--color-text-muted);">
                            ${PLANETS[planet]?.meaning || ''}
                        </p>
                    </div>
                `).join('')}
            </div>
            
            ${astrology.aspects.length > 0 ? `
                <h4 style="text-align: center; margin: 2rem 0 1rem;">Major Aspects</h4>
                <div class="reading-grid">
                    ${astrology.aspects.slice(0, 6).map(aspect => `
                        <div class="reading-card">
                            <h6>${PLANETS[aspect.planet1]?.name} ${aspect.symbol} ${PLANETS[aspect.planet2]?.name}</h6>
                            <p style="color: ${aspect.nature === 'Harmonious' ? 'var(--color-success)' : 'var(--color-warning)'};">
                                ${aspect.name} (${aspect.nature})
                            </p>
                            <p style="font-size: 0.85rem;">${aspect.description}</p>
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        `;
    }
}

function createAstroCard(type, signData, description) {
    return `
        <div class="astro-card">
            <div class="astro-card-header">
                <div class="astro-symbol">${signData.symbol}</div>
                <div class="astro-info">
                    <h4>${signData.name}</h4>
                    <span class="astro-type">${type}</span>
                </div>
            </div>
            <div class="astro-details">
                <div class="astro-detail">
                    <span class="label">Element</span>
                    <span class="value">${signData.element}</span>
                </div>
                <div class="astro-detail">
                    <span class="label">Modality</span>
                    <span class="value">${signData.modality}</span>
                </div>
                <div class="astro-detail">
                    <span class="label">Ruler</span>
                    <span class="value">${signData.ruler}</span>
                </div>
            </div>
            <p class="astro-description">${signData.description}</p>
        </div>
    `;
}

// ============== DESTINY MATRIX DISPLAY ==============

/**
 * Render destiny matrix visual
 */
function renderDestinyMatrix(matrix) {
    const container = document.getElementById('destiny-matrix');
    const legend = document.getElementById('matrix-legend');
    if (!container) return;
    
    // Create matrix points
    const positions = {
        'soul': 'top',
        'personality': 'top-left',
        'destiny': 'top-right',
        'comfort': 'center',
        'spiritual': 'left',
        'material': 'right',
        'maleTalent': 'bottom-left',
        'femaleTalent': 'bottom-right',
        'maleKarma': 'bottom'
    };
    
    let pointsHtml = `
        <div class="matrix-lines">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                <line x1="50" y1="10" x2="20" y2="27" />
                <line x1="50" y1="10" x2="80" y2="27" />
                <line x1="20" y1="27" x2="50" y2="50" />
                <line x1="80" y1="27" x2="50" y2="50" />
                <line x1="10" y1="50" x2="50" y2="50" />
                <line x1="90" y1="50" x2="50" y2="50" />
                <line x1="50" y1="50" x2="20" y2="73" />
                <line x1="50" y1="50" x2="80" y2="73" />
                <line x1="20" y1="73" x2="50" y2="90" />
                <line x1="80" y1="73" x2="50" y2="90" />
            </svg>
        </div>
    `;
    
    for (let [key, pos] of Object.entries(positions)) {
        const point = matrix[key];
        if (point) {
            const arcana = MAJOR_ARCANA[point.value] || {};
            pointsHtml += `
                <div class="matrix-point ${pos}" 
                     onclick="showMatrixPointDetail('${key}', ${point.value})"
                     title="${arcana.name || 'Arcana ' + point.value}">
                    ${point.value}
                    <span class="point-label">${point.label}</span>
                </div>
            `;
        }
    }
    
    container.innerHTML = pointsHtml;
    
    // Render legend
    if (legend) {
        legend.innerHTML = `
            <h4 class="legend-title">Matrix Points Guide</h4>
            ${Object.entries(matrix).map(([key, point]) => {
                const arcana = MAJOR_ARCANA[point.value] || {};
                return `
                    <div class="legend-item" onclick="showMatrixPointDetail('${key}', ${point.value})">
                        <span class="legend-number">${point.value}</span>
                        <div class="legend-info">
                            <span class="legend-position">${point.label}</span>
                            <span class="legend-name">${arcana.name || 'Arcana ' + point.value}</span>
                        </div>
                    </div>
                `;
            }).join('')}
        `;
    }
}

// ============== CHAKRA DISPLAY ==============

/**
 * Render chakra section
 */
function renderChakras(chakraData) {
    const grid = document.getElementById('chakra-grid');
    const totals = document.getElementById('chakra-totals');
    if (!grid) return;
    
    // Render individual chakras (top to bottom, 7 to 1)
    grid.innerHTML = [7, 6, 5, 4, 3, 2, 1].map(num => {
        const chakra = CHAKRA_DATA[num];
        const energy = chakraData.chakras[num];
        const arcanaPhysical = MAJOR_ARCANA[energy.physical] || {};
        const arcanaEnergetic = MAJOR_ARCANA[energy.energetic] || {};
        const arcanaEmotional = MAJOR_ARCANA[energy.emotional] || {};
        
        return `
            <div class="chakra-card chakra-${num}">
                <div class="chakra-header">
                    <div class="chakra-symbol">${num}</div>
                    <div class="chakra-info">
                        <h4>${chakra.name}</h4>
                        <span class="chakra-sanskrit">${chakra.sanskrit}</span>
                        <span class="chakra-location">${chakra.location}</span>
                    </div>
                </div>
                
                <div class="chakra-values">
                    <div class="chakra-value-item">
                        <span class="chakra-value-label">Physical</span>
                        <span class="chakra-value-number">${energy.physical}</span>
                        <span class="chakra-value-arcana">${arcanaPhysical.name || ''}</span>
                    </div>
                    <div class="chakra-value-item">
                        <span class="chakra-value-label">Energetic</span>
                        <span class="chakra-value-number">${energy.energetic}</span>
                        <span class="chakra-value-arcana">${arcanaEnergetic.name || ''}</span>
                    </div>
                    <div class="chakra-value-item">
                        <span class="chakra-value-label">Emotional</span>
                        <span class="chakra-value-number">${energy.emotional}</span>
                        <span class="chakra-value-arcana">${arcanaEmotional.name || ''}</span>
                    </div>
                </div>
                
                <div class="chakra-themes">
                    ${chakra.themes.map(t => `<span class="chakra-theme">${t}</span>`).join('')}
                </div>
                
                <p class="chakra-meaning">
                    <strong>Balanced:</strong> ${chakra.balanced}
                </p>
                
                <span class="chakra-status ${energy.status}">${energy.status}</span>
            </div>
        `;
    }).join('');
    
    // Render totals
    if (totals) {
        const t = chakraData.totals;
        const grandArcana = MAJOR_ARCANA[t.grand] || {};
        
        totals.innerHTML = `
            <div class="chakra-total-item">
                <span class="chakra-total-label">Physical Total</span>
                <span class="chakra-total-value">${t.physical}</span>
                <span class="chakra-total-meaning">${MAJOR_ARCANA[t.physical]?.name || ''}</span>
            </div>
            <div class="chakra-total-item">
                <span class="chakra-total-label">Energetic Total</span>
                <span class="chakra-total-value">${t.energetic}</span>
                <span class="chakra-total-meaning">${MAJOR_ARCANA[t.energetic]?.name || ''}</span>
            </div>
            <div class="chakra-total-item">
                <span class="chakra-total-label">Emotional Total</span>
                <span class="chakra-total-value">${t.emotional}</span>
                <span class="chakra-total-meaning">${MAJOR_ARCANA[t.emotional]?.name || ''}</span>
            </div>
            <div class="chakra-total-item">
                <span class="chakra-total-label">Grand Total</span>
                <span class="chakra-total-value">${t.grand}</span>
                <span class="chakra-total-meaning">${grandArcana.name || ''}</span>
            </div>
        `;
    }
}

// ============== DETAILED READINGS ==============

/**
 * Render detailed reading tabs content
 */
function renderDetailedReadings(reading) {
    renderLifePathTab(reading);
    renderDestinyTab(reading);
    renderSoulUrgeTab(reading);
    renderPersonalityTab(reading);
    renderBirthdayTab(reading);
    renderMasterTab(reading);
    renderMatrixTab(reading);
    renderChakrasTab(reading);
    renderAstrologyTab(reading);
    renderPatternsTab(reading);
    renderTimingTab(reading);
    renderSpiritualTab(reading);
    renderIntegratedTab(reading);
}

function renderLifePathTab(reading) {
    const container = document.getElementById('life-path-content');
    if (!container) return;
    
    const num = reading.coreNumbers.lifePath.number;
    const data = NUMEROLOGY_DATA[num] || {};
    const lp = data.lifePath || {};
    
    container.innerHTML = `
        <div class="reading-header">
            <h4>Life Path ${num}: ${data.name || ''}</h4>
            <div class="number-badge">
                <span class="badge-number">${num}</span>
                <span>${data.keywords?.join(' • ') || ''}</span>
            </div>
        </div>
        
        <p class="reading-intro">${lp.meaning || data.shortDescription || ''}</p>
        
        <div class="reading-section">
            <h5>Your Life Purpose</h5>
            <p>${lp.purpose || 'To express your unique gifts and fulfill your potential.'}</p>
        </div>
        
        <div class="reading-section">
            <h5>Core Strengths</h5>
            <ul>
                ${(data.strengths || []).map(s => `<li>${s}</li>`).join('')}
            </ul>
        </div>
        
        <div class="reading-section">
            <h5>Growth Challenges</h5>
            <p>${lp.challenges || 'Every number has its challenges to overcome.'}</p>
            <ul>
                ${(data.challenges || []).map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>
        
        <div class="reading-section">
            <h5>Career & Life Opportunities</h5>
            <p>${lp.opportunities || lp.career || ''}</p>
        </div>
        
        <div class="reading-section">
            <h5>Relationships</h5>
            <p>${lp.relationships || ''}</p>
        </div>
        
        <div class="reading-section">
            <h5>Spiritual Lesson</h5>
            <p>${lp.spiritualLesson || ''}</p>
        </div>
        
        <div class="calculation-display">
            <h5 style="margin-bottom: 0.5rem;">How This Was Calculated</h5>
            ${reading.coreNumbers.lifePath.steps.map(s => `<div class="calc-step">${s}</div>`).join('')}
        </div>
    `;
}

function renderDestinyTab(reading) {
    const container = document.getElementById('destiny-content');
    if (!container) return;
    
    const num = reading.coreNumbers.destiny.number;
    const data = NUMEROLOGY_DATA[num] || {};
    const dest = data.destiny || {};
    
    container.innerHTML = `
        <div class="reading-header">
            <h4>Destiny Number ${num}: ${data.name || ''}</h4>
            <div class="number-badge">
                <span class="badge-number">${num}</span>
                <span>Expression Number</span>
            </div>
        </div>
        
        <p class="reading-intro">${dest.meaning || ''}</p>
        
        <div class="reading-section">
            <h5>Your Expression</h5>
            <p>${dest.expression || ''}</p>
        </div>
        
        <div class="reading-section">
            <h5>Path to Fulfillment</h5>
            <p>${dest.fulfillment || ''}</p>
        </div>
        
        <div class="reading-section">
            <h5>Your World Role</h5>
            <p>${dest.worldRole || ''}</p>
        </div>
        
        <div class="calculation-display">
            <h5 style="margin-bottom: 0.5rem;">How This Was Calculated</h5>
            ${reading.coreNumbers.destiny.steps.map(s => `<div class="calc-step">${s}</div>`).join('')}
        </div>
    `;
}

function renderSoulUrgeTab(reading) {
    const container = document.getElementById('soul-urge-content');
    if (!container) return;
    
    const num = reading.coreNumbers.soulUrge.number;
    const data = NUMEROLOGY_DATA[num] || {};
    const su = data.soulUrge || {};
    
    container.innerHTML = `
        <div class="reading-header">
            <h4>Soul Urge ${num}: ${data.name || ''}</h4>
            <div class="number-badge">
                <span class="badge-number">${num}</span>
                <span>Heart's Desire</span>
            </div>
        </div>
        
        <p class="reading-intro">${su.meaning || ''}</p>
        
        <div class="reading-section">
            <h5>Your Inner Desires</h5>
            <p>${su.innerDesires || ''}</p>
        </div>
        
        <div class="reading-section">
            <h5>What Motivates You</h5>
            <p>${su.motivation || ''}</p>
        </div>
        
        <div class="reading-section">
            <h5>Spiritual Need</h5>
            <p>${su.spiritualNeed || ''}</p>
        </div>
        
        <div class="calculation-display">
            <h5 style="margin-bottom: 0.5rem;">How This Was Calculated</h5>
            ${reading.coreNumbers.soulUrge.steps.map(s => `<div class="calc-step">${s}</div>`).join('')}
        </div>
    `;
}

function renderPersonalityTab(reading) {
    const container = document.getElementById('personality-content');
    if (!container) return;
    
    const num = reading.coreNumbers.personality.number;
    const data = NUMEROLOGY_DATA[num] || {};
    const pers = data.personality || {};
    
    container.innerHTML = `
        <div class="reading-header">
            <h4>Personality Number ${num}: ${data.name || ''}</h4>
            <div class="number-badge">
                <span class="badge-number">${num}</span>
                <span>Outer Self</span>
            </div>
        </div>
        
        <p class="reading-intro">${pers.meaning || ''}</p>
        
        <div class="reading-section">
            <h5>First Impressions</h5>
            <p>${pers.firstImpression || ''}</p>
        </div>
        
        <div class="reading-section">
            <h5>Your Public Image</h5>
            <p>${pers.publicImage || ''}</p>
        </div>
        
        <div class="reading-section">
            <h5>Social Style</h5>
            <p>${pers.socialStyle || ''}</p>
        </div>
        
        <div class="calculation-display">
            <h5 style="margin-bottom: 0.5rem;">How This Was Calculated</h5>
            ${reading.coreNumbers.personality.steps.map(s => `<div class="calc-step">${s}</div>`).join('')}
        </div>
    `;
}

function renderBirthdayTab(reading) {
    const container = document.getElementById('birthday-content');
    if (!container) return;
    
    const num = reading.coreNumbers.birthday.number;
    const data = NUMEROLOGY_DATA[num] || {};
    const bd = data.birthday || {};
    
    container.innerHTML = `
        <div class="reading-header">
            <h4>Birthday Number ${num}: ${data.name || ''}</h4>
            <div class="number-badge">
                <span class="badge-number">${num}</span>
                <span>Special Gift</span>
            </div>
        </div>
        
        <p class="reading-intro">${bd.meaning || ''}</p>
        
        <div class="reading-section">
            <h5>Your Special Talent</h5>
            <p>${bd.talent || ''}</p>
        </div>
        
        <div class="reading-section">
            <h5>Your Approach to Life</h5>
            <p>${bd.approach || ''}</p>
        </div>
    `;
}

function renderMasterTab(reading) {
    const container = document.getElementById('master-content');
    if (!container) return;
    
    const masterNumbers = [];
    for (let [key, value] of Object.entries(reading.coreNumbers)) {
        if ([11, 22, 33].includes(value.number)) {
            masterNumbers.push({ position: key, number: value.number });
        }
    }
    
    if (masterNumbers.length === 0) {
        container.innerHTML = `
            <div class="reading-header">
                <h4>Master Numbers</h4>
            </div>
            <p class="reading-intro">
                You don't have any master numbers (11, 22, or 33) in your core positions. 
                However, master numbers may appear in other aspects of your chart or during certain personal cycles.
            </p>
            <div class="reading-section">
                <h5>About Master Numbers</h5>
                <p>Master numbers (11, 22, and 33) carry heightened spiritual vibrations and greater potential, 
                but also greater challenges. They represent higher octaves of their base numbers (2, 4, and 6).</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = `
        <div class="reading-header">
            <h4>Your Master Numbers</h4>
        </div>
        
        <p class="reading-intro">
            You carry ${masterNumbers.length} master number${masterNumbers.length > 1 ? 's' : ''} in your core chart. 
            Master numbers indicate souls who chose a more challenging but potentially more impactful life path.
        </p>
        
        ${masterNumbers.map(mn => {
            const data = NUMEROLOGY_DATA[mn.number] || {};
            return `
                <div class="reading-section">
                    <h5>${mn.number} - ${data.name || ''} (in ${mn.position})</h5>
                    <p>${data.shortDescription || ''}</p>
                    <p><strong>Light Energy:</strong> ${data.strengths?.join(', ') || ''}</p>
                    <p><strong>Shadow Challenges:</strong> ${data.challenges?.join(', ') || ''}</p>
                </div>
            `;
        }).join('')}
    `;
}

function renderMatrixTab(reading) {
    const container = document.getElementById('matrix-content');
    if (!container) return;
    
    container.innerHTML = `
        <div class="reading-header">
            <h4>Your Destiny Matrix Explained</h4>
        </div>
        
        <p class="reading-intro">
            The Destiny Matrix reveals the energetic patterns encoded in your birth date through the lens of the 22 Major Arcana. 
            Each position represents a different aspect of your soul's journey.
        </p>
        
        ${Object.entries(reading.matrix).map(([key, point]) => {
            const arcana = MAJOR_ARCANA[point.value] || {};
            const posInfo = MATRIX_POSITIONS[key] || {};
            return `
                <div class="expandable-section">
                    <div class="expandable-header" onclick="toggleExpand(this)">
                        <h5>${point.value} - ${arcana.name || 'Arcana'}: ${point.label}</h5>
                        <span class="expand-icon">▼</span>
                    </div>
                    <div class="expandable-content">
                        <p><strong>Position Meaning:</strong> ${posInfo.description || ''}</p>
                        <p><strong>Light Energy:</strong> ${arcana.lightEnergy || ''}</p>
                        <p><strong>Shadow Energy:</strong> ${arcana.shadowEnergy || ''}</p>
                        <p><strong>Life Lesson:</strong> ${arcana.lifeLesson || ''}</p>
                        <p><strong>Guidance:</strong> ${arcana.guidance || ''}</p>
                    </div>
                </div>
            `;
        }).join('')}
    `;
}

function renderChakrasTab(reading) {
    const container = document.getElementById('chakras-content');
    if (!container) return;
    
    container.innerHTML = `
        <div class="reading-header">
            <h4>Your Complete Chakra Analysis</h4>
        </div>
        
        <p class="reading-intro">
            Your birth date creates a unique energetic signature across your seven chakras. 
            Understanding these energies helps you know which areas may need attention or are naturally strong.
        </p>
        
        ${[7, 6, 5, 4, 3, 2, 1].map(num => {
            const chakra = CHAKRA_DATA[num];
            const energy = reading.chakras.chakras[num];
            
            return `
                <div class="expandable-section">
                    <div class="expandable-header" onclick="toggleExpand(this)">
                        <h5 style="display: flex; align-items: center; gap: 0.5rem;">
                            <span style="color: ${chakra.color};">●</span>
                            ${chakra.name} (${chakra.sanskrit})
                        </h5>
                        <span class="expand-icon">▼</span>
                    </div>
                    <div class="expandable-content">
                        <p><strong>Status:</strong> <span class="chakra-status ${energy.status}">${energy.status}</span></p>
                        <p><strong>Energy Values:</strong> Physical ${energy.physical}, Energetic ${energy.energetic}, Emotional ${energy.emotional}</p>
                        <p><strong>Themes:</strong> ${chakra.themes.join(', ')}</p>
                        <p><strong>When Balanced:</strong> ${chakra.balanced}</p>
                        <p><strong>If Overactive:</strong> ${chakra.overactive}</p>
                        <p><strong>If Underactive:</strong> ${chakra.underactive}</p>
                        <p><strong>Affirmation:</strong> "${chakra.affirmation}"</p>
                        <p><strong>Healing Practices:</strong> ${chakra.healingPractices.join(', ')}</p>
                    </div>
                </div>
            `;
        }).join('')}
    `;
}

function renderAstrologyTab(reading) {
    const container = document.getElementById('astrology-content');
    if (!container) return;
    
    const astro = reading.astrology;
    
    container.innerHTML = `
        <div class="reading-header">
            <h4>Your Complete Astrological Profile</h4>
        </div>
        
        <div class="reading-section">
            <h5>Your Sun Sign: ${astro.sunSign?.name || ''}</h5>
            <p>${astro.sunSign?.description || ''}</p>
            <p><strong>Element:</strong> ${astro.sunSign?.element || ''} | <strong>Modality:</strong> ${astro.sunSign?.modality || ''}</p>
            <p><strong>Strengths:</strong> ${astro.sunSign?.strengths?.join(', ') || ''}</p>
            <p><strong>Challenges:</strong> ${astro.sunSign?.weaknesses?.join(', ') || ''}</p>
        </div>
        
        ${astro.moonSign ? `
            <div class="reading-section">
                <h5>Your Moon Sign: ${astro.moonSign.name}</h5>
                <p>${astro.moonSign.description}</p>
                <p><strong>Emotional Nature:</strong> ${astro.moonSign.traits?.join(', ') || ''}</p>
            </div>
        ` : ''}
        
        ${astro.risingSign ? `
            <div class="reading-section">
                <h5>Your Rising Sign: ${astro.risingSign.name}</h5>
                <p>${astro.risingSign.description}</p>
                <p><strong>First Impressions:</strong> Others see you as ${astro.risingSign.traits?.join(', ').toLowerCase() || ''}</p>
            </div>
        ` : `
            <div class="reading-section">
                <h5>Rising Sign</h5>
                <p>Enter your birth time for an accurate rising sign calculation. The rising sign describes how others perceive you at first meeting.</p>
            </div>
        `}
        
        <div class="reading-section">
            <h5>Planetary Positions</h5>
            <div class="reading-grid">
                ${Object.entries(astro.planets).map(([planet, data]) => {
                    const planetInfo = PLANETS[planet] || {};
                    const signInfo = ZODIAC_SIGNS[data.sign] || {};
                    return `
                        <div class="reading-card">
                            <h6>${planetInfo.symbol || ''} ${planetInfo.name || planet}</h6>
                            <p style="color: var(--color-primary-light);">in ${signInfo.name || data.sign}</p>
                            <p style="font-size: 0.85rem;">${planetInfo.meaning || ''}</p>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function renderPatternsTab(reading) {
    const container = document.getElementById('patterns-content');
    if (!container) return;
    
    const patterns = reading.patterns;
    
    container.innerHTML = `
        <div class="reading-header">
            <h4>Your Numerological Patterns</h4>
        </div>
        
        <div class="reading-section">
            <h5>Hidden Passion: ${patterns.hiddenPassion.number}</h5>
            <p>
                The number ${patterns.hiddenPassion.number} appears ${patterns.hiddenPassion.count} times in your name, 
                making it your Hidden Passion. This represents an area of natural talent and intense focus.
            </p>
            <p>${NUMEROLOGY_DATA[patterns.hiddenPassion.number]?.shortDescription || ''}</p>
        </div>
        
        <div class="reading-section">
            <h5>Karmic Lessons</h5>
            ${patterns.karmicLessons.length > 0 ? `
                <p>The following numbers are missing from your name, indicating karmic lessons to work on:</p>
                <ul>
                    ${patterns.karmicLessons.map(num => `
                        <li><strong>${num}:</strong> ${PYTHAGOREAN_MEANINGS[num] || ''}</li>
                    `).join('')}
                </ul>
            ` : `
                <p>All numbers 1-9 appear in your name. You have no specific karmic lessons, 
                suggesting you're working on broader life themes.</p>
            `}
        </div>
    `;
}

function renderTimingTab(reading) {
    const container = document.getElementById('timing-content');
    if (!container) return;
    
    const cycles = reading.cycles;
    const currentAge = new Date().getFullYear() - reading.birthDate.year;
    
    container.innerHTML = `
        <div class="reading-header">
            <h4>Your Personal Cycles & Timing</h4>
        </div>
        
        <div class="reading-section">
            <h5>Current Personal Year: ${cycles.personalYear}</h5>
            <p>${PERSONAL_YEAR_MEANINGS[cycles.personalYear] || ''}</p>
        </div>
        
        <div class="reading-section">
            <h5>Current Personal Month: ${cycles.personalMonth}</h5>
            <p>This month emphasizes ${PERSONAL_YEAR_MEANINGS[cycles.personalMonth] || 'specific themes'} within your year cycle.</p>
        </div>
        
        <div class="reading-section">
            <h5>Pinnacle Cycles</h5>
            <p>Pinnacles represent major life themes during different periods:</p>
            <div class="reading-grid">
                ${cycles.pinnacles.map(p => {
                    const isCurrent = currentAge >= p.start && currentAge < p.end;
                    return `
                        <div class="reading-card" style="${isCurrent ? 'border-color: var(--color-primary);' : ''}">
                            <h6>${p.name} ${isCurrent ? '(Current)' : ''}</h6>
                            <p style="color: var(--color-primary-light);">Number: ${p.number}</p>
                            <p style="font-size: 0.85rem;">Ages ${p.start}-${p.end}</p>
                            <p style="font-size: 0.85rem;">${PINNACLE_MEANINGS[p.number] || ''}</p>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        
        <div class="reading-section">
            <h5>Challenge Numbers</h5>
            <p>Challenges represent lessons to master during different life phases:</p>
            <ul>
                ${cycles.challenges.map(c => `
                    <li><strong>${c.name}:</strong> ${c.number} - ${CHALLENGE_MEANINGS[c.number] || ''}</li>
                `).join('')}
            </ul>
        </div>
    `;
}

function renderSpiritualTab(reading) {
    const container = document.getElementById('spiritual-content');
    if (!container) return;
    
    const lpData = NUMEROLOGY_DATA[reading.coreNumbers.lifePath.number] || {};
    
    container.innerHTML = `
        <div class="reading-header">
            <h4>Your Spiritual Path</h4>
        </div>
        
        <p class="reading-intro">
            Your numbers and stars reveal a unique spiritual journey. 
            Understanding these patterns helps you align with your highest path.
        </p>
        
        <div class="reading-section">
            <h5>Core Spiritual Lesson</h5>
            <p>${lpData.lifePath?.spiritualLesson || 'Your journey is one of growth and self-discovery.'}</p>
        </div>
        
        <div class="reading-section">
            <h5>Spiritual Gifts</h5>
            <p>
                Your Life Path ${reading.coreNumbers.lifePath.number} gives you the gift of ${lpData.keywords?.[0] || 'unique abilities'}.
                Your Soul Urge ${reading.coreNumbers.soulUrge.number} draws you toward ${
                    NUMEROLOGY_DATA[reading.coreNumbers.soulUrge.number]?.soulUrge?.spiritualNeed || 'spiritual growth'
                }.
            </p>
        </div>
        
        <div class="reading-section">
            <h5>Recommended Practices</h5>
            <ul>
                <li>Meditation focusing on your chakra energies</li>
                <li>Journal reflection using the questions provided</li>
                <li>Study of the Major Arcana energies in your matrix</li>
                <li>Work with crystals: ${lpData.crystals?.join(', ') || 'Clear Quartz, Amethyst'}</li>
                <li>Color meditation with ${lpData.color || 'your power colors'}</li>
            </ul>
        </div>
    `;
}

function renderIntegratedTab(reading) {
    const container = document.getElementById('integrated-content');
    if (!container) return;
    
    const lp = reading.coreNumbers.lifePath.number;
    const dest = reading.coreNumbers.destiny.number;
    const su = reading.coreNumbers.soulUrge.number;
    
    container.innerHTML = `
        <div class="reading-header">
            <h4>Integrated Reading Summary</h4>
        </div>
        
        <p class="reading-intro">
            When we look at all your numbers and astrological placements together, 
            a complete picture of your cosmic blueprint emerges.
        </p>
        
        <div class="reading-section">
            <h5>The Story of Your Numbers</h5>
            <p>
                You came into this life with a Life Path ${lp}, bringing ${NUMEROLOGY_DATA[lp]?.keywords?.[0] || 'unique'} 
                energy to your journey. Your name encoded a Destiny ${dest} vibration, calling you to express yourself as 
                ${NUMEROLOGY_DATA[dest]?.destiny?.worldRole || 'a unique contributor'}.
            </p>
            <p>
                Deep within, your Soul Urge ${su} craves ${NUMEROLOGY_DATA[su]?.soulUrge?.innerDesires || 'fulfillment'}. 
                This inner motivation shapes many of your choices, often unconsciously.
            </p>
        </div>
        
        <div class="reading-section">
            <h5>Numerology + Astrology Integration</h5>
            <p>
                Your ${reading.astrology.sunSign?.name || ''} sun sign adds ${reading.astrology.sunSign?.element || ''} energy 
                to your ${NUMEROLOGY_DATA[lp]?.element || ''}-influenced Life Path. This combination suggests 
                ${reading.astrology.sunSign?.element === NUMEROLOGY_DATA[lp]?.element ? 
                    'a reinforced and amplified expression of these qualities' : 
                    'a dynamic interplay between different energetic qualities'}.
            </p>
        </div>
        
        <div class="reading-section">
            <h5>Your Unified Message</h5>
            <p>
                ${NUMEROLOGY_DATA[lp]?.lifePath?.purpose || 'You are here to fulfill your unique purpose.'} 
                Your chakra energies support this through your naturally ${
                    Object.entries(reading.chakras.chakras).find(([k, v]) => v.status === 'balanced')?.[0] ? 'balanced' : 'developing'
                } energy centers. The destiny matrix confirms ${reading.matrix.soul?.value ? 
                    `your soul purpose through the ${MAJOR_ARCANA[reading.matrix.soul.value]?.name || ''} archetype` : 
                    'your unique soul mission'}.
            </p>
        </div>
        
        <div class="reading-section">
            <h5>Key Life Themes</h5>
            <ul>
                <li><strong>Purpose:</strong> ${NUMEROLOGY_DATA[lp]?.lifePath?.purpose || ''}</li>
                <li><strong>Expression:</strong> ${NUMEROLOGY_DATA[dest]?.destiny?.expression || ''}</li>
                <li><strong>Inner Drive:</strong> ${NUMEROLOGY_DATA[su]?.soulUrge?.motivation || ''}</li>
                <li><strong>Current Focus:</strong> ${PERSONAL_YEAR_MEANINGS[reading.cycles.personalYear] || ''}</li>
            </ul>
        </div>
    `;
}

// ============== REFLECTION QUESTIONS ==============

function renderReflectionQuestions(questions) {
    const container = document.getElementById('reflection-questions');
    if (!container) return;
    
    container.innerHTML = questions.map((q, i) => `
        <div class="reflection-question">
            <span class="question-number">${i + 1}</span>
            <span class="question-text">${q}</span>
        </div>
    `).join('');
}

// ============== REVIEWS DISPLAY ==============

function renderReviews() {
    const grid = document.getElementById('reviews-grid');
    if (!grid) return;
    
    const reviews = getStoredReviews();
    
    if (reviews.length === 0) {
        grid.innerHTML = `
            <div class="review-card">
                <div class="review-header">
                    <div class="review-avatar">SM</div>
                    <div class="review-info">
                        <h5>Sarah M.</h5>
                        <div class="review-stars">★★★★★</div>
                    </div>
                </div>
                <p class="review-text">"This reading was incredibly accurate! I've never had such a comprehensive analysis of my numbers and stars. The chakra section was especially insightful."</p>
                <span class="review-date">December 2024</span>
            </div>
            <div class="review-card">
                <div class="review-header">
                    <div class="review-avatar">JD</div>
                    <div class="review-info">
                        <h5>James D.</h5>
                        <div class="review-stars">★★★★★</div>
                    </div>
                </div>
                <p class="review-text">"The destiny matrix revealed things about myself I'd sensed but never articulated. Beautiful interface and very detailed interpretations."</p>
                <span class="review-date">December 2024</span>
            </div>
            <div class="review-card">
                <div class="review-header">
                    <div class="review-avatar">AL</div>
                    <div class="review-info">
                        <h5>Amanda L.</h5>
                        <div class="review-stars">★★★★☆</div>
                    </div>
                </div>
                <p class="review-text">"I love how this combines numerology with astrology and chakras. Really gives you the complete picture. Wish I could save my reading!"</p>
                <span class="review-date">December 2024</span>
            </div>
        `;
        return;
    }
    
    grid.innerHTML = reviews.slice(0, 6).map(review => `
        <div class="review-card">
            <div class="review-header">
                <div class="review-avatar">${review.name.split(' ').map(n => n[0]).join('').toUpperCase()}</div>
                <div class="review-info">
                    <h5>${review.name}</h5>
                    <div class="review-stars">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                </div>
            </div>
            <p class="review-text">"${review.text}"</p>
            <span class="review-date">${new Date(review.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
        </div>
    `).join('');
}

function getStoredReviews() {
    try {
        return JSON.parse(localStorage.getItem('cosmicBlueprint_reviews') || '[]');
    } catch {
        return [];
    }
}

// ============== COMPATIBILITY DISPLAY ==============

function renderCompatibilityResults(results) {
    const container = document.getElementById('compatibility-results');
    if (!container) return;
    
    container.classList.remove('hidden');
    
    container.innerHTML = `
        <div class="compatibility-score">
            <div class="score-circle">
                <span class="score-value">${results.overall}%</span>
                <span class="score-label">Overall</span>
            </div>
            <h3 class="compatibility-level">${results.level}</h3>
            <p class="compatibility-description">${results.description}</p>
        </div>
        
        <div class="compatibility-breakdown">
            <div class="breakdown-item">
                <h5>Life Path Harmony</h5>
                <div class="breakdown-bar">
                    <div class="breakdown-fill" style="width: ${results.lifePath}%"></div>
                </div>
                <span class="breakdown-score">${results.lifePath}%</span>
            </div>
            <div class="breakdown-item">
                <h5>Destiny Alignment</h5>
                <div class="breakdown-bar">
                    <div class="breakdown-fill" style="width: ${results.destiny}%"></div>
                </div>
                <span class="breakdown-score">${results.destiny}%</span>
            </div>
            <div class="breakdown-item">
                <h5>Soul Connection</h5>
                <div class="breakdown-bar">
                    <div class="breakdown-fill" style="width: ${results.soulUrge}%"></div>
                </div>
                <span class="breakdown-score">${results.soulUrge}%</span>
            </div>
            <div class="breakdown-item">
                <h5>Zodiac Compatibility</h5>
                <div class="breakdown-bar">
                    <div class="breakdown-fill" style="width: ${results.zodiac}%"></div>
                </div>
                <span class="breakdown-score">${results.zodiac}%</span>
            </div>
        </div>
    `;
}

// ============== UTILITY DISPLAY FUNCTIONS ==============

function toggleExpand(header) {
    const section = header.parentElement;
    section.classList.toggle('open');
}

function formatDate(month, day, year) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];
    return `${months[month - 1]} ${day}, ${year}`;
}
