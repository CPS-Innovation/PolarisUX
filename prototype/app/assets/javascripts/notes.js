// =================================== NOTES =================================== //

$(document).ready(function () {

    // Existing notes
    var notesNumber = 4;

    $('#note-added, #note-loading').hide();

    $("#notes-button").on("click", function (e) {

        $('.saving-panel-notes').show();
        $('.header-wrapper').hide();
        $('#note-loading').show();

        setTimeout(function () {
            $('#note-loading').hide();
            $('.saving-panel-notes').hide();
            $('.success-banner-notes').show();
            $('#note-added').show();
        }, 2000)

        // Time stamp
        document.getElementById("note-timestamp").innerHTML = formatAMPM();
        function formatAMPM() {
        var d = new Date(),
            minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
            hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
            ampm = d.getHours() >= 12 ? 'pm' : 'am',
            months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
            days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            return d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear();
        }


        // Note
        $.cookie("notes-Details", $('#notes-Comments').val(), {path:'/'});
        $('#note-added .hods-timeline__description').html($.cookie("notes-Details"));
        $('.notes-text-content .notes-content').html($.cookie("notes-Details"));

        setTimeout(function () {
            $('#notes-Comments').val('');
            $('#notes-Comments-info').text('You can enter up to 500 characters');
        }, 15)

        // Counter 
        // notesNumber += 1;
        // $('.notes-number').text(notesNumber);
        // $('.notes-trigger span').text(notesNumber);

    });

     // New notes
     $(".new-notes-link").on("click", function (e) {
          $(this).parent().parent().parent().addClass('new-note-added');
     });

     $(".closeNewNotesModal").on("click", function (e) {
          $('table tbody tr td').removeClass('new-note-added');
     });

     var notesNewNumber = 0;

     $('#noteNew-added').hide();

     $("#notesNew-button").on("click", function (e) {

          $('.notes-wrapper, .hods-timeline').removeClass('errors');
          $('#notesNew-Comments').removeClass('govuk-input--error');
          $('#notes-error').hide();

          $('.saving-panel-notes').show();
          $('.header-wrapper').hide();
          $('#noteNew-loading').show();

          setTimeout(function () {
               $('#noteNew-loading').hide();
               $('.saving-panel-notes').hide();
               $('.success-banner-notes').show();
               $('#noteNew-added').show();
          }, 2000)

          // Time stamp
          document.getElementById("noteNew-timestamp").innerHTML = formatAMPM();
          function formatAMPM() {
               var d = new Date(),
               minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
               hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
               ampm = d.getHours() >= 12 ? 'pm' : 'am',
               months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
               days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
               return d.getDate()+' '+months[d.getMonth()]+' '+d.getFullYear();
          }

          // Note
          var newNotesContent = $('#notesNew-Comments').val();
          // $.cookie("notesNew-Details", $('#notesNew-Comments').val(), {path:'/'});
          $('#noteNew-added .hods-timeline__description').html(newNotesContent);

          $('.new-note-added .notes-link').addClass('has-notes');
          $('.new-note-added .notes-new-text-content').html('<strong>Notes:</strong><br><span class="newNotesContent">' + newNotesContent + '</span>');

          setTimeout(function () {
               $('#notesNew-Comments').val('');
               $('#notesNew-Comments-info').text('You can enter up to 500 characters');
          }, 15)

          // Counter 
          // notesNewNumber += 1;
          // $('.notes-link').addClass('has-notes');
          // $('.new-notes-number').text(notesNewNumber);

          // Tags
          var notesNew = $('#notesNew-Comments').val();
          if (notesNew.length > 0) {   
               $('.hods-timeline__description').show();
          } else {
               $('.hods-timeline__description').hide();
          }

          var notesNewEvidential = $('#notesNew-Evidential').val();
          $('.tags-wrapper .notesNew-Evidential').hide();

          if ($('#notesNew-Evidential').val() == 'EVIDENCE - Live' || $('#notesNew-Evidential').val() == 'EVIDENCE - S9' || $('#notesNew-Evidential').val() == 'UNUSED - Disclose' || $('#notesNew-Evidential').val() == 'UNUSED - Not Disclose' || $('#notesNew-Evidential').val() == 'UNUSED - Clearly Not Disclose') {
               // alert(notesNewEvidential);
               $('.tags-wrapper').append('<strong class="govuk-tag notesNew-Evidential"></strong>');
               $('strong.notesNew-Evidential').html(notesNewEvidential);
               $('.tags-wrapper .notesNew-Evidential').show();
               $('.new-note-added .notes-new-text-content').append('<strong class="govuk-tag  notesNew-Evidential">' + notesNewEvidential + '</strong>');
          } else {
               $('.tags-wrapper .notesNew-Evidential').hide();
          }


          var notesNewEvidentialType = $('input[name=notesNew-Evidence]:checked').val();
          if ($('input[name=notesNew-Evidence]').is(':checked')) {
               $('.notesNew-Evidential').append(' - ' + notesNewEvidentialType);
               // $('.new-note-added .notes-new-text-content .notesNew-Evidential').append(' - ' + notesNewEvidentialType);
          }
          
          if ($('input[id=notesNew-GDPR]').is(':checked')) {
               $('.tags-wrapper').append('<strong class="govuk-tag">Not GDPR Safe</strong>');
               $('.new-note-added .notes-new-text-content').append('<strong class="govuk-tag">Not GDPR Safe</strong>');
          }

          if ($('input[id=notesNew-Links]').is(':checked')) {
               $('.tags-wrapper').append('<strong class="govuk-tag">Links don\'t work</strong>');
               $('.new-note-added .notes-new-text-content').append('<strong class="govuk-tag">Links don\'t work</strong>');
          }

          if ($('input[id=notesNew-Sensitive]').is(':checked')) {
               $('.tags-wrapper').append('<strong class="govuk-tag">Sensitive Material</strong>');
               $('.new-note-added .notes-new-text-content').append('<strong class="govuk-tag">Sensitive Material</strong>');
          }

          var notesNewStatement = $('#notesNew-MG11').val();
          if ($('#notesNew-MG11').val() == 'Arrest' || $('#notesNew-MG11').val() == 'Victim' || $('#notesNew-MG11').val() == 'VPS' || $('#notesNew-MG11').val() == 'Civilian' || $('#notesNew-MG11').val() == 'Expert') {
               $('.tags-wrapper').append('<strong class="govuk-tag">' + notesNewStatement + '</strong>');
               $('.new-note-added .notes-new-text-content').append('<strong class="govuk-tag">' + notesNewStatement + '</strong>');
          }

          var notesNewExhibit = $('#notesNew-Exhibit').val();
          if ($('#notesNew-Exhibit').val() == 'Audio' || $('#notesNew-Exhibit').val() == 'MG15' || $('#notesNew-Exhibit').val() == 'Bodyworn' || $('#notesNew-Exhibit').val() == 'Phone' || $('#notesNew-Exhibit').val() == 'Presentation' || $('#notesNew-Exhibit').val() == 'Maps' || $('#notesNew-Exhibit').val() == 'CCTV' || $('#notesNew-Exhibit').val() == 'Cell' || $('#notesNew-Exhibit').val() == '999' || $('#notesNew-Exhibit').val() == 'Photo - Injuries' || $('#notesNew-Exhibit').val() == 'Photo - Scene' || $('#notesNew-Exhibit').val() == 'Photo - Exhibits') {
               $('.tags-wrapper').append('<strong class="govuk-tag">' + notesNewExhibit + '</strong>');
               $('.new-note-added .notes-new-text-content').append('<strong class="govuk-tag">' + notesNewExhibit + '</strong>');
          }

    });

    // Conditional elements
    // $("#notesNew-Evidential").on("change", function (e) {
    //       if ($(this).val() == 'EVIDENCE') {
    //            $('.conditonal-evidence').show();
    //       } else {
    //            $('.conditonal-evidence').hide();
    //       }
    // });

     // Exhibit notes
     $(".exhibit-notes").on("click", function (e) {
          $('.conditonal-MG11').hide();
          $('.conditonal-Exhibit').show();
     });

     // Statement notes
     $(".statement-notes").on("click", function (e) {
          $('.conditonal-Exhibit').hide();
          $('.conditonal-MG11').show();
     });


     // Errors
     $('.cta-buttons').hide();
     $('#notes-error').hide();

     $("#notesNew-Comments").on("keyup", function (e) {
          $('.cta-buttons').show();
          $('.error-buttons').hide();
     });

     $('#notesNew-Evidential, #notesNew-GDPR, #notesNew-Links, #notesNew-Sensitive, #notesNew-MG11, #notesNew-Exhibit').on("change", function (e) {
          $('.cta-buttons').show();
          $('.error-buttons').hide();
     });

     $('#notesNew-errors').on("click", function (e) {
          $('.notes-wrapper, .hods-timeline').addClass('errors');
          if ($('#notesNew-Comments').val() <= 0) {
               // $('#notesNew-Comments').addClass('govuk-input--error');
               $('#notes-error').show();
               $('.newNote-Details').attr('open', 'open');
          } else {
               $('#notes-error').hide();
          }
     });

})

