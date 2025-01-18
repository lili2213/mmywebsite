const menuBtn = document.getElementById('menu-btn-toggle');
const menuList = document.querySelector('ul');
let isClicked = false;

menuBtn.addEventListener('click', () => {
    if(!isClicked) {
        menuList.style.left = 0;
        isClicked = true;
    } else {
        menuList.style.left = '-100%';
        isClicked = false;
    }
}, false);
const correctAnswers = {
    q1: 'A',
    q2: 'B',
    q3: 'B',
    q4: 'A',
    q5: 'A',
    q6: 'B',
    q7: 'A',
    q8: 'A',
    q9: 'A',
    q10: 'A'
};

function checkAnswers() {
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;

    // Loop through each question to check answers
    for (let question in correctAnswers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);

        if (userAnswer && userAnswer.value === correctAnswers[question]) {
            score++;
        }
    }

    // Show result
    const result = document.getElementById('result');
    result.textContent = `You scored ${score} out of ${totalQuestions}.`;
    result.style.fontSize = "20px";
    result.style.fontWeight = "bold";
    
    // Optional: Reset result when changing answers
    const quizForm = document.getElementById('quizForm');
    quizForm.addEventListener('change', () => {
        result.textContent = '';
    });
}
// Get the elements for menu toggle
const linaLink = document.getElementById('lina-link');
const linaSubMenu = document.getElementById('lina-submenu');

// Toggle the display of the Lina submenu
linaLink.addEventListener('click', (event) => {
    if (linaSubMenu.style.display === "none" || linaSubMenu.style.display === "") {
        linaSubMenu.style.display = "block"; // Show the submenu
    } else {
        linaSubMenu.style.display = "none"; // Hide the submenu
    }
});

// Handling section visibility for About, Skills, Experience, Events, and Projects
const aboutLink = document.querySelector('a[href="#about"]');
const skillsLink = document.querySelector('a[href="#skills"]');
const experienceLink = document.querySelector('a[href="#experience"]');
const eventsLink = document.querySelector('a[href="#events"]');
const projectsLink = document.querySelector('a[href="#projects"]');

const aboutContent = document.getElementById('about-content');
const skillsContent = document.getElementById('skills-content');
const experienceContent = document.getElementById('experience-content');
const eventsContent = document.getElementById('events-content');
const projectsContent = document.getElementById('projects-content');

// Helper function to hide all content sections
function hideAllSections() {
    aboutContent.style.display = "none";
    skillsContent.style.display = "none";
    experienceContent.style.display = "none";
    eventsContent.style.display = "none";
    projectsContent.style.display = "none";
}

// Handle clicks for each section link
aboutLink.addEventListener('click', () => {
    hideAllSections();
    aboutContent.style.display = "block";
    linaSubMenu.style.display = "none"; // Hide submenu when an option is clicked
});

skillsLink.addEventListener('click', () => {
    hideAllSections();
    skillsContent.style.display = "block";
    linaSubMenu.style.display = "none"; // Hide submenu when an option is clicked
});

experienceLink.addEventListener('click', () => {
    hideAllSections();
    experienceContent.style.display = "block";
    linaSubMenu.style.display = "none"; // Hide submenu when an option is clicked
});

eventsLink.addEventListener('click', () => {
    hideAllSections();
    eventsContent.style.display = "block";
    linaSubMenu.style.display = "none"; // Hide submenu when an option is clicked
});

projectsLink.addEventListener('click', () => {
    hideAllSections();
    projectsContent.style.display = "block";
    linaSubMenu.style.display = "none"; // Hide submenu when an option is clicked
});

// Function to hide all sections
function hideAllSections() {
    aboutContent.style.display = 'none';
    skillsContent.style.display = 'none';
    experienceContent.style.display = 'none';
    eventsContent.style.display = 'none';
    projectsContent.style.display = 'none';
}

// Event listeners to show content on click
aboutLink.addEventListener('click', () => {
    hideAllSections();
    aboutContent.style.display = 'block';
});

skillsLink.addEventListener('click', () => {
    hideAllSections();
    skillsContent.style.display = 'block';
});

experienceLink.addEventListener('click', () => {
    hideAllSections();
    experienceContent.style.display = 'block';
});

eventsLink.addEventListener('click', () => {
    hideAllSections();
    eventsContent.style.display = 'block';
});

projectsLink.addEventListener('click', () => {
    hideAllSections();
    projectsContent.style.display = 'block';
});
