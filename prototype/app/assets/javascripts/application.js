/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})


// Floating footer
$(document).ready(function () {
    if ($('main').hasClass('case-files')) {
        // $('body').addClass('float');
        $('html').addClass('case-files');
    }

    // $('.show-case').on("click", function (e) {
    //     $('#navbar2').show();
    // });

     // $('.searchModal').on("click", function (e) {
     //    var nameValue = document.getElementById("searchURNModal").value;
     //    alert('nameValue');
     // });

    // Get form element
    var form=document.getElementById("searchFormTest");
    function submitForm(event){
       //Preventing page refresh
       event.preventDefault();
    }

  //Calling a function during form submission.
  form.addEventListener('submit', submitForm);

})

$(window).scroll(function() {
    if ($('#navbar2 li').length == 3) {
        $('#navbar2').addClass('no-list');
    } else if ($('#navbar2 li').length >= 4) {
        $('#navbar2').removeClass('no-list');
    }
});

// =================================== Document filter =================================== //
$(document).ready(function () {
    $('.accordion-controls').append(``);    
})

// =================================== Tabs =================================== //
$(document).ready(function () {
    $("#new-tabs .tab-link").on("click", function (e) {
        e.preventDefault();
        $('#new-tabs .list-item').removeClass('list-item--selected');
        $(this).parent().addClass('list-item--selected');
    });

    $("#new-tabs .sent-plan-link").on("click", function (e) {
        $('.panel').hide();
        $('#sent-plan').show();
    });

    $("#new-tabs .draft-plan-link").on("click", function (e) {
        $('.panel').hide();
        $('#draft-plan').show();
    });
    
})



// =================================== Back to top =================================== //
// $(document).ready(function () {

//     $("#backToTop").hide(); // hide the fixed navbar initially

//     var topofDiv = $("#caseFilesCol").offset().top; //gets offset of header
//     var height = $("#caseFilesCol").outerHeight(); //gets height of header

//     $(window).scroll(function(){
//         if($(window).scrollTop() > (topofDiv + height)){
//            $("#backToTop").show();
//         }
//         else{
//            $("#backToTop").hide();
//         }
//     });

// })
 
// =================================== Redaction log =================================== //
// $("#redaction-log, .hidden-select").hide();
$(".hidden-select").hide();

// function showHideRedaction() {
//     setTimeout(function() {
//         $("#saving-panel").show();
//         // $(".success-banner").hide();        
//         // $("#redaction-log").show();
//         alert('working');
//     }, 5000);
    // setTimeout(function() {
    //     $("#saving-panel").hide();
    //     $(".success-banner").addClass('test');
    //     alert('10000');
    // }, 10000);
    // setTimeout(function() {
    //     $(".success-banner").slideUp();
    //     alert('15000');
    // }, 15000);
// }

$(document).ready(function () {
    $(".delete").on("click", function (e) {
        e.preventDefault();
        $(this).closest('.govuk-grid-row').remove();
    });

    $(".edit-item").on("click", function (e) {
        e.preventDefault();
        $(this).closest('p').addClass('hide');
        $(this).parent().parent().find('.hidden-select').addClass('show');
    });

    $(".edit-item-doctype").on("click", function (e) {
        e.preventDefault();
        $(this).parent().addClass('hide');
        $(this).parent().parent().find('.hidden-select').addClass('show');
    });
})

function countChar1(val) {
    var len = val.value.length;
    if (len >= 400) {
        val.value = val.value.substring(0, 400);
    } else {
        $('#charNum1').text(400 - len);
    }
};

function countChar2(val) {
    var len = val.value.length;
    if (len >= 400) {
        val.value = val.value.substring(0, 400);
    } else {
        $('#charNum2').text(400 - len);
    }
};

function countChar3(val) {
    var len = val.value.length;
    if (len >= 400) {
        val.value = val.value.substring(0, 400);
    } else {
        $('#charNum3').text(400 - len);
    }
};

function countChar4(val) {
    var len = val.value.length;
    if (len >= 400) {
        val.value = val.value.substring(0, 400);
    } else {
        $('#charNum4').text(400 - len);
    }
};

function countChar5(val) {
    var len = val.value.length;
    if (len >= 400) {
        val.value = val.value.substring(0, 400);
    } else {
        $('#charNum5').text(400 - len);
    }
};

