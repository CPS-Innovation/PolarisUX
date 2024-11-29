// =================================== MATERIALS - COOKIES =================================== //
$(document).ready(function () {

    $("#transfer_Materials").on("click", function (e) { 
        location.reload();
        if ($('input[id=transfer_Folder_3]').is(':checked')) {
            $.cookie("transfer_Folder_3", true, {path:'/'});
        }
    });

    if ($.cookie("transfer_Folder_3") == 'true') {
        // Numbers
        $('#materials_Nav .materials-number').removeClass('zero');
        $('.number-1').removeClass('zero');

        var materialsNumber1 = parseInt($('#materials_Nav .materials-number').text());
        var materialsNumber2 = parseInt($('.number-1').text());
        var inboundNumber1 = parseInt($('#materials_Nav .inbound-number').text());
        // $('#materials_Nav .materials-number').text(materialsNumber1 + 11);
        $('.number-1').text(materialsNumber2 + 11);
        // $('#materials_Nav .inbound-number').text(inboundNumber1 - 11);

        // Content
        $('.materials_section_1 .documents-available').css('display','inline-block');
        $('.materials_section_1 .documents-holder').hide();
        $('#materials-table .folder.materials_Row_1').addClass('empty');
        $('#materials_Row_1 td table').remove();
        $('#materials_Row_1 td').append(`
            <td scope="row" class="govuk-table__cell" colspan="2">
                <p>There are no documents currently in this folder</p>
            </td>
        `);


        
        $('.accordion-wrapper').hide();
        $('#loading_materials').show();

        setTimeout(function () {
            $('#loading_materials').hide();
            $('.accordion-wrapper').show();
        }, 3000)

    }

})

