<script lang="ts">
  import AppCard from '$lib/components/AppCard.svelte';
  import AppContainer from '$lib/components/AppContainer.svelte';
  import AppSection from '$lib/components/AppSection.svelte';
  import Bullet from '$lib/components/icons/Bullet.svelte';
  import type { BallStyle } from '$lib/types/BallStyle';
  import { getContext } from 'svelte';

  interface Feature {
    title: string;
    description?: string;
  }

  export let features: Feature[] = [
    { title: 'Анализ и решение вопросов, связанных с безопасностью предприятия' },
    { title: 'Комплексная или выборочная проверка контрагентов' },
    {
      title:
        'Формирование системы своевременного получения информации о признаках внешних угроз экономическим интересам предприятия'
    },
    { title: 'Комплексная или выборочная проверка контрагентов' },
    {
      title:
        'Анализ и проверка чистоты взаимоотношений со штатными сотрудниками предприятия (скрытая коммерческая мотивация, промышленный шпионаж)',
      description:
        'Анализ их благонадёжности, фин. документации, кредитной истории, отзывов, установление учредителей, бенефициаров, аффилированных лиц.'
    },
    {
      title: 'Взаимодействие с правоохранительными и государственными органами по вопросам защиты интересов предприятия'
    },

    {
      title: 'Контроль сохранности информации относящейся к категории коммерческой тайны'
    },
    {
      title: 'Подготовка информационного-аналитических материалов по запросу клиента'
    },
    {
      title: 'Проведение служебных проверок по фактам выявленных нарушений и злоупотреблений'
    }
  ];

  const sectionsBallProps = getContext('BallProps') as Record<string, BallStyle>;
</script>

<AppSection id="services" ballProps={sectionsBallProps.services}>
  <AppContainer>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="col-span-2 md:col-span-2 lg:col-span-3">
        <h1 class="block md:max-w-[700px] text-[32px]">
          В процесс сопровождения клиента входит более 17 услуг различной направленности, в&nbsp;числе которых:
        </h1>
      </div>
      {#each features as feature}
        <article>
          <AppCard>
            <slot name="header">
              <Bullet />
            </slot>
            <h3 class="text-md mt-4 leading-6 max-w-[288px]">
              {feature.title}
            </h3>
            <p slot="footer" class="mt-4 text-[#E3E8EE99] font-thin leading-5 hidden md:block">
              {#if feature.description}
                {feature.description}
              {/if}
            </p>
          </AppCard>
        </article>
      {/each}
    </div>
  </AppContainer>
</AppSection>
