$(function(){
     var currencies = [
          { value: "MG12" },
          { value: "MG15(CNOI)" },
          { value: "MG15(CONT)" },
          { value: "MG15(ROTI)" },
          { value: "MG15(ROVI)" },
          { value: "MG15(SDN)" },
          { value: "MG15(T)" },
          { value: "MG15(T)(CONT)" },
          { value: "MG/FSS A" },
          { value: "MG/FSS B" },
          { value: "MG22 SFR" },
          { value: "MGDD" },
          { value: "Other Exhibit" },
          { value: "HORT-1" },
          { value: "HORT-2" }
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#docType-Exhibits').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-Exhibits').html(thehtml);
          }
     });

});
