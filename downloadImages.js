
document.querySelector('#images').addEventListener('click', download);


function download() {
	var images = ['carousel images/jupiter_new.jpg',
					'carousel images/mars.jpg',
					'carousel images/m31.jpg',
					'carousel images/milkyway.jpg',
					'carousel images/jupiter.jpg',
					'carousel images/saturn.jpg'
				]
	//confirm that user wants to open several new tabs
	var confirmation = confirm("This will open " + images.length + " tabs.  Do you want to continue?");
	if (confirmation) {
		//open each image in new tab for download
		images.forEach(element => window.open(element));
	}
}
