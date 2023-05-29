const form = document.querySelector('.signup-form')
const usernameInput = form.querySelector('#username')
const emailInput = form.querySelector('#email')
const passwordInput = form.querySelector('#password')
const usernameErrMsg = form.querySelector('#username-error')
const emailErrMsg = form.querySelector('#email-error')
const passwordErrMsg = form.querySelector('#password-error')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const username = usernameInput.value
  const email = emailInput.value
  const password = passwordInput.value

  if (username.length < 3) {
    usernameErrMsg.classList.add('active')

    setTimeout(() => {
      usernameErrMsg.classList.remove('active')
    }, 6000)
    return
  }

  if (!validateEmail(email)) {
    emailErrMsg.classList.add('active')

    setTimeout(() => {
      emailErrMsg.classList.remove('active')
    }, 6000)
    return
  }

  if (!validatePassword(password)) {
    passwordErrMsg.classList.add('active')

    setTimeout(() => {
      passwordErrMsg.classList.remove('active')
    }, 6000)
    return
  }
})

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validatePassword = (password) => {
  const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
  return passwordRegex.test(password)
}
