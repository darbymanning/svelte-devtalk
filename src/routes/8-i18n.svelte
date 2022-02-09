<script lang="ts">
  import { session } from "$app/stores";
  import LL from "$lib/i18n/i18n-svelte";

  const locales = [
    {
      value: "en-gb",
      label: "🇬🇧 English (United Kingdom)",
    },
    {
      value: "fr",
      label: "🇫🇷 French",
    },
  ];
</script>

{#if $session.user}
  <p>{$LL.greeting({ name: $session.user.name })}</p>
  <select bind:value={$session.user.locale}>
    {#each locales as { value, label }}
      <option {value} selected={$session.user.locale === value}>{label}</option>
    {/each}
  </select>
{:else}
  <p>Sorry, I can't remember who you are. Did you need to <a href="/7-session">login</a>?</p>
{/if}
