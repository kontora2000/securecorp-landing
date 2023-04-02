<script>
  import AppHeader from '../lib/components/AppHeader.svelte';
  import Clients from '$lib/components/sections/Clients.svelte';
  import Hero from '$lib/components/sections/Hero.svelte';
  import Stats from '$lib/components/sections/Stats.svelte';
  import Services from '$lib/components/sections/Services.svelte';
  import Consult from '$lib/components/sections/Consult.svelte';
  import '../app.css';
</script>

<AppHeader />
<main>
  <Hero />
  <Stats />
  <Clients />
  <Services />
  <Consult />
</main>
