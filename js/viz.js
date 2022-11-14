var mode="exploration";
var codetraceColor = 'white';
var isPlaying = false;
var isActionsOpen = true;
var isStatusOpen = false;
var isCodetraceOpen = false;
function showActionsPanel() {
	if(!isActionsOpen) {
		$('#actions-hide img').removeClass('rotateLeft').addClass('rotateRight');
		$('#actions').animate({
			width: "+="+actionsWidth,
		});
		isActionsOpen = true;
	}
}
function hideActionsPanel() {
	if(isActionsOpen) {
		$('#actions-hide img').removeClass('rotateRight').addClass('rotateLeft');
		$('#actions').animate({
			width: "-="+actionsWidth,
		});
		isActionsOpen = false;
	}
}
function showStatusPanel() {
	if(!isStatusOpen) {
		$('#status-hide img').removeClass('rotateLeft').addClass('rotateRight');
		$('#current-action').show();
		$('#status').animate({
			width: "+="+statusCodetraceWidth,
		});
		isStatusOpen = true;
	}
}
function hideStatusPanel() {
	if(isStatusOpen) {
		$('#status-hide img').removeClass('rotateRight').addClass('rotateLeft');
		$('#current-action').hide();
		$('#status').animate({
			width: "-="+statusCodetraceWidth,
		});
		isStatusOpen = false;
	}
}
function showCodetracePanel() {
	if(!isCodetraceOpen) {
		$('#codetrace-hide img').removeClass('rotateLeft').addClass('rotateRight');
		$('#codetrace').animate({
			width: "+="+statusCodetraceWidth,
		});
		isCodetraceOpen = true;
	}
}
function hideCodetracePanel() {
	if(isCodetraceOpen) {
		$('#codetrace-hide img').removeClass('rotateRight').addClass('rotateLeft');
		$('#codetrace').animate({
			width: "-="+statusCodetraceWidth,
		});
		isCodetraceOpen = false;
	}
}
function triggerRightPanels() {
	hideActionsPanel();
	showStatusPanel();
	showCodetracePanel();
}
$( document ).ready(function() {
	var actionsHeight = ($('#actions p').length)*27 + 10;
	$('#actions').css('height', actionsHeight);
	$('#actions').css('width', actionsWidth);
	var actionsHideTop = Math.floor((actionsHeight - 16)/2);
	var actionsHideBottom = (actionsHeight - 16) - actionsHideTop;
	$('#actions-hide').css('padding-top', actionsHideTop);
	$('#actions-hide').css('padding-bottom', actionsHideBottom);
	
	$('#current-action').hide();
	$('#actions-hide img').addClass('rotateRight');
	$('#progress-bar .ui-slider-range').css("background-color", surpriseColour);
	
	$('#actions').css("background-color", colourTheSecond);
	$('#actions-hide').css("background-color", colourTheSecond);
	$('#actions-extras').children().not('input').not('.err').css("background-color", colourTheSecond);
	if(colourTheSecond == '#fec515' || colourTheSecond == '#a7d41e') {
		$('#actions p').css('color', 'black');
		$('#actions p').hover(function() { $(this).css('color', 'white');}, function() {$(this).css('color', 'black');});
		$('.execAction p').css('color', 'black');
		$('.execAction p').hover(function() { $(this).css('color', 'white');}, function() {$(this).css('color', 'black');});
		$('#actions-hide img').attr('src', 'img/arrow_black_right.png');
	}
	
	$('#codetrace').css("background-color", colourTheThird);
	$('#codetrace-hide').css("background-color", colourTheThird);
	if(colourTheThird == '#fec515' || colourTheThird == '#a7d41e') {
		$('#codetrace').css('color', 'black');
		$('#codetrace-hide img').attr('src', 'img/arrow_black_right.png');
		codetraceColor = 'black';
	}
	
	$('#status').css("background-color", colourTheFourth);
	$('#status-hide').css("background-color", colourTheFourth);
	if(colourTheFourth == '#fec515' || colourTheFourth == '#a7d41e') {
		$('#status').css('color', 'black');
		$('#status-hide img').attr('src', 'img/arrow_black_right.png');
	}
	$('#status-hide').click(function() {
		if(isStatusOpen) {
			hideStatusPanel();
		} else {
			showStatusPanel();
		}
	});
	$('#codetrace-hide').click(function() {
		if(isCodetraceOpen) {
			hideCodetracePanel();
		} else {
			showCodetracePanel();
		}
	});
	$('#actions-hide').click(function() {
		if(isActionsOpen) {
			hideEntireActionsPanel(); 
		} else {
			showActionsPanel();
		}
	});
});