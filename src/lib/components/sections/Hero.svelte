<script>
  import AppContainer from '$lib/components/AppContainer.svelte';

  let features = [
    'Экономическую безопасность',
    'Внутрикорпоративную',
    'Кадровую',
    'Организацию охраны имущества и товарно-материальных ценностей'
  ];
</script>

<section>
  <AppContainer className={'flex'}>
    <div class="flex flex-col md:flex-row py-16 md:py-24 text-base">
      <div class="flex-1 w-50 max-w-[600px]">
        <h1 class="text-4xl md:text-5xl text-base mb-12 leading-[48px]">
          <strong>Комплексная безопасность&nbsp;предприятия.</strong> Берём на себя:
        </h1>
        <div class="grid grid-cols-2 mb-8 gap-y-16 gap-x-3">
          {#each features as feature}
            <div class="flex items-center">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="mr-3 w-5 h-5 min-w-5 min-h-5"
              >
                <circle cx="10" cy="10" r="10" fill="#0B99FE" />
              </svg>
              <p class="text-lg leading-6">{feature}</p>
            </div>
          {/each}
        </div>
        <button
          class="border-2 border-white rounded-full px-6 py-3 text-white text-lg font-medium transition-colors duration-300 ease-in-out hover:bg-blue-500 hover:border-blue-500 hover:text-white"
        >
          Получить консультацию
        </button>
      </div>
    </div>
  </AppContainer>
</section>
