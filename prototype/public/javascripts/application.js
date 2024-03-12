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
    if ($(this).scrollTop()>0) {
        $('.search-bar-wrapper').hide();
    } else {
        $('.search-bar-wrapper').show();
    }
});

// =================================== Header =================================== //

$(document).ready(function () {

    $(".username").on("click", function (e) {
        e.preventDefault();
        $(this).toggleClass('open');

        $('.user-settings').toggle();
    });

    $('input[name=colourScheme]').on("change", function() {
        if ($('input[id=colourScheme__White]').is(':checked')) {
            $('.govuk-template').addClass('White');
            $('.govuk-template').removeClass('SoftGrey Grey Dark');
        } else if ($('input[id=colourScheme__SoftGrey]').is(':checked')) {
            $('.govuk-template').addClass('SoftGrey');
            $('.govuk-template').removeClass('White Grey Dark');
        } else if ($('input[id=colourScheme__Grey]').is(':checked')) {
            $('.govuk-template').addClass('Grey');
            $('.govuk-template').removeClass('White SoftGrey Dark');
        } else if ($('input[id=colourScheme__Dark]').is(':checked')) {
            $('.govuk-template').addClass('Dark');
            $('.govuk-template').removeClass('White SoftGrey Grey');
        }       
    });

    $('input[name=colourOverlay]').on("change", function() {
        if ($('input[id=colourOverlay__Pink]').is(':checked')) {
            $('.govuk-template').prepend(`<div class="pinkOverlay"></div>`);
            $('.greenOverlay, .blueOverlay, .yellowOverlay').remove();
        } else if ($('input[id=colourOverlay__Green]').is(':checked')) {
            $('.govuk-template').prepend(`<div class="greenOverlay"></div>`);
            $('.pinkOverlay, .blueOverlay, .yellowOverlay').remove();
        } else if ($('input[id=colourOverlay__Blue]').is(':checked')) {
            $('.govuk-template').prepend(`<div class="blueOverlay"></div>`);
            $('.pinkOverlay, .greenOverlay, .yellowOverlay').remove();
        } else if ($('input[id=colourOverlay__Yellow]').is(':checked')) {
            $('.govuk-template').prepend(`<div class="yellowOverlay"></div>`);
            $('.pinkOverlay, .blueOverlay, .greenOverlay').remove();
        } else if ($('input[id=colourOverlay__Remove]').is(':checked')) {
            $('.pinkOverlay, .blueOverlay, .greenOverlay, .yellowOverlay').remove();
        }

        if ($('input[name=colourHue]').is(':checked')) {
            $('.pinkOverlay, .greenOverlay, .blueOverlay, .yellowOverlay').addClass('changeHue');
        }      
    });

    $('input[name=colourHue]').on("change", function() {
        if ($(this).is(':checked')) {
            $('.pinkOverlay, .greenOverlay, .blueOverlay, .yellowOverlay').addClass('changeHue');
        } else {
            $('.pinkOverlay, .greenOverlay, .blueOverlay, .yellowOverlay').removeClass('changeHue');
        }
    });

})

$(document).mouseup(function(e) {
    var container = $(".user-settings");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.hide();
        $('.username').removeClass('open');
    }
});

// =================================== NAVIGATION =================================== //
$(document).ready(function () {

    if ($('#image-wrapper').hasClass('A-Dashboard')) {
        $('#global-navigation ul li').removeClass('current');
        $('#global-navigation ul li.dashboard').addClass('current');
    }

    if ($('#image-wrapper').hasClass('C-my-tasks')) {
        $('#global-navigation ul li').removeClass('current');
        $('#global-navigation ul li.my-tasks').addClass('current');
    }

    if ($('#image-wrapper').hasClass('D-my-cases')) {
        $('#global-navigation ul li').removeClass('current');
        $('#global-navigation ul li.my-cases').addClass('current');
    }

    if ($('#cps-casework-concept').hasClass('concept')) {
        // $('main.case-files').css('top','-5em');
        $('#left-column').css('top','14em');
        $('.cps-bar-wrapper').hide();
    }

    if ($('#cps-casework-concept').hasClass('concept-search')) {
        $('main#main-content').css('top','-2em');
    }

})

