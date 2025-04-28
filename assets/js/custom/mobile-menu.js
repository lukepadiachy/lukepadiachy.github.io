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
      
      const isActive = topNav.classList.toggle('menu-active');
      
      // Toggle body class to prevent scrolling when menu is open
      document.body.classList.toggle('menu-open', isActive);
      
      // If menu is active, add event listener to close on document click
      if (isActive) {
        // Use setTimeout to delay the addition of the event listener
        // This prevents immediate closure of the menu
        setTimeout(() => {
          document.addEventListener('click', closeMenuOnClickOutside);
          document.addEventListener('touchstart', closeMenuOnClickOutside, {passive: true});
        }, 10);
      } else {
        document.removeEventListener('click', closeMenuOnClickOutside);
        document.removeEventListener('touchstart', closeMenuOnClickOutside);
      }
    }
    
    // Function to close menu when clicking outside
    function closeMenuOnClickOutside(e) {
      // Only close if clicking outside the menu
      if (topNav.classList.contains('menu-active') && 
          !e.target.closest('.nav') && 
          !e.target.closest('.menu-toggle')) {
        toggleMenu();
      }
    }
    
    // Mobile-specific handling for nav links
    const navLinks = topNav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      // Skip if it's the mode toggle button
      if (link.id === 'mode-toggle' || link.closest('#mode-toggle')) {
        return;
      }
      
      // Clear any existing listeners
      const newLink = link.cloneNode(true);
      link.parentNode.replaceChild(newLink, link);
      
      // For regular links, handle them specially on mobile
      if (newLink.getAttribute('href')) {
        const href = newLink.getAttribute('href');
        
        // Touch handling specifically for mobile
        newLink.addEventListener('touchend', function(e) {
          if (window.innerWidth <= 849) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close the menu
            topNav.classList.remove('menu-active');
            document.body.classList.remove('menu-open');
            
            // Slight delay before navigation to allow menu to close visually
            setTimeout(() => {
              window.location.href = href;
            }, 100);
          }
        }, {passive: false});
      }
    });
    
    // Multiple events for better device compatibility
    
    // 1. Normal click event (works on most devices)
    menuToggle.addEventListener('click', toggleMenu);
    
    // 2. Touchstart event (better for mobile)
    menuToggle.addEventListener('touchstart', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleMenu(e);
    }, {passive: false});
    
    // 3. Touchend event (prevents ghost clicks)
    menuToggle.addEventListener('touchend', function(e) {
      e.preventDefault();
      e.stopPropagation();
    }, {passive: false});
    
    // Hide/show navbar on scroll
    let lastScrollTop = 0;
    const delta = 5;
    const showThreshold = 100;
    
    window.addEventListener('scroll', function() {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      
      // Don't hide navbar when menu is open
      if (topNav.classList.contains('menu-active')) {
        return;
      }
      
      if (Math.abs(lastScrollTop - st) <= delta) return;
      
      if (st > showThreshold) {
        topNav.classList.add('nav-up');
      } else {
        topNav.classList.remove('nav-up');
      }
      
      lastScrollTop = st;
    });
    
    // Add active state indicator for touch feedback
    document.addEventListener('touchstart', function(e) {
      const navLink = e.target.closest('.nav-link');
      if (navLink) {
        navLink.classList.add('touch-active');
      }
    }, {passive: true});
    
    document.addEventListener('touchend', function(e) {
      const activeLinks = document.querySelectorAll('.nav-link.touch-active');
      activeLinks.forEach(link => link.classList.remove('touch-active'));
    }, {passive: true});
  });
})();