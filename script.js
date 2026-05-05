
    const navbar = document.getElementById('siteNavbar');
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuIcon = document.getElementById('menuIcon');

    function updateNavbar() {
      const menuOpen = mobileMenu && !mobileMenu.classList.contains('hidden');

      if (window.scrollY > 12 || menuOpen) {
        navbar.classList.remove('bg-transparent', 'border-transparent');
        navbar.classList.add('bg-primary/80', 'backdrop-blur-md', 'border-gray-800');
      } else {
        navbar.classList.remove('bg-primary/80', 'backdrop-blur-md', 'border-gray-800');
        navbar.classList.add('bg-transparent', 'border-transparent');
      }
    }

    function setMenuIcon(isOpen) {
      menuIcon.innerHTML = isOpen
        ? '<path d="M6 6L18 18M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
        : '<path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';
    }

    menuBtn?.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.contains('hidden');

      mobileMenu.classList.toggle('hidden');
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      setMenuIcon(isOpen);
      updateNavbar();
    });

    mobileMenu?.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
        setMenuIcon(false);
        updateNavbar();
      });
    });

    updateNavbar();
    window.addEventListener('scroll', updateNavbar);

    const navLinks = document.querySelectorAll('.nav-link');

    function activateNavByHash() {
      const currentHash = window.location.hash;

      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === currentHash;

        link.classList.toggle('active', isActive);
        link.classList.toggle('text-white', isActive);
        link.classList.toggle('text-gray-400', !isActive);
      });
    }

    function activateNavByScroll() {
      if (window.location.hash) {
        activateNavByHash();
        return;
      }

      const workSection = document.querySelector('#work');
      if (!workSection) return;

      const workLink = document.querySelector('.nav-link[href="#work"]');
      const workTop = workSection.offsetTop - 140;

      navLinks.forEach((link) => {
        const isActive = link === workLink && window.scrollY >= workTop;

        link.classList.toggle('active', isActive);
        link.classList.toggle('text-white', isActive);
        link.classList.toggle('text-gray-400', !isActive);
      });
    }

    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        setTimeout(activateNavByHash, 0);
      });
    });

    window.addEventListener('hashchange', activateNavByHash);
    window.addEventListener('scroll', activateNavByScroll);

    if (window.location.hash) {
      activateNavByHash();
    } else {
      activateNavByScroll();
    }

    document.getElementById('logoHome')?.addEventListener('click', (event) => {
    event.preventDefault();

    history.pushState('', document.title, window.location.pathname);

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });