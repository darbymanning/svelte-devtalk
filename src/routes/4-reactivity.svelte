<script lang="ts">
  import { fly } from "svelte/transition";
  import FormField from "$lib/components/FormField.svelte";

  let name = "";
  let email = "";
  let emailEl: HTMLInputElement | undefined;
  let emailIsValid = false;

  $: email && (emailIsValid = emailEl?.checkValidity());
</script>

<fieldset>
  <FormField label="Enter your name">
    <input type="text" bind:value={name} />
  </FormField>

  <FormField label="Enter your email">
    <input type="email" bind:value={email} bind:this={emailEl} required />
  </FormField>
</fieldset>

{#if name}
  <p class:emailIsValid transition:fly|local={{ y: 100 }}>
    Ah, so great to meet you
    {#if emailIsValid}
      <a href="mailto:{email}">{name}</a>
    {:else}
      {name}
    {/if}
  </p>
{/if}

<style lang="scss">
  fieldset {
    display: flex;
    flex-flow: column;
    gap: 4rem;
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
