
        document.addEventListener('DOMContentLoaded', function() {
          const button1 = document.getElementById('button1');
          const button2 = document.getElementById('button2');
    
          if (button1 && button2) {
            button1.addEventListener('click', () => {
                button1.classList.add('hidden');
                button2.classList.remove('hidden');
            });
    
            button2.addEventListener('click', () => {
                button2.classList.add('hidden');
                button1.classList.remove('hidden');
            });
          } else {
            console.error('One or both buttons are missing in the DOM.');
          }
        });
