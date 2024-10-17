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

// ========================= Secondary Tabs ========================= //
function secondaryTab1() {
    $('.secondaryTabContent').hide();
    $('.secondaryTabContent#secondaryTabContent-1').show();

    $('.moj-sub-navigation__item').removeClass('secondaryTab-Selected');
    $('.moj-sub-navigation__item#secondaryTab-1').addClass('secondaryTab-Selected');
    $('.moj-sub-navigation__item a').removeAttr('aria-current');
    $('.moj-sub-navigation__item#secondaryTab-1 a').attr('aria-current','page');
}

function secondaryTab2() {
    $('.secondaryTabContent').hide();
    $('.secondaryTabContent#secondaryTabContent-2').show();

    $('.moj-sub-navigation__item').removeClass('secondaryTab-Selected');
    $('.moj-sub-navigation__item#secondaryTab-2').addClass('secondaryTab-Selected');
    $('.moj-sub-navigation__item a').removeAttr('aria-current');
    $('.moj-sub-navigation__item#secondaryTab-2 a').attr('aria-current','page');
}


// ========================= Create REVIEW Report ========================= //
$(document).ready(function () {
    $("#eaCaseSummary-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaCaseSummary').addClass('completed'); });
    $("#eaEvidentialAanalysis-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaEvidentialAanalysis').addClass('completed'); });
    $("#eaPublicInterestAssesment-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaPublicInterestAssesment').addClass('completed'); });
    $("#eaWitnessVictim-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaWitnessVictim').addClass('completed'); });
    $("#eaTrialStrategy-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaTrialStrategy').addClass('completed'); });
    $("#eaAllocation-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaAllocation').addClass('completed'); });
    $("#eaDisclosureActions-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaDisclosureActions').addClass('completed'); });
    $("#eaHumanRights-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaHumanRights').addClass('completed'); });
    $("#eaCaseAdvocate-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.eaCaseAdvocate').addClass('completed'); });

    $("input[name=eaHumanRightsRadio]").on("change", function (e) { 
        if ($('input[id=eaHumanRightsRadio-Yes]').is(':checked')) {
            $('.eaHumanRights-Panel').show();
        } else if ($('input[id=eaHumanRightsRadio-No]').is(':checked')) {
            $('.eaHumanRights-Panel').hide();
        }      
    });

    $("input[name=eaCaseMonitoring_Checkboxes]").on("change", function (e) { 
        $('nav.tube-map-ea ul li.eaCaseMonitoring').addClass('completed');
        if ($('input[id=eaCaseMonitoring_Checkboxes-5]').is(':checked')) {
            $('.eaCaseRelationship').show();
            $('#eaCaseMonitoring-Continue').attr('onClick','return eaCaseRelationship();');
        } else {
            $('.eaCaseRelationship').hide();
            $('#eaCaseMonitoring-Continue').attr('onClick','return eaPreview();');        
        }      
    });

    $("input[name=eaCaseMonitoring_Checkboxes-V2]").on("change", function (e) { 
        $('nav.tube-map-ea ul li.eaCaseMonitoring').addClass('completed');
    });

    $("input[name=eaCaseRelationship-Type]").on("change", function (e) { 
        $('nav.tube-map-ea ul li.eaCaseRelationship').addClass('completed');
        $('#eaCaseRelationship-Sex').show();
        $('#domesticAbuse').show();

        var relationshipType = $("input[name=eaCaseRelationship-Type]:checked").val();
        $('.relationship').append(relationshipType);
    });

    $("input[name=eaCaseRelationship-Sex]").on("change", function (e) { 
        $('#domesticAbuse-Relationship').show();

        var relationshipSex = $("input[name=eaCaseRelationship-Sex]:checked").val();
        $('.sexRelationship').append(relationshipSex);
    });

})

// 1
function eaCaseSummary() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaCaseSummary').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaCaseSummary').addClass('show-panel');
}

// 2
function eaEvidentialAanalysis() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaEvidentialAanalysis').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaEvidentialAanalysis').addClass('show-panel');
}

// 3
function eaPublicInterestAssesment() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaPublicInterestAssesment').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaPublicInterestAssesment').addClass('show-panel');
}

// 4
function eaWitnessVictim() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaWitnessVictim').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaWitnessVictim').addClass('show-panel');
}

// 5
function eaTrialStrategy() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaTrialStrategy').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaTrialStrategy').addClass('show-panel');
}

// 6
function eaAllocation() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaAllocation').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaAllocation').addClass('show-panel');
}

// 7
function eaDisclosureActions() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaDisclosureActions').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaDisclosureActions').addClass('show-panel');
}

// 8 
function eaHumanRights() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaHumanRights').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaHumanRights').addClass('show-panel');
}

