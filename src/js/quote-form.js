//////////////////////////////////////////
// Formulario de cotiza en español
//////////////////////////////////////////

$('form[name="sic-quote-form"]').validate({
  name: 'required',
  email: 'required',
  company: 'required',
  message: 'required',
  messages: {
    name: "Por favor, introduce tu nombre",
    email: "Por favor, introduce tu correo electrónico",
    company: "Por favor, selecciona una solución",
    message: "Por favor, describe el problema",
  },
  submitHandler: function(form) {
    var formData = new FormData(document.getElementById('sic-quote-form'));

    $.ajax({
      type: 'POST',
      url: 'https://sicco.com.co/integracion-formularios/cotiza-espanol.php',
      data: formData,
      processData: false,
      contentType: false,
      cache: false
    }).done(function() {
      document.getElementById('sic-quote-form').reset();
      // alertify.success('Se ha enviado el email. Gracias por contactarnos!');

      setTimeout(function() {
        // window.location.href = "/gracias.html";
        var win = window.open("/gracias.html", '_blank');
        win.focus();
      }, 700)
    });
  },
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    alertify.error("Verifica la información. Tienes " + errors + " errores.");
  }
});

//////////////////////////////////////////
// Formulario de cotiza en inglés
//////////////////////////////////////////

$('form[name="sic-quote-form-en"]').validate({
  name: 'required',
  email: 'required',
  company: 'required',
  message: 'required',
  messages: {
    name: "Please, enter your name",
    email: "Please, enter your email",
    company: "Please, select a solution",
    message: "Please, enter your message",
  },
  submitHandler: function(form) {
    var formData = new FormData(document.getElementById('sic-quote-form-en'));

    $.ajax({
      type: 'POST',
      url: 'https://sicco.com.co/integracion-formularios/cotiza-ingles.php',
      data: formData,
      processData: false,
      contentType: false,
      cache: false
    }).done(function() {
      document.getElementById('sic-quote-form-en').reset();
      // alertify.success('The email has been sent. Thanks for contact us!');
      setTimeout(function() {
        var win = window.open("/thank-you.html", '_blank');
        win.focus();
      }, 700)
    });
  },
  invalidHandler: function(event, validator) {
    var errors = validator.numberOfInvalids();
    alertify.error("Verify yout information. You have " + errors + " errors.");
  }
});
