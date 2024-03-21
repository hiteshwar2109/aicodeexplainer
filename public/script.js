// script.js
const codeInput = document.getElementById('codeInput');
const outputDiv = document.getElementById('output');

codeInput.addEventListener('input', () => {
    const code = codeInput.value;
    // Call a function to send code to backend for analysis
    sendCodeForAnalysis(code);
});

async function sendCodeForAnalysis(code) {
    try {
        const response = await fetch('/code-analysis', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ code })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch analysis result');
        }

        const { analysisResult } = await response.json();
        // Display analysis result
        outputDiv.innerText = analysisResult;
    } catch (error) {
        console.error('Error:', error.message);
    }
}
