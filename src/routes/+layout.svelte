<script>
  import '../app.css';
  import Header from '$lib/components/header/index.svelte';
  import Footer from '$lib/components/footer/mobile.svelte';
</script>

<Header />


<main>
  <slot />
</main>

<Footer />

<style>
  .selected {
    @apply font-bold underline;
  }
</style>
