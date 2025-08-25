// Import validation functions
import { validateTicketQuantity, validateEmail, calculatePrice } from './utils.js';

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

// Using imported validation functions instead

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

    if (!validateTicketQuantity(quantity)) {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Please enter a valid ticket quantity (1-10).';
        return;
    }

    if (!validateEmail(email)) {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Please enter a valid email address.';
        return;
    }

    const totalPrice = calculatePrice(quantity);
    messageElement.style.color = 'green';
    messageElement.textContent = `Success!  You bought ${quantity} ticket(s). Total: $${totalPrice}. Confirmation sent to ${email}.`;
    ticketQuantity.value = '';
    ticketEmail.value = '';
    messageElement.textContent = '';
})

ticketQuantity.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        payBtn.click()
    }
})

ticketEmail.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        payBtn.click()
    }
})