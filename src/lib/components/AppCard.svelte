<script lang="ts">
  export let className: string = '';
  export let clickable: boolean = false;

  $: classes = `
    rounded-md 
    p-4 
    transition-colors
    duration-200 
    ease-in-out 
    ${clickable ? 'cursor-pointer' : 'cursor-default'}
  ${className}`;
</script>

<div class={classes}>
  {#if $$slots.header}
    <div class="mb-2 w-full">
      <slot name="header" />
    </div>
  {/if}
  <slot />
  {#if $$slots.footer}
    <div class="mb-4">
      <slot name="footer" />
    </div>
  {/if}
</div>
