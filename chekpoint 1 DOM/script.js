document.addEventListener('DOMContentLoaded', function() {
    const decreaseButtons = document.querySelectorAll('.decrease');
    const increaseButtons = document.querySelectorAll('.increase');
    const quantityInputs = document.querySelectorAll('.quantity');
    const removeButtons = document.querySelectorAll('.remove');
    const likeButtons = document.querySelectorAll('.like');
    const totalPriceElement = document.getElementById('totalPrice');
  
    // Fonction pour mettre à jour le prix total
    

    function updateTotalPrice() {
        let totalPrice = 0;
        document.querySelectorAll('.item').forEach(item => {
          const price = parseFloat(item.querySelector('.price').innerText);
          const quantity = parseInt(item.querySelector('.quantity').value);
          totalPrice += price * quantity;
        });
       totalPriceElement.innerText = totalPrice.toFixed(2) + ' FCFA';
    
      }
      

    
  
    // Écouteurs d'événements pour les boutons de diminution
    decreaseButtons.forEach(button => {
      button.addEventListener('click', function() {
        const input = this.nextElementSibling;
        let value = parseInt(input.value);
        if (value > 1) {
          value--;
          input.value = value;
          updateTotalPrice();
        }
      });
    });
  
    // Écouteurs d'événements pour les boutons d'augmentation
    increaseButtons.forEach(button => {
      button.addEventListener('click', function() {
        const input = this.previousElementSibling;
        let value = parseInt(input.value);
        value++;
        input.value = value;
        updateTotalPrice();
      });
    });
  
    // Écouteurs d'événements pour les boutons de suppression
    removeButtons.forEach(button => {
      button.addEventListener('click', function() {
        const item = this.closest('.item');
        item.remove();
        updateTotalPrice();
      });
    });
  
    // Écouteurs d'événements pour les boutons "J'aime"
    likeButtons.forEach(button => {
      button.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    });
  
    // Mettre à jour le prix total initial
    updateTotalPrice();
  });
  
    
