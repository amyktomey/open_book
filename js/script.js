const name = document.getElementById('name')
const mail = document.getElementById('mail')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
const emailChecker =  /\S+@\S+\.\S+/;

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value === null) {
      messages.push("Pleease enter your name");
    }
    if (mail.value === '' || mail.value === null ) {
        messages.push("Pleease enter a valid email");
      }
    
    if (messages.length > 0) {
      e.preventDefault()
      errorElement.innerText = messages.join (` , `)
    }
})
