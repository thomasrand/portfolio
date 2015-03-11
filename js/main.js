// Set the size of the html document (frame)
function setHTMLDimentions() {
	$('.frame').css('height', window.innerHeight - 40 + 'px');
	$('.frame').css('width', window.innerWidth - 40 + 'px');
}

// Set the size of the html document (frame)
function setFooterDimentions() {
	$('.backTo-footer').css('width', window.innerWidth - 40 + 'px');
}

// What happens when the user resizes the browser...
function onResizeEvent() {
	$(window).resize(function() {
		setHTMLDimentions();
		setFooterDimentions();
	})
}

// What happens when the user clicks on a project...
function selectProjectEvent() {
	$('.linked-list li').click(function(evt) {
		toggleProjectDetails(this);
	});
}

// What happens when the user clicks on the back to projects link...
function selectBackToProjectEvent() {
	$('.backTo-footer').click(function(evt) {
		var targetProject = $(this).parent().prev('li');
		toggleProjectDetails(targetProject);
	});
}

// Toggle the detail content of the given project.
function toggleProjectDetails(project) {
	var targetProject = $(project).next('.project-details');
	var projectName = $(project).attr('project-name');

	$('.intro').animate({height: 'toggle'});
	$('.linked-list li').not(project).fadeToggle();
	$(targetProject).animate({height:'toggle'});	
}

// What happens when the user clicks on the menu icon...
function selectMenuIconEvent() {
	$('.menu').click(function(evt) {
		$('#menu-overlay').fadeIn();
	});
}

// What happens when the user clicks the close-menu icons...
function selectCloseIconEvent() {
	$('.close').click(function() {
		$('#menu-overlay').fadeOut();
	});
}


$(function initialize() {
	setHTMLDimentions();
	setFooterDimentions();
	onResizeEvent();
	selectProjectEvent();
	selectBackToProjectEvent();
	selectCloseIconEvent();
	selectMenuIconEvent();
});