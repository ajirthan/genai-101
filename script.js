const facts = [
  "Sri Lanka is home to the largest population of Asian elephants in the world.",
  "The Sri Lankan elephant is a subspecies of the Asian elephant and is known for its smaller ears compared to African elephants.",
  "Elephants in Sri Lanka are considered a national treasure and are protected under the Fauna and Flora Protection Ordinance.",
  "The Pinnawala Elephant Orphanage in Sri Lanka is one of the largest elephant sanctuaries in the world.",
  "Elephants play a significant role in Sri Lankan culture and are often featured in religious festivals and ceremonies.",
  "The average lifespan of an elephant in the wild is around 60 years, but they can live longer in captivity.",
  "Sri Lankan elephants are known for their intelligence and strong social bonds within herds.",
  "Human-elephant conflict is a significant issue in Sri Lanka, often arising from habitat loss and agricultural expansion.",
  "The Sri Lankan elephant has a distinctively curved back and a smaller body size compared to its Indian counterpart.",
  "Conservation efforts are ongoing to protect Sri Lankan elephants and their habitats from poaching and encroachment.",
];

let moveCount = 0;
const factDisplay = document.getElementById("fact-display");
const factButton = document.getElementById("fact-button");

factButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  factDisplay.textContent = facts[randomIndex];
});

factButton.addEventListener("mouseover", () => {
  if (moveCount < 3) {
    factButton.classList.add("horizontal-move");
    moveCount++;
    setTimeout(() => {
      factButton.classList.remove("horizontal-move");
    }, 500); // Duration of the horizontal move animation
  }
});
