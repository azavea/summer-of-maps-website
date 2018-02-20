---
# Front matter comment to ensure Jekyll properly reads file.

# vendor: "http://jquerymodal.com/"
---
$(".form-modal-open").click(function(event) {
  $(this).modal({
    fadeDuration: 250
  });
  return false;
});
