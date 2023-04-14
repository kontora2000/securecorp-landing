<script lang="ts">
  import AppCard from '$lib/components/AppCard.svelte';
  import AppContainer from '$lib/components/AppContainer.svelte';
  import AppSection from '$lib/components/AppSection.svelte';
  import Bullet from '$lib/components/icons/BulletIcon.svelte';
  import BulletWhite from '../icons/BulletWhite.svelte';
  import type { BallStyle } from '$lib/types/BallStyle';
  import type { CardAccent } from '$lib/types/CardVariant';
  import { getContext } from 'svelte';
  import BulletIcon from '$lib/components/icons/BulletIcon.svelte';

  interface Feature {
    title: string;
    description?: string;
    accent?: number;
  }

  export let features: Feature[] = [
    {
      title: 'Комплексная или выборочная проверка контрагентов',
      description:
        'Проверерим финансовое состояние, репутацию, правовую и налоговую историю, судебные разбирательства и другие факторы',
      accent: 1
    },
    { title: 'Анализ и решение вопросов, связанных с безопасностью предприятия' },
    {
      title:
        'Формирование системы своевременного получения информации о признаках внешних угроз экономическим интересам предприятия'
    },
    { title: 'Комплексная или выборочная проверка контрагентов' },
    {
      title:
        'Анализ и проверка чистоты взаимоотношений со штатными сотрудниками предприятия (скрытая коммерческая мотивация, промышленный шпионаж)',
      description:
        'Проанализируем их благонадёжности, фин. документации, кредитной истории, отзывов, установление учредителей, бенефициаров, аффилированных лиц.',
      accent: 2
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

  const getCardVariant = (feature: Feature): CardAccent => {
    return feature.accent ? (`accent-${feature.accent}` as CardAccent) : 'normal';
  };
</script>

<AppSection id="services" ballProps={sectionsBallProps.services}>
  <AppContainer>
    <div class="flex flex-col justify-center sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-x-[60px] lg:gap-x-6">
      <div class="col-span-2 md:col-span-2 lg:col-span-3">
        <h1 class="block md:max-w-[700px] text-[32px]">
          В процесс сопровождения клиента входит более 17 услуг различной направленности, в&nbsp;числе которых:
        </h1>
      </div>
      {#each features as feature}
        <article class="text-[22px] md:text-base max-w-[300px] md:max-w-auto">
          <AppCard variant={getCardVariant(feature)} className="flex md:block">
            <slot name="header">
              {#if feature.accent && feature.accent > 1}
              <BulletWhite />
              {:else}
              <Bullet/>
              {/if}
            </slot>
            <h3 class="text-md md:mt-4 leading-6 max-w-[288px] font-bold">
              {feature.title}
            </h3>
            <p slot="footer" class="mt-4 text-[#E3E8EE99] leading-5 hidden md:block">
              {#if feature.accent}
              {#if feature.description}
                <b class="text-white font-medium">{feature.description} </b>
              {/if}
              {:else}   {#if feature.description}
              {feature.description}
              {/if}
              {/if}
            </p>
          </AppCard>
        </article>
      {/each}
    </div>
  </AppContainer>
</AppSection>
