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


// When a change is detected in design drop down menu, the "Color" <select> element is enabled and will display an available colors.
design_select.addEventListener("change", function() {
    let design_puns = document.querySelector("option[value='js puns']");
    let design_heart = document.querySelector("option[value='heart js']");
    let all_colors = document.querySelectorAll("#color option");

    let puns_colors = document.querySelectorAll("option[value='cornflowerblue'], option[value='darkslategrey'], option[value='gold']");

    let heart_colors = document.querySelectorAll("option[value='tomato'], option[value='steelblue'], option[value='dimgrey']");

    colors.style.display = "block";  

     // Only shows color options that are available depending on the Design theme chosen in the desing drop down select menu. (** Doesn't work in Safari **)
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
const activities = document.getElementById("activities");
const total_cost_p = document.getElementById("activities-cost");
const activity_checkbox = document.querySelectorAll("#activities input[type=checkbox]");
let total = 0;

activities.addEventListener("change", function(e) {
    let single_cost = e.target.getAttribute("data-cost");

    if(e.target.checked === true) {
        total = parseInt(total) + parseInt(single_cost);
    }
    if(e.target.checked === false) {
        total = parseInt(total) - parseInt(single_cost);
    }

    total_cost_p.innerHTML = `Total: $${total}`;
    
});


// Variables and functions for Payment Info Sectoin
const payment_info_select = document.getElementById("payment");

const pay_with_cc = document.querySelector("option[value='credit-card']");
const pay_with_paypal = document.querySelector("option[value='paypal']");
const pay_with_bitcoin = document.querySelector("option[value='bitcoin']");

const payment_info_cc = document.getElementById("credit-card");
const payment_info_paypal = document.getElementById("paypal");
const payment_info_bitcoin = document.getElementById("bitcoin");

// Credit card payment option shows as selected by default when the form first loads and other payment option information is hidden
pay_with_cc.setAttribute("selected", "");
payment_info_paypal.style.display = "none";
payment_info_bitcoin.style.display = "none";

// Hide and show payment option information ddpending on which type is selected from the "I'm going to pay with" select menu.
payment_info_select.addEventListener("change", function() {
    payment_info_paypal.style.display = "none";
    payment_info_cc.style.display = "none";
    payment_info_bitcoin.style.display = "none";

    if(pay_with_paypal.selected === true) {
        payment_info_paypal.style.display = "inherit";
    } if(pay_with_bitcoin.selected === true) {
        payment_info_bitcoin.style.display = "inherit";
    } if(pay_with_cc.selected === true) {
        payment_info_cc.style.display = "inherit";
    } 
});


// Variables and functions for Form Validation













