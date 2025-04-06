// Optional success message
    const form = document.getElementById('contactForm');
    const messageEl = document.getElementById('formMessage');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const data = new FormData(form);
      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
            messageEl.textContent = 'Thanks for your message!';
            messageEl.className = 'success';
            form.reset();
          } else {
            messageEl.textContent = 'Oops! Something went wrong.';
            messageEl.className = 'error';
          }
      });
    });