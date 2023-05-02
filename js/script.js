// Javascript for Interactive Form - TechDegree Project #3

const user_name = document.getElementById("name");
const other_job_role = document.getElementById("other-job-role");
const job_role_select = document.getElementById("title");

// Default to focus on name input field on page load
user_name.focus();

// Hide the "text field" with the id of "other-job-role"
other_job_role.style.display = "none";

// When a change is detected in Job Role seclect element, display/hide the "text field" for "Other job role" when "Other" is selected.
job_role_select.addEventListener("change", function() {
    let role_other = document.querySelector("#title option[value='other']");

    if (role_other.selected === true) {
        other_job_role.style.display = "inherit";
   } else {
        other_job_role.style.display = "none";
   }
});


// Disable the "Color" <select> element.
const colors = document.getElementById("shirt-colors");
const design_select = document.getElementById("design");

colors.style.display = "none";

// Program the "Design" <select> element to listen for user changes. When a change is detected:
// The "Color" <select> element should be enabled.
// The "Color" <select> element should display an available color.
design_select.addEventListener("change", function() {
    let design_puns = document.querySelector("option[value='js puns']");
    let design_heart = document.querySelector("option[value='heart js']");
    let all_colors = document.querySelectorAll("#color option");

    let puns_colors = document.querySelectorAll("option[value='cornflowerblue'], option[value='darkslategrey'], option[value='gold']");

    let heart_colors = document.querySelectorAll("option[value='tomato'], option[value='steelblue'], option[value='dimgrey']");

    colors.style.display = "block";  

    // The "Color" dropdown menu should display only the color options associated with the selected design. For example:
    // If the user selects "Theme - JS Puns" then the "Color" menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
    // If the user selects "Theme - I ♥ JS" then the "Color" menu should only display "Tomato," "Steel Blue," and "Dim Grey."

     // DOESN'T WORK IN SAFARI ************************************
    if (design_puns.selected === true) {
        for(var i = 0; i < puns_colors.length; i++) {
           heart_colors[i].hidden = true;
           puns_colors[i].hidden = false;
           all_colors[0].selected = true;
        }
    } else if (design_heart.selected === true) {
        for(var i = 0; i < puns_colors.length; i++) {
            puns_colors[i].hidden = true;
            heart_colors[i].hidden = false;
            all_colors[0].selected = true;
        }
    } else {
        colors.style.display = "none";
    }
    

});




// The "Total: $" element below the "Register for Activities" section should update to reflect the sum of the cost of the user’s selected activities.

// Program the "Register for Activities" fieldset element to listen for user changes. When a change is detected:
const activities = document.getElementById("activities");
const total_cost_p = document.getElementById("activities-cost");
const total = 50;

// If an activity is checked, the total cost should increase by the value in the data-cost attribute of the activity’s <input type="checkbox"> element.
activities.addEventListener("change", function(e) {
    let total = e.target.getAttribute("data-cost");
    total_cost_p.innerHTML = `Total: $${total}`;
});

// If an activity is unchecked, the total cost should decrease by that amount.
// The <p> element with the id of "activity-cost" below the activities section should update to reflect the chosen activities' total cost.





