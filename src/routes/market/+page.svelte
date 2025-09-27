<script>
    export let data;
	let loading = true;

    import { goto } from '$app/navigation';

    // Set loading to false once the component is mounted
	import { onMount } from 'svelte';
    
    // icons
	import {Heart, EllipsisVertical } from 'lucide-svelte';
	

    import { formatPostDate } from '$lib/components/feed/datetime.js';
	import { getFullname } from '$lib/components/feed/name.js';

    import LoadFeed from '$lib/components/market/loader.svelte';

    let screenWidth = 0;

    // Optional: show reload animation if needed
    function retry() {
        loading = true;
        goto(location.pathname, { invalidateAll: true }); // re-trigger the `load` function
    }
	
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


    function next(index,media, mediaList) {

        
        let counter= index +1;

        if(mediaList.length - 1 == index) {
            counter = 0;
        }

        for (let i = 0; i < mediaList.length; i++) {
            let id = mediaList[i].split("/")[mediaList[i].split("/").length -1].split(".")[0];

            if(i == counter){
                document.getElementById(id).style.display="block";
            }else{
                document.getElementById(id).style.display="none";
            }   
        }
    }



    function prev(index,media, mediaList) {

                
        let counter= index == 0 ? mediaList.length - 1 : index - 1;


        for (let i = 0; i < mediaList.length; i++) {
            let id = mediaList[i].split("/")[mediaList[i].split("/").length -1].split(".")[0];

            if(i == counter){
                document.getElementById(id).style.display="block";
            }else{
                document.getElementById(id).style.display="none";
            }   
        }
    }

    function MarketPrice(data, edit){
        let example = JSON.parse(edit);

        if(example != null){
            return `
            <div style="padding:5px 0px 5px 0px;display:flex;justify-content:space-between;">
                <span style="font-size:13px;">${example[data]["symbol"]+example[data]["price"]}</span>
                <button style="background:blue;border:blue;border-radius:10px;padding:4px 5px 4px 5px;color: white;padding: 4px 10px 4px 10px;">Buy</button>
            </div>
            `;
        }
       
    }
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
        <div style="width: {screenWidth > 500 ? 400 : screenWidth - 10}px;" class="main-market">
            {#each data.data as ij}
                {#each Object.entries(ij) as [key, value]}
                    <div class="market-info">

                        <div class="market-top">
                            <div class="market-react">
                                <span><Heart  /></span>
                            </div>

                            <div class="market-more">
                                <span><EllipsisVertical /></span>
                            </div>
                        </div>

                       <!-- Media List -->
                       {#if value["media"] && value["media"]["files"] && value["media"]["files"]["blob"]}
                           {#each value["media"]["files"]["blob"] as files, i}
                              {#if i > 0}
                                <div style="display:none;" class="market-image-unique" id="{files.split("/")[files.split("/").length -1].split(".")[0]}">
                                    <button class="btn-prev-market" on:click={() => {
                                        prev(i,files.split("/")[files.split("/").length -1].split(".")[0], value["media"]["files"]["blob"]);
                                    }}>◀</button>
                                    <span><img src="http://files.bareey.com/{files}" style="width:100%;height:170px;" /></span>
                                    <button class="btn-next-market" on:click={() => {
                                        next(i,files.split("/")[files.split("/").length -1].split(".")[0], value["media"]["files"]["blob"]);
                                    }}>▶</button>

                                    <div>
                                        {@html MarketPrice(files.split("/")[files.split("/").length -1], value["edit"])}
                                    </div>
                                </div>
                               {:else}
                                <div id="{files.split("/")[files.split("/").length -1].split(".")[0]}" class="market-image-unique">
                                    <button class="btn-prev-market" on:click={() => {
                                        prev(i,files.split("/")[files.split("/").length -1].split(".")[0], value["media"]["files"]["blob"]);
                                    }}>◀</button>
                                    <span><img src="http://files.bareey.com/{files}" style="width:100%;height:170px;" /></span>
                                    <button class="btn-next-market" on:click={() => {
                                        next(i,files.split("/")[files.split("/").length -1].split(".")[0], value["media"]["files"]["blob"]);
                                    }}>▶</button>
                                    <div>
                                        {@html MarketPrice(files.split("/")[files.split("/").length -1], value["edit"])}
                                    </div>
                                </div>
                               {/if}
                           
                           {/each}
                       {/if}
                        

                        <div class="market-user-details">
                            {#if value["user"]["profilepic"] == null}
                                <div class="market-picture">
                                    <span>{value["user"]["username"][0]}</span>
                                </div>
                            {:else}
                                <div class="market-image">
                                    <span>{@html `<img style="height:22px;width:22px;border-radius:100px;object-fit: cover;" src="http://files.bareey.com/${value["user"]["profilepic"]}" />` }</span>
                                </div>
                            {/if}
    
                            <div style="white-space: nowrap;overflow: hidden;text-overflow: ellipsis;width:100px;" class="market-name">
                                <span >{value["shops"]["name"]}</span>
                            </div>
                        </div>
          
    
                    </div>
                {/each}
            {/each}
        </div>
    {/if}
</div>


<style global>

    .page-wrapper {
        background-color: #f9f9f9; /* or any color you want */
        min-height: 100vh;
        /* Example for CSS or inline in Svelte */
        font-family: 'Inter', 'Poppins', 'Helvetica Neue', sans-serif;
    }
	.main-market{
        display:flex;
        flex-wrap: wrap;
        margin: auto;
    }

	.market-info{
		display: flex;
		flex-direction: column;
		background:white;
        box-shadow: 2px 2px 10px rgba(221, 218, 218, 0.3);
		padding:10px;
		width:50%;
		margin:auto;
		border-radius: 5px;
		border:1px solid rgb(245, 244, 244);
	}

    .market-top{
        display:flex;
        justify-content: space-between;
    }

    .market-image-unique{
        position: relative;
        margin-top:5px;
    }

    .btn-prev-market{
        position: absolute;
        left: 5px;
        bottom:50%;
    }

    .btn-next-market{
        position: absolute;
        right: 5px;
        bottom:50%;
    }

    .market-user-details{
        display:flex;
    }


    .market-picture{
		height:22px;
		width:22px;
		background:black;
		color:white;
		border-radius: 100px;
		text-align: center;
	}

    .market-picture span{
		font-size: 15px;
		font-weight: bold;
	}

    .market-name{
        margin-left:10px;
        
    }
</style>