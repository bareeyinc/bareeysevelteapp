<script>
    import { navigating } from '$app/stores';
    import { House, TvMinimalPlay, ShoppingBag, MessageSquareDashed,Bell, Search, AlignJustify  } from 'lucide-svelte';

    // Set loading to false once the component is mounted
	import { onMount } from 'svelte';

    import { page } from '$app/stores';

    $: pathname = $page.url.pathname;

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


    let showMenu = false;

    function openMenu() {
        showMenu = true;
    }

    function closeMenu() {
        showMenu = false;
    }

</script>

<!-- Loading bar -->
<div class="loading-bar" class:visible={$navigating} />



<header class="header">
    <div class="header-app">
        <span class="norican-text">Bareey</span>
    </div>

    {#if pathname === "/check/privacy"}
    <div class="privacy-policy">
        <div class="header-link">
            <span class="svg-header"><Shield size="20" /> </span>
            <span class="link-header"> Privacy Policy</span>
        </div>
    </div>
    {:else}
        

        <div class="header-more">
            <Bell />
            <button  id="more-button" on:click={openMenu}><AlignJustify color="#000000" /></button>

            {#if showMenu}
                <div on:click={closeMenu} class="fullscreen-overlay">
                    <div class="menu-box">
                        <h2>🚧 We're still building this!</h2>
                        <p>We’re currently working on the web version of Bareey.</p>
                        <p>For the best experience, please download our app on the Play Store.</p>

                        <a style="color:blue;" href="https://play.google.com/store/apps/details?id=com.bareeyinc.bareey" target="_blank" class="playstore-btn">
                        📱 Download on Play Store
                        </a>

                    <div class="menu-links">
                            <a href="/check/privacy#terms">Terms & Conditions</a>
                            <a href="/check/privacy#privacy-policy">Privacy Policy</a>
                            <a href="/check/privacy#about-bareey">About App</a>
                    </div>
                    </div>
                </div>
            {/if}
        </div>

    {/if}

</header>

<nav class="bottom-nav">
    <a href="/" class:selected={"/" === '/'} style="{pathname === '/' ? 'border-bottom:1px solid black;padding:0px 10px 5px 10px;font-weight:bold;':''}"><House color="#000000" /></a>
    <a href="/chats" class:selected={"/chats" === '/chats'} style="{pathname === '/chats' ? 'border-bottom:1px solid black;padding:0px 10px 5px 10px;font-weight:bold;':''}"><MessageSquareDashed color="#000000" /></a>
    <a href="/stream" class:selected={"/stream" === '/stream'} style="{pathname === '/stream' ? 'border-bottom:1px solid black;padding:0px 10px 5px 10px;font-weight:bold;':''}"><TvMinimalPlay color="#000000" /></a>
    <a href="/market" class:selected={"/market" === '/market'} style="{pathname === '/market' ? 'border-bottom:1px solid black;padding:0px 10px 5px 10px;font-weight:bold;':''}"><ShoppingBag color="#000000" /></a>
    
</nav>

<style>
   .header {
        position: sticky;
        top: 0;
        z-index: 1000;
        background-color: white;
        padding:0px 10px 5px 10px;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom:1px solid rgb(239, 237, 237);
    }

    .norican-text {
        font-family: 'Norican', cursive;
        font-size: 32px;
        letter-spacing: 1.5px;
    }

    .header-more button{
        background-color: white;
        border:1px solid rgb(213, 210, 210);
        border-radius: 5px;
    }

    .bottom-nav {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-around;
        background: #fff;
        border-top: 1px solid #ccc;
        padding: 0.5rem 0;
        z-index: 1000;
    }


    .fullscreen-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.8); 
        z-index: 1000;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .menu-box {
        display:flex;
        flex-direction: column;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        width: 80%;
        max-width: 400px;
    }

    .menu-box h2 {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    .menu-box ul {
        list-style: none;
        padding: 0;
    }

    .menu-box li {
        margin: 1rem 0;
        border-bottom: 1px solid #444;
        padding-bottom: 0.5rem;
    }

    .menu-links{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
    }

    .menu-links a {
        text-decoration: none;
        padding-right: 5px;
        font-size: 13px;
    }


    
</style>