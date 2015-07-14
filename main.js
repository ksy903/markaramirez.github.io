var peanuts = 0;
var elephants = 0;
var TPFs = 0;
var PMMs = 0;
var farms = 0;
var PFs = 0;
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

function buyPMM() {
  var PMMCost = Math.floor(500 * Math.pow(1.1, PMMs));
  if(peanuts >= PMMCost) {
    PMMs++;
    peanuts -= PMMCost;
    pps += 50;
    document.getElementById("peanuts").innerHTML = peanuts;
    document.getElementById("pps").innerHTML = pps;
    document.getElementById("PMMs").innerHTML = PMMs;
    document.getElementById("PMMCost").innerHTML = PMMCost;
  };
  var nextCost = Math.floor(500 * Math.pow(1.1, PMMs));
  document.getElementById("PMMCost").innerHTML = nextCost;
};

function buyFarm() {
  var farmCost = Math.floor(3000 * Math.pow(1.1, farms));
  if(peanuts >= farmCost) {
    farms++;
    peanuts -= farmCost;
    pps += 300;
    document.getElementById("peanuts").innerHTML = peanuts;
    document.getElementById("pps").innerHTML = pps;
    document.getElementById("farms").innerHTML = farms;
    document.getElementById("farmCost").innerHTML = farmCost;
  };
  var nextCost = Math.floor(3000 * Math.pow(1.1, farms));
  document.getElementById("farmCost").innerHTML = nextCost;
};

function buyFactory() {
  var PFCost = Math.floor(10000 * Math.pow(1.1, PFs));
  if(peanuts >= PFCost) {
    PFs++;
    peanuts -= PFCost;
    pps += 1000;
    document.getElementById("peanuts").innerHTML = peanuts;
    document.getElementById("pps").innerHTML = pps;
    document.getElementById("PFs").innerHTML = PFs;
    document.getElementById("PFCost").innerHTML = PFCost;
  };
  var nextCost = Math.floor(10000 * Math.pow(1.1, PFs));
  document.getElementById("PFCost").innerHTML = nextCost;
};

function saveGame() {
  var save = {
    peanuts: peanuts,
    elephants: elephants,
    TPFs: TPFs,
    farms: farms,
    PFs: PFs,
    PMMs: PMMs,
    pps: pps
  }
  localStorage.setItem("save",JSON.stringify(save));
}

function deleteGame() {
  localStorage.removeItem("save");
  peanuts = 0;
  elephants = 0;
  TPFs = 0;
  farms = 0;
  PFs = 0;
  PMMs = 0;
  farms = 0;
  pps = 0;
  document.getElementById("pps").innerHTML = pps;
  document.getElementById("elephants").innerHTML = elephants;
  var nextCost = Math.floor(10 * Math.pow(1.1, elephants));
  document.getElementById("elephantCost").innerHTML = nextCost;
  document.getElementById("TPFs").innerHTML = TPFs;
  nextCost = Math.floor(50 * Math.pow(1.1, TPFs));
  document.getElementById("TPFCost").innerHTML = nextCost;
  document.getElementById("farms").innerHTML = farms;
  nextCost = Math.floor(3000 * Math.pow(1.1, farms));
  document.getElementById("farmCost").innerHTML = nextCost;
  document.getElementById("PMMs").innerHTML = PMMs;
  nextCost = Math.floor(500 * Math.pow(1.1, PMMs));
  document.getElementById("PMMCost").innerHTML = nextCost;
  document.getElementById("PFs").innerHTML = PFs;
  nextCost = Math.floor(10000 * Math.pow(1.1, PFs));
  document.getElementById("PFCost").innerHTML = nextCost;
}

function roastedWP() {
  document.body.style.background = "url('https://upload.wikimedia.org/wikipedia/commons/0/0c/Peanutjar.jpg')";
}

function shelledWP() {
  document.body.style.background = "url('http://www.bioag.novozymes.com/en/products/unitedstates/PublishingImages/Peanuts.jpg')";
}

function solidWP() {
  document.body.style.background = "#AD8533";
}

function loadGame() {
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.peanuts !== "undefined") peanuts = savegame.peanuts;
  if (typeof savegame.elephants !== "undefined") elephants = savegame.elephants;
  if (typeof savegame.TPFs !== "undefined") TPFs = savegame.TPFs;
  if (typeof savegame.PFs !== "undefined") PFs = savegame.PFs;
  if (typeof savegame.PMMs !== "undefined") PMMs = savegame.PMMs;
  if (typeof savegame.farms !== "undefined") farms = savegame.farms;
  if (typeof savegame.pps !== "undefined") pps = savegame.pps;
  document.getElementById("pps").innerHTML = pps;
  document.getElementById("elephants").innerHTML = elephants;
  var nextCost = Math.floor(10 * Math.pow(1.1, elephants));
  document.getElementById("elephantCost").innerHTML = nextCost;
  document.getElementById("TPFs").innerHTML = TPFs;
  nextCost = Math.floor(50 * Math.pow(1.1, TPFs));
  document.getElementById("TPFCost").innerHTML = nextCost;
  document.getElementById("farms").innerHTML = farms;
  nextCost = Math.floor(3000 * Math.pow(1.1, farms));
  document.getElementById("farmCost").innerHTML = nextCost;
  document.getElementById("PMMs").innerHTML = PMMs;
  nextCost = Math.floor(500 * Math.pow(1.1, PMMs));
  document.getElementById("PMMCost").innerHTML = nextCost;
  document.getElementById("PFs").innerHTML = PFs;
  nextCost = Math.floor(10000 * Math.pow(1.1, PFs));
  document.getElementById("PFCost").innerHTML = nextCost;
}

window.onload = function() {
  shelledWP();
  loadGame();
};

window.setInterval(function(){
  performClick(elephants);
  performClick(TPFs * 5);
  performClick(PMMs * 50);
  performClick(farms * 300);
  performClick(PFs * 1000);
  saveGame();
}, 1000);
