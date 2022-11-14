var actionsWidth = 150;
var statusCodetraceWidth = 420;
var isSearchOpen = false;
var isInsertOpen = false;
var isRemoveOpen = false;
function openSearch() {
	if(!isSearchOpen) {
		$('#find-min').animate({
			width: "+="+65
		}, 100, function() {
			$('#find-max').animate({
				width: "+="+69
			}, 100, function() {
				$('#search-input').animate({
					width: "+="+32
				}, 100, function() {
					$('#search-go').animate({
						width: "+="+34
					},100);
				});
			});
		});
	}
	isSearchOpen = true;
}
function closeSearch() {
	if(true) {
		$('#search-err').html("");
		$('#search-go').animate({
			width: "-="+34
		}, 100, function() {
			$('#search-input').animate({
				width: "-="+32
			}, 100, function() {
				$('#find-max').animate({
					width: "-="+69
				}, 100, function() {
					$('#find-min').animate({
						width: "-="+65
					},100);
				});
			});
		});
		isSearchOpen = false;
	}
}
function openInsert() {
	if(!isInsertOpen) {
		$('#insert-input').animate({
			width: "+="+132
		}, 250, function() {
			$('#insert-go').animate({
				width: "+="+34
			},100);
		});
	}
	isInsertOpen = true;
}
function closeInsert() {
	if(true) {
		$('#insert-err').html("");
		$('#insert-go').animate({
			width: "-="+34
		}, 100, function() {
			$('#insert-input').animate({
				width: "-="+132
			}, 250);
		});
		isInsertOpen = false;
	}
}
function openRemove() {
	if(!isRemoveOpen) {
		$('#remove-input').animate({
			width: "+="+132
		}, 250, function() {
			$('#remove-go').animate({
				width: "+="+34
			},100);
		});
	}
	isRemoveOpen = true;
}
function closeRemove() {
	if(true) {
		$('#remove-err').html("");
		$('#remove-go').animate({
			width: "-="+34
		}, 100, function() {
			$('#remove-input').animate({
				width: "-="+132
			}, 250);
		});
		isRemoveOpen = false;
	}
}
function hideEntireActionsPanel() {
	closeSearch();
	closeInsert();
	closeRemove();
	hideActionsPanel();
}

$( document ).ready(function() {
	$('#search').click(function() {
		closeInsert();
		closeRemove();
		openSearch();
		$('#inorder-err').html("");
	});
	$('#insert').click(function() {
		closeSearch();
		closeRemove();
		openInsert();
		$('#inorder-err').html("");
	});
	$('#remove').click(function() {
		closeSearch();
		closeInsert();
		openRemove();
		$('#inorder-err').html("");
	});
	$('#inorder').click(function() {
		closeSearch();
		closeInsert();
		closeRemove();
	});
});