// =================================== Drag and drop =================================== //

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

// =================================== Loading page =================================== //

setInterval(function() {
    var data = parseFloat($('#documents-loaded-number').text()) + 1;
    $('#documents-loaded-number').html(data);

    var data2 = parseFloat($('#documents-loaded-number-2').text()) + 1;
    $('#documents-loaded-number-2').html(data2);

    var data3 = parseFloat($('#documents-loaded-number-3').text()) + 1;
    $('#documents-loaded-number-3').html(data2);

}, 1000);

$(document).ready(function () {

    $('.documents-loaded, .failed-documents').hide();
    // $('#searchFormTest, #searchFormTest2').addClass('disabled');
    // $('#searchURNModal').attr('disabled','disabled');

    $('.document-1, .document-2, .document-3, .document-4, .document-5, .document-6, .document-7, .document-8, .document-9, .document-10, .document-11, .document-12, .document-13, .document-14, .document-15, .document-16, .document-17, .document-18, .document-19, .document-20, .document-21, .document-11A').css('opacity','0.2');
    $('.accordion-section table tbody tr.document-holder td').prepend(`<strong class="govuk-tag loading-tag">Loading...</strong>`);

    setTimeout(function() {
        $(".loading").hide();
        $('.documents-loaded').show();
        $('#searchFormTest, #searchFormTest2').removeClass('disabled');
        $('#searchURNModal').removeAttr('disabled');
    }, 19500);

    // Accordion changes
    // 1
    $('.accordion-section.section-1 .accordion-section-header').addClass('no-documents');
    $('.accordion-section.section-1 .accordion-section-header .govuk-heading-s').html('Reviews (0)');

    setTimeout(function() {
        $('.accordion-section.section-1 .accordion-section-header').removeClass('no-documents');
        $('.accordion-section.section-1 .accordion-section-header .govuk-heading-s').html('Reviews (1)');
        $('.document-1').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-1 td strong.loading-tag').hide();
    }, 1000);

    // 2 - Case overview (4)
    $('.accordion-section.section-2 .accordion-section-header').addClass('no-documents');
    $('.accordion-section.section-2 .accordion-section-header .govuk-heading-s').html('Case overview (0)');

    setTimeout(function() {
        $('.accordion-section.section-2 .accordion-section-header').removeClass('no-documents');
        $('.accordion-section.section-2 .accordion-section-header .govuk-heading-s').html('Case overview (1)');
        $('.document-2').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-2 td strong.loading-tag').hide();
    }, 2000);

    setTimeout(function() {
        $('.accordion-section.section-2 .accordion-section-header .govuk-heading-s').html('Case overview (2)');
        $('.document-3').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-3 td strong.loading-tag').hide();
    }, 3000);

    setTimeout(function() {
        $('.accordion-section.section-2 .accordion-section-header .govuk-heading-s').html('Case overview (3)');
        $('.document-4').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-4 td strong.loading-tag').hide();
    }, 4000);

    setTimeout(function() {
        $('.accordion-section.section-2 .accordion-section-header .govuk-heading-s').html('Case overview (4)');
        $('.document-5').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-5 td strong.loading-tag').hide();
    }, 5000);

    // 3 - Statements (6)
    $('.accordion-section.section-3 .accordion-section-header').addClass('no-documents');
    $('.accordion-section.section-3 .accordion-section-header .govuk-heading-s').html('Statements (0)');

    setTimeout(function() {
        $('.accordion-section.section-3 .accordion-section-header').removeClass('no-documents');
        $('.accordion-section.section-3 .accordion-section-header .govuk-heading-s').html('Statements (1)');
        $('.document-6').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-6 td strong.loading-tag').hide();
    }, 6000);

    setTimeout(function() {
        $('.accordion-section.section-3 .accordion-section-header .govuk-heading-s').html('Statements (2)');
        $('.document-7').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-7 td strong.loading-tag').hide();
    }, 7000);

    setTimeout(function() {
        $('.accordion-section.section-3 .accordion-section-header .govuk-heading-s').html('Statements (3)');
        $('.document-8').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-8 td strong.loading-tag').hide();
    }, 8000);

    setTimeout(function() {
        $('.accordion-section.section-3 .accordion-section-header .govuk-heading-s').html('Statements (4)');
        $('.document-9').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-9 td strong.loading-tag').hide();
    }, 9000);

    setTimeout(function() {
        $('.accordion-section.section-3 .accordion-section-header .govuk-heading-s').html('Statements (5)');
        $('.document-10').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-10 td strong.loading-tag').hide();
    }, 10000);

    setTimeout(function() {
        $('.accordion-section.section-3 .accordion-section-header .govuk-heading-s').html('Statements (6)');
        $('.document-11, .document-11A').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-11 td strong.loading-tag').hide();
        $('.accordion-section table tbody tr.document-holder.document-11 td').prepend(`<strong class="govuk-tag govuk-tag--red">Failed</strong> <br>`);
        $('.failed-documents').show();

        $('.accordion-section table tbody tr.document-holder.document-11A td strong.loading-tag').hide();
    }, 11000);

    // 4 - Exhibits (2)
    $('.accordion-section.section-4 .accordion-section-header').addClass('no-documents');
    $('.accordion-section.section-4 .accordion-section-header .govuk-heading-s').html('Exhibits (0)');

    setTimeout(function() {
        $('.accordion-section.section-4 .accordion-section-header').removeClass('no-documents');
        $('.accordion-section.section-4 .accordion-section-header .govuk-heading-s').html('Exhibits (1)');
        $('.document-12').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-12 td strong.loading-tag').hide();
    }, 12000);

    setTimeout(function() {
        $('.accordion-section.section-4 .accordion-section-header .govuk-heading-s').html('Exhibits (2)');
        $('.document-13').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-13 td strong.loading-tag').hide();
    }, 13000);

    // 5 - Forensics (0)

    // 6 - Unused materials (5)
    $('.accordion-section.section-6 .accordion-section-header').addClass('no-documents');
    $('.accordion-section.section-6 .accordion-section-header .govuk-heading-s').html('Unused materials (0)');

    setTimeout(function() {
        $('.accordion-section.section-6 .accordion-section-header').removeClass('no-documents');
        $('.accordion-section.section-6 .accordion-section-header .govuk-heading-s').html('Unused materials (1)');
        $('.document-14').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-14 td strong.loading-tag').hide();
    }, 14000);

    setTimeout(function() {
        $('.accordion-section.section-6 .accordion-section-header .govuk-heading-s').html('Unused materials (2)');
        $('.document-15').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-15 td strong.loading-tag').hide();
    }, 15000);

    setTimeout(function() {
        $('.accordion-section.section-6 .accordion-section-header .govuk-heading-s').html('Unused materials (3)');
        $('.document-16').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-16 td strong.loading-tag').hide();
    }, 16000);

    setTimeout(function() {
        $('.accordion-section.section-6 .accordion-section-header .govuk-heading-s').html('Unused materials (4)');
        $('.document-17').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-17 td strong.loading-tag').hide();
    }, 17000);

    setTimeout(function() {
        $('.accordion-section.section-6 .accordion-section-header .govuk-heading-s').html('Unused materials (5)');
        $('.document-18').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-18 td strong.loading-tag').hide();
    }, 18000);

    // 7 - Defendant (0)

    // 8 - Court preparation (0)

    // 9 - Communications (1)
    $('.accordion-section.section-9 .accordion-section-header').addClass('no-documents');
    $('.accordion-section.section-9 .accordion-section-header .govuk-heading-s').html('Communications (0)');

    setTimeout(function() {
        $('.accordion-section.section-9 .accordion-section-header').removeClass('no-documents');
        $('.accordion-section.section-9 .accordion-section-header .govuk-heading-s').html('Communications (1)');
        $('.document-19').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-19 td strong.loading-tag').hide();
    }, 19000);

    // 10 - Uncategorised (1)
    $('.accordion-section.section-10 .accordion-section-header').addClass('no-documents');
    $('.accordion-section.section-10 .accordion-section-header .govuk-heading-s').html('Uncategorised (0)');

    setTimeout(function() {
        $('.accordion-section.section-10 .accordion-section-header').removeClass('no-documents');
        $('.accordion-section.section-10 .accordion-section-header .govuk-heading-s').html('Uncategorised (1)');
        $('.document-20').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-20 td strong.loading-tag').hide();
    }, 20000);

    setTimeout(function() {
        $('.accordion-section.section-10 .accordion-section-header').removeClass('no-documents');
        $('.accordion-section.section-10 .accordion-section-header .govuk-heading-s').html('Uncategorised (1)');
        $('.document-21').css('opacity','1');
        $('.accordion-section table tbody tr.document-holder.document-21 td strong.loading-tag').hide();
    }, 21000);

})



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

    $(".email-document-V2").on("click", function (e) {
        if ($('#documentNameHeader > p.inPageSearchMargins2:contains("SCOTT, 12564Y7EH, 02/09/2021")').length > 0) {
            $('#documentNameHeader > p.inPageSearchMargins2:contains("SCOTT, 12564Y7EH, 02/09/2021")').prepend( "<span class='icon-new email-white'>email</span>" );
            $('#documentNameHeader > p.inPageSearchMargins2:contains("SCOTT, 12564Y7EH, 02/09/2021")').parent().append(`
                <div class="attachments error">
                    <p class="">2 attachments:</p>
                    <span class="openMe">Attachments only available on CMS</span>
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


// =================================== Document history =================================== //
// $(document).ready(function () {
//     $(".document-history-V1 ").on("click", function (e) {
//         // if ($('ul.sticky-tabs li').data('tab-id') == 'View%20document') {
//         //     alert('working');
//         // }
//         if ($('ul.sticky-tabs li a').text() == 'View document') {
//             alert('working');
//         }
//     });
// })

$(document).ready(function () {
    $('.document-history-V1-OPEN').hide();
})

function documentID() {
    $(".document-history-V1 ").on("click", function (e) {
        $(this).hide();
        $('.document-history-V1-OPEN').show();
        if ($('#documentNameHeader > p.inPageSearchMargins2:contains("View document")').length > 0) {
            $('ul.sticky-tabs li a:contains("View document")').text( "MCLOVE MG3 - V1" );
            $('#documentNameHeader > p.inPageSearchMargins2').addClass( "old-document" );
            $('#documentNameHeader > p.inPageSearchMargins2:contains("View document")').text( "MCLOVE MG3 - V1" );
            $('#documentNameHeader > p.inPageSearchMargins2:contains("MCLOVE MG3 - V1")').append( `<br><span>19 May 2020, 11:32</span>` );
            $('#documentNameHeader > p.inPageSearchMargins2:contains("MCLOVE MG3 - V1")').parent().append(`
                <div class="attachments history">
                    <span class="openMe">Would you like to restore this version?</span>
                    <button class="govuk-button govuk-button--white" data-module="govuk-button" type="button" onclick="openConfirmModal()" data-module="govuk-button">Restore</button>
                </div>
            `);
        }


        // if ($('ul.sticky-tabs li a').text() == 'View%20document') {
        //     alert('working');
        // }
    });
}


// =================================== Search button =================================== //
$(document).ready(function () {
    $(".search-button").on("click", function (e) {
        $('.searchForm-inner').find('input').toggleClass('show');
        $('.searchForm-inner').find('.bba.v2').toggleClass('show');
        $(this).toggleClass('open');
    });

    $("input[id=searchURNModal]").on("keyup", function (e) {
        if ($(this).val() == "error") {
            $('button.search').attr('onClick','openModal(); searchTerm(); searchError();');
        } else {
            $('button.search').attr('onClick','openModal(); searchTerm();');
        }
    });

    $("input[id=searchURNModal2]").on("keyup", function (e) {
        if ($(this).val() == "error") {
            $('button.search').attr('onClick','openModal(); searchTerm(); searchError();');
        } else {
            $('button.search').attr('onClick','openModal(); searchTerm();');
        }
    });

    $('#searchErrorPanel').hide();

    $('#searchLoadingPanel').show();
    $('#searchResultsPanel').hide();

    setTimeout(function() {
        $('#searchLoadingPanel').hide();
        $('#searchResultsPanel').show();
    }, 20000);

})


function searchTerm() {
    var resultValue = $('#searchURNModal').val();
    $('.searchModalResults').text(resultValue); 
    $('#searchURNModal-result').val(resultValue).text(resultValue); 
    $('#searchErrorPanel').hide();
    $('#searchModal .das-cookie-banner').removeClass('small');
}

function searchTerm2() {
    var resultValue = $('#searchURNModal2').val();
    $('.searchModalResults').text(resultValue); 
    $('#searchURNModal-result').val(resultValue).text(resultValue); 
    $('#searchErrorPanel').hide();
    $('#searchModal .das-cookie-banner').removeClass('small');
}

function searchError() {
    $('#searchResultsPanel, #searchLoadingPanel').hide();
    $('#searchErrorPanel').show();
    $('#searchModal .das-cookie-banner').addClass('small');
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

        $(this).parent().parent().removeClass('unreadDocument');

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

        $('table tbody tr td').removeClass('current')
        $(this).parent().addClass('current');

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
    $('.document-title-8').text(docTitle);
    $('.document-title-9').text(docTitle);
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

function windowSizeChangeText() {
    var x = document.getElementById("window-size");
    if (x.innerHTML === "<span>View full screen</span>") {
        x.innerHTML = "<span>Exit full screen</span>";
    } else {
        x.innerHTML = "<span>View full screen</span>";
    }
}

// =================================== SEARCH =================================== //

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

function selectAll10(source) {
    checkboxes = document.getElementsByName('search-group-10');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}
function selectAll11(source) {
    checkboxes = document.getElementsByName('search-group-11');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}
function selectAll12(source) {
    checkboxes = document.getElementsByName('search-group-12');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}
function selectAll13(source) {
    checkboxes = document.getElementsByName('search-group-13');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}
function selectAll14(source) {
    checkboxes = document.getElementsByName('search-group-14');
    for(var i=0, n=checkboxes.length;i<n;i++) {
        checkboxes[i].checked = source.checked;
    }
}

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
            // $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-2').change(function() {
        if ($('input[name=search-group-2]').is(':checked')) {
            $('.redact-all-button-2').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-3').change(function() {
        if ($('input[name=search-group-3]').is(':checked')) {
            $('.redact-all-button-3').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-4').change(function() {
        if ($('input[name=search-group-4]').is(':checked')) {
            $('.redact-all-button-4').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-5').change(function() {
        if ($('input[name=search-group-5]').is(':checked')) {
            $('.redact-all-button-5').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-6').change(function() {
        if ($('input[name=search-group-6]').is(':checked')) {
            $('.redact-all-button-6').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-7').change(function() {
        if ($('input[name=search-group-7]').is(':checked')) {
            $('.redact-all-button-7').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-8').change(function() {
        if ($('input[name=search-group-8]').is(':checked')) {
            $('.redact-all-button-8').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('#search-redaction-type-9').change(function() {
        if ($('input[name=search-group-9]').is(':checked')) {
            $('.redact-all-button-9').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });

    // Checkboxes
    $('input[name=search-group-1]').change(function() {
        if ($('#search-redaction-type-1').val()) {
            $('.redact-all-button-1').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-2]').change(function() {
        if ($('#search-redaction-type-2').val()) {
            $('.redact-all-button-2').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-3]').change(function() {
        if ($('#search-redaction-type-3').val()) {
            $('.redact-all-button-3').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-4]').change(function() {
        if ($('#search-redaction-type-4').val()) {
            $('.redact-all-button-4').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-5]').change(function() {
        if ($('#search-redaction-type-5').val()) {
            $('.redact-all-button-5').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-6]').change(function() {
        if ($('#search-redaction-type-6').val()) {
            $('.redact-all-button-6').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-7]').change(function() {
        if ($('#search-redaction-type-7').val()) {
            $('.redact-all-button-7').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-8]').change(function() {
        if ($('#search-redaction-type-8').val()) {
            $('.redact-all-button-8').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });
    $('input[name=search-group-9]').change(function() {
        if ($('#search-redaction-type-9').val()) {
            $('.redact-all-button-9').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
            // $('.search-redaction-footer').show();
        }       
    });

    // Search suggestions - Checkboxes
    $('input[name=search-group-10]').change(function() {
        if ($('#search-redaction-type-10').val()) {
            $('.redact-all-button-10').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
        }       
    });
    $('input[id=search-group-10-select-all]').change(function() {
        $('.redact-all-button-10').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
    });

    $('input[name=search-group-11]').change(function() {
        if ($('#search-redaction-type-11').val()) {
            $('.redact-all-button-11').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
        }       
    });
    $('input[id=search-group-11-select-all]').change(function() {
        $('.redact-all-button-11').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
    });

    $('input[name=search-group-12]').change(function() {
        if ($('#search-redaction-type-12').val()) {
            $('.redact-all-button-12').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
        }       
    });
    $('input[id=search-group-12-select-all]').change(function() {
        $('.redact-all-button-12').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
    });

    $('input[name=search-group-13]').change(function() {
        if ($('#search-redaction-type-13').val()) {
            $('.redact-all-button-13').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
        }       
    });
    $('input[id=search-group-13-select-all]').change(function() {
        $('.redact-all-button-13').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
    });

    $('input[name=search-group-14]').change(function() {
        if ($('#search-redaction-type-14').val()) {
            $('.redact-all-button-14').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
        }       
    });
    $('input[id=search-group-14-select-all]').change(function() {
        $('.redact-all-button-14').removeClass('govuk-button--disabled').attr('aria-disabled','false').removeAttr('disabled').attr('onClick','openRedactAllModal()');
    });
    // $('.search-redact-button').click(function() {

    // });   

})

// =================================== SEARCH SUGGESTIONS =================================== //
$(document).ready(function () {
    $('.eoin-mcLove, .shelagh-mcLove, .lucy-doyle, .phone-number').hide();
})

function openEoin() {
    $('.eoin-mcLove').show();
    $('.shelagh-mcLove, .lucy-doyle, .phone-number').hide();

    $('.search-suggestion').text('Eoin McLove');
}

function openShelagh() {
    $('.shelagh-mcLove').show();
    $('.eoin-mcLove, .lucy-doyle, .phone-number').hide();

    $('.search-suggestion').text('Shelagh McLove');
}

function openLucy() {
    $('.lucy-doyle').show();
    $('.eoin-mcLove, .shelagh-mcLove, .phone-number').hide();

    $('.search-suggestion').text('Lucy Doyle');
}

function openAllPeople() {
    $('.eoin-mcLove, .shelagh-mcLove, .lucy-doyle').show();
    $('.phone-number').hide();

    $('.search-suggestion').text('Eoin McLove, Shelagh McLove, Lucy Doyle');
}

function openPhone() {
    $('.eoin-mcLove, .shelagh-mcLove, .lucy-doyle').hide();
    $('.phone-number').show();

    $('.search-suggestion').text('07734679952');
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

    $('.search-PII, #searchResultsPanel').hide();

    setTimeout(function () {
        $('.search-PII').show();
        $('#alert').addClass('alert');
        $('.loading-PII').hide();
        $('#header-alert').text('2 new documents');
        $('#searchLoadingPanel').hide();
        $('#searchResultsPanel').show();
    }, 20000)

    setTimeout(function () {
        $('#push-notification').show();
    }, 24000)


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
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
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
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
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

        $('.updated-message').show();

        document.getElementById("date-stamp").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
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

        $('.updated-message').show();

        $('#push-notification-2').hide();
        $('#alert2').removeClass('alert');

        document.getElementById("date-stamp").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
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


// =================================== SUGGESTED REDACTIONS =================================== //
$(document).ready(function () {
    $('.suggested-redactions').hide();
})


function suggestedRedactions() {
    $('.suggested-redactions-panel').show();
    $(".suggested-redactions").html('Turn <strong>OFF</strong> Suggested Redactions');

    // var d = document.getElementById("pdf-root");
    // d.setAttribute('data-pdf-url' , 'Next');
    $('#pdf-root .canvasWrapper, #pdf-root .textLayer').hide();
    $('#pdf-root .PdfHighlighter').addClass('documentSwap');
    document.getElementById("changeDocument").innerHTML="<img src='/public/files/MCLOVEMG3-SR-1.jpg' id='suggested-1' onClick='suggestedRedactionsStep2()' />";
    $('#pdf-root').prepend(`
        <div class="redaction-footer">
            <span class="removeRedactions looks-like-a-link-underline">Remove all redactions</span>
            <span id="data-count-SR" data-count="23">There are 23 redactions</span>
            <span class="viewRedactions looks-like-a-link-underline"> - views redactions</span>
            <button class="govuk-button saveDraftButton govuk-button--secondary">Save draft redactions</button>
            <button class="govuk-button saveAndFinishButton" onClick="sumbitSuggestedRedactions()">Save and submit all redactions</button>
        </div>
    `);
}

function suggestedRedactionsStep2() {
    document.getElementById("changeDocument").innerHTML="<img src='/public/files/MCLOVEMG3-SR-2.jpg' id='suggested-2' onClick='suggestedRedactionsStep3()' />";
    $('#redaction-summary-list-DUMMY').html(`
        <li id="suggested-NamedIndividuals"><b>18</b> - Named individuals</li>
        <li><b>2</b> - Email addresses</li>
        <li><b>2</b> - Previous convictions</li>
        <li><b>1</b> - Date of birth</li>
    `);
}

function suggestedRedactionsStep3() {
    document.getElementById("changeDocument").innerHTML="<img src='/public/files/MCLOVEMG3-SR-3.jpg' id='suggested-3' onClick='suggestedRedactionsStep4()' />";
    document.getElementById("data-count-SR").innerHTML="There are 23 redactions";
    document.getElementById("confirm-suggested-redactions-number").innerHTML="22";
    document.getElementById("SRNumber").innerHTML="(17)";
    $('#redaction-summary-list-DUMMY').html(`
        <li id="suggested-NamedIndividuals"><b>17</b> - Named individuals</li>
        <li><b>2</b> - Email addresses</li>
        <li><b>2</b> - Previous convictions</li>
        <li><b>1</b> - Date of birth</li>
    `);
}

function suggestedRedactionsStep4() {
    document.getElementById("changeDocument").innerHTML="<img src='/public/files/MCLOVEMG3-SR-4.jpg' id='suggested-4' />";
    document.getElementById("data-count-SR").innerHTML="There are 21 redactions";
    document.getElementById("confirm-suggested-redactions-number").innerHTML="21"; 
    document.getElementById("SRNumber").innerHTML="(16)";
    $('#redaction-summary-list-DUMMY').html(`
        <li id="suggested-NamedIndividuals"><b>16</b> - Named individuals</li>
        <li><b>2</b> - Email addresses</li>
        <li><b>2</b> - Previous convictions</li>
        <li><b>1</b> - Date of birth</li>
    `);    
}


$(document).ready(function () {

    $('.success-banner-DUMMY').hide();

    $("input[name=suggestedRedactions]").on("change", function (e) {
        if ($(this).val() == "Yes") {
            $('#confirm-suggested-redactions').attr('onClick','closeSuggestedRedactions(), openDummyRedactionLog()').removeClass('govuk-button--disabled').removeAttr('disabled', 'aria-disabled');

            setTimeout(function () {
                $('#saving-panel-DUMMY').slideUp();
                $('.success-banner-DUMMY').slideDown();
                $('#redaction-log-button-DUMMY').attr('onClick','closeDummyRedactionLog(), bulkRedactions()').removeClass('govuk-button--disabled').removeAttr('disabled', 'aria-disabled');
            }, 3500);

            setTimeout(function () {
                $('.success-banner-DUMMY').slideUp();
            }, 8000);


        } else if ($(this).val() == "No") {
            $('#confirm-suggested-redactions').attr('onClick','closeSuggestedRedactions()').removeClass('govuk-button--disabled').removeAttr('disabled', 'aria-disabled');
        }
    });

})

function bulkRedactions() {
    document.getElementById("changeDocument").innerHTML="<img src='/public/files/MCLOVEMG3-SR-5.jpg' id='suggested-5' />";
    $('.suggested-redactions-panel, .redaction-footer').hide();
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
        $('#pdf-root').addClass('documentRedacted');
    });

    $('#charge-issued-error').show();

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

// =================================== Zoom and Marquee =================================== //
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

function marqueeOn() {
    $("#marquee").addClass('on');
    $('#pdf-root').prepend('<img src="/public/files/MCLOVEMG3-SR-6.png" id="marqueeTool" onClick="" />')
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
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        }


        // Note
        $.cookie("notes-Details", $('#notes-Comments').val(), {path:'/'});
        $('#note-added .hods-timeline__description').html($.cookie("notes-Details"));
        $('.notes-text-content').html($.cookie("notes-Details"));

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
            months = ['01','02','03','04','05','06','07','08','09','10','11','12'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        return days[d.getDay()]+' '+d.getDate()+'/'+months[d.getMonth()]+'/'+d.getFullYear()+' '+hours+':'+minutes+ampm;
        }


        // Note
        $.cookie("notesNew-Details", $('#notesNew-Comments').val(), {path:'/'});
        $('#noteNew-added .hods-timeline__description').html($.cookie("notesNew-Details"));

        $('.notes-link').addClass('has-notes');
        $('.notes-new-text-content').html($.cookie("notesNew-Details"));

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

// =================================== RENAME & MOVE =================================== //

$(document).ready(function () {

    // Rename
    $(".more-options").on("click", function (e) {
        $(this).find('.visuallyhidden').hide();
        $(this).parent().toggleClass('show-options');
        $(this).toggleClass('show');
        $(this).siblings('.document-nav').toggleClass('show');
    });

    $(".rename-Document").on("click", function (e) {
        var docNewTitle = $(this).parent().parent().children('.wrapper').find('.show-case').text();
        $('.document-title-10').text(docNewTitle);
        $(this).parent().parent().addClass('change-DocumentName');
    });

    $('#document-renamed').on("click", function (e) {
        $('.more-options, .document-nav').removeClass('show');
        $('.change-DocumentName .wrapper').prepend(`<strong class="govuk-tag govuk-tag--orange" style="display: inherit;">Updated</strong>`);
        $('.updated-message').show();
        $('table tbody tr td').removeClass('show-options');
    });

    // Move
    $('.document-groups').hide();

    $(".move-Document").on("click", function (e) {
        var docMoveTitle = $(this).parent().parent().children('.wrapper').find('.show-case').text();
        $('.document-title-11').text(docMoveTitle);
        $(this).parent().parent().addClass('move-Document');
    });

})

function documentOptionTitle() {
    // var docNewTitle = $(this).parent().parent().find('.show-case').text();
    // $('.document-title-10').text(docNewTitle);
    // alert(docNewTitle);
}

// Group 1 - Reviews
function groupReviews() {
    $('.groupName').text('Review documents');
    $('.document-groups').hide();
    $('#groupReviews').show();
}

// Group 2 - Case overview
function groupCase() {
    $('.groupName').text('Case overview documents');
    $('.document-groups').hide();
    $('#groupCase').show();
}

// Group 3 - Statements
function groupStatements() {
    $('.groupName').text('Statement documents');
    $('.document-groups').hide();
    $('#groupStatements').show();
}

// Group 4 - Exhibits
function groupExhibits() {
    $('.groupName').text('Exhibit documents');
    $('.document-groups').hide();
    $('#groupExhibits').show();
}

// Group 5 - Forensics
function groupForensics() {
    $('.groupName').text('Forensic documents');
    $('.document-groups').hide();
    $('#groupForensics').show();
}

// Group 6 - Unused materials
function groupUnused() {
    $('.groupName').text('Unused material documents');
    $('.document-groups').hide();
    $('#groupUnused').show();
}

// Group 7 - Defendant
function groupDefendant() {
    $('.groupName').text('Defendant documents');
    $('.document-groups').hide();
    $('#groupDefendant').show();
}

// Group 8 - Court preparation
function groupCourt() {
    $('.groupName').text('Court preparation documents');
    $('.document-groups').hide();
    $('#groupCourt').show();
}

// Group 9 - Communications
function groupCommunication() {
    $('.groupName').text('Communication documents');
    $('.document-groups').hide();
    $('#groupCommunication').show();
}

// Group 10 - Uncategorised
function groupUncategorised() {
    $('.groupName').text('Uncategorised documents');
    $('.document-groups').hide();
    $('#groupUncategorised').show();
}




// !!!!!! --------------------------------- Date stamp - THIS MUST BE AT THE BOTTOM --------------------------------- !!!!!! //
$(document).ready(function () {
    document.getElementById("date-stamp").innerHTML = formatAMPM();
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
