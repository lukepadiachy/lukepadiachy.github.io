/**
 * Mobile Menu Handler
 * This script ensures the mobile menu works correctly on all devices,
 * particularly on touch devices where the hamburger menu needs special handling.
 */
(function() {
  document.addEventListener('DOMContentLoaded', function() {
    // Get navigation elements
    const topNav = document.getElementById('top-nav');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (!topNav || !menuToggle) return;
    
    // Always make sure menu toggle is visible on mobile
    function checkViewport() {
      if (window.innerWidth <= 849) {
        menuToggle.style.display = 'block';
      }
    }
    
    // Check immediately and on resize
    checkViewport();
    window.addEventListener('resize', checkViewport);
    
    // Handle menu toggle with better touch support
    function toggleMenu(e) {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      topNav.classList.toggle('menu-active');
    }
    
    // Multiple events for better device compatibility
    
    // 1. Normal click event (works on most devices)
    menuToggle.addEventListener('click', toggleMenu);
    
    // 2. Touchstart event (better for mobile)
    menuToggle.addEventListener('touchstart', function(e) {
      e.preventDefault();
      toggleMenu(e);
    }, {passive: false});
    
    // 3. Touchend event (prevents ghost clicks)
    menuToggle.addEventListener('touchend', function(e) {
      e.preventDefault();
    }, {passive: false});
    
    // Close menu when clicking elsewhere
    document.addEventListener('click', function(e) {
      if (topNav.classList.contains('menu-active') && 
          (!topNav.contains(e.target) || e.target.closest('.nav-link'))) {
        topNav.classList.remove('menu-active');
      }
    });
    
    // Close menu when touching elsewhere (mobile)
    document.addEventListener('touchstart', function(e) {
      if (topNav.classList.contains('menu-active') && 
          (!topNav.contains(e.target) || e.target.closest('.nav-link'))) {
        topNav.classList.remove('menu-active');
      }
    }, {passive: true});
    
    // Hide/show navbar on scroll
    let lastScrollTop = 0;
    const delta = 5;
    const showThreshold = 100;
    
    window.addEventListener('scroll', function() {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      
      if (Math.abs(lastScrollTop - st) <= delta) return;
      
      if (st > showThreshold) {
        topNav.classList.add('nav-up');
      } else {
        topNav.classList.remove('nav-up');
      }
      
      lastScrollTop = st;
    });
  });
})();