<script lang="ts">
  export let className: string = '';
  export let clickable: boolean = false;

  export let variant: 'normal' | 'outlined' = 'normal';

  $: classes = `
    rounded-2xl 
    p-4 
    transition-colors
    duration-200 
    ease-in-out 
    ${variant === 'outlined' ? 'border-2 border-white hover:border-transparent' : ''}
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
