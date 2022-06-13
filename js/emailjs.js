const btn = document.getElementById('submitBtn');

document.getElementById('form')
    .addEventListener('submit', async function(event) {
      event.preventDefault();

      let tempPrams = {
        to_name: await document.getElementById("to_name").value,
        message: await document.getElementById("message").value,
        from_email: await document.getElementById('from_email').value
      };

      btn.value = 'Sending...';

      const serviceID = 'default_service';
      const templateID = 'template_i2l1et8';

      emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            btn.value = 'Send Email';
            alert('Email has sent!');
          }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
          });
    });
