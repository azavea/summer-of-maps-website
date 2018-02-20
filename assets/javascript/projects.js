---
# Front matter comment to ensure Jekyll properly reads file.
---
$(document).ready(function() {
  // get jQuery selections
  $resetFilters = $(".reset-filters");
  $activeFilter = $(".filters a.active");
  $project = $(".project");

  $(".filters").on("click", "a", function(event) {
    event.preventDefault();
    // get clicked element
    var $filter = $(this);
    var $filterID = $filter.attr("id");
    // deactivate previous filter button
    $activeFilter.removeClass("active");
    // set & activate new filter button
    $activeFilter = $filter;
    $activeFilter.addClass("active");

    // project filtering
    $project.each(function(index, project) {
      // get each projects tags
      var projectTag = $(project).attr("data-tag");

      // hide projects base on matching clicked filter
      if (projectTag.indexOf($filterID) < 0) {
        $(project).addClass("hide");
      } else {
        $(project).removeClass("hide");
      }
    });
  });
});
