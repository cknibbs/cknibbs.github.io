function toggleAccordion() {
    const accordionContent = document.querySelector('.faq-answer');
    const chevronImage = document.querySelector('.faq-indicator img');
  
    if (accordionContent.style.display === 'block') {
      accordionContent.style.display = 'none';
      chevronImage.src = 'images/chevron.down.png';
    } else {
      accordionContent.style.display = 'block';
      chevronImage.src = 'images/chevron.up.png';
    }
  }