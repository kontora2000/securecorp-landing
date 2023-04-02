<script>
  import AppContainer from '$lib/components/AppContainer.svelte';
  import AppButton from '$lib/components/AppButton.svelte';
  import AppSection from '$lib/components/AppSection.svelte';
  import Bullet from '../icons/Bullet.svelte';

  let features = [
    'Экономическую безопасность',
    'Внутрикорпоративную',
    'Кадровую',
    'Организацию охраны имущества и товарно-материальных ценностей'
  ];
</script>

<AppSection id="hero">
  <AppContainer className={'flex'}>
    <div class="flex flex-col py-16 md:py-24 text-white">
      <div class="flex-1 w-50 max-w-[600px]">
        <h1 class="text-[24px] leading-tight md:text-5xl text-white mb-12 md:leading-[48px]">
          <strong>Комплексная безопасность&nbsp;предприятия.</strong>
          <div>Берём на себя:</div>
        </h1>
        <div class="flex flex-col gap-4 md:grid md:grid-cols-2 mb-8 md:gap-y-16 md:gap-x-3">
          {#each features as feature}
            <div class="flex items-start">
              <Bullet />
              <p class="text-lg leading-6">{feature}</p>
            </div>
          {/each}
        </div>
        <AppButton
          variant="outlined"
          color="white"
          className="hover:bg-ui-blue active:bg-ui-blue hover:border-ui-blue w-full md:w-auto"
        >
          Получить консультацию
        </AppButton>
      </div>
    </div>
  </AppContainer>
</AppSection>
