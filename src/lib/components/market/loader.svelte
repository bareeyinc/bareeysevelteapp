<script>
	// Set loading to false once the component is mounted
	import { onMount } from 'svelte';

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

<div style="width: {screenWidth > 500 ? 400 : screenWidth - 50}px;" class="post-loader">

	<div class="post-loader-content"></div>

	<div class="post-loader-user">
		<div class="post-loader-image"></div>

		<!--  -->

		<div class="post-loader-details">
			<div class="post-loader-name"></div>
		</div>
	</div>
</div>
<div style="width: {screenWidth > 500 ? 400 : screenWidth - 50}px;" class="post-loader">

	<div class="post-loader-content"></div>

	<div class="post-loader-user">
		<div class="post-loader-image"></div>

		<!--  -->

		<div class="post-loader-details">
			<div style="width: {screenWidth > 500 ? 350 : 250}px;" class="post-loader-name"></div>
		</div>
	</div>
</div>
<div style="width: {screenWidth > 500 ? 400 : screenWidth - 50}px;" class="post-loader">

	<div class="post-loader-content"></div>

	<div class="post-loader-user">
		<div class="post-loader-image"></div>

		<!--  -->

		<div class="post-loader-details">
			<div class="post-loader-name"></div>
		</div>
	</div>
</div>


<style>
	.post-loader{
		display: flex;
		flex-direction: column;
		background:white;
		padding:10px;
		margin:auto;
		border-radius: 5px;
		border:1px solid rgb(245, 244, 244);
	}
	
	.post-loader{
		height:400px;
	}

	.post-loader-user{
		display:flex;
		margin-top: 10px;
	}

	.post-loader-image{
		height:25px;
		width:25px;
		border-radius: 100px;
		background:rgb(244, 242, 242);
	}

	.post-loader-details{
		margin:5px 0px 0px 10px;
	}

	.post-loader-name{
		height:15px;
		width:150px;
		border-radius: 3px;
		background:rgb(244, 242, 242);
	}
	

	.post-loader-content{
		height:300px;
		width:100%;
		background:rgb(244, 242, 242);
	}
</style>