function countChar6(val) {
    var len = val.value.length;
    if (len >= 400) {
        val.value = val.value.substring(0, 400);
    } else {
        $('#charNum6').text(400 - len);
    }
};

// =================================== Tooltip =================================== //
function toggleTooltip1() {
    $('.tooltiptext-1').toggleClass('active');
    $('.tooltiptext-2').removeClass('active');
}

function closeToggleTooltip1() {
    $('.tooltiptext-1').removeClass('active');
}

function toggleTooltip2() {
    $('.tooltiptext-2').toggleClass('active');
    $('.tooltiptext-1').removeClass('active');
}

function closeToggleTooltip2() {
    $('.tooltiptext-2').removeClass('active');
}

// var tooltip = document.querySelector('.tooltip')

// tooltip.addEventListener('click', function() {
//     if (this.classList.contains('active')) {
//         this.classList.remove('active');
//     } else {
//         this.classList.add('active');
//     }  
// });


// =================================== Search =================================== //
function selectAll1(source) {
    checkboxes = document.getElementsByName('search-group-1');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}
function selectAll2(source) {
    checkboxes = document.getElementsByName('search-group-2');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}
function selectAll3(source) {
    checkboxes = document.getElementsByName('search-group-3');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}
function selectAll4(source) {
    checkboxes = document.getElementsByName('search-group-4');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}
function selectAll5(source) {
    checkboxes = document.getElementsByName('search-group-5');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}
function selectAll6(source) {
    checkboxes = document.getElementsByName('search-group-6');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}
function selectAll7(source) {
    checkboxes = document.getElementsByName('search-group-7');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}
function selectAll8(source) {
    checkboxes = document.getElementsByName('search-group-8');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}
function selectAll9(source) {
    checkboxes = document.getElementsByName('search-group-9');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}


// =================================== Document viewer =================================== //
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function toggleClass() {
    $('.dropbtn').toggleClass('open');
}

function myFunction() {
    // $('.dropdown-content').toggle('show');
    // document.getElementsByClassName("dropdown-content").classList.toggle("show");
    // $("dropdown-content").toggle("show");
    document.getElementById("myDropdown1").classList.toggle("show");
    document.getElementById("myDropdown2").classList.toggle("show");
}

// // Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// =================================== Emails viewer =================================== //

function email() {

    $(".email-document").on("click", function (e) {
        if ($('#documentNameHeader > p.inPageSearchMargins2:contains("VADER, 45GD0702322, 22/08/2023")').length > 0) {
            $('#documentNameHeader > p.inPageSearchMargins2:contains("VADER, 45GD0702322, 22/08/2023")').prepend( "<span class='icon-new email-white'>email</span>" );
            $('#documentNameHeader > p.inPageSearchMargins2:contains("VADER, 45GD0702322, 22/08/2023")').parent().append(`
                <div class="attachments">
                    <p class="">4 attachments:</p>
                    <span class="openMe"><a href="" class="document show-case" data-doc="CM01.pdf" data-count="3">Case overview and officer comments</a></span>,
                    <span class="openMe"><a href="" class="document show-case" data-doc="MG05MCLOVE.pdf">MG05 MCLOVE</a></span>,
                    <span class="openMe"><a href="" class="document show-case" data-doc="MG06_3June.pdf">MG06 3 June</a></span>,
                    <span class="openMe"><a href="" class="document show-case" data-doc="MG06_10june.pdf">MG06 10 june</a></span>
                </div>
            `);
        }
    });

}

// function activateLink() {
    // $('.redaction-footer').addClass("test");
    // document.getElementById('data-count').addClass("test");
    //     <a href="">Test</a>
    // `);
// }


// =================================== Search button =================================== //
$(document).ready(function () {
    $(".search-button").on("click", function (e) {
        $('.searchForm-inner').find('input').toggleClass('show');
        $('.searchForm-inner').find('.bba.v2').toggleClass('show');
        $(this).toggleClass('open');
    });
})

function searchTerm() {
    var resultValue = $('#searchURNModal').val();
    $('.searchModalResults').text(resultValue); 
    $('#searchURNModal-result').val(resultValue).text(resultValue); 
}

