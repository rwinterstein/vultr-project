/**
 * Allow user to add additional educations
 * and update control buttons based on how
 * many educations are currently displayed
 */

let educationTemplate =
'<div class="education__group">'
+'<div class="row">'
+'<div class="col-sm-12 col-md">'
+'<label for="school" hidden></label>'
+'<input type="text" name="school" id="school" placeholder="School">'
+'</div>'
+'<div class="col-sm-12 col-md">'
+'<label for="start_date" hidden></label>'
+'<input type="date" name="start_date" id="start_date" placeholder="Start Date">'
+'</div>'
+'</div>'
+'<div class="row">'
+'<div class="col-sm-12 col-md">'
+'<label for="field_of_study" hidden></label>'
+'<input type="text" name="field_of_study" id="field_of_study" placeholder="Field of Study">'
+'</div>'
+'<div class="col-sm-12 col-md">'
+'<label for="end_date" hidden></label>'
+'<input type="date" name="end_date" id="end_date" placeholder="End Date">'
+'</div>'
+'</div>'
+'<div class="row">'
+'<div class="col-sm-12 col-md-6">'
+'<label for="Degree" hidden></label>'
+'<input type="text" name="Degree" id="Degree" placeholder="Degree">'
+'</div>'
+'</div>'
+'</div>';

let educationCount = 1;

$('#add_education').click(function (e) {
    e.preventDefault();

    educationCount++;

    // duplicate the education input group
    $(educationTemplate).insertAfter('.form__education .education__group:last');

    // display the 'remove education' button when 2 or more educations are added
    if (educationCount > 1) {
        $('#remove_education').addClass('show_remove_btn');
    }
});

$('#remove_education').click(function (e) {
    e.preventDefault();

    educationCount--;

    // remove the most
    $('.form__education .education__group:last').remove();

    // hide the 'remove education' button when there is only 1 education left
    if (educationCount === 1) {
        $('#remove_education').removeClass('show_remove_btn');
    }
});

/**
 * Show additional input field if the user
 * selects 'yes' for employee referral question
 */

let referralInputField =
'<div class="col-sm-12 col-md-6 referral_name" id="referral_name">'
+'<input type="text" name="referral" id="referral">'
+'</div>';

$('#referral_yes').click(function (e) {
    $(referralInputField).insertAfter($('#referral_yes').closest('.radio__option'));
});

$('#referral_no').click(function (e) {
    $('#referral_name').remove();
});
