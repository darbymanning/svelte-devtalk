<script lang="ts">
  import { fly } from "svelte/transition";
  import FormField from "$lib/components/FormField.svelte";
  import localStorageStore from "$lib/stores/localStorage";

  let emailEl: HTMLInputElement | undefined;
  let emailIsValid = false;

  $: $localStorageStore && (emailIsValid = emailEl?.checkValidity());
</script>

<fieldset>
  <legend>Store wrapped with LocalStorage</legend>
  <FormField label="Enter your name">
    <input type="text" bind:value={$localStorageStore.name} />
  </FormField>

  <FormField label="Enter your email">
    <input type="email" bind:value={$localStorageStore.email} bind:this={emailEl} required />
  </FormField>
</fieldset>

{#if $localStorageStore.name}
  <p class:emailIsValid transition:fly|local={{ y: 100 }}>
    Ah, so great to meet you
    {#if emailIsValid}
      <a href="mailto:{$localStorageStore.email}">{$localStorageStore.name}</a>
    {:else}
      {$localStorageStore.name}
    {/if}
  </p>
{/if}

<style lang="scss">
  fieldset {
    display: flex;
    flex-flow: column;
    gap: 4rem;
    width: 100%;
  }

  p {
    position: absolute;
    top: 100%;
    transition: color 200ms ease;

    &.emailIsValid {
      color: #6c8eef;
    }
  }
</style>