// 9 
function eaCaseAdvocate() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaCaseAdvocate').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaCaseAdvocate').addClass('show-panel');
}

// 10A 
function eaCaseMonitoring() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaCaseMonitoring').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaCaseMonitoring').addClass('show-panel');
}

// 10B 
function eaCaseRelationship() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaCaseRelationship').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#eaCaseRelationship').addClass('show-panel');
}

// 11
function eaPreview() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.eaPreview').addClass('selected');

    $('.ea-content-panel').removeClass('show-panel');
    $('#eaPreview').addClass('show-panel');

    var eaCaseSummary = $('#eaCaseSummary-Editor').html();
    if (eaCaseSummary.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Case summary</strong><br>` + eaCaseSummary + `<br><br>`); }

    var eaEvidentialAanalysis = $('#eaEvidentialAanalysis-Editor').html();
    if (eaEvidentialAanalysis.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Evidential analysis</strong><br>` + eaEvidentialAanalysis + `<br><br>`); }

    var eaPublicInterestAssesment = $('#eaPublicInterestAssesment-Editor').html();
    if (eaPublicInterestAssesment.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Public interest assessment</strong><br>` + eaPublicInterestAssesment + `<br><br>`); }

    var eaWitnessVictim = $('#eaWitnessVictim-Editor').html();
    if (eaWitnessVictim.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Witness and victim strategy</strong><br>` + eaWitnessVictim + `<br><br>`); }
    
    var eaTrialStrategy = $('#eaTrialStrategy-Editor').html();
    if (eaTrialStrategy.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Trial Strategy</strong><br>` + eaTrialStrategy + `<br><br>`); }

    var eaAllocation = $('#eaAllocation-Editor').html();
    if (eaAllocation.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Allocation</strong><br>` + eaAllocation + `<br><br>`); }
    
    var eaDisclosureActions = $('#eaDisclosureActions-Editor').html();
    if (eaDisclosureActions.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Disclosure</strong><br>` + eaDisclosureActions + `<br><br>`); }
    
    var eaHumanRights = $('#eaHumanRights-Editor').html();
    if (eaHumanRights.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Human rights factors</strong><br>` + eaHumanRights + `<br><br>`); }

    var eaCaseAdvocate = $('#eaCaseAdvocate-Editor').html();
    if (eaCaseAdvocate.length >= 1 ) { $('#eaCaseSummary-Preview').append(`<strong>Advocate and op.delivery instructions</strong><br>` + eaCaseAdvocate + `<br><br>`); }

    // Monitoring codes
    if ($('input[name="eaCaseMonitoring_Checkboxes"]:checked').length >= 2 || $('input[name="eaCaseMonitoring_Checkboxes-V2"]:checked').length >= 1) {
        $('.monitoringCodes').show();
    } else {
        $('.monitoringCodes').hide();
    }

    if ($('input[name="eaCaseMonitoring_Checkboxes"]:checked').length >= 2) {
        $('.monitoringCodes .global-codes').show();
    } else if ($('input[name="eaCaseMonitoring_Checkboxes"]:checked').length == 1) {
        $('.monitoringCodes .global-codes').hide();
    }      

    if ($('input[name="eaCaseMonitoring_Checkboxes-V2"]:checked').length >= 1) {
        $('.monitoringCodes .local-codes').show();
    } else if ($('input[name="eaCaseMonitoring_Checkboxes-V2"]:checked').length == 0) {
        $('.monitoringCodes .local-codes').hide();
    }   

    // Global codes
    if ($('input[id=eaCaseMonitoring_Checkboxes-1]').is(':checked')) { $('.monitoringCodes .global-codes').append('Asset recovery' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-2]').is(':checked')) { $('.monitoringCodes .global-codes').append('Child abuse' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-3]').is(':checked')) { $('.monitoringCodes .global-codes').append('Crime against an older person' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-4]').is(':checked')) { $('.monitoringCodes .global-codes').append('Disability hate crime' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-5]').is(':checked')) { $('.monitoringCodes .global-codes').append('Domestic abuse' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-6]').is(':checked')) { $('.monitoringCodes .global-codes').append('DA specialist court' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-7]').is(':checked')) { $('.monitoringCodes .global-codes').append('Extraordinary event' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-8]').is(':checked')) { $('.monitoringCodes .global-codes').append('Fatality' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-9]').is(':checked')) { $('.monitoringCodes .global-codes').append('Forced marriage' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-10]').is(':checked')) { $('.monitoringCodes .global-codes').append('GAP' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-11]').is(':checked')) { $('.monitoringCodes .global-codes').append('Homophobic' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-12]').is(':checked')) { $('.monitoringCodes .global-codes').append('Honour crime' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-13]').is(':checked')) { $('.monitoringCodes .global-codes').append('Human trafficking' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-14]').is(':checked')) { $('.monitoringCodes .global-codes').append('Identified victim' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-15]').is(':checked')) { $('.monitoringCodes .global-codes').append('Joint enterprise' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-16]').is(':checked')) { $('.monitoringCodes .global-codes').append('Media interest' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-17]').is(':checked')) { $('.monitoringCodes .global-codes').append('Mental health' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-18]').is(':checked')) { $('.monitoringCodes .global-codes').append('Nationality bar' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-19]').is(':checked')) { $('.monitoringCodes .global-codes').append('NGAP' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-20]').is(':checked')) { $('.monitoringCodes .global-codes').append('Op Venetic' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-21]').is(':checked')) { $('.monitoringCodes .global-codes').append('Police complaints' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-22]').is(':checked')) { $('.monitoringCodes .global-codes').append('Pre-charge decision' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-23]').is(':checked')) { $('.monitoringCodes .global-codes').append('Prohibited weapons' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-24]').is(':checked')) { $('.monitoringCodes .global-codes').append('PTWI referral' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-25]').is(':checked')) { $('.monitoringCodes .global-codes').append('Racist crime' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-26]').is(':checked')) { $('.monitoringCodes .global-codes').append('Racist/religious incident' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-27]').is(':checked')) { $('.monitoringCodes .global-codes').append('Rape' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-28]').is(':checked')) { $('.monitoringCodes .global-codes').append('Religious crime' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-29]').is(':checked')) { $('.monitoringCodes .global-codes').append('Substantial charge alteration' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-30]').is(':checked')) { $('.monitoringCodes .global-codes').append('Transphobic' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-31]').is(':checked')) { $('.monitoringCodes .global-codes').append('Vulnerable/intimidated victim' + '<br>'); }

    // Local codes
    if ($('input[id=eaCaseMonitoring_Checkboxes-A]').is(':checked')) { $('.monitoringCodes .local-codes').append('Drug confiscation' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-B]').is(':checked')) { $('.monitoringCodes .local-codes').append('Football hooliganism' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-C]').is(':checked')) { $('.monitoringCodes .local-codes').append('Hoax bomb phone calls' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-D]').is(':checked')) { $('.monitoringCodes .local-codes').append('Infanticide' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-E]').is(':checked')) { $('.monitoringCodes .local-codes').append('Medicinal cannabis' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-F]').is(':checked')) { $('.monitoringCodes .local-codes').append('Murder' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-G]').is(':checked')) { $('.monitoringCodes .local-codes').append('RTA fatality' + '<br>'); }
    if ($('input[id=eaCaseMonitoring_Checkboxes-H]').is(':checked')) { $('.monitoringCodes .local-codes').append('Victim focus' + '<br>'); }

}

