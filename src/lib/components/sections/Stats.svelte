<script lang="ts">
  import AppCard from '$lib/components/AppCard.svelte';
  import AppContainer from '$lib/components/AppContainer.svelte';
  import AppSection from '$lib/components/AppSection.svelte';
  import type { BallStyle } from '$lib/types/BallStyle';
  import { getContext } from 'svelte';

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

  const sectionsBallProps = getContext('BallProps') as Record<string, BallStyle>;
</script>

<AppSection id="tasks" ballProps={sectionsBallProps.stats}>
  <AppContainer>
    <div class="flex flex-col md:flex-row text-white">
      <h1 class="md:font-bold text-2xl md:text-[32px] shrink-1 md:leading-10 md:max-w-[400px]">
        За 2022 год мы помогли 49&nbsp;предприятиям в&nbsp;России
      </h1>
      <div class="flex flex-col justify-start max-w-full md:max-w-[436px] md:ml-36 mt-8 md:mt-0">
        {#each cards as card}
          <AppCard className="hover:bg-ui-blue text-center md:text-left last-child:mb-0 mb-12">
            <h2 slot="header" class="text-6xl md:text-[80px] font-bold">{card.title}</h2>
            <div class="font-bold text-white md:text-lg" slot="default">{card.content}</div>
          </AppCard>
        {/each}
      </div>
    </div>
  </AppContainer>
</AppSection>
