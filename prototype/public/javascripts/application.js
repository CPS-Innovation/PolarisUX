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


// =================================== Document viewer =================================== //
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function toggleClass() {
    $('.dropbtn').toggleClass('open');
}

function myFunction() {
    // $('.dropdown-content').toggle('show');
    // document.getElementsByClassName("dropdown-content").toggle("show");
    document.getElementById("myDropdown").classList.toggle("show");
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

        // buttonHome.addEventListener("click", function() {
        //     
        //     alert(CountButtonHomeClicks);
        // });

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

    $('#page-refresh-2, #alert2').hide();

    setTimeout(function () {
        $('#push-notification').show();
        $('#alert').addClass('alert');
        $('#header-alert').text('You have 2 new documents');
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
        $('#hidden-documents-2').find(".hidden-section td").addClass('newDocument');
        $('#hidden-documents-2').find(".hidden-section tr.holder").hide();
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
        $('#hidden-documents-2').find(".hidden-section td").addClass('newDocument');
        $('#hidden-documents-2').find(".hidden-section tr.holder").hide();
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

    });


})

function newDocument() {
    $('#new-documents').html(function(i, val) { return +val-1 });
    if ($('#new-documents').html() == '1') {
        $('#plural').hide();
        $('#header-alert').text('You have 1 new document');
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
            $('#header-alert').text('You have 3 new updates');
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

})

// =================================== NOTES =================================== //

$(document).ready(function () {

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
        $('.notes-trigger span').text(notesNumber);

    });
})



// =================================== MY COOKIES =================================== //

// function documentTarget() {
//     // const documentTarget == $('#selectedTab').find('a').text();
//     $.cookie("reportProblem-Title", $('#selectedTab').find('a').text(), {path:'/'});
// }

// A - Search term
$(document).ready(function () {

    // $(".searchModal").on("click", function (e) {
    //     var resultValue = $('#searchURNModal').val();
    //     $.cookie("search-data", $('#searchURNModal').val(), {path:'/'});
    //     $('#searchURNModal-result').val(resultValue); 
    //     $('.searchModalResults').text(resultValue); 
    // });

    // if ($.cookie("search-data")) {
    //     $('#searchURNModal-result').val(resultValue); 
    //     $('.searchModalResults').text(resultValue); 
    // }

    // Report a problem...
    $(".show-case").on("click", function (e) {
        $.cookie("reportProblem-Document", $(this).attr("data-document"), {path:'/'});
        // var documentID = $(this).attr("data-count");
        // alert($.cookie("reportProblem-Document"));
    });

    $(".govuk-tabs__list-item").on("click", function (e) {
        $.cookie("reportProblem-Tab", $(this).text(), {path:'/'});
    });

    $("#reportProblem-button").on("click", function (e) {
        $.cookie("reportProblem", true, {path:'/'});
        $.cookie("reportProblem-Details", $('#reportProblem-text').val(), {path:'/'});


        if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '1') {
            $('a[data-document=1]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '2') {
            $('a[data-document=2]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '3') {
            $('a[data-document=3]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '4') {
            $('a[data-document=4]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '5') {
            $('a[data-document=5]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '6') {
            $('a[data-document=6]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '7') {
            $('a[data-document=7]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '8') {
            $('a[data-document=8]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '9') {
            $('a[data-document=9]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '10') {
            $('a[data-document=10]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '11') {
            $('a[data-document=11]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '12') {
            $('a[data-document=12]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '13') {
            $('a[data-document=13]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '14') {
            $('a[data-document=14]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '15') {
            $('a[data-document=15]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '16') {
            $('a[data-document=16]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '17') {
            $('a[data-document=17]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '18') {
            $('a[data-document=18]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '19') {
            $('a[data-document=19]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '20') {
            $('a[data-document=20]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        } else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '21') {
            $('a[data-document=21]').parent().addClass('error');
            $('.error-message').addClass('show');
            $('#error-details').text($.cookie("reportProblem-Details"));
        }
        // else if ($.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Document") == '21' || $.cookie("reportProblem") == 'true' && $.cookie("reportProblem-Title") == 'VADER, 45GD0702322, 22/08/2023') {
        //     $('a[data-document=21]').parent().addClass('error');
        // }
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
