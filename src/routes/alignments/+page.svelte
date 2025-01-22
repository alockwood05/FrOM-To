<script lang="ts">
	import { onMount } from 'svelte';
	import { alignmentStore, type Alignment } from '$lib/models/Alignment';

  const alignments = alignmentStore()

</script>

<main>
	<h1>Alignments</h1>
	<ul>
		{#each $alignments as alignment}
			<li>{alignment.title}</li>
		{/each}
	</ul>
</main>

<style>
	main {
		padding: 1rem;
	}
	h1 {
		font-size: 2rem;
		margin-bottom: 1rem;
	}
	ul {
		list-style: none;
		padding: 0;
	}
	li {
		padding: 0.5rem 0;
		border-bottom: 1px solid #ccc;
	}
</style>
