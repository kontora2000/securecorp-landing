<script lang="ts">
  import { setContext } from 'svelte';

  import AppHeader from '$lib/components/AppHeader.svelte';
  import Clients from '$lib/components/sections/Clients.svelte';
  import Hero from '$lib/components/sections/Hero.svelte';
  import Stats from '$lib/components/sections/Stats.svelte';
  import Services from '$lib/components/sections/Services.svelte';
  import Consult from '$lib/components/sections/Consult.svelte';
  import Contacts from '$lib/components/sections/Contacts.svelte';
  import AppFooter from '$lib/components/AppFooter.svelte';
  import AppGridBackground from '$lib/components/AppGridBackground.svelte';
  import AppFloatingBall from '$lib/components/AppFloatingBall.svelte';
  import '../app.css';
  import type { BallStyle } from '$lib/types/BallStyle';

  export const ssr = false;

  const ballPropsSections: Record<string, BallStyle> = {
    stats: {
      left: '100px',
      bottom: '30px',
      background: 'radial-gradient(47.03% 49.47% at 56.72% 63.26%, #0BFE5E 0%, #0BFEE1 100%)',
      scale: '0.8'
    },

    services: {
      left: '100px',
      bottom: '30px',
      background: 'radial-gradient(47.03% 49.47% at 56.72% 63.26%, #0b23fe 0%, #0b99fe 100%)',
      scale: '0.8'
    },

    contacts: {
      left: 'calc(50% - 200px)',
      bottom: '0',
      background: 'radial-gradient(47.03% 49.47% at 56.72% 63.26%, #FE0B1A 0%, #FE0B45 100%)',
      scale: '0.8'
    }
  };

  setContext('BallProps', ballPropsSections);
</script>

<AppGridBackground />
<AppHeader />
<AppFloatingBall />
<main>
  <Hero />
  <Stats />
  <Clients />
  <Services />
  <Consult />
  <Contacts />
</main>
<AppFooter />
