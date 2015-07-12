var peanuts = 0;
var elephants = 0;
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
    document.getElementById("pps").innerHTML = pps;
    document.getElementById("elephants").innerHTML = elephants;
    document.getElementById("elephantCost").innerHTML = elephantCost;
  };
  var nextCost = Math.floor(10 * Math.pow(1.1, elephants));
  document.getElementById("elephantCost").innerHTML = nextCost;
};

window.setInterval(function(){
  performClick(elephants);
}, 1000);
