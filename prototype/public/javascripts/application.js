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

    //Get form element
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
$("#redaction-log, .hidden-select").hide();

function showHideRedaction() {
    setTimeout(function() {
        $("#saving-panel").hide();
        $("#redaction-log").show();
    }, 2500);
    setTimeout(function() {
        $(".success-banner").slideUp();
    }, 5000);
}

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
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
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


// =================================== Search button =================================== //
$(document).ready(function () {
    $(".search-button").on("click", function (e) {
        $('.searchForm-inner').find('input').toggleClass('show');
        $(this).toggleClass('open');
    });
})

function searchTerm() {
    var resultValue = $('#searchURNModal').val();
    $('.searchModalResults').text(resultValue); 
    $('#searchURNModal-result').val(resultValue).text(resultValue); 
}

// =================================== Window size & Document filter change =================================== //
$(document).ready(function () {

    var documentsRead = 0;
    var documentsUnread = 22;

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

        // buttonHome.addEventListener("click", function() {
        //     
        //     alert(CountButtonHomeClicks);
        // });

    });

})

function documentTitle() {
    var docTitle = $('#selectedTab').find('a').text();
    $('#document-title').text(docTitle);
    $('#document-title-2').text(docTitle);
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

// =================================== MY COOKIES =================================== //

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

})

