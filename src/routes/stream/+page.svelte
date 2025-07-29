

<script>
    
    export let data;
	let loading = true;

    // Set loading to false once the component is mounted
	import { onMount } from 'svelte';

    import { goto } from '$app/navigation';

    import Hls from 'hls.js';

    // icons
	import {RefreshCcw, Bookmark,MessageCircle,Heart, Ellipsis } from 'lucide-svelte';
	
    import { formatPostDate } from '$lib/components/feed/datetime.js';
	import { getFullname } from '$lib/components/feed/name.js';
    import LoadFeed from '$lib/components/stream/loader.svelte';

    // Reactive variable
	let screenWidth = 0;

    // Optional: show reload animation if needed
    function retry() {
        loading = true;
        goto(location.pathname, { invalidateAll: true }); // re-trigger the `load` function
    }

	onMount(() => {
		loading = false;

        

        // Wait for DOM to load
		setTimeout(() => {
			document.querySelectorAll('video[data-hls]').forEach(video => {
				const videoSrc = video.getAttribute('data-hls');

				if (Hls.isSupported()) {
					const hls = new Hls();
					hls.loadSource(videoSrc);
					hls.attachMedia(video);
				} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
					video.src = videoSrc;
				} else {
					console.error("HLS not supported");
				}
			});
		}, 100);

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

<div class="page-wrapper">
    {#if loading}
        <LoadFeed />
        
    {:else if data.error}
        <!-- <p style="color: red;">Error: {data.error}</p> -->

        <div class="div-seperator"></div>
        <div class="error">
            <div class="error-statement">
                <span>Oops, Something went wrong.</span>
            </div>

            <div on:click={retry} class="error-refresh">
                <pan class="refresh-svg"><RefreshCcw /></pan>
                <pan class="refresh-svg">Refresh Page</pan>
            </div>
        </div>
        
    {:else if data.data.length === 0}
        <p>No posts yet.</p>
    {:else}
        <div style="height:20px;"></div>
        {#each data.data as ij}
            {#each Object.entries(ij) as [key, value]}
                <div style="width: {screenWidth > 500 ? 400 : screenWidth - 50}px;" class="stream-info">
                    <div class="stream">
                        <video data-hls={value["stream"]} controls width="100%" height="auto"></video>
                    </div>
					<dic class="stream-user-all">
						<div class="stream-user">
							{#if value["user"]["profilepic"] == null}
								<div class="stream-picture">
									<span>{value["user"]["username"][0]}</span>
								</div>
							{:else}
								<div class="stream-image">
									<span>{@html `<img style="height:40px;width:40px;border-radius:100px;object-fit: cover;" src="${value["user"]["profilepic"]}" />` }</span>
								</div>
							{/if}
							
		
							<div class="stream-user-details">
								<div class="stream-user-details-name">
									<span>{getFullname(value)}</span>
								</div>
								<div class="stream-user-details-date">
									<div class="stream-date">
                                        <span>{formatPostDate(value["date"])}</span>
                                    </div>
                                    <div style="padding-right: {screenWidth < 400 ? 0 : 10}px;" class="stream-svg">
                                        <span class="stream-react-svg"><Heart color="#000000" size="18" /></span>
                                        {#if screenWidth > 400}
                                            <span class="stream-react-title">Comment</span>
                                        {/if}
                                    </div>
                                    <div class="stream-svg">
                                        <span class="stream-react-svg"><MessageCircle color="#000000" size="18" /></span>
                                        
                                        {#if screenWidth > 400}
                                            <span class="stream-react-title">Like</span>
                                        {/if}
                                    </div>
								</div>
								
							</div>

						</div>
						<div class="stream-user-elipsis">
							<Ellipsis color="#000000" />
						</div>
					</dic>
                </div>
            {/each}
        {/each}
    {/if}
</div>



<style global>

    .error{
        margin-top: 20px;
        margin:auto;
    }

    .div-seperator{
        height:50px;
    }

    .error-statement{
        width: fit-content;
        margin:auto;
        font-size: 25px;
    }

    .error-refresh{
        display:flex;
        justify-content: center;
        width: 250px;
        margin:auto;
        margin-top:20px;
        background:white;
        border-radius: 25px;
        padding: 10px;
    }

    

    .refresh-svg{
        position:relative;
        top:5px;
        padding-right:5px;
    }

	.page-wrapper {
	  background-color: #f9f9f9; /* or any color you want */
	  min-height: 100vh;
	  font-family: 'Inter', 'Poppins', 'Helvetica Neue', sans-serif;
	}

	.stream-info{
		display: flex;
		flex-direction: column;
		background:white;
		padding:10px;
		width:400px;
		margin:auto;
		border-radius: 5px;
		border:1px solid rgb(245, 244, 244);
	}

    .stream-user-all{
        display:flex;
        justify-content: space-between;
        margin-top:10px;
    }

    .stream-user{
        display:flex;
    }

    .stream-user-details{
        margin-left:10px;
    }

    .stream-user-details-name{
        font-weight:bold;
    }

    .stream-user-details-date{
        display:flex;
        font-size: 14px;
        margin-top:4px;
    }

    .stream-svg{
        padding: 0px 10px 0px 10px;
    }

    .stream-svg{
        display:flex;
    }

    .stream-react-title{
        padding-left: 5px;
    }
</style>