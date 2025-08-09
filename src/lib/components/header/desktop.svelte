<script>
    import { navigating } from '$app/stores';
    import { Shield,Search, AlignJustify ,Bell, House, MessageSquareDashed, TvMinimalPlay, ShoppingBag} from 'lucide-svelte';

   
    import { page } from '$app/stores';

    $: pathname = $page.url.pathname;


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
    {:else if pathname === "/settings/remove"}
    <div class="privacy-policy">
        <div class="header-link">
            <span class="svg-header"><Shield size="20" /> </span>
            <span class="link-header"> Account Settings</span>
        </div>
    </div>
    {:else}
        <div class="header-navs">
            <a href="/" class:selected={"/" === '/'} style="{pathname === '/' ? 'border-bottom:1px solid black;padding-bottom:5px;font-weight:bold;':''}">
                <div class="header-link">
                    <span class="svg-header"><House size="18" color="#000000" /> </span>
                    <span class="link-header"> Feed</span>
                </div>
            </a>
            <div class="header-seperator"></div>
            <a href="/chats" class:selected={"/chats" === '/chats'}  style="{pathname === '/chats' ? 'border-bottom:1px solid black;padding-bottom:5px;font-weight:bold;':''}">
                <div class="header-link">
                    <span class="svg-header"><MessageSquareDashed color="#000000" size="18" /> </span>
                    <span class="link-header"> Chats</span>
                </div>
            </a>
        </div>

        <div class="header-search">
            <Search  size={17} color="#c0bfbc"/>
            <div style="width:10px;"></div>
            <input type="text" placeholder="Search">
        </div>


        <div class="header-navs">
            <a href="/stream" class:selected={"/stream" === '/stream'}  style="{pathname === '/stream' ? 'border-bottom:1px solid black;padding-bottom:5px;font-weight:bold;':''}">
                <div class="header-link">
                    <span class="svg-header"><TvMinimalPlay color="#000000" size="18" /> </span>
                    <span class="link-header"> Stream</span>
                </div>
            </a>
            <div class="header-seperator"></div>
            <a href="/market" class:selected={"/market" === '/market'}  style="{pathname === '/market' ? 'border-bottom:1px solid black;padding-bottom:5px;font-weight:bold;':''}">
                <div class="header-link">
                    <span class="svg-header"><ShoppingBag color="#000000" size="18" /> </span>
                    <span class="link-header"> Market</span>
                </div>
            </a>
        </div>

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



<style>
    html, body {
        margin: 0;
        padding: 0;
    }

    .loading-bar {
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        width: 0%;
        background-color: #007aff; /* or any brand color */
        transition: width 0.3s ease-in-out;
        z-index: 2000;
        opacity: 0;
    }

    .loading-bar.visible {
        width: 100%;
        opacity: 1;
        animation: loading-bar-pulse 1s infinite ease-in-out;
    }

    @keyframes loading-bar-pulse {
        0% {
            width: 0%;
        }
        50% {
            width: 60%;
        }
        100% {
            width: 100%;
        }
    }


    .norican-text {
        font-family: 'Norican', cursive;
        font-size: 32px;
        letter-spacing: 1.5px;
    }

    .header {
        font-family: 'Inter', sans-serif;
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

    .header-navs a{
        text-decoration: none;
        color:black;
    }

    .header-navs{
        display:flex;
    }

    .header-seperator{
        width:20px;
    }

    .header-link{
        diplay:flex;
    }

    .svg-header{
        position: relative;
        top:2px;
    }

    .header-search{
        display: flex;
        padding: 10px;
        border-radius: 20px;
        background-color: rgb(235, 233, 233);
    }

    .header-search input {
        border: white;
        background-color: rgb(235, 233, 233);
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