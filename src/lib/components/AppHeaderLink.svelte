<script lang="ts">
  import type { Link } from '../types/Link';
  export let link: Link;
</script>

<a
  href={link.href}
  class="font-medium text-white transition-colors p-2  hover:bg-ui-gray-light  hover:backdrop-blur-sm rounded-full  hover:text-black active:ui-gray-2"
  on:click
>
  {link.name}
</a>
