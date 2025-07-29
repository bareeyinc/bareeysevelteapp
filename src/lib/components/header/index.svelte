<!-- lib/components/header/index.svelte -->


<script>
    import { onMount } from 'svelte';
    import Desktop from './desktop.svelte';
    import Mobile from './mobile.svelte';
  
    let isMobile = false;
  
    function checkMobile() {
      isMobile = window.innerWidth < 768;
    }

    let screenWidth = 0;

    onMount(() => {
      
      // Safe to use window here
      screenWidth = window.innerWidth;

      const updateWidth = () => {
      screenWidth = window.innerWidth;
      };

      window.addEventListener('resize', updateWidth);

      return () => {
      window.removeEventListener('resize', updateWidth);
      };
    });
  
    
  </script>
  
  {#if screenWidth < 768}
    <Mobile />
  {:else}
    <Desktop />
  {/if}


  
  