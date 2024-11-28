 'use strict';

document.querySelector('a[href="#about"]').addEventListener('click', function(e) {
  e.preventDefault(); 
  document.querySelector('.aboutme').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('a[href="#contact"]').addEventListener('click', function(e) {
  e.preventDefault(); 
  document.querySelector('.contactme').scrollIntoView({ behavior: 'smooth' });
});

document.querySelector('.github').addEventListener('click', function() {
  window.open('https://github.com/jiayimitt', '_blank'); 
});

document.querySelector('.linkedin').addEventListener('click', function() {
  window.open('https://www.linkedin.com/in/jiayi-n-8767452ba/', '_blank'); 
});

