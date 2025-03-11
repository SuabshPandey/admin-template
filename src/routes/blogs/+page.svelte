<script>
	import { goto } from '$app/navigation';

	let blogs = [
		{
			id: 1,
			title: 'The Art of Minimalism',
			description: 'Discover how minimalism can improve your lifestyle and mental clarity.',
			author: 'Subash Pandey',
			authorImage: '/images/authors/subash_pp.jpg',
			image: '/images/network1.jpg'
		},
		{
			id: 2,
			title: 'Mastering Remote Work',
			description: 'Learn the best strategies for staying productive while working remotely.',
			author: 'Jane Smith',
			authorImage: '/images/authors/suraj_pp.jpg',
			image: '/images/image1.jpg'
		},
		{
			id: 3,
			title: 'Healthy Eating on a Budget',
			description: 'Tips for maintaining a nutritious diet without overspending.',
			author: 'Emily Johnson',
			authorImage: '/images/authors/subash_pp.jpg',
			image: '/images/tech4.jpg'
		},
		{
			id: 4,
			title: 'Exploring the Cosmos',
			description: "A beginner's guide to understanding the vastness of space.",
			author: 'Mark Brown',
			authorImage: '/images/authors/suraj_pp.jpg',
			image: '/images/network2.jpg'
		}
	];
</script>

<div class="blog-container max-w-10xl mx-auto p-1">
	<div class="flex items-center justify-between rounded-md bg-white px-6 py-4 shadow-md">
		<p class="font-semibold">Blogs > List</p>
		<button
			class="rounded bg-gray-800 px-4 py-2 font-semibold text-white shadow-md transition-all hover:shadow-lg"
			on:click={() => goto('/blogs/add')}>Add Blog</button
		>
	</div>

	<div class="card mt-6 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
		{#each blogs as blog}
			<div
				class="group hover:translate-y-0.3 transform overflow-hidden rounded-lg border border-gray-300 bg-white p-4 shadow-lg transition hover:shadow-2xl"
			>
				<img src={blog.image} class="h-60 w-full object-cover" alt="blog-post" />
				<div class="p-4">
					<h2 class="title text-xl font-bold text-gray-800">{blog?.title}</h2>
					<p class="description mt-2 text-sm text-gray-600">
						{blog.description.substring(0, 150)}
					</p>
					<div class="author mt-3 flex items-center gap-1">
						<img
							src={blog.authorImage}
							alt="author_name"
							class="mr-3 h-12 w-12 rounded-full border border-gray-300"
						/>
						<p class="text-sm text-gray-400 uppercase">{blog.author}</p>
					</div>

					<button
						class="mt-4 cursor-pointer rounded-lg bg-gray-800 px-4 py-2 font-semibold text-white"
					>
						Read More</button
					>
				</div>
			</div>
		{/each}
	</div>
</div>
