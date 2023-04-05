<div class="w-[100vw] h-[100vh] fixed top-0 left-0 text-ui-gray-darker -z-10">
  <svg class="lines-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080">
    {#each Array(10) as _, i}
      <path d="M 0 {(i + 1) * 200} H 1920" stroke="currentColor" stroke-width="1" fill="none" />
    {/each}
    {#each Array(10) as _, k}
      <path d="M {(k + 1) * 200} 0 V 1080" stroke="currentColor" stroke-width="1" fill="none" />
    {/each}
  </svg>
</div>

<style>
  .lines-svg path {
    stroke-dasharray: 2000;
    stroke-dashoffset: 2000;
    animation: draw 2s linear forwards;
    z-index: -1;
  }

  /* Анимация рисования линий */
  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }

  /* Анимация рисования линии */
  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
