<script>
  import AppButton from '../AppButton.svelte';
  import AppCard from '../AppCard.svelte';
  import AppContainer from '../AppContainer.svelte';
</script>

<AppContainer className="pb-[100px]">
  <AppCard className="bg-ui-blue text-center flex flex-col items-center pb-0 pt-11">
    <h1 class="text-[32px] leading-10 font-bold md:max-w-[648px] max-w-300px mb-8">
      Расскажем в подробностях о методах нашей работы
    </h1>
    <h2 class="text-md leading-6 font-bold md:max-w-[648px] max-w-300px mb-8">И сориентируем по стоимости услуг</h2>
    <AppButton color="ui-black">Проконсультироваться</AppButton>
    <img src="/bubles.svg" alt="bubles" class="relative bottom-0" />
  </AppCard>
</AppContainer>
