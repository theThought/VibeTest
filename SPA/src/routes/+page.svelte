<script>
	import { goto } from '$app/navigation';
	function startApp() {
		goto('/main');
	}
</script>

<main class="welcome-container" tabindex="-1">
	<h1>Welcome to VibeTest</h1>
	<p class="description">VibeTest helps you understand and realize the full benefits of this application. Take your time to read through and get started at your own pace.</p>
	<button class="cta" aria-label="Start using the application" on:click={startApp}>Get Started</button>
</main>

<style>
	.welcome-container {
		max-width: 480px;
		margin: 5vh auto;
		background: #fff;
		border-radius: 12px;
		box-shadow: 0 2px 16px rgba(0,0,0,0.08);
		padding: 2rem 2.5rem 2.5rem 2.5rem;
		text-align: center;
	}
	h1 {
		font-size: 2.2rem;
		margin-bottom: 1rem;
	}
	.description {
		font-size: 1.1rem;
		margin-bottom: 2rem;
	}
	.cta {
		background: #4f8cff;
		color: #fff;
		border: none;
		border-radius: 6px;
		padding: 0.9rem 2.2rem;
		font-size: 1.1rem;
		cursor: pointer;
		transition: background 0.2s;
	}
	.cta:focus, .cta:hover {
		background: #2563eb;
		outline: 2px solid #2563eb;
	}
</style>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
