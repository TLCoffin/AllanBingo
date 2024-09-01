let sayings = [
  "Food in beard",
  "Smacking lips",
  "Dog whining",
  "Biblical reference",
  "Marion",
  "'Providence'",
  "'Thanks for sharing'",
  "'Shalom'",
  "'Yea' while inhaling",
  "Backwards hat",
  "Teeth out",
  "'I can die tomorrow'",
  "Trip to Israel or Rome",
  "Berry guy",
  "Mention of a sale",
  "Ask stranger where they're from",
  "Worshroom",
  "Jangling pocket change",
  "What's the word I'm looking for?",
  "First Hermit",
  "Second Hermit",
  "Third Hermit",
  "Fourth Hermit",
  "'83'",
  "Oven troubles",
  "Strawberry",
  "Raspberry",
  "Knee",
  "Hip",
  "Willy's golf clubs",
  "Mike Puya",
  "Velma and Gary mention",
  "'This too shall pass'",
  "Ian and 'Rachel'",
  "Stroking beard",
  "Daphne mention",
  "Jane or Brenda mention",
  "Asking about Alana",
  "Credit Union",
  "Zdravco mention",
  "Cathy mention"
];

let randomizedGridNums = [];
const GRIDCELLS = 25;

function createRandomBingoList() {
  let i = 0;
  let rndIndex = 0;
  let usedCells = [];
  let alreadyUsed = false;

  while (i < GRIDCELLS) {
    alreadyUsed = false;
    rndIndex = Math.floor(Math.random() * 41);

    for(let j = 0; j < usedCells.length; j++) {
      if (rndIndex == usedCells[j]) {
        alreadyUsed = true;
      }
    }

    if (alreadyUsed == false) {
      usedCells.push(rndIndex);
      randomizedGridNums.push(sayings[rndIndex])
      i++;
    }
  }
}

let bingoGridList = document.querySelectorAll("table td");

function assignPhrasesToGrid() {
  for (let i = 0; i < GRIDCELLS; i++) {
    bingoGridList[i].textContent = randomizedGridNums[i];
  }
}

createRandomBingoList();

assignPhrasesToGrid();
bingoGridList[12].innerHTML = '<img src="img/Allan Free Space.png" alt="Photo of Allan saying his catch phrase." />';
bingoGridList[12].style.backgroundColor = "#8178ff";

document.addEventListener("click", event => {
  if (event.target.className == "cell" && !event.target.classList.contains("clicked")) {
    event.target.classList.add("clicked");
  }
  else {
    event.target.classList.remove("clicked");
  }
});