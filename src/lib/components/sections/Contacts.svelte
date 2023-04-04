<script lang="ts">
  import type { BallStyle } from '$lib/types/BallStyle';
  import { phone, email, address } from '$lib/constants/contacts';
  import { getContext } from 'svelte';

  import AppContainer from '$lib/components/AppContainer.svelte';
  import AppSection from '$lib/components/AppSection.svelte';

  const sectionsBallProps = getContext('BallProps') as Record<string, BallStyle>;
</script>

<AppSection ballProps={sectionsBallProps.contacts} id="contacts">
  <AppContainer>
    <div class="flex flex-col md:flex-row justify-between text-white">
      <h1 class="shrink-1 mb-8 md:mb-0">Контактная информация</h1>
      <div class="flex-1 md:ml-20 flex flex-col md:flex-row">
        <div class="flex-1 flex flex-row items-center md:block">
          <div class="text-[20px]">
            <h3 class="text-ui-gray-dark mb-4">Телефон</h3>
            <a href={`tel:${phone}`} class="whitespace-nowrap text-white font-medium hover:text-ui-blue">
              {phone}
            </a>
          </div>
          <div class="text-[20px] ml-auto md:ml-0 md:mt-12">
            <h3 class="text-ui-gray-dark ] mb-4">Эл. почта</h3>
            <a href={`mailto:${email}`} class="whitespace-nowrap text-white font-medium hover:text-ui-blue">
              {email}
            </a>
          </div>
        </div>
        <div class="flex-1 mt-6 mb:mt-0">
          <div class="text-[20px]">
            <h3 class="text-ui-gray-dark mb-4">Офис</h3>
            <div class="whitespace-nowrap font-medium hover:text-ui-blue non-italic text-white">
              {address}
            </div>
            <div>с 10 до 19:00</div>
          </div>
        </div>
      </div>
    </div>
  </AppContainer>
</AppSection>
