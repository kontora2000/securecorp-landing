<script lang="ts">
  import AppCard from '$lib/components/AppCard.svelte';
  import AppContainer from '$lib/components/AppContainer.svelte';
  import AppSection from '$lib/components/AppSection.svelte';

  interface StatsCard {
    title: string;
    content: string;
  }

  const cards: StatsCard[] = [
    { title: '52', content: 'Предприятиям провели полный анализ текущей ситуации' },
    { title: '94%', content: 'Случаев выявления наиболее слабых точек в целостной системе безопасности' },
    {
      title: '98,2%',
      content:
        'Вероятность предотвращения рисков и угроз, возникающих в процессе экономической и финансово-хозяйственной деятельности предприятия'
    }
  ];
</script>

<AppSection id="tasks">
  <AppContainer>
    <div class="flex flex-col md:flex-row text-base">
      <div class="md:font-bold text-2xl md:text-[32px] tracking-[-2%] shrink-1 md:leading-10 md:max-w-[400px]">
        За 2022 год мы помогли 49&nbsp;предприятиям в&nbsp;России
      </div>
      <div class="flex flex-col justify-start max-w-full md:max-w-[436px] md:ml-36 mt-8 md:mt-0">
        {#each cards as card}
          <AppCard className="hover:bg-blue-500 text-center md:text-left last-child:mb-0 mb-12">
            <h2 slot="header" class="text-6xl md:text-[80px] font-bold">{card.title}</h2>
            <div class="font-bold text-base md:text-lg" slot="default">{card.content}</div>
          </AppCard>
        {/each}
      </div>
    </div>
  </AppContainer>
</AppSection>
