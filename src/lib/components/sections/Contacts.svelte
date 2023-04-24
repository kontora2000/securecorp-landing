<script lang="ts">
  import type { BallStyle } from '$lib/types/BallStyle';
  import { phone, email, address, socials } from '$lib/constants/contacts';
  import { getContext } from 'svelte';
  import AppContainer from '$lib/components/AppContainer.svelte';
  import AppSection from '$lib/components/AppSection.svelte';
  import AppDialog from '../AppDialog.svelte';
  import AppCard from '../AppCard.svelte';
  import { toggleOverflow } from '$lib/utils/dom';

  const sectionsBallProps = getContext('BallProps') as Record<string, BallStyle>;
</script>

<AppSection ballProps={sectionsBallProps.contacts} id="contacts">
  <AppContainer>
    {#each socials as social}
      <AppDialog bind:isOpened={social.flag}>
        <AppCard variant="normal" className="{social.background} relative {social.color} text-xl text-center"
          >Задайте ваш вопрос в <span class="font-semibold">{social.name}</span>
          <button
            on:click={() => {
              social.flag = false;
              toggleOverflow(false);
            }}
            class=" border-2 rounded-full px-2 py-1 border-transparent hover:text-black absolute top-[10px] right-[20px]"
            ><span class="text-xl">x</span></button
          >
          <img class="mt-3 rounded-xl" alt="qr" src={social.qr} />
        </AppCard>
      </AppDialog>
    {/each}
    <div class="flex flex-col lg:flex-row justify-between text-white">
      <h1 class="shrink-1 mb-8 lg:mb-0">Контактная информация</h1>
      <div class="flex-1 lg:ml-20 flex flex-col md:flex-row">
        <div class="flex-1 flex flex-col md:flex-row md:items-center ju md:block">
          <div class="text-md md:text-[20px]">
            <h3 class="text-ui-gray-dark mb-4">Телефон</h3>
            <a href={`tel:${phone}`} class="whitespace-nowrap text-white font-medium hover:text-ui-blue">
              {phone}
            </a>
          </div>
          <div class="text-md mt-6 md:text-[20px] md:mt-12">
            <h3 class="text-ui-gray-dark ] mb-4">Эл. почта</h3>
            <a href={`mailto:${email}`} class="whitespace-nowrap text-white font-medium hover:text-ui-blue">
              {email}
            </a>
          </div>
          <div class="text-md mt-6 md:text-[20px] md:mt-12">
            <h3 class="text-ui-gray-dark mb-4">Мессенджеры и соцсети</h3>
            <ul>
              {#each socials as social}
                <li class="mb-3 last:mb-0">
                  <a
                    href={`https://wa.me/message/${social.link}`}
                    class="whitespace-nowrap text-white font-medium hover:text-ui-blue block sm:hidden"
                  >
                    {social.name}
                  </a>
                  <button
                    on:click={() => {
                      social.flag = true;
                      toggleOverflow(true);
                    }}
                    class="whitespace-nowrap text-white font-medium hover:text-ui-blue hidden sm:block"
                  >
                    {social.name}
                  </button>
                </li>
                <AppDialog bind:isOpened={social.flag}>
                  <AppCard variant="normal" className="{social.background} relative {social.color} text-xl text-center"
                    >Задайте ваш вопрос в <span class="font-semibold">{social.name}</span>
                    <button
                      on:click={() => {
                        social.flag = false;
                        toggleOverflow(false);
                      }}
                      class=" border-2 rounded-full px-2 py-1 border-transparent hover:text-black absolute top-[10px] right-[20px]"
                      ><span class="text-xl">x</span></button
                    >
                    <img class="mt-3 rounded-xl" alt="qr" src={social.qr} />
                  </AppCard>
                </AppDialog>
              {/each}
            </ul>
          </div>
        </div>
        <div class="flex-1 mt-6 md:mt-0 max-w-[100vw]">
          <div class="text-md md:text-[20px]">
            <h3 class="text-ui-gray-dark mb-4">Офис</h3>
            <div
              class="whitespace-nowrap font-medium hover:text-ui-blue non-italic text-white max-w-[100vw] break-words"
            >
              {address}
            </div>
            <div>с&nbsp;10 до 19:00</div>
          </div>
        </div>
      </div>
    </div>
  </AppContainer>
</AppSection>
