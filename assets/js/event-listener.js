/*
* @Author: championshuttler
* @Date:   2017-09-05  00:39:44
 @LastUpdated : 2017-09-05 01:08:25        coding with weedy eyes :P
*/

var list_keys = ['linkedin', 'github', 'twitter', 'facebook', 'personal', 'email'];

// updateUI show saved links when popup page is opened by clicking on browser icon
function updateUI(){
	for(var i in list_keys){
		var key = list_keys[i];
		var link = localStorage.getItem(key);
		if(typeof link == "string"){
			document.getElementById(key).value = link;
		}
		else{
			document.getElementById(key).value = "";
		}
	}
}

function animate_text(id){
	var text_div = $(id)

	text_div.show();
	text_div.fadeOut(2000);
}

$(document).on('ready', function(){

	$("#save_links").on('click', function(e){
		document.getElementById("save_links").innerHTML = "Saving..";
		for(var i in list_keys){
			var key = list_keys[i];
			var newValue = document.getElementById(key).value;
			localStorage.setItem(key, newValue);
		}
		// trigger to show the saved links
		updateUI();
		animate_text("#success_text");

		document.getElementById("save_links").innerHTML = "Save links";
	});

	$("#remove").on("click", function(){
		localStorage.clear();
		updateUI();

		animate_text("#remove_text")
	});

	// trigger to show the saved links
	updateUI();

});
