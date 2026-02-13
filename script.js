function getFormvalue(){
    //Write your code here
    // Access form fields
		event.preventDefault();
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



