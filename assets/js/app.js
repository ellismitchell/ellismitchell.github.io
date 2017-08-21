// sanity check
$(document).ready(function(){

console.log("app.js linked.");

let projects = [
	{
		title: "Wallingford Symphony Orchestra",
		description: "blah blah blah",
		picture: 'assets/imgs/Screenshot 2017-08-20 at 7.17.18 PM.png',
		link: 'walllingfordsymphony.org'
	},
	{
		title: "Eliad Design",
		description: "blah blah blah",
		picture: 'assets/imgs/Screenshot 2017-08-20 at 7.42.25 PM.png',
		link: 'eliaddesign.com'
	},
	{
		title: "Edward Mitchell Architects",
		description: "blah blah blah",
		picture: 'assets/imgs/Screenshot 2017-08-20 at 7.43.35 PM.png',
		link: 'emarchictects.net'
	},
]
for (let i = 0; i < projects.length; i++){
$('#work').append(`<div class='col s4'><div class="card small">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${projects[i].picture}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${projects[i].title}</span>
      <p><a href="#">${projects[i].link}</a></p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${projects[i].title}<i class="material-icons right">close</i></span>
      <p>${projects[i].description}</p>
    </div>
  </div></div>`);
}
// console.log(myHTML);
});