// ========================= Create EA Report ========================= //
$(document).ready(function () {
    $("#ea2Introduction-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Introduction').addClass('completed'); $('nav.tube-map-ea ul li.ea2Preview').addClass('completed'); });
    $("#ea2Materials-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Materials').addClass('completed'); $('nav.tube-map-ea ul li.ea2Preview').addClass('completed'); });
    $("#ea2Summary-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Summary').addClass('completed'); $('nav.tube-map-ea ul li.ea2Preview').addClass('completed'); });
    $("#ea2Law-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2Law').addClass('completed'); $('nav.tube-map-ea ul li.ea2Preview').addClass('completed'); });
    $("#ea2NextSteps-Editor").on("keyup", function (e) { $('nav.tube-map-ea ul li.ea2NextSteps').addClass('completed'); $('nav.tube-map-ea ul li.ea2Preview').addClass('completed'); });
})

function ea2Introduction() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Introduction').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Introduction').addClass('show-panel');
}

function ea2Materials() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Materials').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Materials').addClass('show-panel');
}

function ea2Summary() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Summary').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Summary').addClass('show-panel');
}

function ea2Law() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Law').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Law').addClass('show-panel');
}

function ea2NextSteps() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2NextSteps').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2NextSteps').addClass('show-panel');
}

function ea2Preview() {
    $('nav.tube-map-ea ul li').removeClass('selected');
    $('nav.tube-map-ea ul li.ea2Preview').addClass('selected');
    $('.ea-content-panel').removeClass('show-panel');
    $('#ea2Preview').addClass('show-panel');

    var ea2Introduction = $('#ea2Introduction-Editor').html();
    if (ea2Introduction.length >= 1 ) { $('#ea2Preview-Preview').append(`<strong>Introduction</strong><br>` + ea2Introduction + `<br><br>`); }

    var ea2Materials = $('#ea2Materials-Editor').html();
    if (ea2Materials.length >= 1 ) { $('#ea2Preview-Preview').append(`<strong>List of given materials</strong><br>` + ea2Materials + `<br><br>`); }

    var ea2Summary = $('#ea2Summary-Editor').html();
    if (ea2Summary.length >= 1 ) { $('#ea2Preview-Preview').append(`<strong>Summary of Advice</strong><br>` + ea2Summary + `<br><br>`); }

    var ea2Law = $('#ea2Law-Editor').html();
    if (ea2Law.length >= 1 ) { $('#ea2Preview-Preview').append(`<strong>Law</strong><br>` + ea2Law + `<br><br>`); }

    var ea2NextSteps = $('#ea2NextSteps-Editor').html();
    if (ea2NextSteps.length >= 1 ) { $('#ea2Preview-Preview').append(`<strong>Next steps</strong><br>` + ea2NextSteps + `<br><br>`); }

}

