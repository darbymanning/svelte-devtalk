<script lang="ts">
  import { fly } from "svelte/transition";
  import FormField from "$lib/components/FormField.svelte";
  import store from "$lib/stores";

  let emailEl: HTMLInputElement | undefined;
  let emailIsValid = false;

  $: $store && (emailIsValid = emailEl?.checkValidity());
</script>

<fieldset>
  <legend>Default Svelte Store</legend>
  <FormField label="Enter your name">
    <input type="text" bind:value={$store.name} />
  </FormField>

  <FormField label="Enter your email">
    <input type="email" bind:value={$store.email} bind:this={emailEl} required />
  </FormField>
</fieldset>

{#if $store.name}
  <p class:emailIsValid transition:fly|local={{ y: 100 }}>
    Ah, so great to meet you
    {#if emailIsValid}
      <a href="mailto:{$store.email}">{$store.name}</a>
    {:else}
      {$store.name}
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
