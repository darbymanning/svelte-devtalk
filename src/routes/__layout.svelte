<script lang="ts" context="module">
  import { loadLocaleAsync } from "$lib/i18n/i18n-util.async";
  import type { Load } from "@sveltejs/kit";

  export const load: Load = async ({ session: { user } }) => {
    user && (await loadLocaleAsync(user.locale));
    return {};
  };
</script>

<script lang="ts">
  import { setLocale } from "$lib/i18n/i18n-svelte";
  import { links } from "$lib/data";
  import { page, session } from "$app/stores";

  $: $session.user && setLocale($session.user.locale);
</script>

<nav class="global-nav">
  <ol>
    {#each links as { href, title }}
      <li class:isActive={$page.url.pathname === href}>
        <a {href}>{title}</a>
      </li>
    {/each}
  </ol>
</nav>

<main class="global-main">
  <slot />
</main>

<style lang="scss" global>
  @import "src/lib/global.scss";

  .global-nav {
    backdrop-filter: blur(1rem);
    box-shadow: rgba(black, 0.2) 0 2rem 6rem;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;

    ol {
      display: flex;
      gap: 2rem;
    }

    li {
      font-size: 1.6rem;
      padding: 0.7rem 1.2rem;

      &::before {
        background: rgba(#6c8eef, 0.3);
        border-radius: 5em;
        content: "";
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        transform: scaleX(0);
        transition: transform 200ms ease;
        width: 100%;
      }

      &.isActive::before,
      &:focus-within::before {
        transform: none;
      }

      &.isActive:focus-within::before {
        background: rgba(#6c8eef, 0.5);
      }

      a {
        outline: none;
        text-decoration: none;
      }
    }
  }

  .global-main {
    align-items: center;
    display: flex;
    flex-flow: column;
    margin: auto;
    max-width: 120rem;
    padding: 0 5rem;
    width: 100%;
  }
</style>
