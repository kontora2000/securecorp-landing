<script lang="ts">
  import { setContext } from 'svelte';

  import type { BallStyle } from '$lib/types/BallStyle';

  import AppHeader from '$lib/components/AppHeader.svelte';
  import Hero from '$lib/components/sections/Hero.svelte';
  import Stats from '$lib/components/sections/Stats.svelte';
  import Consult from '$lib/components/sections/Consult.svelte';
  import Contacts from '$lib/components/sections/Contacts.svelte';
  import AppFooter from '$lib/components/AppFooter.svelte';
  import AppGridBackground from '$lib/components/AppGridBackground.svelte';
  import AppFloatingBall from '$lib/components/AppFloatingBall.svelte';
  import '../app.css';
  import Features from '$lib/components/sections/Features.svelte';

  export const ssr = false;

  const ballPropsSections: Record<string, BallStyle> = {
    stats: {
      left: '-12vw',
      bottom: '30px',
      background: 'radial-gradient(47.03% 49.47% at 56.72% 63.26%, #0BFE5E 0%, #0BFEE1 100%)',
      scale: '0.78',
      endTrigger: '#clients'
    },

    services: {
      left: '-12vw',
      bottom: '30px',
      background: 'radial-gradient(47.03% 49.47% at 56.72% 63.26%, #0b23fe 0%, #0b99fe 100%)',
      scale: '0.8',
      endTrigger: '#contacts'
    },

    contacts: {
      left: 'calc(50% - 25vw)',
      bottom: '-25vw',
      background: 'radial-gradient(47.03% 49.47% at 56.72% 63.26%, #FE0B1A 0%, #FE0B45 100%)',
      scale: '0.75'
    }
  };

  let over = false;
  over = false;

  setContext('BallProps', ballPropsSections);
</script>

<AppGridBackground />
<AppHeader />
<AppFloatingBall />
<div id="teleport" />
<main>
  <Hero />
  <Stats />
  <Features />
  <Consult />
  <Contacts />
</main>
<AppFooter />
