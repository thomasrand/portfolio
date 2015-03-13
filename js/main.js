// Set the size of the html document (frame)
function setHTMLDimentions() {
	$('.frame').css('height', window.innerHeight - 40 + 'px');
	$('.frame').css('width', window.innerWidth - 40 + 'px');
}

// Set the size of the html document (frame)
function setFooterDimentions() {
	$('.backTo-footer').css('width', window.innerWidth - 40 + 'px');
}

// Set the padding-top of the project header based on the body position
function setProjectHeaderPadding() {
	var bodyPosition = $('body').offset().top;
	$('.project-header').css('padding-top', bodyPosition * 2);
	$('.project-details').css('padding-top', bodyPosition * 2);
}

// What happens when the user resizes the browser...
function onResizeEvent() {
	$(window).resize(function() {
		setHTMLDimentions();
		setProjectHeaderPadding();
		// setFooterDimentions();
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
	$('.frame').fadeToggle();
	$('.linked-list .projectType-label').fadeToggle();
	$('header').animate({height: 'toggle'}, function() {
		
	});

	$(targetProject).find('.project-header').toggleClass('header-transformed');
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
	setProjectHeaderPadding();
	// setFooterDimentions();
	onResizeEvent();
	selectProjectEvent();
	selectBackToProjectEvent();
	selectCloseIconEvent();
	selectMenuIconEvent();
});