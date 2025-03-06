<script>
	export let user = { name: 'User', location: 'KATHMANDU', balance: 'Rs. 12,840.40' };
</script>

<header class="flex items-center justify-between bg-white p-4 shadow-md">
	<div class="flex items-center gap-4">
		<button class="rounded-md p-2 hover:bg-gray-200">☰</button>
		<h2 class="text-lg font-semibold">HOME</h2>
	</div>
	<div class="flex items-center gap-6">
		<span class="text-sm text-gray-700">{user.location}</span>
		<span class="font-bold text-blue-600">{user.balance}</span>
		<button class="rounded-full bg-gray-200 p-2">👤</button>
	</div>
</header>
