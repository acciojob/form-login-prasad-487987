function getFormvalue(){    
// function is been called in html via onsubmit attribute with 
//	a event object parameter 
	
    //Preventing page from reloading 
		event.preventDefault();
	// Access form fields
        const fname = document.querySelector('input[name="fname"]').value.trim();
        const lname = document.querySelector('input[name="lname"]').value.trim();

        // Combine names (handles extra spaces automatically)
        const fullName = `${fname} ${lname}`.trim();

        // Handle empty input case
        if (fullName === "") {
            alert("Please enter your name");
        } else {
            alert(fullName);
        }
}



