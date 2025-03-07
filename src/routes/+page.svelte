<script>
	let posts = [
		{
			title: 'Exploring Cryptography Projects with Rust and Discrete Mathematics',
			date: 'February 11, 2025',
			tags: ['Cryptography', 'Rust', 'Discrete Mathematics']
		},
		{
			title: 'Rust Programming: Balancing OOP and FP Paradigms',
			date: 'January 12, 2025',
			tags: ['Rust', 'Programming', 'Guide']
		},
		{
			title: 'Rust Smart Pointer',
			date: 'January 12, 2025',
			tags: ['Rust', 'Memory Management', 'Programming']
		},
		{
			title: 'Rust Programming: Balancing OOP and FP Paradigms',
			date: 'January 12, 2025',
			tags: ['Rust', 'Programming', 'Guide']
		},
		{
			title: 'Rust Smart Pointer',
			date: 'January 12, 2025',
			tags: ['Rust', 'Memory Management', 'Programming']
		},
		{
			title: 'Rust Programming: Balancing OOP and FP Paradigms',
			date: 'January 12, 2025',
			tags: ['Rust', 'Programming', 'Guide']
		},
		{
			title: 'Rust Smart Pointer',
			date: 'January 12, 2025',
			tags: ['Rust', 'Memory Management', 'Programming']
		},
		{
			title: 'Rust Programming: Balancing OOP and FP Paradigms',
			date: 'January 12, 2025',
			tags: ['Rust', 'Programming', 'Guide']
		},
		{
			title: 'Rust Smart Pointer',
			date: 'January 12, 2025',
			tags: ['Rust', 'Memory Management', 'Programming']
		},
		{
			title: 'Rust Programming: Balancing OOP and FP Paradigms',
			date: 'January 12, 2025',
			tags: ['Rust', 'Programming', 'Guide']
		},
		{
			title: 'Rust Smart Pointer',
			date: 'January 12, 2025',
			tags: ['Rust', 'Memory Management', 'Programming']
		},
		{
			title: 'Rust Programming: Balancing OOP and FP Paradigms',
			date: 'January 12, 2025',
			tags: ['Rust', 'Programming', 'Guide']
		},
		{
			title: 'Rust Smart Pointer',
			date: 'January 12, 2025',
			tags: ['Rust', 'Memory Management', 'Programming']
		}
	];
</script>

<div
	class="shadow-3xl flex flex-col items-center justify-center border bg-gray-950 py-10 text-white"
>
	<img src="/images/suraj_pp.jpg" alt="Profile" class="mb-4 h-26 w-26 rounded-full" />
	<h1 class="text-3xl font-bold text-blue-400">Suraj Chhetry</h1>
	<p class="text-sm text-gray-400">Fintech | Payments | Distributed System | Rust | Java</p>
</div>

<div class="">
	<div class="">
		<h1 class="m-4 text-center text-3xl uppercase">Recent Posts</h1>
		<div class="divider mb-2 border"></div>
	</div>
	<div
		class="post_lists max-w-8xl mx-auto max-h-screen overflow-y-scroll px-5 shadow-2xl shadow-blue-100"
	>
		{#each posts as post}
			<div class="border-b border-gray-700 py-4">
				<h1 class="text-lg font-semibold text-blue-950">{post?.title}</h1>
				<p class="text-sm text-gray-400">{post.date} . {post.tags.join(', ')}</p>
			</div>
		{/each}
	</div>
</div>

<style>
	/* Clean, minimal scrollbar */
	.post_lists::-webkit-scrollbar {
		width: 3px; /* Thinner scrollbar */
	}

	.post_lists::-webkit-scrollbar-track {
		background: transparent; /* No background for a cleaner look */
	}

	.post_lists::-webkit-scrollbar-thumb {
		background: rgba(100, 100, 100, 0.5); /* Subtle dark gray with transparency */
		border-radius: 6px; /* Rounded edges */
		transition: background 0.3s ease-in-out;
	}

	.post_lists::-webkit-scrollbar-thumb:hover {
		background: rgba(100, 100, 100, 0.8); /* Slightly darker on hover */
	}
</style>
