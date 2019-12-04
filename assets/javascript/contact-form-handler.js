---
# Front matter comment to ensure Jekyll properly reads file.
---

$(function() {
  var hpValid = true;
  var $formEls = $(".contact-form");
  var $submitButton = $(".contact-form-submit");
  var formEndpoint = "https://azavea.us1.list-manage.com/subscribe/post?u=61da999c9897859f1c1fff262&amp;id=d3663223c9";

  // Delay submitting immediately
  // Set Hubspot context value
  setTimeout(function() {
    $submitButton.each(function() {
      $(this).attr("disabled", false);
    });
    $($formEls).each(function() {
      $(this).attr("action", formEndpoint);
    });
  }, 3500);

  // For each form make sure we run client-side validation
  $($formEls).each( function() {
    var pristine = new Pristine(this);
    
    $(this).on('submit', function (e) {
      e.preventDefault();
      
      var hpFields_1 = $(".contact-method-fullname"),
          hpFields_2 = $(".contact-method-phone");
      
      if ($(hpFields_1).val() || $(hpFields_2).val()) {
        hpValid = false;
        console.log(hpValid)
      } else {
        hpValid = true;
        console.log(hpValid)
      };

      var checkValidity = pristine.validate();
      if( checkValidity && hpValid ) { this.submit() };
   });
  });
});