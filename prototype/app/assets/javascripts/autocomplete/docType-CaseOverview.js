$(function(){
     var currencies = [
          { value: "MG4A" },
          { value: "MG4B" },
          { value: "MG4C" },
          { value: "MG4D" },
          { value: "MG4E" },
          { value: "MG4F" },
          { value: "MG5" },
          { value: "MG5(SP)" },
          { value: "MG17" },
          { value: "Crown Court HRS" },
          { value: "Advocate's Record of Hearing" }
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#docType-CaseOverview').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-CaseOverview').html(thehtml);
          }
     });

});
