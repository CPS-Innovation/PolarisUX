// ========================= 4A Create Case =========================

$(document).ready(function () {

    $('.create-case-continue, #newCase_Errors, #newCase_OperationName-error, #newCase_URN-error').hide();

    $("#newCase_ErrorActivate").on("click", function (e) {
        e.preventDefault();
        $('#newCase_Errors, #newCase_OperationName-error, #newCase_URN-error').show();

        // Operation Name
        if ($('#newCase_OperationName').val()) {
            $('#newCase_OperationName-Value').removeClass('govuk-form-group--error');
            $('#newCase_OperationName-Value input').removeClass('govuk-input--error');
            $('#newCase_OperationName-error').hide();
        } else {
            $('#newCase_OperationName-Value').addClass('govuk-form-group--error');
            $('#newCase_OperationName-Value input').addClass('govuk-input--error');
            $('#newCase_OperationName-error').show();
        }

        // URN
        if ($('#newCase_URN-A').val() && $('#newCase_URN-B').val() && $('#newCase_URN-C').val() && $('#newCase_URN-D').val()) {
            $('#newCase_URN-Value').removeClass('govuk-form-group--error');
            $('#newCase_URN-Value input').removeClass('govuk-input--error');

            $('#newCase_URN-error, .newCase_Errors-ValueURN').hide();
        } else {
            $('#newCase_URN-Value').addClass('govuk-form-group--error');
            $('#newCase_URN-Value input').addClass('govuk-input--error');
        }

    });

    $("input[id=newCase_OperationName]").on("keyup", function (e) {
        if ($(this).val().length >= 1 && $('#newCase_URN-A').val().length >= 2 && $('#newCase_URN-C').val().length >= 4 && $('#newCase_URN-D').val().length >= 1) {
            $('.create-case-continue').show();
            $('.create-case-error').hide();
            $('.newCase_Errors-ValueOperation').hide();
        } else {
            $('.create-case-continue').hide();
            $('.create-case-error').show();
            $('.newCase_Errors-ValueOperation').show();
        }
        // $('.newCase_Errors-ValueOperation').hide();
        // if ($(this).val() && $('#newCase_URN-A').val() && $('#newCase_URN-B').val() && $('#newCase_URN-C').val() && $('#newCase_URN-D').val()) {
        //     $('.create-case-continue').show();
        //     $('.create-case-error').hide();
        // } else if ($(this).val() && $('#newCase_URN-A').val().length === 0 || $('#newCase_URN-C').val().length === 0 || $('#newCase_URN-D').val().length === 0) {
        //     $('.create-case-error').show();
        //     $('.create-case-continue').hide();
        //     $('#newCase_OperationName-error').hide();
        // }
    });

    $("input[id=newCase_URN-A]").on("keyup", function (e) {
        if ($(this).val().length === 0 || $('#newCase_URN-C').val().length === 0 || $('#newCase_URN-D').val().length === 0) {
            $('.create-case-continue').hide();
            $('.create-case-error').show();
        } else {
            $('.create-case-continue').show();
            $('.create-case-error').hide();
        }
    });

    $("input[id=newCase_URN-C]").on("keyup", function (e) {
        if ($(this).val().length === 0 || $('#newCase_URN-A').val().length === 0 || $('#newCase_URN-D').val().length === 0) {
            $('.create-case-continue').hide();
            $('.create-case-error').show();
        } else {
            $('.create-case-continue').show();
            $('.create-case-error').hide();
        }
    });

    $("input[id=newCase_URN-D]").on("keyup", function (e) {
        if ($(this).val().length === 0 || $('#newCase_URN-A').val().length === 0 || $('#newCase_URN-C').val().length === 0) {
            $('.create-case-continue').hide();
            $('.create-case-error').show();
        } else {
            $('.create-case-continue').show();
            $('.create-case-error').hide();
        }
    });


})

// ========================= 4B Create Case =========================

$(document).ready(function () {

    $('input[name=newCase_Access]').on("change", function() {
        if ($('input[id=newCase_Access--Later]').is(':checked')) {
            $('#newCase_Form-B').attr('action','5-case-overview');
        } else if ($('input[id=newCase_Access--Now]').is(':checked')) {
            $('#newCase_Form-B').attr('action','4C-create-case');
        }      
    });

})


// ========================= NAVIGATION =========================

// Home
if ($("#homepage-journey").length == 0) {
    $('#global-navigation.off-cms-journey ul li.homepage').removeClass('current');
} else {
    $('#global-navigation.off-cms-journey ul li.homepage').addClass('current');
}

// Create a Case
if ($("#create-case-journey").length == 0) {
    $('#global-navigation.off-cms-journey ul li.create-case').removeClass('current');
} else {
    $('#global-navigation.off-cms-journey ul li.create-case').addClass('current');
}

