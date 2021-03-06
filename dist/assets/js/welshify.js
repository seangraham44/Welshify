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

	// converts english to Welsh wooo! (note english is in lower case because it's rubbish)
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

	/* because the welsh language has a weird roof
	 this function returns one. Brill! */
	GetRoofio: function(){
		return "^";
	},

	// translates english to english (note the lower case english again)
	MakeEnglish: function(theword){
		return theword;
	},

	// returns the longest placename in Wales
	GetLlanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch: function(){
		return "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch";
	},

	/* gets a Welsh version of a country. Just put in something
	 like '35' as a parameter and it'll return the 35th country
	 in the list, whatever that is. */
	GetCountry: function(numberiau){
		try{
			return Welshify.MakeWelsh(GimmeCountry()[numberiau].name);
		}catch(err){
			return WelshifyException.Catch()[0];
		}
	},

	// gets various days of the week. Very good feature.
	GetMonday: function(){
		return Welshify.MakeWelsh('Monday');
	},
	GetTuesday: function(){
		return Welshify.MakeWelsh('Tuesday');
	},
	GetWednesday: function(){
		return Welshify.MakeWelsh('Wednesday');
	},
	GetThursday: function(){
		return Welshify.MakeWelsh('Thursday');
	},
	GetFriday: function(){
		return Welshify.MakeWelsh('Friday');
	},
	GetSaturday: function(){
		return Welshify.MakeWelsh('Saturday');
	},
	GetSunday: function(){
		return Welshify.MakeWelsh('Sunday');
	},

}