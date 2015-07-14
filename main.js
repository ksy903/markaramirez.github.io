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

window.setInterval(function(){
  performClick(elephants);
  performClick(TPFs * 5);
}, 1000);