function saveCA() {
    $.cookie("ea2IntroductionContent", $('#ea2Introduction-Editor').html(), {path:'/'});
    $.cookie("ea2MaterialsContent", $('#ea2Materials-Editor').html(), {path:'/'});
    $.cookie("ea2SummaryContent", $('#ea2Summary-Editor').html(), {path:'/'});
    $.cookie("ea2LawContent", $('#ea2Law-Editor').html(), {path:'/'});
    $.cookie("ea2NextStepsContent", $('#ea2NextSteps-Editor').html(), {path:'/'});
}

$(document).ready(function () {

    if ($.cookie("ea2IntroductionContent") || $.cookie("ea2MaterialsContent") || $.cookie("ea2SummaryContent") || $.cookie("ea2LawContent") || $.cookie("ea2NextStepsContent")) {
        $('#ea-NotAvailable').hide();
        $('#ea-available').show();
    } else {
        $('#ea-NotAvailable').show();
        $('#ea-available').hide();
    }

    // 1 - Introduction
    if ($.cookie("ea2IntroductionContent") == '' || $.cookie("ea2IntroductionContent") == 'undefined') {
        $('#ea2Introduction-Content').hide();
    } else if ($.cookie("ea2IntroductionContent")) { 
        $('#ea2Introduction-Content').show(); $('#ea2Introduction-Content td').append($.cookie("ea2IntroductionContent")); 
        $('.ea-description').append('an introduction, ');
    } 

    // 2 - List of given materials
    if ($.cookie("ea2MaterialsContent") == '' || $.cookie("ea2MaterialsContent") == 'undefined') {
        $('#ea2Materials-Content').hide();
    } else if ($.cookie("ea2MaterialsContent")) { 
        $('#ea2Materials-Content').show(); $('#ea2Materials-Content td').append($.cookie("ea2MaterialsContent")); 
        $('.ea-description').append('a list of given materials,');
    }  

    // 3 - Summary of Advice
    if ($.cookie("ea2SummaryContent") == '' || $.cookie("ea2SummaryContent") == 'undefined') {
        $('#ea2Summary-Content').hide();
    } else if ($.cookie("ea2SummaryContent")) { 
        $('#ea2Summary-Content').show(); $('#ea2Summary-Content td').append($.cookie("ea2SummaryContent")); 
        $('.ea-description').append('a summary of Advice, ');
    }

    // 4 - Law
    if ($.cookie("ea2LawContent") == '' || $.cookie("ea2LawContent") == 'undefined') {
        $('#ea2Law-Content').hide();
    } else if ($.cookie("ea2LawContent")) { 
        $('#ea2Law-Content').show(); $('#ea2Law-Content td').append($.cookie("ea2LawContent")); 
        $('.ea-description').append('a description of law, ');
    } 

    // 5 - Next steps
    if ($.cookie("ea2NextStepsContent") == '' || $.cookie("ea2NextStepsContent") == 'undefined') {
        $('#ea2NextSteps-Content').hide();
    } else if ($.cookie("ea2NextStepsContent")) { 
        $('#ea2NextSteps-Content').show(); $('#ea2NextSteps-Content td').append($.cookie("ea2NextStepsContent")); 
        $('.ea-description').append('some next steps, ');
    } 
})

function openEA() {
    $('#eaModal').removeClass('rj-dont-display');
}
function closeEAModal() {
    $('#eaModal').addClass('rj-dont-display');
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

    // EA New updated
    document.getElementById("EA-timestamp-NEW").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // EA New updated
    document.getElementById("EA-timestamp-NEW2").innerHTML = formatAMPM();
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

    // CMR
    document.getElementById("CMR-stamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }

    // Emails
    document.getElementById("email-date").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }
    
    // Emails
    document.getElementById("email-date2").innerHTML = formatAMPM();
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

