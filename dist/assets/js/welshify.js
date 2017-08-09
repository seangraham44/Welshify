/*

	Developed by: Sean Graham
	Version: 1.02.734.120.40 Service Pack 2

	Welshify is the world leading Welsh translation framework. Tested by NASA,
	and 160 countries, this framework is the undesputed heavyweight of 
	language translation frameworks. 

*/

function HandleException(){
	var err = new Object();
	err[0] = "ah there we are then!"; 
	err[1] = "is it?";

	return err;
}

var WelshifyException = {

	Catch: function(){

		return HandleException();
	}
}

var Welshify = {

	MakeWelsh: function(theword){
		if (theword !== ""){
		var instance = "";
		var listWords = new Array();
		var words = theword.split(" ");

		for (var i = 0; i < words.length; i++){

			if (words[i]!==" "){

				var newWord = "";

				var rand = Math.floor((Math.random() * 2) + 1);

				// because everything in Welsh ends in this...
				if (rand == 1){
					instance = "iau";
				}else{
					instance = "io";
				}
					if (words[i].indexOf("?") >= 0){
						newWord = words[i].replace("?","");
						listWords.push(newWord + instance + "?");
					}
						else if (words[i].indexOf(".") >= 0){
						newWord = words[i].replace(".","");
						listWords.push(newWord + instance + ".");
					}else{
						newWord = words[i];
						listWords.push(newWord + instance);
					}
				}
			}

		return listWords.join(" ").replace(/[^\x20-\x7E]/gmi, "");
		}
		else{
			return WelshifyException.Catch()[1];
		}

	},

	GetRoofio: function(){

		return "^";
	},

	MakeEnglish: function(theword){
		return theword;
	},

	GetLlanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch: function(){
		return "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch";
	}

}