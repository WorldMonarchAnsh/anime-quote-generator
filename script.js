const quotes = [
  {
    quote: "Power comes in response to a need, not a desire.",
    character: "Goku (Dragon Ball Z)"
  },
  {
    quote: "It's not about whether I can or not. I'm gonna do it because I want to. I've decided to be the King of the Pirates, so if I die fighting for that, that's fine with me!",
    character: "Monkey D. Luffy (One Piece)"
  },
  {
    quote: "Am I sweating? No, it's just the rain. These fools could never make me sweat.",
    character: "Obito Uchiha (Naruto Shippuden)"
  },
  {
    quote: "You gotta keep smiling no matter how tough things are getting.",
    character: "Ash Ketchum (Pokémon The Series)"
  },
  {
    quote: "Idols are objects of worship, you know? They sparkle through the magic of lies. Lies are the most exquisite love, no?",
    character: "Ai Hoshino (Oshi No Ko)"
  }
];

function generateQuote() {
  const random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[random].quote;
  document.getElementById("character").textContent = `– ${quotes[random].character}`;
}
