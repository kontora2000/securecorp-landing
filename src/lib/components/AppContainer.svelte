<script lang="ts">
  export let className: string = '';
</script>

<div class={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
  <slot />
</div>
