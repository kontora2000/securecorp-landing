<script>
  import { toggleOverflow } from '$lib/utils/dom';
  import { fade } from 'svelte/transition';
  import { portal } from 'svelte-portal/src/Portal.svelte';

  export let isOpened = false;

  const handleClick = () => {
    if (isOpened) {
      isOpened = false;
      toggleOverflow(false);
    }
  };
</script>

{#if isOpened}
  <div
    transition:fade
    class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center opacity-80 bg-black text-white"
  >
    <div
      use:portal={'body'}
      transition:fade
      on:click|self={handleClick}
      on:keydown={() => {}}
      class="w-screen h-screen fixed flex justify-center items-center top-0 left-0"
    >
      <slot />
    </div>
  </div>
{/if}
