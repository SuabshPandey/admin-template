<script>
	export let data;
	let blog = data?.props?.blog;
</script>

<div class="max-w-9xl mx-auto grid grid-cols-1 gap-8 px-2 lg:grid-cols-12">
	<!-- Left: Author Info -->
	<aside class="hidden lg:col-span-3 lg:block">
		<div class="sticky top-0 rounded-xl border border-gray-200 bg-white p-6">
			<img
				src={blog?.authorImage}
				alt="Author"
				class="mx-auto h-28 w-28 rounded-full border-4 border-gray-200"
			/>
			<h3 class="mt-4 text-center text-lg font-semibold text-gray-800">{blog?.author}</h3>
			<p class="mt-2 text-center text-sm text-gray-500">{blog?.authorDescription}</p>
			<p class="mt-3 text-center text-xs text-gray-400">🗓 Published on {blog?.createdAt}</p>
		</div>
	</aside>

	<!-- Middle: Blog Content -->
	<article class="rounded-xl border border-gray-200 bg-white p-8 shadow-xl lg:col-span-6">
		<img src={blog?.image} alt="Blog page" class="h-72 w-full rounded-xl object-cover shadow-sm" />
		<h1 class="mt-6 text-4xl leading-tight font-bold text-gray-900">{blog?.title}</h1>
		<p class="mt-2 text-sm text-gray-500">By {blog?.author} | {blog?.createdAt}</p>

		<!-- Blog Content -->
		<div class="mt-6 space-y-6 text-lg leading-relaxed text-gray-700">{@html blog?.content}</div>
	</article>

	<!-- Right: Table of Contents (TOC) - Sticky on Desktop -->
	<aside class="hidden lg:col-span-3 lg:block">
		<div class="sticky top-0 rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
			<h3 class="text-lg font-semibold text-gray-800">📌 Table of Contents</h3>
			<ul class="mt-4 space-y-2 text-gray-600">
				<li>
					<a href="#introduction" class="block rounded-md px-3 py-1 transition hover:bg-gray-100"
						>📖 Introduction</a
					>
				</li>
				<li>
					<a href="#benefits" class="block rounded-md px-3 py-1 transition hover:bg-gray-100"
						>✔ Benefits</a
					>
				</li>
				<li>
					<a href="#content" class="block rounded-md px-3 py-1 transition hover:bg-gray-100"
						>📝 Conclusion</a
					>
				</li>
			</ul>
		</div>
	</aside>
</div>
