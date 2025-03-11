<!-- <div class="mx-auto max-w-7xl rounded-lg bg-white p-6 shadow-lg">
	<h2 class="mb-4 text-2xl font-bold">Add a New Blog</h2>

	<label for="title" class="mb-2 block">Title</label>
	<input type="text" name="title" class="mb-4 w-full rounded border p-2" />

	<label for="description" class="mb-2 block">Description</label>
	<textarea name="description" class="mb-4 w-full  rounded border p-2"></textarea>

	<button class="mt-4 rounded bg-gray-800 px-4 py-2 text-white"> Submit Blog </button>
</div> -->

<div
	class="my-2 flex w-full items-center justify-between rounded-md bg-white px-6 py-4 font-semibold shadow-md"
>
	<p class="">Blogs > Create</p>
	<button class="rounded-md bg-gray-800 px-4 py-2 text-white">Back</button>
</div>
<div class="max-w-8xl mx-auto my-2 rounded-lg bg-white px-6 py-4 shadow-lg">
	<h2 class="mb-6 text-center text-2xl font-semibold">Create your own blog</h2>
	<div class="grid grid-cols-2 gap-4">
		<div class="form-control">
			<label for="title" class="mb-2 block">Title</label>
			<input
				type="text"
				name="title"
				placeholder="Title of the blog"
				class=" mb-2 w-full rounded-md border p-2"
			/>
		</div>
		<div class="form-control">
			<label for="title" class="mb-2 block">Author Name</label>
			<input
				type="text"
				name="title"
				placeholder="Name of the Author"
				class=" mb-2 w-full rounded-md border p-2"
			/>
		</div>
		<div class="form-control">
			<label for="category" class="mb-2 block">Category</label>
			<select class="w-full rounded-md border p-2" name="category" id="category">
				<option value="technology">Technology</option>
				<option value="lifestyle">Lifestyle</option>
				<option value="travel">Travel</option>
				<option value="food">Food</option>
				<option value="health">Health</option>
			</select>
		</div>
		<div class="form-control">
			<label for="title" class="mb-2 block">Author Bio</label>
			<input
				type="text"
				name="title"
				placeholder="Short author introduction"
				class=" mb-2 w-full rounded-md border p-2"
			/>
		</div>
	</div>
	<div>
		<label for="content" class="mb-2 block"> Content </label>
		<div class="overflow-hidden rounded-lg border">
			<!-- <div class=" flex gap-2 border-b border-gray-200 p-2">
				<button type="button" aria-label="bold" class="rounded p-2 hover:bg-gray-100"> </button>
				<button type="button" aria-label="bold" class="rounded p-2 hover:bg-gray-100"> </button>
				<button type="button" aria-label="bold" class="rounded p-2 hover:bg-gray-100"> </button>
				<button type="button" aria-label="bold" class="rounded p-2 hover:bg-gray-100"> </button>
				<button type="button" aria-label="bold" class="rounded p-2 hover:bg-gray-100"> </button>
			</div>
			<div id="editor" class="prose max-w-none"></div> -->
			<textarea
				class="w-full"
				placeholder="Type your content here..."
				name="content"
				id="content"
				rows="10"
			></textarea>
		</div>
	</div>
	<button class="mt-4 rounded bg-gray-800 px-4 py-2 text-white"> Submit Blog </button>
</div>
