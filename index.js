const fs = require("fs");
const infile = process.env.INPUT_FILE;
const data = require(`./data/${infile}`);
const cards = data.cards;
let outString = "Namn;Etiketter;Estimat\n";
for (const card of cards) {
  const cardMatch = /^\((\d)\)\s(.+)$/.exec(card.name);
  const cardName = cardMatch[2];
  const cardEstimate = cardMatch[1];
  const cardLabels = card.labels.map(l => l.name).join(", ");
  const cardData = `${cardName};${cardLabels};${cardEstimate}\n`;
  outString += cardData;
}
fs.writeFileSync(`./output/${infile}.csv`, outString);