function searchTerm2() {
    var resultValue = $('#searchURNModal2').val();
    $('.searchModalResults').text(resultValue); 
    $('#searchURNModal-result').val(resultValue).text(resultValue); 
}



// =================================== Window size & Document filter change =================================== //
$(document).ready(function () {

    var documentsRead = 0;
    var documentsUnread = 21;

    $(".show-case").on("click", function (e) {
        $('.window-size').show();
        var pageCount = $(this).attr("data-page");
        $('.page-counter').addClass('show');
        $('.page-counter strong').text(pageCount);

        $(this).parent().removeClass('unreadDocument');

        $(this).addClass('read');
        documentsRead += 1;
        documentsUnread -= 1;
        $('#read').text(documentsRead);
        $('#unread').text(documentsUnread);

        var documentTitle = $(this).text();
        $('#document-title').text(documentTitle);
        $('#document-title-notes').text(documentTitle);
        $('.document-title-7').text(documentTitle);

        // buttonHome.addEventListener("click", function() {
        //     
        //     alert(CountButtonHomeClicks);
        // });

    });

    $(".notes-link").on("click", function (e) {
        var documentTitle = $(this).parent().parent().find('.show-case').text();
        $('#document-title-notes').text(documentTitle);
        $('#document-title-notes-New').text(documentTitle);
    });

})

function documentTitle() {
    // $('#selectedTab').find('a').addClass('test');
    var docTitle = $('#selectedTab').find('a').text();
    $('#document-title').text(docTitle);
    $('#document-title-2').text(docTitle);
    $('#document-title-3').text(docTitle);
    $('#document-title-4').text(docTitle);
    $('.document-title-5').text(docTitle);
    $('.document-title-6').text(docTitle);
    $('.document-title-7').text(docTitle);
}

function showUnread() {
    // Get the checkbox
    var checkBox = document.getElementById("filterDocuments-Unread");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        $('.accordion table tbody tr td').hide();
        $('.accordion table tbody tr td.unreadDocument').show();
    }
}

function showRead() {
    // Get the checkbox
    var checkBox = document.getElementById("filterDocuments-Read");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        $('.accordion table tbody tr td').show();
        $('.accordion table tbody tr td.unreadDocument').hide();
    }
}

function showAll() {
    // Get the checkbox
    var checkBox = document.getElementById("filterDocuments-All");

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
        $('.accordion table tbody tr td').show();
        $('.accordion table tbody tr td.unreadDocument').show();
    }
}

function pageCounter() {

}

$(function(){
    $(window).scroll(function(){
        if ($('#navbar').hasClass('sticky')) {
            $('.page-counter').addClass('sticky');
        } else {
            $('.page-counter').removeClass('sticky');
        }
    });
});

function windowSizeChange() {
    $('.window-size').toggleClass('close');
    $('#left-column').toggleClass('show-menu');
    $('#left-column-top').toggleClass('show-menu');
    $('#right-column').toggleClass('show-menu');
    $('#navbar2 ul.navbar.sticky-tabs').toggleClass('full-width');
}

