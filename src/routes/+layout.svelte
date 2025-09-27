<script>
  import Header from '$lib/components/header/index.svelte';
  import Footer from '$lib/components/footer/mobile.svelte';
</script>

<Header />


<main>
  <slot />
</main>

<Footer />

<style>
  body{
    font-family: 'Inter', sans-serif;

  }
  .selected {
    font-weight: bold;
    text-decoration: underline;
  }

  .loading-bar {
    height: 4px;
    background: dodgerblue;
    transition: opacity 0.2s ease;
    opacity: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 9999;
  }

  .loading-bar.visible {
    opacity: 1;
    animation: loading 2s linear infinite;
  }

  @keyframes loading {
    0% { width: 0%; }
    50% { width: 60%; }
    100% { width: 100%; }
  }
</style>
