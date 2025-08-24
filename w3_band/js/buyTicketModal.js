const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.js-modal-close')
const modalContainer = document.querySelector('.js-modal-container')
const payBtn = document.getElementById('buy-ticket')
const ticketQuantity = document.getElementById('ticket-quantity')
const ticketEmail = document.getElementById('ticket-email')

function showBuyTickets() {
    modal.classList.add('open')
}

function hideBuyTickets() {
    modal.classList.remove('open')
}

function isValidQuantity(qty){
    const number = Number(qty);
    return Number.isInteger(number) && number > 0;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)

}

modalClose.addEventListener('click', hideBuyTickets)
modal.addEventListener('click', hideBuyTickets)
modalContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

payBtn.addEventListener('click', function () {
    const quantity = ticketQuantity.value.trim();
    const email = ticketEmail.value.trim();

    console.log('Quantity:', quantity)
    console.log('Email:', email)
})

ticketQuantity.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleBuyTicketClick()
    }
})

ticketEmail.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        handleBuyTicketClick()
    }
})