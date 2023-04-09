<script lang="ts">
  import type { Link } from '../types/Link';
  export let link: Link;
</script>

<a
  href={link.href}
  class="font-medium text-white transition-colors p-2 hover:bg-white rounded-full hover:bg-ui-gray-dark"
  on:click
>
  {link.name}
</a>
