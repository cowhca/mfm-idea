<script context="module">
	export async function load({ fetch }) {
		let offset = '';
		let done = false;
		let toReturn = [];

		while (!done) {
			const res = await fetch(
				`https://api.airtable.com/v0/appjXc4mfkyd0bgCA/Ideas?api_key=keyoFYTwLB0vomKLC&offset=${offset}`
			);
			let data = await res.json();
			toReturn.push(...data.records);
			if (data.hasOwnProperty('offset')) {
				offset = data.offset;
			} else {
				done = true;
			}
		}
		return {
			props: { ideas: toReturn }
		};
	}
</script>

<script>
	import Idea from '../components/Idea.svelte';

	export let ideas;
	let idea;
	let numIdeas = ideas.length;
	function getRandomIdea() {
		idea = ideas[Math.floor(Math.random() * numIdeas)].fields;
	}
	getRandomIdea();
</script>

<svelte:head>
	<title>MFM Ideas</title>
</svelte:head>

<svelte:window
	on:keydown={(e) => {
		if (e.key === ' ') {
			setTimeout(getRandomIdea, 100);
		} else if (e.key === 'Enter') {
			window.open(idea.url + '?t=' + idea.start, '_blank');
			console.log('Enter');
		}
	}}
/>

<div
	class="absolute left-1/2 top-1/2 flex w-11/12 max-w-screen-lg -translate-x-1/2 -translate-y-1/2 flex-col gap-3 bg-slate-50 p-6 sm:w-10/12"
>
	<a href="https://www.mfmpod.com" target="_blank">
		<h1 class="bg-mfm-yellow p-2 text-center text-4xl font-bold">My First Million Ideas</h1>
	</a>
	<Idea {idea} />
	<div class="flex justify-center gap-2">
		<button class="rounded-sm bg-mfm-yellow p-3" on:click={getRandomIdea}>New Idea</button>
		<a
			class="rounded-sm bg-slate-200 p-3"
			href="https://airtable.com/shrSBVsEOuVKyHiDL"
			target="_blank">Add Idea</a
		>
	</div>
</div>
<a
	target="_blank"
	rel="noopener"
	style="height: 40px;"
	class="fixed right-0 bottom-0 flex flex-row items-center rounded-tl border-t border-l border-slate-400 tracking-widest text-gray-600"
	href="https://connorcallahan.info/"
>
	<img style="height:25px" class="m-1 rounded-full" src="profile_pic.png" alt="Me smiling" />
	<p style="font-size: 10px;" class="pr-1">by Connor Callahan</p>
</a>
