$(document).ready(function(){

	let projects = [
		{
			title: "ChessPrep",
			description: "",
			picture: 'assets/imgs/ChessPrep.png',
			link: 'nameless-gorge-60483.herokuapp.com'
		},
		{
			title: "Fantasy Football",
			description: "",
			picture: 'assets/imgs/Fantasy.png',
			link: 'quiet-caverns-35726.herokuapp.com'
		},
		{
			title: "Tower Defense",
			description: "",
			picture: 'assets/imgs/Tower_Def.png',
			link: 'mighty-island-51639.herokuapp.com'
		},
		{
			title: "Wallingford Symphony Orchestra",
			description: "",
			picture: 'assets/imgs/WSO.png',
			link: 'walllingfordsymphony.org'
		},
		{
			title: "Eliad Design",
			description: "",
			picture: 'assets/imgs/Eliad.png',
			link: 'eliaddesign.com'
		},
		{
			title: "Edward Mitchell Architects",
			description: "",
			picture: 'assets/imgs/EMA.png',
			link: 'emarchictects.net'
		},	
	]
	for (let i = 0; i < projects.length; i++){
	$('#work').append(`<div class='col s4'><div class="card small hoverable">
	    <div class="card-image waves-effect waves-block waves-light">
	      <img class="activator" src="${projects[i].picture}">
	    </div>
	    <div class="card-content">
	      <span class="card-title activator grey-text text-darken-4">${projects[i].title}</span>
	    </div>
	    <div class="card-reveal">
	      <span class="card-title grey-text text-darken-4">${projects[i].title}<i class="material-icons right">close</i></span>
	      <p>${projects[i].description}</p>
	      <p><a href="//www.${projects[i].link}">${projects[i].link}</a></p>
	    </div>
	  </div></div>`);
	}
});