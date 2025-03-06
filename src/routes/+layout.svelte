<script lang="ts">
	import Sidebar from '$lib/components/Sidebar.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex h-screen">
	<Sidebar />

	<div class="flex flex-1 flex-col bg-gray-100">
		<Navbar />

		<div class="flex-1 overflow-auto bg-gray-100 p-6">
			{@render children()}
		</div>
	</div>
</div>
