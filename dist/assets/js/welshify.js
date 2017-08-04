/*

	Developed by: Sean Graham
	Version: 1.01.130.109.32 Service Pack 2

	Welshify is the world leading Welsh translation framework.
	Tested in over 160 countries even the Egyptians are using
	it to help with camels. NASA has also tested it for all
	kinds of stuff but I can remember what stuff it was. Anyway
	use it because it's brilliant.

*/

var Welshify = {

	MakeWelsh: function(theword){

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
	},

	MakeEnglish: function(theword){
		return theword;
	},

	DontMakeFrench: function(theword){
		return theword;
	},

	GetLlanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch: function(){
		return "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch";
	}

}