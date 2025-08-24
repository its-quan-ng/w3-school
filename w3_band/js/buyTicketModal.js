const buyBtns = document.querySelectorAll('.js-buy-ticket');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');
const payBtn = document.getElementById('buy-ticket');
const ticketQuantity = document.getElementById('ticket-quantity');
const ticketEmail = document.getElementById('ticket-email');
const messageElement = document.getElementById('ticket-message');

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

    if (!isValidQuantity(quantity)) {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Please enter a valid ticket quantity (a positive integer).';
        return;
    }

    if (!isValidEmail(email)) {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Please enter a valid email address.';
        return;
    }

    const totalPrice = Number(quantity) * 15;
    messageElement.style.color = 'green';
    messageElement.textContent = `Success!  You bought ${quantity} ticket(s). Total: $${totalPrice}. Confirmation sent to ${email}.`;
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