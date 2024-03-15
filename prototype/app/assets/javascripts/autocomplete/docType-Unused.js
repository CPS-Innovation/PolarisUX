$(function(){
     var currencies = [
          { value: "MG1" },
          { value: "MG11(R)" },
          { value: "MG20" },
          { value: "MG21" },
          { value: "MG21A" },
          { value: "MG6A" },
          { value: "MG6B" },
          { value: "MG6C" },
          { value: "MG6D" },
          { value: "MG6E" },
          { value: "MG6" },
          { value: "PCN3" }          
  ];

     // setup autocomplete function pulling from currencies[] array
     $('#docType-Unused').autocomplete({
          lookup: currencies,
          onSelect: function (suggestion) {
               var thehtml = '<strong>Currency Name:</strong> ' + suggestion.value + ' <br> <strong>Symbol:</strong> ' + suggestion.data;
               $('#docType-Unused').html(thehtml);
          }
     });

});