$(document).ready(function () {

    // My cases updated
    document.getElementById("my-cases-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // EA updated
    document.getElementById("EA-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Suspects updated
    document.getElementById("suspects-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Witnesses updated
    document.getElementById("witnesses-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Victims updated
    document.getElementById("victims-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Charges updated
    document.getElementById("charges-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Materials updated
    document.getElementById("materials-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Contacts updated
    document.getElementById("contacts-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Settings updated
    document.getElementById("settings-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // New case created
    document.getElementById("case-created-stamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Comms updated
    document.getElementById("comms-timestamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

})

// ========================= TABS =========================
$(document).ready(function () {

    $("#new-tabs .tab-link").on("click", function (e) {
        e.preventDefault();
        $('#new-tabs .govuk-tabs__list-item').removeClass('govuk-tabs__list-item--selected');
        $(this).parent().addClass('govuk-tabs__list-item--selected');
    });

    $("#new-tabs .tab-1-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-1-content').show();
    });

    $("#new-tabs .tab-2-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-2-content').show();
    });
    
    $("#new-tabs .tab-3-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-3-content').show();
    });

    $("#new-tabs .tab-4-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-4-content').show();
    });

    $("#new-tabs .tab-5-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-5-content').show();
    });

    $("#new-tabs .tab-6-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-6-content').show();
    });

    $("#new-tabs .tab-7-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-7-content').show();
    });

    $("#new-tabs .tab-8-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-8-content').show();
    });

    $("#new-tabs .tab-9-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-9-content').show();
    });

    $("#new-tabs .tab-10-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-10-content').show();
    });

    $("#new-tabs .tab-11-content").on("click", function (e) {
        $('.panel').hide();
        $('#tab-11-content').show();
    });

})

// ========================= ADD USERS =========================
$(document).ready(function () {
    $('#userDetails-2, #userDetails-3, #userDetails-4, #userDetails-5').hide();
})

function addUser1() {
    var userEmail = $('#newCase_Access-Email').val();
    var userAccess = $('#newCase_Access-Permissions').val();
    $('#new-contacts').append('<p><span class="icon-new user"></span>' + userEmail + '<br><strong class="govuk-tag">' + userAccess + '</strong></p>');
    $('#userDetails-1').hide();
    $('#userDetails-2').show();
}

function addUser2() {
    var userEmail2 = $('#newCase_Access-Email2').val();
    var userAccess2 = $('#newCase_Access-Permissions2').val();
    $('#new-contacts').append('<p><span class="icon-new user"></span>' + userEmail2 + '<br><strong class="govuk-tag">' + userAccess2 + '</strong></p>');
    $('#userDetails-2').hide();
    $('#userDetails-3').show();
}

function addUser3() {
    var userEmail3 = $('#newCase_Access-Email3').val();
    var userAccess3 = $('#newCase_Access-Permissions3').val();
    $('#new-contacts').append('<p><span class="icon-new user"></span>' + userEmail3 + '<br><strong class="govuk-tag">' + userAccess3 + '</strong></p>');
    $('#userDetails-3').hide();
    $('#userDetails-4').show();
}

function addUser4() {
    var userEmail4 = $('#newCase_Access-Email4').val();
    var userAccess4 = $('#newCase_Access-Permissions4').val();
    $('#new-contacts').append('<p><span class="icon-new user"></span>' + userEmail4 + '<br><strong class="govuk-tag">' + userAccess4 + '</strong></p>');
    $('#userDetails-4').hide();
    $('#userDetails-5').show();
}

function addUser5() {
    var userEmail5 = $('#newCase_Access-Email5').val();
    var userAccess5 = $('#newCase_Access-Permissions5').val();
    $('#new-contacts').append('<p><span class="icon-new user"></span>' + userEmail5 + '<br><strong class="govuk-tag">' + userAccess5 + '</strong></p>');
}

// ========================= REMOVE USERS =========================
$(document).ready(function () {
    $(".removeContact").on("click", function (e) {
        $(this).parent().parent().addClass('removeContact-Row');
        var userName = $(this).parent().parent().find('.govuk-table__header').text();
        $('#confirmRemoveUser').removeClass('rj-dont-display');
        $('.usernameRemove').text(userName);
    });

    $("input[id=offCMS_Username-Remove]").on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#confirm-RemoveUsers').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false').attr('onClick','return confirmRemoveUsers();');
        } else {
            $('#confirm-RemoveUsers').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
        }
    });

    
})

function closeConfirmRemoveUser() {
    $('#confirmRemoveUser').addClass('rj-dont-display');
    $('table.contacts-table tbody tr').removeClass('removeContact-Row');
}

function confirmRemoveUsers() {
    $('#confirmRemoveUser').addClass('rj-dont-display');
    $('table.contacts-table tbody tr.removeContact-Row').hide();
    var userNumbers = parseInt($('.tab-8-content .contacts-number').text());
    $('.tab-8-content .contacts-number').text(userNumbers-1);

}


// ========================= SHARED LINKS =========================
function copyEgressLink() {
    // Get the text field
    var copyText = document.getElementById("filePath-Egress");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    $('#copyEgressLink').text('Path copied');
    $('#copyDriveLink, #copyOutlookLink').text('Copy text');
}

function copyDriveLink() {
    // Get the text field
    var copyText = document.getElementById("filePath-Drive");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    $('#copyDriveLink').text('Path copied');
    $('#copyEgressLink, #copyOutlookLink').text('Copy text');
}

function copyOutlookLink() {
    // Get the text field
    var copyText = document.getElementById("filePath-Outlook");

    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    $('#copyOutlookLink').text('Path copied');
    $('#copyEgressLink, #copyDriveLink').text('Copy text');
}
