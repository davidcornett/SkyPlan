
var astroQuotes = [
 	
 	{author: "Socrates", quote: "Man must rise above the Earth, to the top of \
				the atmosphere and beyond, for only thus will \
				he fully understand the world in which he lives."},

	{author: "Plato", quote: "Astronomy compels the soul to look upward, \
	            and leads us from this world to another."},

	{author: "Miles Kington", quote: "Astronomers, like burglars and jazz musicians, operate best at night."},

	{author: "Ptolemy", quote: "Mortal as I am, I know that I am born for a day, but when I follow the serried \
	            multitude of the stars in their circular course, my feet no longer touch the earth; \
	            I ascend to Zeus himself to feast me on ambrosia, the food of the gods."},         

	{author: "Edwin Hubble", quote: "Equipped with his five senses, man explores the universe around him and calls \
	             the adventure Science."},

	{author: "Stephen Hawking", quote: "To confine our attention to terrestrial matters would be to limit \
	          the human spirit."},  

	{author: "Vincent Van Gogh", quote: "For my part I know nothing with any certainty but the sight of the\
	           stars makes me dream."},            
	 ]


 
 document.addEventListener('DOMContentLoaded', getQuote);

function getQuote() {
	var randNum = Math.floor(Math.random()*(astroQuotes.length)); //random int between 0:arr len
	var quote = document.getElementById('quote');
	var author = document.getElementById('author');

	quote.appendChild(document.createTextNode("\""));
	quote.appendChild(document.createTextNode(astroQuotes[randNum].quote));
	quote.appendChild(document.createTextNode("\""));
	author.appendChild(document.createTextNode("-" + astroQuotes[randNum].author));
}



