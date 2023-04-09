<script lang="ts">
  import AppContainer from '$lib/components/AppContainer.svelte';
  import AppSection from '$lib/components/AppSection.svelte';

  interface ClientLogo {
    src: string;
    alt: string;
  }

  const clients: ClientLogo[] = [
    { src: 'veles.svg', alt: 'Велесстрой' },
    { src: 'transneft.svg', alt: 'Транснефть' },
    { src: 'cpc.svg', alt: 'КТК' },
    { src: 'x5.svg', alt: 'Х5 Групп' },
    { src: 'ya.svg', alt: 'Я' },
    { src: 'alfa.svg', alt: 'Альфа' },
    { src: 'magnit.svg', alt: 'Магнит' },
    { src: 'vtb.svg', alt: 'ВТБ' }
  ];
</script>

<AppSection id="clients">
  <AppContainer>
    <h1 class="text-bold text-[32px] leading-10 text-white w-full text-center mb-12 md:mb-[100px]">
      Наши специалисты работали <br />с такими компаниями как
    </h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-y-[108px]">
      {#each clients as client}
        <div class="flex justify-center items-center">
          <img src={`/clients/${client.src}`} alt={client.alt} />
        </div>
      {/each}
    </div>
  </AppContainer>
</AppSection>
