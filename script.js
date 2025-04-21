const translations = {
    es: {
        homeLink: "Inicio",
        methodsLink: "Métodos",
        toolsLink: "Herramientas",
        contactLink: "Contacto",
        headerTitle: "Bienvenido a <span class=\"highlight\">XtremeRBX</span>",
        headerDescription: "Descubre los mejores métodos para conseguir <span class=\"green\">Robux gratis</span>, con consejos reales y actualizados.",
        startButton: "Empezar ahora",
        methodsTitle: "Métodos Populares",
        mentorTitle: "Mentor Roblox",
        mentorDescription: "Sigue nuestros pasos y conviértete en un jugador experto que sabe cómo moverse y conseguir lo que quiere.",
        tipsTitle: "Consejos prácticos",
        tipsDescription: "Desde cómo intercambiar items hasta qué juegos tienen más Robux oculto: te lo contamos todo.",
        gamificationTitle: "Gamificación",
        gamificationDescription: "Aprende jugando. Cada truco, cada desafío que superes, te prepara para ganar más Robux de forma inteligente.",
        toolsTitle: "Robux Calculator",
        calcBeforeTitle: "Robux before the commission",
        calcBeforeDescription: "The amount of Robux you will get paid",
        calcAfterTitle: "Robux after the commission (-30%)",
        calcAfterDescription: "Amount of Robux you will receive on your account",
        testimonialsTitle: "Lo que dicen nuestros usuarios",
        testimonial1: `"¡Gracias a XtremeRBX conseguí Robux sin gastar dinero y funcionó perfecto!"<br />— <span class="highlight">AlexGamer24</span>`,
        testimonial2: `"Los métodos son reales, seguros y fáciles de seguir. ¡Muy recomendado!"<br />— <span class="highlight">RobloxQueen88</span>`,
        faqTitle: "Preguntas Frecuentes",
        faq1: "<strong>¿Es seguro usar estos métodos?</strong><br />Sí, todos los métodos han sido verificados por nuestra comunidad y son 100% seguros.",
        faq2: "<strong>¿Necesito descargar algo?</strong><br />No. Todos los métodos son online y no requieren descargas.",
        faq3: "<strong>¿Funcionan en cualquier país?</strong><br />Sí, nuestros métodos funcionan en la mayoría de los países donde Roblox está disponible.",
        privacyPolicyLink: "Política de privacidad"
    },
    en: {
        homeLink: "Home",
        methodsLink: "Methods",
        toolsLink: "Tools",
        contactLink: "Contact",
        headerTitle: "Welcome to <span class=\"highlight\">XtremeRBX</span>",
        headerDescription: "Discover the best ways to get <span class=\"green\">free Robux</span>, with real and updated tips.",
        startButton: "Get Started",
        methodsTitle: "Popular Methods",
        mentorTitle: "Roblox Mentor",
        mentorDescription: "Follow our steps and become an expert player who knows how to move and get what they want.",
        tipsTitle: "Practical Tips",
        tipsDescription: "From how to trade items to which games hide the most Robux: we tell you everything.",
        gamificationTitle: "Gamification",
        gamificationDescription: "Learn by playing. Every trick and challenge prepares you to earn more Robux smartly.",
        toolsTitle: "Robux Calculator",
        calcBeforeTitle: "Robux before the commission",
        calcBeforeDescription: "The amount of Robux you will get paid",
        calcAfterTitle: "Robux after the commission (-30%)",
        calcAfterDescription: "Amount of Robux you will receive on your account",
        testimonialsTitle: "What our users say",
        testimonial1: `"Thanks to XtremeRBX I got Robux without spending money and it worked perfectly!"<br />— <span class="highlight">AlexGamer24</span>`,
        testimonial2: `"The methods are real, safe, and easy to follow. Highly recommended!"<br />— <span class="highlight">RobloxQueen88</span>`,
        faqTitle: "Frequently Asked Questions",
        faq1: "<strong>Is it safe to use these methods?</strong><br />Yes, all methods have been verified by our community and are 100% safe.",
        faq2: "<strong>Do I need to download anything?</strong><br />No. All methods are online and require no downloads.",
        faq3: "<strong>Do they work in any country?</strong><br />Yes, our methods work in most countries where Roblox is available.",
        privacyPolicyLink: "Privacy Policy"
    },
    de: {
        homeLink: "Startseite",
        methodsLink: "Methoden",
        toolsLink: "Werkzeuge",
        contactLink: "Kontakt",
        headerTitle: "Willkommen bei <span class=\"highlight\">XtremeRBX</span>",
        headerDescription: "Entdecke die besten Methoden, um <span class=\"green\">kostenlos Robux</span> zu erhalten – mit echten, aktuellen Tipps.",
        startButton: "Jetzt starten",
        methodsTitle: "Beliebte Methoden",
        mentorTitle: "Roblox Mentor",
        mentorDescription: "Folge unseren Schritten und werde ein erfahrener Spieler, der weiß, wie man sich zurechtfindet und was man tun muss.",
        tipsTitle: "Praktische Tipps",
        tipsDescription: "Von Item-Tausch bis zu Spielen mit verstecktem Robux – wir erzählen dir alles.",
        gamificationTitle: "Gamifizierung",
        gamificationDescription: "Lerne spielerisch. Jeder Trick und jede Herausforderung bereitet dich darauf vor, Robux clever zu verdienen.",
        toolsTitle: "Robux Rechner",
        calcBeforeTitle: "Robux vor der Provision",
        calcBeforeDescription: "Die Anzahl an Robux, die du bekommst",
        calcAfterTitle: "Robux nach der Provision (-30%)",
        calcAfterDescription: "Robux, die du auf deinem Account erhältst",
        testimonialsTitle: "Was unsere Nutzer sagen",
        testimonial1: `"Dank XtremeRBX habe ich kostenlos Robux bekommen – es hat perfekt funktioniert!"<br />— <span class="highlight">AlexGamer24</span>`,
        testimonial2: `"Die Methoden sind echt, sicher und leicht nachvollziehbar. Sehr empfehlenswert!"<br />— <span class="highlight">RobloxQueen88</span>`,
        faqTitle: "Häufige Fragen",
        faq1: "<strong>Ist es sicher, diese Methoden zu verwenden?</strong><br />Ja, alle Methoden wurden von unserer Community geprüft und sind 100% sicher.",
        faq2: "<strong>Muss ich etwas herunterladen?</strong><br />Nein. Alle Methoden sind online und erfordern keinen Download.",
        faq3: "<strong>Funktioniert das in jedem Land?</strong><br />Ja, unsere Methoden funktionieren in den meisten Ländern, in denen Roblox verfügbar ist.",
        privacyPolicyLink: "Datenschutzrichtlinie"
    }
};
  
function changeLanguage(lang) {
    const dict = translations[lang];
    if (!dict) return;

    for (const [id, translation] of Object.entries(dict)) {
        const el = document.getElementById(id);
        if (el) {
        el.innerHTML = translation;
        }
    }
} 

document.addEventListener('DOMContentLoaded', function () {
    const calcBeforeInput = document.getElementById('calcBeforeInput');
    const calcAfterInput = document.getElementById('calcAfterInput');
  
    let isUpdating = false;
  
    calcBeforeInput.addEventListener('input', () => {
      if (isUpdating) return;
      isUpdating = true;
      const before = parseInt(calcBeforeInput.value) || 0;
      const after = Math.floor(before * 0.7);
      calcAfterInput.value = after;
      isUpdating = false;
    });
  
    calcAfterInput.addEventListener('input', () => {
      if (isUpdating) return;
      isUpdating = true;
      const after = parseInt(calcAfterInput.value) || 0;
      const before = Math.floor(after / 0.7);
      calcBeforeInput.value = before;
      isUpdating = false;
    });
  });  
