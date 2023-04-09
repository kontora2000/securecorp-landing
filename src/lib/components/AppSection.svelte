<script lang="ts">
  import { onMount } from 'svelte';
  //@ts-ignore
  import gsap from 'gsap/dist/gsap.min.js';
  //@ts-ignore
  import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.min.js';
  import type { BallStyle } from '$lib/types/BallStyle';

  gsap.registerPlugin(ScrollTrigger);

  let sectionRef: HTMLElement;
  let ballTween: gsap.core.Tween;

  export let ballProps: BallStyle = {};

  onMount(() => {
    if (!Object.keys(ballProps).length) {
      return;
    }
    const ballRef = document.querySelector('.ball');
    ScrollTrigger.create({
      trigger: sectionRef,
      scrub: 1,

      endTrigger: ballProps?.endTrigger || (sectionRef.nextElementSibling as HTMLElement),
      end: 'top center',

      onEnter: () => {
        ballTween = gsap.to(ballRef, {
          ...ballProps
        });
      },
      onLeaveBack: () => {
        ballTween.reverse();
      }
    });
  });
</script>

<section {...$$props} class="py-16 md:py-[145px] text-white" bind:this={sectionRef}>
  <slot />
</section>
