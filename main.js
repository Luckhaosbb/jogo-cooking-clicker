const scoreEl = document.getElementById('score');
const cpsEl = document.getElementById('cps');
const cookieBtn = document.getElementById('cookie-btn');
const newsTickerEl = document.getElementById('news-ticker');

const upgrades = {
    'auto-clicker': {
        level: 0,
        cost: 10,
        cps: 1,
        costEl: document.getElementById('auto-clicker-cost'),
        levelEl: document.getElementById('auto-clicker-level'),
        btn: document.getElementById('auto-clicker-upgrade')
    },
    'grandma': {
        level: 0,
        cost: 100,
        cps: 8,
        costEl: document.getElementById('grandma-cost'),
        levelEl: document.getElementById('grandma-level'),
        btn: document.getElementById('grandma-upgrade')
    },
    'factory': {
        level: 0,
        cost: 500,
        cps: 47,
        costEl: document.getElementById('factory-cost'),
        levelEl: document.getElementById('factory-level'),
        btn: document.getElementById('factory-upgrade')
    },
    'mine': {
        level: 0,
        cost: 2000,
        cps: 260,
        costEl: document.getElementById('mine-cost'),
        levelEl: document.getElementById('mine-level'),
        btn: document.getElementById('mine-upgrade')
    },
    'shipment': {
        level: 0,
        cost: 10000,
        cps: 1400,
        costEl: document.getElementById('shipment-cost'),
        levelEl: document.getElementById('shipment-level'),
        btn: document.getElementById('shipment-upgrade')
    }
};

let score = 0;
let cookiesPerSecond = 0;

const newsMessages = [
    "Your cookies are popular in the neighborhood!",
    "A local bakery has filed a complaint against your cookie empire.",
    "Scientists have discovered a new element: cookium.",
    "Grandmas are on strike for better pay and more comfortable chairs.",
    "Cookie-powered cars are now a reality.",
    "The stock market is up, fueled by a surge in cookie prices."
];

// --- Event Listeners ---

cookieBtn.addEventListener('click', () => {
    score++;
    updateUI();
});

for (const key in upgrades) {
    const upgrade = upgrades[key];
    upgrade.btn.addEventListener('click', () => {
        if (score >= upgrade.cost) {
            score -= upgrade.cost;
            upgrade.level++;
            upgrade.cost = Math.ceil(upgrade.cost * 1.15);
            recalculateCPS();
            updateUI();
        }
    });
}

// --- Game Loop ---

setInterval(() => {
    score += cookiesPerSecond / 10; // Update score every 100ms for smoother animation
    updateUI();
}, 100);

setInterval(() => {
    const randomIndex = Math.floor(Math.random() * newsMessages.length);
    newsTickerEl.textContent = newsMessages[randomIndex];
}, 5000); // Change news every 5 seconds

// --- Functions ---

function recalculateCPS() {
    cookiesPerSecond = 0;
    for (const key in upgrades) {
        const upgrade = upgrades[key];
        cookiesPerSecond += upgrade.level * upgrade.cps;
    }
}

function updateUI() {
    scoreEl.textContent = Math.floor(score);
    cpsEl.textContent = `per second: ${cookiesPerSecond.toFixed(1)}`;

    for (const key in upgrades) {
        const upgrade = upgrades[key];
        upgrade.costEl.textContent = upgrade.cost;
        upgrade.levelEl.textContent = upgrade.level;

        if (score >= upgrade.cost) {
            upgrade.btn.classList.add('unlocked');
        } else {
            upgrade.btn.classList.remove('unlocked');
        }
    }
}

// Initial setup
recalculateCPS();
updateUI();
newsTickerEl.textContent = newsMessages[0];
