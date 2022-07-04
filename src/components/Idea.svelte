<script>
	import Like from '../components/Like.svelte';
	export let idea;
	function secondsToTimestamp(seconds) {
		let h = Math.floor(seconds / 3600);
		h = Math.log10(h) >= 1 ? h : '0' + h;

		let m = Math.floor((seconds % 3600) / 60);
		m = Math.log10(m) >= 1 ? m : '0' + m;

		let s = Math.floor((seconds % 3600) % 60);
		s = Math.log10(s) >= 1 ? s : '0' + s;

		return h + ':' + m + ':' + s;
	}
</script>

<a href={idea.url + '/' + secondsToTimestamp(idea.start)} target="_blank">
	<div
		class="border-slate-500 bg-lime-200  p-2 shadow-md shadow-slate-900 transition hover:bg-lime-300"
	>
		<h2 class="text-center text-xl underline underline-offset-1">{idea.idea}</h2>
		<a
			class="mx-auto my-2 block w-1/5 bg-lime-300 p-1 text-center"
			href={idea.url + '?t=' + idea.start}
			target="_blank"
		>
			Listen
		</a>
	</div>
</a>
<!-- <Like /> -->