// =================================== SEARCH =================================== //
$(document).ready(function () {

    $('input[name="searchDocumentType"]').click(function() {
        if ($('input[name="searchDocumentType"]:checked').length > 0) {
            $('.details .search-item').hide();
            $('input[name="searchDocumentType"]:checked').each(function() {
                $('div[data-group*=' + this.value + ']').fadeIn();
            });
        } else {
            $('.details .search-item').fadeIn();
        }
    });

    $('input[name="searchDocumentCategory"]').click(function() {
        if ($('input[name="searchDocumentCategory"]:checked').length > 0) {
            $('.details .search-item').hide();
            $('input[name="searchDocumentCategory"]:checked').each(function() {
                $('div[data-group*=' + this.value + ']').fadeIn();
            });
        } else {
            $('.details .search-item').fadeIn();
        }
    }); 

    var items = $('.search-item');
    var itemsList = $('#search-results-list');

    $('#sort').change( function() {
        if($(this).val() == 1){
           sortAsc();
        }
        else if($(this).val() == 2){
            sortDesc();
        }
    });

    function sortAsc(){
        itemsList.empty();
        items.sort(function(a, b){
          return $(a).data('items')-$(b).data('items')
        });
        itemsList.append(items);
    }
    function sortDesc(){
        itemsList.empty();
        items.sort(function(a, b){
          return $(b).data('items')-$(a).data('items')
        });
        itemsList.append(items); 
    }  

    $('.search-redaction-footer').hide();

    // Drop down
    $('#search-redaction-type-1').change(function() {
        if ($('input[name=search-group-1]').is(':checked')) {
            $('.redact-all-button-1').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-2').change(function() {
        if ($('input[name=search-group-2]').is(':checked')) {
            $('.redact-all-button-2').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-3').change(function() {
        if ($('input[name=search-group-3]').is(':checked')) {
            $('.redact-all-button-3').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-4').change(function() {
        if ($('input[name=search-group-4]').is(':checked')) {
            $('.redact-all-button-4').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-5').change(function() {
        if ($('input[name=search-group-5]').is(':checked')) {
            $('.redact-all-button-1').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-6').change(function() {
        if ($('input[name=search-group-6]').is(':checked')) {
            $('.redact-all-button-1').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-7').change(function() {
        if ($('input[name=search-group-7]').is(':checked')) {
            $('.redact-all-button-1').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-8').change(function() {
        if ($('input[name=search-group-8]').is(':checked')) {
            $('.redact-all-button-1').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-9').change(function() {
        if ($('input[name=search-group-9]').is(':checked')) {
            $('.redact-all-button-1').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });

    // Checkboxes
    $('input[name=search-group-1]').change(function() {
        if ($('#search-redaction-type-1').val()) {
            $('.redact-all-button-1').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-2]').change(function() {
        if ($('#search-redaction-type-2').val()) {
            $('.redact-all-button-2').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-3]').change(function() {
        if ($('#search-redaction-type-3').val()) {
            $('.redact-all-button-3').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-4]').change(function() {
        if ($('#search-redaction-type-4').val()) {
            $('.redact-all-button-4').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-5]').change(function() {
        if ($('#search-redaction-type-5').val()) {
            $('.redact-all-button-5').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-6]').change(function() {
        if ($('#search-redaction-type-6').val()) {
            $('.redact-all-button-6').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-7]').change(function() {
        if ($('#search-redaction-type-7').val()) {
            $('.redact-all-button-7').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-8]').change(function() {
        if ($('#search-redaction-type-8').val()) {
            $('.redact-all-button-8').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-9]').change(function() {
        if ($('#search-redaction-type-9').val()) {
            $('.redact-all-button-9').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            $('.search-redaction-footer').show();
        }       
    });
    // $('.search-redact-button').click(function() {

    // });
    
    

})

function openRedactAllModal(){
    alert('working');
}

// =================================== FEEDBACK LOOP =================================== //
$(document).ready(function () {
    $('#feedbackBad-button').hide();
    
    $("input[name=feedbackSurvey-Satisfaction]").on("change", function (e) {
        if ($('input[id=feedbackSurvey-Satisfaction-Dissatisfied]').is(':checked') || $('input[id=feedbackSurvey-Satisfaction-Very-dissatisfied]').is(':checked')) {
            $('#feedbackBad-button').show();
            $('#feedbackGood-button').hide();
        } else {
            $('#feedbackGood-button').removeClass('govuk-button--disabled').removeAttr('disabled');
        }
    })

})

// =================================== PIPELINE REFRESH =================================== //

$(document).ready(function () {

    $('#page-refresh-2, #alert2, #page-refresh-3, #alert3').hide();

    setTimeout(function () {
        $('#push-notification').show();
        $('#alert').addClass('alert');
        $('#header-alert').text('2 new documents');
    }, 15000)

    $("#page-refresh").on("click", function (e) {
        var documentsRead = 0;
        var documentsUnread = 21;

        documentsUnread += 2;
        $('#all').text(documentsUnread);
        $('#unread').text(documentsUnread);

        e.preventDefault();
        // $('#hidden-section').show().attr("aria-expanded", "true");
        $('#hidden-documents').attr("aria-expanded", "true");
        $('#hidden-documents').find(".hidden-section").addClass('new');
        $('#hidden-documents').find(".hidden-section td").addClass('newDocument');
        $('#hidden-documents').find(".accordion-section-header .statements").text('7');
        document.getElementById("hidden-documents").scrollIntoView();

        $('#hidden-documents-2').attr("aria-expanded", "true");
        $('#hidden-documents-2').find(".hidden-section").addClass('new');
        $('#hidden-documents-2').find(".holder").hide();
        $('#hidden-documents-2').find(".hidden-section td").addClass('newDocument');
        $('#hidden-documents-2').find(".accordion-section-header").removeClass('no-documents');
        $('#hidden-documents-2').find(".accordion-section-header .defendants").text('1');

        document.getElementById("date-stamp").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
            days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return days[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
        }

    });

    $("#alert").on("click", function (e) {
        var documentsRead = 0;
        var documentsUnread = 21;

        documentsUnread += 2;
        $('#all').text(documentsUnread);
        $('#unread').text(documentsUnread);

        e.preventDefault();
        // $('#hidden-section').show().attr("aria-expanded", "true");
        $('#hidden-documents').attr("aria-expanded", "true");
        $('#hidden-documents').find(".hidden-section").addClass('new');
        $('#hidden-documents').find(".hidden-section td").addClass('newDocument');
        $('#hidden-documents').find(".accordion-section-header .statements").text('7');
        document.getElementById("hidden-documents").scrollIntoView();

        $('#hidden-documents-2').attr("aria-expanded", "true");
        $('#hidden-documents-2').find(".hidden-section").addClass('new');
        $('#hidden-documents-2').find(".holder").hide();
        $('#hidden-documents-2').find(".hidden-section td").addClass('newDocument');
        $('#hidden-documents-2').find(".accordion-section-header").removeClass('no-documents');
        $('#hidden-documents-2').find(".accordion-section-header .defendants").text('1');

        document.getElementById("date-stamp").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
            days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return days[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
        }

    });


    $("#page-refresh-2").on("click", function (e) {
        e.preventDefault();
        // $('#hidden-section').attr("aria-expanded", "false");
        $('#hidden-section-2').attr("aria-expanded", "true");
        $('#hidden-section-3').attr("aria-expanded", "true");
        document.getElementById("hidden-section-3").scrollIntoView();

        $('table tbody tr td .govuk-tag.govuk-tag--yellow').css('display','inherit');
        $('table tbody tr td .govuk-tag.govuk-tag--orange').css('display','inherit');

        $('#push-notification-2').hide();
        $('#alert2').removeClass('alert');

        // $('.updated-message').show();

        document.getElementById("date-stamp").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
            days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return days[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
        }

        setTimeout(function () {
            $('#push-notification-3, #page-refresh-3').show();
            $('#page-refresh-2').hide();
            $('#alert2').hide();
            $('#alert3').show().addClass('alert');
            $('#header-alert').text('1 document discarded');
        }, 15000)        

    });

    $("#alert2").on("click", function (e) {
        e.preventDefault();
        $('#hidden-section').attr("aria-expanded", "false");
        $('#hidden-section-2').attr("aria-expanded", "true");
        $('#hidden-section-3').attr("aria-expanded", "true");
        document.getElementById("hidden-section-3").scrollIntoView();

        $('table tbody tr td .govuk-tag.govuk-tag--yellow').css('display','inherit');
        $('table tbody tr td .govuk-tag.govuk-tag--orange').css('display','inherit');

        $('#push-notification-2').hide();
        $('#alert2').removeClass('alert');

        document.getElementById("date-stamp").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
            days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return days[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
        }

        setTimeout(function () {
            $('#push-notification-3, #page-refresh-3').show();
            $('#page-refresh-2').hide();
            $('#alert2').hide();
            $('#alert3').show().addClass('alert');
            $('#header-alert').text('1 document discarded');
        }, 15000)        

    });

    $("#page-refresh-3").on("click", function (e) {
        e.preventDefault();
        $('.updated-message').hide();
        $('.discarded-message').show();
    });

    $("#alert3").on("click", function (e) {
        e.preventDefault();
        $('.updated-message').hide();
        $('.discarded-message').show();
    });

})


function newDocument() {
    $('#new-documents').html(function(i, val) { return +val-1 });
    if ($('#new-documents').html() == '1') {
        $('#plural').hide();
        $('#header-alert').text('1 new document');
    } else if ($('#new-documents').html() == '0') {
        $('#push-notification').hide();
        $('#alert').removeClass('alert');
        $('#header-alert').text('No document updates');
        // $('#hidden-section .govuk-tag').hide();
        setTimeout(function () {
            $('#push-notification-2, #alert2').show();
            $('#page-refresh-2').show();
            $('#page-refresh, #alert').hide();
            $('#alert2').addClass('alert');
            $('#header-alert').text('3 document updates');
        }, 15000)
    }
}



// =================================== ERROR MESSAGES =================================== //

function errorStatus() {
    window.location.href="#redaction-over";

    e.preventDefault();
    e.stopPropagation();     
}

function errorStatus2() {
    window.location.href="#redaction-log";

    e.preventDefault();
    e.stopPropagation();     
}

function errorStatus3() {
    window.location.href="#case-action-plan-modal";

    e.preventDefault();
    e.stopPropagation();     
}


$(document).ready(function () {

    // Redaction log
    $("#redactionLog-ChargeStatus").on("change", function (e) {
        $('#redaction-log-button').attr('onClick','closeModal2()');
    });

    $("#redaction-log-button").on("click", function (e) {
        if ($('#redactionLog-ChargeStatus').val()) {
            // alert('selected');
        } else {
            $('#charge-error').addClass('govuk-form-group--error');
            $('#charge-issued-error, #redaction-error-summary, #charge-error-list').show();
        }
    });

    // Over/Under Redaction 
    $("#submit-over-redactions").hide();
    $("#error-over-redactions").show();

    // Error summary
    $('#over-redaction-error-summary').hide();

    // Error list
    $('#over-charge-error-list, #type-error-list, #redactions-type-error-list, #over-redactions-type-error-list').hide();
    $('#over-charge-issued-error').show();

    $("#redactionOver-ChargeStatus").on("change", function (e) {
        if ($(this).val() && $('input[name=redactionUnder-redaction-type]').is(':checked') || $(this).val() && $('input[name=redactionOver-redaction-type]').is(':checked')) {
            $("#submit-over-redactions").show();
            $("#error-over-redactions").hide();
        } else {
            $("#submit-over-redactions").hide();
            $("#error-over-redactions").show();
        }
    });

    $("input[name=redationType]").on("change", function (e) {
        if ($(this).is(':checked') && $('#redactionOver-ChargeStatus').val() && $('input[name=redactionUnder-redaction-type]').is(':checked') || $(this).is(':checked') && $('#redactionOver-ChargeStatus').val() && $('input[name=redactionOver-redaction-type]').is(':checked')) {
            $("#submit-over-redactions").show();
            $("#error-over-redactions").hide();
        }
    });

    $("input[name=redactionUnder-redaction-type]").on("change", function (e) {
        if ($(this).is(':checked') && $('#redactionOver-ChargeStatus').val()) {
            $("#submit-over-redactions").show();
            $("#error-over-redactions").hide();
        }
    });

    $("input[name=redactionOver-redaction-type]").on("change", function (e) {
        if ($(this).is(':checked') && $('#redactionOver-ChargeStatus').val()) {
            $("#submit-over-redactions").show();
            $("#error-over-redactions").hide();
        }
    });

    $("#error-over-redactions").on("click", function (e) {
        $('#over-redaction-error-summary').show();

        // Charge type
        if ($('#redactionOver-ChargeStatus').val()) {
            $('#over-charge-error').removeClass('govuk-form-group--error');
            $('#over-charge-issued-error, #over-charge-error-list').hide();
        } else {
            $('#over-charge-error').addClass('govuk-form-group--error');
            $('#over-charge-issued-error, #over-charge-error-list').show();
        }

        // // Reaction type
        if ($('input[name=redationType]').is(':checked')) {
            $('#over-type-issued-error').removeClass('govuk-form-group--error');
            $('#type-issued-error, #type-error-list').hide();
        } else {
            $('#over-type-issued-error').addClass('govuk-form-group--error');
            $('#type-issued-error, #type-error-list').show();
        }

        // Under-redaction - Type of redactions
        if ($("input[id=redationType-Under]").is(':checked') && $("input[name=redactionUnder-redaction-type]").is(':checked')) { 
            $('#conditional-redationType-Under').removeClass('govuk-form-group--error');
            $('#redation-type-issued-error, #redactions-type-error-list').hide();
        } else if ($("input[id=redationType-Under]").is(':checked')) { 
            $('#conditional-redationType-Under').addClass('govuk-form-group--error');
            $('#redation-type-issued-error, #redactions-type-error-list').show();
        }

        // Over-redaction - Type of redactions
        if ($("input[id=redationType-Over]").is(':checked') && $("input[name=redactionOver-redaction-type]").is(':checked')) { 
            $('#conditional-redationType-Over').removeClass('govuk-form-group--error');
            $('#over-redation-type-issued-error, #over-redactions-type-error-list').hide();
        } else if ($("input[id=redationType-Over]").is(':checked')) { 
            $('#conditional-redationType-Over').addClass('govuk-form-group--error');
            $('#over-redation-type-issued-error, #over-redactions-type-error-list').show();
        }

    });

    $("#redactionLog-return").on("change", function (e) {
        if ($(this).is(':checked')) {
            $('#submit-over-redactions').attr('onClick','openCaseActionModal()');
        } else {
            $('#submit-over-redactions').attr('onClick','closeModalOver()');
        }
    });

    // Case Action Plan
    $('#case-action-plan-button, #CAP-error-status, #CAP-date-error, #CAP-info-error').hide();

    $("#error-case-action-plan").on("click", function (e) {

        $('#CAP-error-status').show();

        if ($('input[id=caseActionPlan-Date-Day]').val()) {
            $('#CAP-date').removeClass('govuk-form-group--error');
            $('#CAP-date .govuk-input').removeClass('govuk-input--error');     
            $('#CAP-date .govuk-error-message').hide();
        } else {
            $('#CAP-date').addClass('govuk-form-group--error');
            $('#CAP-date .govuk-input').addClass('govuk-input--error');  
            $('#CAP-date .govuk-error-message').show();   
        }

        if ($('input[id=caseActionPlan-Date-Month]').val()) {
            $('#CAP-date').removeClass('govuk-form-group--error');
            $('#CAP-date .govuk-input').removeClass('govuk-input--error');     
            $('#CAP-date .govuk-error-message').hide();
        } else {
            $('#CAP-date').addClass('govuk-form-group--error');
            $('#CAP-date .govuk-input').addClass('govuk-input--error');  
            $('#CAP-date .govuk-error-message').show();   
        }

        if ($('input[id=caseActionPlan-Date-Year]').val()) {
            $('#CAP-date').removeClass('govuk-form-group--error');
            $('#CAP-date .govuk-input').removeClass('govuk-input--error');     
            $('#CAP-date .govuk-error-message').hide();
        } else {
            $('#CAP-date').addClass('govuk-form-group--error');
            $('#CAP-date .govuk-input').addClass('govuk-input--error');  
            $('#CAP-date .govuk-error-message').show();   
        }

        if ($('input[id=caseActionPlan-Date-Day]').val() && $('input[id=caseActionPlan-Date-Month]').val() && $('input[id=caseActionPlan-Date-Year]').val()) {
            $('#CAP-date-error').hide();
        } else {
            $('#CAP-date-error').show();
        }

        if ($('input[name=caseActionPlan-SpecificDetails]').is(':checked')) {
            $('#CAP-info').removeClass('govuk-form-group--error');
            $('#CAP-info .govuk-error-message, #CAP-info-error').hide();     
        } else {
            $('#CAP-info').addClass('govuk-form-group--error');
            $('#CAP-info .govuk-error-message, #CAP-info-error').show();     
        }
    });

    $("input[id=caseActionPlan-Date-Day]").on("keyup", function (e) {
        if ($(this).val() && $('input[name=caseActionPlan-SpecificDetails]').is(':checked') && $('#caseActionPlan-Date-Month').val() && $('#caseActionPlan-Date-Year').val()) {
            $('#case-action-plan-button').show();
            $('#error-case-action-plan').hide();
        } else {
            $('#case-action-plan-button').hide();
            $('#error-case-action-plan').show();
        }
    });

    $("input[id=caseActionPlan-Date-Month]").on("keyup", function (e) {
        if ($(this).val() && $('input[name=caseActionPlan-SpecificDetails]').is(':checked') && $('#caseActionPlan-Date-Day').val() && $('#caseActionPlan-Date-Year').val()) {
            $('#case-action-plan-button').show();
            $('#error-case-action-plan').hide();
        } else {
            $('#case-action-plan-button').hide();
            $('#error-case-action-plan').show();
        }
    });

    $("input[id=caseActionPlan-Date-Year]").on("keyup", function (e) {
        if ($(this).val() && $('input[name=caseActionPlan-SpecificDetails]').is(':checked') && $('#caseActionPlan-Date-Day').val() && $('#caseActionPlan-Date-Month').val()) {
            $('#case-action-plan-button').show();
            $('#error-case-action-plan').hide();
        } else {
            $('#case-action-plan-button').hide();
            $('#error-case-action-plan').show();
        }
    });

    $("input[name=caseActionPlan-SpecificDetails]").on("change", function (e) {
        if ($(this).is(':checked') && $('#caseActionPlan-Date-Day').val() && $('#caseActionPlan-Date-Month').val() && $('#caseActionPlan-Date-Year').val()) {
            $('#case-action-plan-button').show();
            $('#error-case-action-plan').hide();
        } else {
            $('#case-action-plan-button').hide();
            $('#error-case-action-plan').show();
        }
    });

    $('#CAP-details-wrapper .govuk-character-count').hide();

})

// =================================== Zoom =================================== //
function zoomIn() {
    var pic = document.getElementById("pdf-root").getElementsByClassName( 'PdfHighlighter' )[0];
    var width = pic.clientWidth;
    pic.style.width = width + 100 + "px";
    $("#pdf-root").addClass('zoom');
    // var height = pic.clientHeight;
    // var pic = document.getElementById("test").getElementsByClassName( 'page' )[0];
    // pic.style.height = height + 100 + "px";
}

function zoomOut() {
    var pic = document.getElementById("pdf-root").getElementsByClassName( 'PdfHighlighter' )[0];
    var width = pic.clientWidth;
    pic.style.width = width - 100 + "px";
}

// =================================== NOTES =================================== //

$(document).ready(function () {

    // Existing notes
    var notesNumber = 4;

    $('#note-added').hide();

    $("#notes-button").on("click", function (e) {
        $('#note-added').show();

        // Time stamp
        document.getElementById("note-timestamp").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
            days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return days[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
        }


        // Note
        $.cookie("notes-Details", $('#notes-Comments').val(), {path:'/'});
        $('#note-added .hods-timeline__description').html($.cookie("notes-Details"));

        setTimeout(function () {
            $('#notes-Comments').val('');
            $('#notes-Comments-info').text('You can enter up to 500 characters');
        }, 15)

        // Counter 
        notesNumber += 1;
        $('.notes-number').text(notesNumber);
        $('.notes-trigger span').text(notesNumber);

    });

    // New notes
    var notesNewNumber = 0;

    $('#noteNew-added').hide();

    $("#notesNew-button").on("click", function (e) {
        $('#noteNew-added').show() ;

        // Time stamp
        document.getElementById("noteNew-timestamp").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
            days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        return days[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
        }


        // Note
        $.cookie("notesNew-Details", $('#notesNew-Comments').val(), {path:'/'});
        $('#noteNew-added .hods-timeline__description').html($.cookie("notesNew-Details"));

        setTimeout(function () {
            $('#notesNew-Comments').val('');
            $('#notesNew-Comments-info').text('You can enter up to 500 characters');
        }, 15)

        // Counter 
        notesNewNumber += 1;
        $('.notes-link').addClass('has-notes');
        $('.new-notes-number').text(notesNewNumber);
        // $('.new-notes-number span').text(notesNewNumber);

    });


})

// !!!!!! --------------------------------- Date stamp - THIS MUST BE AT THE BOTTOM --------------------------------- !!!!!! //
$(document).ready(function () {
    document.getElementById("date-stamp").innerHTML = formatAMPM();
    function formatAMPM() {
    var d = new Date(),
        minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
        hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
        ampm = d.getHours() >= 12 ? 'pm' : 'am',
        months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
        days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    return days[d.getDay()]+' '+d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
    }
})
