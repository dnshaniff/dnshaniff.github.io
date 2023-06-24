// Scrollable
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var btnBackToTop = document.querySelector('#btn-back-to-top');
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var sections = document.querySelectorAll('section');

  sections.forEach(function(section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;

    if (scrollPosition >= sectionTop - navbar.offsetHeight && scrollPosition < sectionTop + sectionHeight) {
      var navItems = navbar.querySelectorAll('.nav-item');
      navItems.forEach(function(navItem) {
        navItem.classList.remove('active');
      });

      var currentNavItem = navbar.querySelector('a[href="#' + section.getAttribute('id') + '"]').closest('.nav-item');
      if (currentNavItem) {
        currentNavItem.classList.add('active');
      }
    }
  });

  if (scrollPosition > 760) {
    navbar.classList.add('scrolled');
    btnBackToTop.style.display = 'block';
  } else {
    navbar.classList.remove('scrolled');
    btnBackToTop.style.display = 'none';
  }
});

var btnBackToTop = document.querySelector('#btn-back-to-top');
btnBackToTop.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Typewriting
const typedTextSpan=document.querySelector(".typed-text");
const cursorSpan=document.querySelector(".cursor");
const textArray=["Web Developer", "Web Developer - Back-End"];
const typingDelay=50;
const erasingDelay=100;
const newTextDelay=1500;
  let textArrayIndex=0;
  let charIndex=0;
  function type() {
    if(charIndex<textArray[textArrayIndex].length)  {
      if(!cursorSpan.classList.contains("typing"))cursorSpan.classList.add("typing");
        typedTextSpan.textContent+=textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type,typingDelay);
    }else{
      cursorSpan.classList.remove("typing");setTimeout(erase,newTextDelay);
    }
  }

  function erase()  {
    if(charIndex>0) {
      if(!cursorSpan.classList.contains("typing"))cursorSpan.classList.add("typing");
        typedTextSpan.textContent=textArray[textArrayIndex].substring(0,charIndex-1);
        charIndex--;
        setTimeout(erase,erasingDelay);
      }else{
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex>=textArray.length)textArrayIndex=0;
        setTimeout(type,typingDelay+1100);
      }
    }
  document.addEventListener("DOMContentLoaded",function(){if(textArray.length)setTimeout(type,newTextDelay+250);
});

// Content-show
document.addEventListener("DOMContentLoaded", function() {
  const col5 = document.querySelector(".hero-left");
  const col7 = document.querySelector(".hero-right");
  const elevatorPitch = document.querySelector(".hero-bottom");

  col5.style.opacity = "1";
  col7.style.opacity = "1";
  elevatorPitch.style.opacity = "1";
});
