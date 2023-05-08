// Javascript for Interactive Form - TechDegree Project #3

// **********
// Global Variables
// **********

const user_name = document.getElementById("name");
const other_job_role = document.getElementById("other-job-role");
const job_role_select = document.getElementById("title");

const colors = document.getElementById("shirt-colors");
const design_select = document.getElementById("design");

const activities = document.getElementById("activities-box");
const total_cost_p = document.getElementById("activities-cost");
const activity_checkbox = document.querySelectorAll("#activities input[type=checkbox]");
let total = 0;

const payment_info_select = document.getElementById("payment");

const pay_with_cc = document.querySelector("option[value='credit-card']");
const pay_with_paypal = document.querySelector("option[value='paypal']");
const pay_with_bitcoin = document.querySelector("option[value='bitcoin']");

const payment_info_cc = document.getElementById("credit-card");
const payment_info_paypal = document.getElementById("paypal");
const payment_info_bitcoin = document.getElementById("bitcoin");

const form = document.querySelector("form");
const user_email = document.getElementById("email"); 

const valid_email = /^[^@]+@[^@.]+\.com+$/i;

const valid_cc_num = /^[^-][^\s]\d{11,14}$/;
const valid_zip = /^\d{5}$/;
const valid_cvv = /^\d{3}$/;
const cc_number = document.getElementById("cc-num");
const zip_code = document.getElementById("zip");
const cvv_code = document.getElementById("cvv");

let count = 0;

// Variables to select the span elements with ".hint" class.
let hint_name = user_name.parentElement.lastElementChild;
let hint_email = user_email.parentElement.lastElementChild;
let hint_activities = activities.parentElement.lastElementChild;    
let hint_cc = cc_number.parentElement.lastElementChild;    
let hint_zip = zip_code.parentElement.lastElementChild;
let hint_cvv = cvv_code.parentElement.lastElementChild;
// ---------------------------------------------------------- //


// **********
// Basic Info section
// **********

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


// **********
// T-Shirt Info section
// **********

// Disable the "Color" <select> element.
const color_select = document.getElementById("color");
color.setAttribute('disabled', true);

// When a change is detected in design drop down menu, the "Color" <select> element is enabled and will display an available colors.
design_select.addEventListener("change", function() {
    let design_puns = document.querySelector("option[value='js puns']");
    let design_heart = document.querySelector("option[value='heart js']");
    let all_colors = document.querySelectorAll("#color option");

    let puns_colors = document.querySelectorAll("option[value='cornflowerblue'], option[value='darkslategrey'], option[value='gold']");

    let heart_colors = document.querySelectorAll("option[value='tomato'], option[value='steelblue'], option[value='dimgrey']");

    color.removeAttribute("disabled");

     // Only shows color options that are available depending on the Design theme chosen in the desing drop down select menu. (** Doesn't work in Safari **)
    if (design_puns.selected === true) {
        for(var i = 0; i < puns_colors.length; i++) {
           heart_colors[i].hidden = true;
           puns_colors[i].hidden = false;
           puns_colors[0].selected = true;
        }
    } else if (design_heart.selected === true) {
        for(var i = 0; i < puns_colors.length; i++) {
            puns_colors[i].hidden = true;
            heart_colors[i].hidden = false;
            heart_colors[0].selected = true;
        }
    } else {
        colors.style.display = "none";
    }
});


// ************* 
// Register for Activities section
// ************* 

// The "Total: $" element below the "Register for Activities" section should update to reflect the sum of the cost of the user’s selected activities.
// Add ".disabled" class and disable chckto activities with conflicing times when an activity is chosen.
activities.addEventListener("change", function(e) {
    let single_cost = e.target.getAttribute("data-cost");
    let time = e.target.getAttribute("data-day-and-time");
    let day_and_times = Array.from(document.querySelectorAll("[data-day-and-time]"));
    
   
    if(e.target.checked === true) {
        total = parseInt(total) + parseInt(single_cost);

        for(i = 0; i < day_and_times.length; i++) {
            if(time === day_and_times[i].dataset.dayAndTime) {
                day_and_times[i].parentElement.classList.add("disabled"); 
                day_and_times[i].setAttribute("disabled", "disabled");
                e.target.parentElement.classList.remove("disabled");   
                e.target.removeAttribute("disabled", "disabled"); 
            }
        }
    }

    if(e.target.checked === false) {
        total = parseInt(total) - parseInt(single_cost);

        for(i = 0; i < day_and_times.length; i++) {
            if(time === day_and_times[i].dataset.dayAndTime) {
                day_and_times[i].parentElement.classList.remove("disabled"); 
                day_and_times[i].removeAttribute("disabled", "disabled");
            }
        }
        
    }

    total_cost_p.innerHTML = `Total: $${total}`;
});


// ************* 
// Payment Info Sectoin
// ************* 

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
    } 
    if(pay_with_bitcoin.selected === true) {
        payment_info_bitcoin.style.display = "inherit";
    } 
    if(pay_with_cc.selected === true) {
        payment_info_cc.style.display = "inherit";
    } 
});


