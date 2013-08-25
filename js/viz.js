var mode="exploration";

//codetrace highlight
function highlightLine(lineNumber) { /*lineNumber has to be an integer in [1, 7]*/
	if(lineNumber == 0) {
		$('#codetrace p').removeClass('highlighted')
	} else {
		$('#codetrace p').removeClass('highlighted');
		$('#code'+lineNumber).addClass('highlighted');
	}
}

var isPlaying = false;
//Opening and closing panels
var isActionsOpen = true;
var isStatusOpen = false;
var isCodetraceOpen = false;

//vars actionsWidth and statusCodetraceWidth must be defined in the specific vizname_actions.js file
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
		$('#status').animate({
			width: "+="+statusCodetraceWidth,
		});
		isStatusOpen = true;
	}
}
function hideStatusPanel() {
	if(isStatusOpen) {
		$('#status-hide img').removeClass('rotateRight').addClass('rotateLeft');
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
	
	$('#current-action').hide();
	
	//surpriseColour stuff
	$('.tutorial-next').css("background-color", surpriseColour);
	if(surpriseColour == "#fec515") {
		$('.tutorial-next').css("color", "black");
	}
	$('#progress-bar .ui-slider-range').css("background-color", surpriseColour);

	//title
	$('#title a').click(function() {
		$('#title a').removeClass('selected-viz');
		$(this).addClass('selected-viz');
	});
	
	//mmode menu
	$('#mode-button').click(function() {
		$('#other-modes').toggle();
	});
	$('#mode-menu').hover(function() {
		$('#other-modes').toggle();
	});
	
	$('#mode-menu a').hover(function() {
		$(this).css("background", surpriseColour);
	}, function() {
		$(this).css("background", "black");
	});
	
	$('#mode-menu a').click(function() {
		var currentMode = $('#mode-button').html().split("<")[0];
		var newMode = $(this).html();
		
		$(this).html(currentMode);
		$('#mode-button').html(newMode + '<img src="img/arrow_white.png"/>');
		
		if(newMode=="Exploration Mode") {
			mode = "exploration";
			$('#status-hide').show();
			$('#codetrace-hide').show();
			$('#actions-hide').show();
			$('#status').show();
			$('#codetrace').show();
			$('#actions').show();
			$('.tutorial-dialog').hide();
			hideStatusPanel();
			hideCodetracePanel();
			showActionsPanel();
		/*} else if(newMode=="Training Mode") {
			mode = "training";
			$('#status').hide();
			$('#codetrace').hide();
			$('#actions').hide();
			$('#status-hide').hide();
			$('#codetrace-hide').hide();
			$('#actions-hide').hide();
			*/
		} else if (newMode=="Tutorial Mode") {
			mode = "tutorial";
			$('#status-hide').show();
			$('#codetrace-hide').show();
			$('#actions-hide').show();
			$('#status').show();
			$('#codetrace').show();
			$('#actions').show();
			if(isPlaying) {	stop(); }
			hideEntireActionsPanel();
			hideStatusPanel();
			hideCodetracePanel();
			$('.tutorial-dialog').first().fadeIn(500);
		}
	});
	
	//arrow buttons to show/hide panels	
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
			hideEntireActionsPanel(); //must define hideEntireActionsPanel() function in vizname_actions.js file
		} else {
			showActionsPanel();
		}
	});
	
	//tutorial mode
	$('.tutorial-dialog .tutorial-next').click(function() {
		var nextNo = parseInt($(this).parent().attr('id').slice(-1))+1;
		var nextId = '#bst-tutorial-'+nextNo;
		$(this).parent().fadeOut(500, function() {
			$(nextId).fadeIn(500);
		});
	});
	
});