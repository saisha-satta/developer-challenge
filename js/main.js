$(document).ready(function() {
  $("#contact_form")
  .bootstrapValidator({
    feedbackIcons: {
      valid: "glyphicon glyphicon-ok",
      invalid: "glyphicon glyphicon-remove",
      validating: "glyphicon glyphicon-refresh"
    },
    fields: {
      first_name: {
        validators: {
          stringLength: {
            min: 2
          },
          notEmpty: {
            message: "Please enter your first name"
          }
        }
      },

      email: {
        validators: {
          notEmpty: {
            message: "Please enter your email address"
          },
          stringLength: {
            min: 2
          },
          emailAddress: {
            message: "Please enter a valid email address"
          }
        }
      },
      phone: {
        validators: {
          notEmpty: {
            message: "Please enter your phone number"
          },
          stringLength: {
            max: 15
          },
          regexp: {
            regexp: /^(?!0{3})^(?!1{3})^(?!2{3})^(?!3{3})^(?!4{3})^(?!5{3})^(?!6{3})^(?!7{3})^(?!8{3})^(?!9{3})/gm,
            message: 'The phone number must not contain 3 numeric patterns in a row'
          },
          regexp: {
            regexp: /^(?!1234567890)^(?!0987654321)^(?!9876543210)^(?!0123456789)^(?!0101010101)^(?!1010101010)/gm,
            message: 'Please enter a real phone number'
          },
          phone: {
            country: "US",
            message: "Please enter a vaild phone number with area code"
          }
        }
      }
    }
  })
  // TODO //
  .on("success.form.bv", function(e) {
    //$("#success_message").css("display", "block");
    $("#contact_form")
      .data("bootstrapValidator")
      .resetForm();

    // Prevent form submission
    e.preventDefault();

    // Get the form instance
    var $form = $(e.target);

    // Get the BootstrapValidator instance
    var bv = $form.data("bootstrapValidator");

    // Use Ajax to submit form data
    $.post(
      $form.attr("action"),
      $form.serialize(),
      function(result) {
        console.log(result);
      },
      "json"
    );
  });
});
