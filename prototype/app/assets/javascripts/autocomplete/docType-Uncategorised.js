$(function(){
     var currencies = [
          { value: "ABE" },
          { value: "Other Material" },
          { value: "PE3" },
          { value: "PE4" },
          { value: "Covers" },
          { value: "Rear of Witness Statement" },
          { value: "PE4" },
          { value: "Defence Statement" },
          { value: "Unknown" }
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#docType-Uncategorised').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-Uncategorised').html(thehtml);
          }
     });

});