// **********
// Functions for Form Validation of each field required. 
// **********

// The "Name" field cannot be blank or empty.
function name_validation() {
    if(user_name.value.trim()) {
        // do nothing if true
    } else {
        count++;
        return false;
    }
}

// Validating The "Email Address" field is not blank and is valid email format.
// Only accounting for email addresses ending in ".com" for this project.
function email_validation() {
    if(valid_email.test(user_email.value)){
        // do nothing if true
    } else {
        count++;
        return false;
    }
}

// The "Register for Activities" section must have at least one activity selected.
function activity_validation() {
    let checked_boxes = document.querySelectorAll("#activities input[type=checkbox]:checked");
    
    if(checked_boxes.length >= 1) {
        // do nothing if true
    } else {
        count++; 
        return false;
    }
}

// The "Card number" field must contain a 13 - 16 digit credit card number with no dashes or spaces.
function cc_validation() {
    if(valid_cc_num.test(cc_number.value)) {
        // do nothing if true
    } else {
        count++;
        return false;
    };
}

// The "Zip code" field must contain a 5 digit number.
function zip_validation() {
    if(valid_zip.test(zip_code.value)) {
        // do nothing if true
    } else {
        count++;
        return false;
    };
}

// The "CVV" field must contain a 3 digit number.
function cvv_validation() {
    if(valid_cvv.test(cvv_code.value)) {
        // do nothing if true
    } else {
        count++;
        return false;
    };
}

// if a required form field or section is invalid: add the ‘.not-valid’ className to the parent element of the form field or section and display hint text
// If valid: add '.vaild' className and hide hint text
function validationHints(result, field, hint) {
    if(result === false) {
        field.parentElement.classList.add("not-valid");
        hint.style.display = "inherit";
    } else {
        field.parentElement.classList.add("valid");
        hint.style.display = "none";
    }
}


// **********
// Form validation for all required fields to be checked on "submit".
// **********

form.addEventListener("submit", function(e) {
    count = 0;
    
    name_result = name_validation();
    email_result = email_validation();
    activity_result = activity_validation();
    
    // If and only if credit card is the selected payment method:
    if(pay_with_cc.selected === true) {
        cc_result = cc_validation();
        zip_result = zip_validation();
        cvv_result = cvv_validation();
    } 

    // Removes ".not-valid" className on each submit to clear form of corrected inputs that are now valid. 
    let not_valid = document.getElementsByClassName("not-valid");
    while(not_valid.length > 0){
        not_valid[0].classList.remove('not-valid');
    }

     // Remove the ‘.valid’ className from the parent element of the form field or section.
    let valid = document.getElementsByClassName("valid");
    while(valid.length > 0){
        valid[0].classList.remove('valid');
    }

    validationHints(name_result, user_name, hint_name);

    validationHints(email_result, user_email, hint_email);

    validationHints(activity_result, activities, hint_activities);

    validationHints(cc_result, cc_number, hint_cc);

    validationHints(zip_result, zip_code, hint_zip);

    validationHints(cvv_result, cvv_code, hint_cvv);

    // Prevent form submission if one or more of the required fields is invalid.
    if(count >= 1) {
        e.preventDefault();
    }
});

// **********
// Accessibility additions and considerations
// **********

// Activity checkbox input elements listen for the focus and blur events.  When focus event is detected, add ".focus" className to the checkbox input’s parent label element.  When blur event is detected, remove ".focus" className.
for(i = 0; i < activity_checkbox.length; i++) {
    activity_checkbox[i].addEventListener("focus", function(e) {
        e.target.parentElement.classList.add("focus");
    })
    activity_checkbox[i].addEventListener("blur", function(e) {
        e.target.parentElement.classList.remove("focus");
    })
};



// **********
// EXTRA CREDIT ---------->
// **********

// **********
// Form validation for the CVV Code field to be checked on "keyup".
// **********

cvv_code.addEventListener("keyup", function() {
    cvv_result = cvv_validation();

     // Removes ".not-valid" className on each keyup to clear form of corrected inputs that are now valid. 
     let not_valid = document.getElementsByClassName("not-valid");
     while(not_valid.length > 0){
         not_valid[0].classList.remove('not-valid');
     }
 
      // Remove the ‘.valid’ className from the parent element of the form field or section.
     let valid = document.getElementsByClassName("valid");
     while(valid.length > 0){
         valid[0].classList.remove('valid');
     }

    validationHints(cvv_result, cvv_code, hint_cvv);
})


// **********
// Form validation for the Zip Code field to give conditional error messages.
// **********

// For Zip Code field, provide one error message if the field fails for not having correct number of digits, and a separate message if it fails due to having characters that are not digits.

// The "Zip code" field must contain a 5 digit number.
function zip_conditional_message() {
    if(zip_code.value.match(/[^0-9]/)) {
        let zip_has_letter = "Zip Code must be numbers only.";
        return zip_has_letter;
    } else {
        return "Zip Code must be 5 digits";
    };
}

form.addEventListener("submit", function(e) {
    zip_conditional = zip_conditional_message();
    hint_zip.innerHTML = zip_conditional;
});




















