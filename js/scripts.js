$(function() {
  // Data to fill in panels on page:
  var panelData = [
    ["JavaScript (JS)", "Otherwise know as ECMA Script - the language of the browser"],
    ["Operators", "Symbols used to assign or compare data"],
    ["Variables", "Symbols used to represent and store data."],
    ["Variable naming conventions", '"lowerCamelCase" and names that describe variable&#39s purpose'],
    ["Functions", "Anonymous or named sets of code that: May take arguments, returns a specified result or undefined, may interact with the front end and / or may do back end processing."],
    ["Methods", "Methods are like functions but are associated with a data type or object."],
    ["Arguments", "Arguments are data or functions that are passed to a method or function.  They are sometimes optional."],
    ["Parameters", "Parameters are the variables local to the function or method that receive arguments."],
    ["Return", "Return is the command that terminates a function or method and optionally passes back data or a function."],
    ["Chaining methods", "This is when a method is called and the return value has a method that is called etc.  The method calls are joined by a period."],
    ["Strings", "A primitive JavaScript data type containing an expandable list of characters"],
    ["Booleans", "A primitive JavaScript data type containing the value either true or false"],
    ["Undefined", "A primitive JavaScript data tyype with the single value of undefined.  All  variables when first declared are undefined."],
    ["NaN", "A numeric data type such as that resulting from 0 divided by 0."],
    ["Escape", "Escaping special characters allows them to be displayed but not terminate a string or be treated as tags in HTML, regular expressions or other contacts.  Escaping is sometimes done with a leading back slash."],
    ["Alert", "The alert() function in JavaScript displays a popup message with an OK button and returns undefined."],
    ["Comments", "Comments allow programmers to add documentation to code, aiding in its overall usefullness and understandability."],
    ["jQuery", "jQuery is a richly featured and commonly used JavaScript library, greatly enabling JavaScript programmers to build functionality."],
    ["Attributes", "Attributes are key / value pairs that are included in HTML tags to specify files, URLs, text, context or other information."]
  ];

  // Generate HTML for Bootstrap rows of three columns of panels:
  // Each panel starts with a hidden body.
  // The panel header is clickable to show the body.
  // The panel body is clickable to hide itself.

  var dataRow, allPanels = '';

  for (dataRow = 0; dataRow < panelData.length; dataRow ++) {

    // Is this a new row of 3 columns? Yes if column will be 0.
    if (dataRow % 3 === 0) {
      // Given a new row of columns, do we need to end the previous row?
      // Yes, if we are on any data row past the first one.
      if (dataRow > 0) {
        // End the previous row before starting new row
        allPanels += '</div>';
      };
      // Start new row
      allPanels += '<div class="row">';
    };

    // Add new column with panel containing flashcard
    allPanels +=
    '<div class="col-md-4">' +
      '<div class="panel panel-default">' +
        '<div class="panel-heading clickable-heading">' +
          '<h4>' + panelData[dataRow][0] + '</h4>' +
        '</div>' +
        '<div class="panel-body hidden clickable-body">' +
          '<p>' + panelData[dataRow][1] + '</p>' +
        '</div>' +
      '</div>' +
    '</div>';

  }; // End for loop for all panel data

  // Close ending row
  allPanels +=
    '</div>';

  // Insert panel HTML into DOM
  $("#panels").append(allPanels);


  // Show body by clicking on the heading:
  // All headings are clickable
  // Then for "this" clicked heading find the sibling div
  // with the clickable-body class and remove the "hidden" class
  // to reveal the body
  $(".clickable-heading").click( function() {
    $(this).siblings(".clickable-body").removeClass("hidden");
  });

  // Hide the body:
  // For all elements with the clickable-body class,
  // when the body is clicked, add the "hidden" class
  // to "this"
  $(".clickable-body").click( function() {
    $(this).addClass("hidden");
  });

}); // End JavaScript
