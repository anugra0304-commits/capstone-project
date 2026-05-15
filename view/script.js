async function applyTheme() {
    try {
        const response = await fetch('./data.json');
        const data = await response.json();
        
        // Dynamic Branding from JSON
        document.getElementById('portal-title').innerText = data.site_name;
        
        // Log for project contribution proof
        console.log("Portal active for:", data.destinations.join(", "));
        
    } catch (err) {
        console.warn("Using default local theme.");
    }
}

// Add a simple password check for "Creative" functionality
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const pass = document.getElementById('pass').value;
    
    if(pass === "PadharoMhareDes") {
        alert("Welcome to the Royal Province!");
        window.location.href = "https://www.tourism.rajasthan.gov.in/"; 
    } else {
        alert("Access Denied. Only the invited may enter.");
    }
});

applyTheme();