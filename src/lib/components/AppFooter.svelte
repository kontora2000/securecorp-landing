<script lang="ts">
  import AppContainer from '$lib/components/AppContainer.svelte';

  const year = new Date().getFullYear();
  const link = 'https://kontora.gq';

  const companyName = 'SecureCorp';
  const authorName = 'Контора';
</script>

<AppContainer>
  <footer class="py-6 flex justify-between items-center">
    <div class="text-xs text-ui-gray-dark">
      © {year}, {companyName}
    </div>
    <div class="text-xs text-ui-gray-dark">
      Разработала
      <a href={link} target="_blank" class="underline font-bold" rel="noopener noreferrer"> {authorName}</a>®
    </div>
  </footer>
</AppContainer>
