// =============================================
// JavaScript Functions - Part 2 of Assignment
// =============================================

// Global variable to demonstrate scope differences
let globalCounter = 0;

// Function with parameters and return value
function calculateSquare(number) {
    // This function takes a number parameter and returns its square
    return number * number;
}

// Function to demonstrate local vs global scope
function demonstrateScope() {
    // Local variable with the same name as a global variable
    let localCounter = 5;
    
    // Modifying the global variable
    globalCounter += 10;
    
    return {
        globalValue: globalCounter,
        localValue: localCounter
    };
}

// Reusable function to trigger CSS animations
function toggleAnimation(element, animationClass, shouldAdd) {
    // This function adds or removes animation classes from elements
    if (shouldAdd) {
        element.classList.add(animationClass);
    } else {
        element.classList.remove(animationClass);
    }
}

// Function to generate random colors
function getRandomColor() {
    // This function returns a random hex color
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// =============================================
// Event Listeners - Combining CSS & JS (Part 3)
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const calculateBtn = document.getElementById('calculateBtn');
    const scopeDemoBtn = document.getElementById('scopeDemoBtn');
    const startAnimationBtn = document.getElementById('startAnimation');
    const stopAnimationBtn = document.getElementById('stopAnimation');
    const changeColorBtn = document.getElementById('changeColor');
    const openModalBtn = document.getElementById('openModal');
    const closeModalBtn = document.getElementById('closeModal');
    const modal = document.getElementById('exampleModal');
    const jsBox = document.getElementById('js-controlled-box');
    
    // Calculate square button event
    calculateBtn.addEventListener('click', function() {
        const input = document.getElementById('numberInput');
        const resultElement = document.getElementById('result');
        
        // Validate input
        if (input.value === '' || isNaN(input.value)) {
            resultElement.textContent = 'Please enter a valid number!';
            resultElement.style.color = '#e74c3c';
            return;
        }
        
        // Use our function with parameters and return value
        const number = parseFloat(input.value);
        const square = calculateSquare(number);
        
        // Display result
        resultElement.textContent = `The square of ${number} is ${square}`;
        resultElement.style.color = '#2c3e50';
        
        // Add a little animation to the result
        resultElement.style.animation = 'none';
        setTimeout(() => {
            resultElement.style.animation = 'fadeIn 1s';
        }, 10);
    });
    
    // Scope demonstration button event
    scopeDemoBtn.addEventListener('click', function() {
        const resultElement = document.getElementById('scopeResult');
        
        // Call our scope demonstration function
        const scopeValues = demonstrateScope();
        
        // Display results showing difference between local and global
        resultElement.innerHTML = `
            Global counter: ${scopeValues.globalValue} <br>
            Local counter: ${scopeValues.localValue} <br>
            <small>Note: The local counter resets each time the function is called, while the global counter persists.</small>
        `;
        
        // Add animation
        resultElement.style.animation = 'none';
        setTimeout(() => {
            resultElement.style.animation = 'slideIn 1s';
        }, 10);
    });
    
    // Animation control buttons
    startAnimationBtn.addEventListener('click', function() {
        // Using our reusable function to add animation class
        toggleAnimation(jsBox, 'animated-box', true);
    });
    
    stopAnimationBtn.addEventListener('click', function() {
        // Using our reusable function to remove animation class
        toggleAnimation(jsBox, 'animated-box', false);
    });
    
    changeColorBtn.addEventListener('click', function() {
        // Using our function that returns a value
        const randomColor = getRandomColor();
        jsBox.style.backgroundColor = randomColor;
        
        // Add a little animation effect
        jsBox.style.transform = 'scale(1.2)';
        setTimeout(() => {
            jsBox.style.transform = 'scale(1)';
        }, 300);
    });
    
    // Modal controls
    openModalBtn.addEventListener('click', function() {
        modal.classList.add('show');
    });
    
    closeModalBtn.addEventListener('click', function() {
        modal.classList.remove('show');
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
        }
    });
    
    // Add some interactive effects to sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
    });
});