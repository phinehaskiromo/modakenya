  // Get the modal and the button that opens it
  const modal = document.getElementById('loginModal');
  const loginBtn = document.querySelector('href="#login');

  // Get the <span> element that closes the modal
  const closeBtn = modal.querySelector('.close');

  // Function to open the modal
  function openModal() {
    modal.style.display = 'block';
  }

  // Function to close the modal
  function closeModal() {
    modal.style.display = 'none';
  }

  // Event listeners
  loginBtn.addEventListener('click', openModal);
  closeBtn.addEventListener('click', closeModal);

  // Close the modal if the user clicks outside of it
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
  
    function closeBanner() {
    document.querySelector('.discount-wrapper').style.display = 'none';
  }