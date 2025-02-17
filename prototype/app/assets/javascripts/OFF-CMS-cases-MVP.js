// ========================= Egress files =========================

$(document).ready(function () {

    $("input[name=searchOFF_URN]").on("keyup", function (e) {
        if ($(this).val() == 'Dumper Truck' || $(this).val() == 'Dumper truck' || $(this).val() == 'Dumper truck' || $(this).val() == 'Dumpertruck') {
            $('#searchOFF_SYSTEM').attr('action','03-case-overview');
        } else {
            $('#searchOFF_SYSTEM').attr('action','02-search-results');
        }
    });

    $("input[name=egress_file_link]").on("change", function (e) {
        $('#egress-table tbody tr').removeClass('selected');
        $(this).closest('tr').addClass('selected');
    });


    // Egress link files
    $(".egress_link_files").on("click", function (e) {
        $('#confirmEgressFiles').removeClass('rj-dont-display');
        var egressFolderName = $(this).closest('tr').find('.operation_name').text();
        $('.egress_folder_name').text(egressFolderName);
    });

    // V1
    $("input[id=offCMS_Egress_files]").on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#confirm-EgressFiles').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
        } else {
            $('#confirm-EgressFiles').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
        }
    });

    // V2
    $("input[id=offCMS_Egress_files_V2]").on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#confirm-EgressFiles').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
        } else {
            $('#confirm-EgressFiles').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
        }
    });

    // P Drive links files
    $(".pdrive_link_files").on("click", function (e) {
        $('#confirmPDriveFiles').removeClass('rj-dont-display');
        var pdriveFolderName = $(this).closest('tr').find('.operation_name').text();
        $('.pdrive_folder_name').text(pdriveFolderName);
    });

    // V1
    $("input[id=offCMS_PDrive_files]").on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#confirm-PDriveFiles').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
        } else {
            $('#confirm-PDriveFiles').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
        }
    });

    // V2
    $("input[id=offCMS_PDrive_files_V2]").on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#confirm-PDriveFiles').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
        } else {
            $('#confirm-PDriveFiles').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
        }
    });

    // V3
    $("input[id=offCMS_PDrive_files_V3]").on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#confirm-PDriveFiles').removeClass('govuk-button--disabled').removeAttr('disabled').attr('aria-disabled','false');
        } else {
            $('#confirm-PDriveFiles').addClass('govuk-button--disabled').removeAttr('onClick').attr('disabled','disabled').attr('aria-disabled','true');
        }
    });

})

function closeConfirmEgressFiles() {
    $('#confirmEgressFiles').addClass('rj-dont-display');
}

function closeConfirmPDriveFiles() {
    $('#confirmPDriveFiles').addClass('rj-dont-display');
}

