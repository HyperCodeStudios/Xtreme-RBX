async function changeLanguage(lang) {
    try {
        const res = await fetch('languages.json');
        const data = await res.json();
        const text = data[lang];

        if (!text) return;

        document.getElementById('title').innerText = text.title;
        document.getElementById('btn1').innerHTML = `<i class="fas fa-home"></i> ${text.btn1}`;
        document.getElementById('btn2').innerText = text.btn2;
        document.getElementById('btn3').innerText = text.btn3;
        document.getElementById('btn4').innerText = text.btn4;
        document.getElementById('btn5').innerText = text.btn5;

        document.getElementById('card1-title').innerText = text["card1-title"];
        document.getElementById('card1-text').innerText = text["card1-text"];
        document.getElementById('card2-title').innerText = text["card2-title"];
        document.getElementById('card2-text').innerText = text["card2-text"];
        document.getElementById('card3-title').innerText = text["card3-title"];
        document.getElementById('card3-text').innerText = text["card3-text"];
        document.getElementById('card4-title').innerText = text["card4-title"];
        document.getElementById('card4-text').innerText = text["card4-text"];

        document.documentElement.lang = lang;

        localStorage.setItem('selectedLanguage', lang);
    } catch (e) {
        console.error("Couldn't load language file!:", e);
    }
}

window.onload = function() {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    } else {
        changeLanguage('es');
    }
};