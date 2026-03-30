<script>
  import { onMount } from 'svelte';
  import { Menu, X, Download } from 'lucide-svelte';
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
</script>

<header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 {isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2">
        <span class="text-3xl font-black text-blue-600">Bareey</span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-8">
        <a href="/#how-it-works" class="text-gray-700 font-semibold hover:text-blue-600 transition-colors">How it Works</a>
        <a href="/#" class="text-gray-700 font-semibold hover:text-blue-600 transition-colors">About</a>
        <a href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey" target="_blank" class="px-6 py-2.5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all flex items-center gap-2">
          <Download class="w-4 h-4" /> Download
        </a>
      </nav>

      <!-- Mobile Menu Toggle -->
      <button class="md:hidden p-2 text-gray-700" on:click={toggleMenu}>
        {#if isMenuOpen}
          <X class="w-6 h-6" />
        {:else}
          <Menu class="w-6 h-6" />
        {/if}
      </button>
    </div>
  </div>

  <!-- Mobile Nav -->
  {#if isMenuOpen}
    <div class="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl py-6 px-4 space-y-4">
      <a href="/#how-it-works" class="block text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors" on:click={toggleMenu}>
        How it Works
      </a>
      <a href="/#" class="block text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors" on:click={toggleMenu}>
        About
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey" target="_blank" class="block w-full py-4 bg-blue-600 text-white text-center rounded-xl font-bold hover:bg-blue-700 transition-colors" on:click={toggleMenu}>
        Download App
      </a>
    </div>
  {/if}
</header>
