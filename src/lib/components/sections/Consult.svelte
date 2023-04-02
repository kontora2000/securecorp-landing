<script>
  import AppButton from '../AppButton.svelte';
  import AppCard from '../AppCard.svelte';
  import AppContainer from '../AppContainer.svelte';
  import AppSection from '../AppSection.svelte';
</script>

<AppContainer>
  <AppCard className="bg-blue-500 flex items-center justify-center flex-col">
    <div slot="header">
      <h1 class="text-[32px] leading-10">Расскажем в подробностях о методах нашей работы</h1>
    </div>
    <AppButton color="black" variant="normal">Проконсультироваться</AppButton>
    <img src="/bubles.svg" alt="bubles" class="relative bottom-0" />
  </AppCard>
</AppContainer>
