const knowledge = {
  
  "bonjour": [
    "Bonjour !",
    "Salut !",
    "Bonjour, comment puis-je vous aider ?"
  ],
  
  "salut": [
    "Salut !",
    "Bonjour !",
    "Heureux de vous voir !"
  ],
  
  "qui es tu": [
    "Je suis Sopen AI.",
    "Je suis votre assistant IA.",
    "Je suis Sopen AI, conçu pour vous aider."
  ],
  
  "quel est ton nom": [
    "Mon nom est Sopen AI.",
    "Je m'appelle Sopen AI."
  ],
  
  "chkoun howa yassine": [
  "chkoun howa yassine. wach wakl dwak hhh.",
  "sir a khoya, ghir sir fi7alatek 😂."
],
  
  "comment ça va": [
    "Je vais très bien, merci.",
    "Tout va bien pour moi.",
    "Très bien, et vous ?"
  ],
  
  "merci": [
    "Avec plaisir.",
    "Je vous en prie.",
    "Heureux de vous avoir aidé."
  ],
  
  "au revoir": [
    "Au revoir !",
    "À bientôt !",
    "Passez une excellente journée."
  ],
  
  "quelle est la capitale de la france": [
    "La capitale de la France est Paris."
  ],
  
  "quelle est la capitale du maroc": [
    "La capitale du Maroc est Rabat."
  ],
  
  "combien font 2+2": [
    "2 + 2 = 4."
  ]
};

function sendMessage() {
  
  let input = document.getElementById("message");
  let text = input.value;
  
  if (text === "") return;
  
  let chat = document.getElementById("chat");
  
  // Afficher le message utilisateur
  chat.innerHTML += `
    <div class="user">
      ${text}
    </div>
    `;
  
  input.value = "";
  
  setTimeout(() => {
    
    let question = text.toLowerCase();
    
    let responses = knowledge[question];
    
    let answer;
    
    if (responses) {
      
      answer =
        responses[Math.floor(Math.random() * responses.length)];
      
    } else {
      
      answer =
        "Je ne connais pas encore la réponse à cette question.";
      
    }
    
    // Créer la bulle du bot
let botMessage = document.createElement("div");

botMessage.className = "bot";

botMessage.innerHTML = `
<div class="thinking">
  <span></span>
  <span></span>
  <span></span>
</div>
`;

chat.appendChild(botMessage);

chat.scrollTop = chat.scrollHeight;


// Animation de réflexion puis écriture
setTimeout(() => {
  
  botMessage.innerHTML = "";
  
  typeWriter(botMessage, answer);
  
}, 800);
    
    chat.scrollTop = chat.scrollHeight;
    
  }, 1000);
  
  function typeWriter(element, text, speed = 15) {
  
  let i = 0;
  
  function type() {
    
    if (i < text.length) {
      
      element.textContent += text.charAt(i);
      
      i++;
      
      let chat = document.getElementById("chat");
      
      chat.scrollTop = chat.scrollHeight;
      
      setTimeout(type, speed);
      
    }
    
  }
  
  type();
  
}
  
}
