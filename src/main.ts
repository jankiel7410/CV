import App from './App.svelte';
import CV from './CV.svelte';

const app = new CV({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;