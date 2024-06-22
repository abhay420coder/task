document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.purecounter');
    let counterActivated = Array(counters.length).fill(false);
  
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };
  
    const startCounter = (counter, index) => {
      const startValue = parseInt(counter.getAttribute('data-purecounter-start'));
      const endValue = parseInt(counter.getAttribute('data-purecounter-end'));
      const duration = parseInt(counter.getAttribute('data-purecounter-duration')) * 1000;
  
      let startTime = null;
  
      const updateCounter = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const currentValue = Math.min(Math.floor(progress / duration * (endValue - startValue) + startValue), endValue);
  
        counter.textContent = currentValue;
  
        if (progress < duration) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = endValue;
        }
      };
  
      requestAnimationFrame(updateCounter);
      counterActivated[index] = true; // Mark this counter as activated
    };
  
    const checkCounters = () => {
      counters.forEach((counter, index) => {
        if (!counterActivated[index] && isInViewport(counter)) {
          startCounter(counter, index);
        }
      });
    };
  
    window.addEventListener('scroll', checkCounters);
    window.addEventListener('resize', checkCounters); // Check on resize as well
    checkCounters(); // Initial check in case some counters are already in view
  });
  
  



document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const loading = document.querySelector('.loading');
    const errorMessage = document.querySelector('.error-message');
    const sentMessage = document.querySelector('.sent-message');
  
    loading.style.display = 'block';
    errorMessage.style.display = 'none';
    sentMessage.style.display = 'none';
  
    const formData = new FormData(this);
  
    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      body: JSON.stringify({
        service_id: 'service_fmrzp2q',
        template_id: 'template_5jzvrt1',
        user_id: 'cOJz9id0HKe_Jca4y',
        template_params: {
          'name': formData.get('name'),
          'email': formData.get('email'),
          'subject': formData.get('subject'),
          'message': formData.get('message')
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      loading.style.display = 'none';
      if (data.status === 'OK') {
        sentMessage.style.display = 'block';
        document.getElementById('contactForm').reset();
      } else {
        errorMessage.style.display = 'block';
        errorMessage.textContent = 'Error sending message. Please try again later.';
      }
    })
    .catch(error => {
      loading.style.display = 'none';
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Error sending message. Please try again later.';
    });
  });




  