<script lang="ts">
  import { fade } from 'svelte/transition';
  import { smoothScroll, toggleOverflow } from '$lib/utils/dom';
  import { phone } from '$lib/contacts/phone';

  import AppLogo from '$lib/components/AppLogo.svelte';
  import AppContainer from '$lib/components/AppContainer.svelte';
  import AppButton from './AppButton.svelte';

  interface Link {
    name: string;
    href: string;
  }

  let links: Link[] = [
    { name: 'Задачи', href: '#tasks' },
    { name: 'Услуги', href: '#services' },
    { name: 'Контакты', href: '#contacts' }
  ];

  const handleMenuLinkClick = (event: MouseEvent) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const href = target.getAttribute('href');
    const element = document.querySelector(href ?? '') as HTMLDivElement;
    if (element) {
      smoothScroll(element);
      // Change the URL without reloading the page
      history.pushState({}, '', `/#${href!.substring(1)}`);
    } else {
      console.error('No element or bad anchor link');
    }
  };

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
    toggleOverflow(isMenuOpen);
  };
</script>

<header>
  <AppContainer>
    <div class="flex items-center py-6 md:justify-start md:space-x-10">
      <a href="/" class="mr-[70px] text-white">
        <AppLogo />
      </a>
      <nav class="hidden md:flex space-x-10">
        {#each links as link}
          <a
            href={link.href}
            class="font-medium text-white hover:text-ui-blue transition-colors"
            on:click={handleMenuLinkClick}
          >
            {link.name}
          </a>
        {/each}
      </nav>
      <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0 transition-colors">
        <a href={`tel:${phone}`} class="whitespace-nowrap text-white font-medium hover:text-ui-blue">
          {phone}
        </a>
      </div>
      {#if !isMenuOpen}
        <div class="md:hidden ml-auto">
          <button
            class="text-white hover:text-ui-blue focus:outline-none"
            aria-label="Открыть меню"
            on:click={toggleMenu}
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6">
              <path
                fill-rule="evenodd"
                fill="currentColor"
                d="M21 6H3a1 1 0 000 2h18a1 1 0 000-2zm0 5H3a1 1 0 000 2h18a1 1 0 000-2zm0 5H3a1 1 0 000 2h18a1 1 0 000-2z"
              />
            </svg>
          </button>
        </div>
      {/if}
    </div>
  </AppContainer>
  {#if isMenuOpen}
    <AppContainer className={'h-full w-full fixed top-0 left-0 bg-white py-6 block md:hidden'}>
      <div class="flex justify-between">
        <a href="/" class="mr-[70px]">
          <AppLogo />
        </a>
        <button class="text-black hover:text-ui-blue focus:outline-none" on:click={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <nav class="md:hidden flex flex-col mt-7" in:fade>
        {#each links as link}
          <a
            href={link.href}
            class="text-black font-mediu hover:text-ui-blue transition-colors mt-3"
            on:click={handleMenuLinkClick}
          >
            {link.name}
          </a>
        {/each}
      </nav>
      <AppButton color="black" className="w-full text-black relative bottom-0" variant="outlined">
        Получить консультацию
      </AppButton>
    </AppContainer>
  {/if}
</header>
