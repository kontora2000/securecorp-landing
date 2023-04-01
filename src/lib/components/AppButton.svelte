<script lang="ts">
  export let color: string = 'base';
  export let variant: 'normal' | 'outlined' = 'normal';
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let rounded = true;
  export let disabled: boolean = false;
  export let className: string = '';

  $: classes = `inline-flex items-center justify-center border border-transparent font-medium focus:outline-none px-8 py-6 uppercase border-2
      ${rounded ? ' rounded-full' : ''}
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:opacity-80 active:opacity-100 transition-opacity'}
      ${variant === 'normal' ? ` text-white ${color} hover:${color}-dark active:${color}-darker bg-opacity-90` : ''}
      ${variant === 'outlined' ? ` text-gray-700 border-${color} bg-transparent` : ''} ${className}`;
</script>

<button {type} {disabled} class={classes}>
  <slot />
</button>
