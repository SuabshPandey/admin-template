<script>
	export let menuItems = [
		{ icon: '🏠', label: 'Home', link: '/' },
		{ icon: '💻', label: 'Blogs', link: '/blogs' },
		{ icon: '🌐', label: 'Publish', link: '/publish' },
		{ icon: '📦', label: 'Archive', link: '/archive' },
		{ icon: '💳', label: 'Category', link: '/category' },
		{ icon: '🛠', label: 'Settings', link: '/settings' },
		
	];
</script>

<aside class="flex h-screen w-64 flex-col bg-gray-900 text-white">
	<h1 class="mb-10 pb-4 text-xl font-bold">
		<nav class="flex-1">
			{#each menuItems as item}
				<a href={item.link} class="flex items-center gap-2 p-3 hover:border-l-3 hover:border-white">
					<span>{item.icon}</span>
					{item.label}
				</a>
			{/each}
		</nav>
	</h1>
</aside>

<style>
	aside {
		min-width: 16rem;
	}
</style>
