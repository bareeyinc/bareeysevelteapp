<script>
  import { onMount } from 'svelte';
  import { Menu, X, Smartphone } from 'lucide-svelte';
  import { page } from '$app/stores';

  let isMenuOpen = false;
  let isScrolled = false;

  const toggleMenu = () => isMenuOpen = !isMenuOpen;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 20;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  $: pathname = $page.url.pathname;
  $: isLandingPage = pathname === '/';

  const navLinks = [
    { name: 'Features', href: '/#features' },
    { name: 'How it Works', href: '/#how-it-works' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];
</script>

<header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 {isScrolled || !isLandingPage ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2">
        <span class="text-3xl font-logo text-blue-600">Bareey</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        {#each navLinks as link}
          <a href={link.href} class="text-sm font-semibold text-gray-600 hover:text-blue-600 transition-colors">
            {link.name}
          </a>
        {/each}
        <a href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey" target="_blank" class="px-5 py-2.5 bg-black text-white rounded-full text-sm font-bold hover:bg-gray-800 transition-all flex items-center gap-2">
          <Smartphone class="w-4 h-4" /> Get App
        </a>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button class="md:hidden p-2 text-gray-600" on:click={toggleMenu}>
        {#if isMenuOpen}
          <X />
        {:else}
          <Menu />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Nav -->
  {#if isMenuOpen}
    <div class="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-4 space-y-4 animate-in fade-in slide-in-from-top-4">
      {#each navLinks as link}
        <a href={link.href} class="block text-lg font-semibold text-gray-900" on:click={toggleMenu}>
          {link.name}
        </a>
      {/each}
      <a href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey" target="_blank" class="block w-full py-4 bg-blue-600 text-white text-center rounded-xl font-bold" on:click={toggleMenu}>
        Download App
      </a>
    </div>
  {/if}
</header>
