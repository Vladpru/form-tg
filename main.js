const TOKEN = '6108929502:AAGfNdYcILLuHFPgtxjpeho8Dc6pP4qO7mM'
const CHAT_ID = '-1001906923046'
const URL_API = `https://api.telegram.org/bot${ TOKEN }/sendMessage`
const success = document.querySelector('#success')

document.getElementById('form').addEventListener('submit', function(e) {
  e.preventDefault()

  let message = `<b>Request from website</b>\n`;
  message += `<b>Addresser:</b>${ this.name.value }\n`;
  message += `<b>Email:</b>${ this.email.value }`;

  axios.post(URL_API, {
    chat_id: CHAT_ID,
    parse_mode: 'html',
    text: message
  })
  .then(res => {
    this.name.value = ''
    this.email.value = ''
    success.style.display = 'block'
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log('final!!!')
  })

})
