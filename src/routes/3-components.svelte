<script lang="ts">
  import { fly } from "svelte/transition";
  import FormField from "$lib/components/FormField.svelte";

  let name = "";
</script>

<fieldset>
  <FormField label="Enter your name">
    <input type="text" bind:value={name} />
  </FormField>
</fieldset>

{#if name}
  <p transition:fly|local={{ y: 100 }}>
    Ah, so great to meet you {name}
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
  }
</style>
