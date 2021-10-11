const update = document.querySelector('#update-button')


update.addEventListener('click', _ => {
    fetch('/product', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: '',
        quote: 'I find your lack of faith disturbing.'
      })
    })
  })