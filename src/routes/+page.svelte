<script>
	export let data;
	let loading = true;

	// icons
	import {Bookmark,MessageCircle,Forward, ThumbsUp, Ellipsis } from 'lucide-svelte';
		
	// Set loading to false once the component is mounted
	import { onMount } from 'svelte';

	import { ShowMedia } from '$lib/components/feed/media.js';
    import { formatPostDate } from '$lib/components/feed/datetime.js';
	import { getFullname } from '$lib/components/feed/name.js';
	import LoadFeed from '$lib/components/feed/loader.svelte';

	let screenWidth = 0;


	
	onMount(() => {
		loading = false;

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
				<div style="width: {screenWidth > 500 ? 400 : screenWidth - 50}px;" class="post-info">
					<dic class="post-user-all">
						<div class="post-user">
							{#if value["user"]["profilepic"] == null}
								<div class="post-picture">
									<span>{value["user"]["username"][0]}</span>
								</div>
							{:else}
								<div class="post-image">
									<span>{@html `<img style="height:40px;width:40px;border-radius:100px;object-fit: cover;" src="http://files.bareey.com/${value["user"]["profilepic"]}" />` }</span>
								</div>
							{/if}
							
		
							<div class="post-user-details">
								<div class="post-user-details-name">
									<span>{getFullname(value)}</span>
								</div>
								<div class="post-user-details-date">
									<span>{formatPostDate(value["date"])}</span>
								</div>
								
							</div>

						</div>
						<div class="post-user-elipsis">
							<Ellipsis color="#000000" />
						</div>
					</dic>

					<!--  -->

					{#if value["postdetails"]["writeup"] != null && value["postdetails"]["writeup"].trim().length > 0 }
						<dic class="post-write">
							<span>{value["postdetails"]["writeup"]}</span>
						</dic>
					{/if}

					{@html ShowMedia(value, screenWidth)}

					<div class="post-reactions">
						<div class="post-reactions-feed">
							<div class="post-reaction-svg">
								<span><ThumbsUp color="#000000" /></span>
								{#if value["likes"] > 0 }
									<span class="counter" style="margin:6px 0px 0px 4px;">{value["likes"]}</span>
								{/if}
							</div>
							<div class="post-reaction-svg">
								<span><MessageCircle color="#000000" /></span>
								{#if value["comments"] > 0 }
									<span class="counter" style="margin:6px 0px 0px 4px;">{value["comments"]}</span>
								{/if}
							</div>
							<div class="post-reaction-svg">
								<span><Forward color="#000000" /></span>
								{#if value["shares"] > 0 }
									<span class="counter" style="margin:6px 0px 0px 4px;">{value["shares"]}</span>
								{/if}
							</div>
						</div>
						<div class="post-reaction-svg-book">
							<span><Bookmark color="#000000" /></span>
							{#if value["bookmarks"] > 0 }
								<span class="counter" style="margin:6px 0px 0px 4px;">{value["bookmarks"]}</span>
							{/if}
						</div>
					</div>
				</div>
			{/each}
		{/each}
	{/if}
</div>


<style>
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
	  /* Example for CSS or inline in Svelte */
	  font-family: 'Inter', sans-serif;
	}

	.post-info{
		display: flex;
		flex-direction: column;
		
		background:white;
		padding:10px;
		margin:auto;
		border-radius: 5px;
		border:1px solid rgb(245, 244, 244);
	}


	

	.post-user-all{
		display: flex;
		justify-content: space-between;
	}

	.post-user{
		display:flex;
	}

	.post-image img{
		height:40px;
		width:40px;
	}

	.post-picture{
		height:40px;
		width:40px;
		background:black;
		color:white;
		border-radius: 100px;
		text-align: center;
	}

	.post-picture span{
		font-size: 25px;
		font-weight: bold;
	}

	.post-user-details{
		margin-left:10px;
	}

	.post-user-details-name{
		font-weight: bold;
	}

	.post-user-details-date{
		margin-top: 2px;
		font-size: 12px;
	}

	.post-write{
		margin-top: 10px;
	}

	

	.img-alone img {
		width: 100%;
		height: auto;
		border-radius: 8px;
	}

	.img-together {
		display: flex;
		gap: 4px;
	}

	.img-together img {
		flex: 1;
		object-fit: cover;
		width: 50%;
		border-radius: 8px;
	}

	.image-big img {
		width: 100%;
		object-fit: cover;
		border-radius: 8px;
	}

	.image-big-together {
		display: flex;
		gap: 4px;
		margin-top: 4px;
	}

	.image-big-together img {
		flex: 1;
		width: 50%;
		object-fit: cover;
		border-radius: 8px;
	}

	.image-sizing {
		display: flex;
		gap: 4px;
		margin-top: 4px;
	}

	.image-sizing img {
		flex: 1;
		width: 50%;
		object-fit: cover;
		border-radius: 8px;
	}

	.extra-image-container {
		position: relative;
		width: 50%;
	}

	.extra-image-container img {
		width: 100%;
		object-fit: cover;
		border-radius: 8px;
	}

	.extra-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.6);
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 24px;
		font-weight: bold;
		border-radius: 8px;
	}

	.post-reactions{
		display:flex;
		justify-content: space-between;
		margin-top: 10px;
	}

	.post-reactions-feed{
		display:flex;
	}

	.post-reaction-svg{
		padding-right: 20px;
		display:flex;
	}

</style>