var peanuts = 0;
var elephants = 0;
var TPFs = 0;
var pps = 0;

function performClick(num) {
  peanuts += num;
  document.getElementById("peanuts").innerHTML = peanuts;
};

function buyElephant() {
  var elephantCost = Math.floor(10 * Math.pow(1.1, elephants));
  if(peanuts >= elephantCost) {
    elephants++;
    peanuts -= elephantCost;
    pps++;
    document.getElementById("peanuts").innerHTML = peanuts;
    document.getElementById("pps").innerHTML = pps;
    document.getElementById("elephants").innerHTML = elephants;
    document.getElementById("elephantCost").innerHTML = elephantCost;
  };
  var nextCost = Math.floor(10 * Math.pow(1.1, elephants));
  document.getElementById("elephantCost").innerHTML = nextCost;
};

function buyTPF() {
  var TPFCost = Math.floor(50 * Math.pow(1.1, TPFs));
  if(peanuts >= TPFCost) {
    TPFs++;
    peanuts -= TPFCost;
    pps += 5;
    document.getElementById("peanuts").innerHTML = peanuts;
    document.getElementById("pps").innerHTML = pps;
    document.getElementById("TPFs").innerHTML = TPFs;
    document.getElementById("TPFCost").innerHTML = TPFCost;
  };
  var nextCost = Math.floor(50 * Math.pow(1.1, TPFs));
  document.getElementById("TPFCost").innerHTML = nextCost;
};

function saveGame() {
  var save = {
    peanuts: peanuts,
    elephants: elephants,
    TPFs: TPFs,
    pps: pps
  }
  localStorage.setItem("save",JSON.stringify(save));
}

function deleteGame() {
  localStorage.removeItem("save");
  peanuts = 0;
  elephants = 0;
  TPFs = 0;
  pps = 0;
  document.getElementById("pps").innerHTML = pps;
  document.getElementById("elephants").innerHTML = elephants;
  document.getElementById("elephantCost").innerHTML = elephantCost;
  document.getElementById("TPFs").innerHTML = TPFs;
  document.getElementById("TPFCost").innerHTML = TPFCost;
}

function roastedWP() {
  document.body.style.background = "url('https://upload.wikimedia.org/wikipedia/commons/0/0c/Peanutjar.jpg')";
}

function shelledWP() {
  document.body.style.background = "url('http://www.bioag.novozymes.com/en/products/unitedstates/PublishingImages/Peanuts.jpg')";
}

function loadGame() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.peanuts !== "undefined") peanuts = savegame.peanuts;
  if (typeof savegame.elephants !== "undefined") elephants = savegame.elephants;
  if (typeof savegame.TPFs !== "undefined") TPFs = savegame.TPFs;
  if (typeof savegame.pps !== "undefined") pps = savegame.pps;
  document.getElementById("pps").innerHTML = pps;
  document.getElementById("elephants").innerHTML = elephants;
  document.getElementById("elephantCost").innerHTML = elephantCost;
  document.getElementById("TPFs").innerHTML = TPFs;
  document.getElementById("TPFCost").innerHTML = TPFCost;
}

window.onload = function() {
  roastedWP();
  loadGame();
};

window.setInterval(function(){
  performClick(elephants);
  performClick(TPFs * 5);
  saveGame();
}, 1000);
