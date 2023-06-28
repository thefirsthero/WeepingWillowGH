document.addEventListener('DOMContentLoaded', function() {
    var bookButtons = document.querySelectorAll('.toBill');
  
    for (let index = 0; index < bookButtons.length; index++) {
      let button = bookButtons[index];
      button.addEventListener('click', function() {
        let container = button.parentNode.parentNode;
        let money = container.querySelector('.amt').textContent.split('/')[0].trim();
        let room = container.querySelector('.roomType').textContent.trim();
        let details = {
          money: money,
          room: room
        };
        localStorage.setItem('amount', JSON.stringify(details));
        location.href = 'billing.html';
      });
    }
  });
  