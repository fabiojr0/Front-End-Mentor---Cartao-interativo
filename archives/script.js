function infos() {
  let name_card = document.querySelector('div.name_card')
  let numbers_card = document.querySelector('div.numbers_card')
  let expiring_card = document.querySelector('div.expiring_card')
  let validationcode_card = document.querySelector('div.validationcode_card')

  let name = document.querySelector('input#name').value
  let numbers = document.querySelector('input#numbers').value
  let expiring_month = document.querySelector('input#expiring_month').value
  let expiring_year = document.querySelector('input#expiring_year').value
  let cvv = document.querySelector('input#cvv').value
  

  name = name.toUpperCase()

  numbers = `${numbers.slice(0,4)} ${numbers.slice(4,8)} ${numbers.slice(8,12)} ${numbers.slice(12)} `

  name_card.innerHTML = `${name}`
  numbers_card.innerHTML = `${numbers}`
  expiring_card.innerHTML = `${expiring_month}/${expiring_year}`
  validationcode_card.innerHTML = `${cvv}`
}
infos()
setInterval(infos, 1000)


