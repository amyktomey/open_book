var slideIndex = 0;
showSlides(); // call showslide method

function showSlides()
{
	var i;

	// get the array of divs' with classname image-sliderfade
	var slides = document.getElementsByClassName("image-sliderfade");
	
	// get the array of divs' with classname dot
	var dots = document.getElementsByClassName("dot");

	for (i = 0; i < slides.length; i++) {
		// initially set the display to
		// none for every image.
		slides[i].style.display = "none";
	}

	// increase by 1, Global variable
	slideIndex++;

	// check for boundary
	if (slideIndex > slides.length)
	{
		slideIndex = 1;
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.
							replace(" active", "");
	}

	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";

	// Change image every 3 seconds
	setTimeout(showSlides, 3000);
}


// save the data

let saveFile = () => {
    	
    // Get the data from each element on the form.
    const name = document.getElementById('name');
    const mail = document.getElementById('mail');
    const occasion = document.getElementById('occ_type');
    const msg = document.getElementById('msg');
    
    // This variable stores all the data.
    let data = 
        '\r Name: ' + name.value + ' \r\n ' + 
        // 'Age: ' +age.value + ' \r\n ' + 
        'Email: ' + mail.value + ' \r\n ' + 
        'Occasion: ' + occasion.value + ' \r\n ' + 
        'Message: ' + msg.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = 'formData.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    newLink.click(); 
}