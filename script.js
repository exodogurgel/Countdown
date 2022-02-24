const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

// Declaring Event date
const eventDate = '27 may 2022'

function countdown() {
    const newDate = new Date(eventDate) // tranforming eventDate in date real
    const currentDate = new Date() // getting current date

    const totalSeconds = (newDate - currentDate) / 1000 // transforming date in seconds

    // to convert seconds into hours, dividy by 3600
    // then divide the total hours by 24 (will be the value in days)
    const day = Math.floor(totalSeconds / 3600 / 24)

    // here is to know the number of hours
    const hour = Math.floor(totalSeconds / 3600) % 24 // the %24 means that it wil return 24 modules from the total

    // here is to know the number of minutes
    const min = Math.floor(totalSeconds / 60) % 60

    // here is to know the number of seconds
    const sec = Math.floor(totalSeconds) % 60

    // adding in screen
    days.innerHTML = formatTime(day)
    hours.innerHTML = formatTime(hour)
    minutes.innerHTML = formatTime(min)
    seconds.innerHTML = formatTime(sec)
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

countdown()
setInterval(countdown, 1000)

// modal

const modal = document.querySelector('.modal')
const switchModal = () => {
    const actualStyle = modal.style.display
    if (actualStyle == 'block') {
        modal.style.display = 'none'
    } else {
        modal.style.display = 'block'
    }
}

const btn = document.querySelector('#btn')
btn.addEventListener('click', switchModal)

const exit = document.querySelector('#exit')
exit.addEventListener('click', switchModal)

const btn2 = document.querySelector('#btn2')
btn2.addEventListener('click', function () {
    const name = document.querySelector('#name')
    const email = document.querySelector('#e-mail')
    const eml = email.value
    const separateText = eml.split('@')
    let validateEmail = separateText[1]
    if (name.value != '' && email.value != '') {
        if (
            validateEmail.includes('gmail.com') ||
            validateEmail.includes('hotmail.com') ||
            validateEmail.includes('outlook.com')
        ) {
            alert(
                `Olá ${name.value}, seu e-mail: ${email.value}, foi cadastrado com sucesso!!`
            )
            name.value = innerHTML = ''
            email.value = innerHTML = ''
            switchModal()
        } else {
            alert(`Só aceitamos e-mail do: "gmail", "outlook" e "hotmail" `)
        }
        email.value = innerHTML = ''
    }
})
