<script>
	let formData = {
		title: '',
		authorName: '',
		category: '',
		bio: '',
		content: ''
	};

	const handleSubmit = () => {
		console.log('Hello Form submitted', formData);
	};
</script>

<div
	class="my-2 flex w-full items-center justify-between rounded-md bg-white px-6 py-4 font-semibold shadow-md"
>
	<p class="">Blogs > Create</p>
	<button on:click={() => {history.back()}} class="rounded-md bg-gray-800 px-4 py-2 text-white cursor-pointer">Back</button>
</div>
<form on:submit|preventDefault={handleSubmit}>
	<div class="max-w-8xl mx-auto my-2 rounded-lg bg-white px-6 py-4 shadow-lg">
		<h2 class="mb-6 text-center text-2xl font-semibold">Create your own blog</h2>
		<div class="grid grid-cols-2 gap-4">
			<div class="form-control">
				<label for="title" class="mb-2 block">Title</label>
				<input
					bind:value={formData.title}
					type="text"
					name="title"
					placeholder="Title of the blog"
					class=" mb-2 w-full rounded-md border p-2"
				/>
			</div>
			<div class="form-control">
				<label for="authorName" class="mb-2 block">Author Name</label>
				<input
					bind:value={formData.authorName}
					type="text"
					name="authorName"
					placeholder="Name of the Author"
					class=" mb-2 w-full rounded-md border p-2"
				/>
			</div>
			<div class="form-control">
				<label for="category" class="mb-2 block">Category</label>
				<select
					bind:value={formData.category}
					class="w-full rounded-md border p-2"
					name="category"
					id="category"
				>
					<option value="technology">Technology</option>
					<option value="lifestyle">Lifestyle</option>
					<option value="travel">Travel</option>
					<option value="food">Food</option>
					<option value="health">Health</option>
				</select>
			</div>
			<div class="form-control">
				<label for="bio" class="mb-2 block">Author Bio</label>
				<input
					bind:value={formData.bio}
					type="text"
					name="bio"
					placeholder="Short author introduction"
					class=" mb-2 w-full rounded-md border p-2"
				/>
			</div>
		</div>
		<div>
			<label for="content" class="mb-2 block"> Content </label>
			<div class=" rounded-lg">
				<!-- <div class=" flex gap-2 border-b border-gray-200 p-2">
				<button type="button" aria-label="bold" class="rounded p-2 hover:bg-gray-100"> </button>
				<button type="button" aria-label="bold" class="rounded p-2 hover:bg-gray-100"> </button>
				<button type="button" aria-label="bold" class="rounded p-2 hover:bg-gray-100"> </button>
				<button type="button" aria-label="bold" class="rounded p-2 hover:bg-gray-100"> </button>
				<button type="button" aria-label="bold" class="rounded p-2 hover:bg-gray-100"> </button>
			</div>
			<div id="editor" class="prose max-w-none"></div> -->
				<textarea
					bind:value={formData.content}
					class="w-full rounded-md border p-2"
					placeholder="Type your content here..."
					name="content"
					id="content"
					rows="10"
				></textarea>
			</div>
		</div>
		<button class="mt-4 rounded-md bg-gray-800 px-4 py-2 text-white"> Submit </button>
	</div>
</form>
