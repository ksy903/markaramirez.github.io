var addEvent = function addEvent(element, eventName, func) {
	if (element.addEventListener) {
    	return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
        return element.attachEvent("on" + eventName, func);
    }
};

addEvent(document.getElementById('open-left'), 'click', function(){
  if( snapper.state().state=="left" ){
        snapper.close();
    } else {
        snapper.open('left');
    }

});

$(document).ready(function(){
	$("#pcat").toggle();
	$("#plink").click(function() {
		$("#pcat").toggle();
	});
});
