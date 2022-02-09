<script lang="ts">
  import axios from "axios";
  import { session } from "$app/stores";
  import FormField from "$lib/components/FormField.svelte";

  async function handleLogin() {
    try {
      const response = await axios.post("/api/auth", { email, password });
      $session.user = response.data.user;
    } catch {
      alert("Sorry dude, wrong credentials there.");
    }
  }

  async function handleLogout() {
    await axios.delete("/api/auth");
    $session.user = null;
  }

  let email;
  let emailEl: HTMLInputElement | undefined;
  let password;
  let isValid = false;

  $: if (email || password) {
    isValid = emailEl?.checkValidity() && password;
  }
</script>

{#if $session.user}
  <div>
    <p>Oh hey {$session.user.name} 👋</p>
    <button on:click={handleLogout}>Log out</button>
  </div>
{:else}
  <form on:submit|preventDefault>
    <FormField label="Enter your email">
      <input type="email" bind:value={email} bind:this={emailEl} required />
    </FormField>
    <FormField label="Enter your password">
      <input type="password" bind:value={password} required />
    </FormField>
    <button disabled={!isValid} on:click={handleLogin}>Login</button>
  </form>
{/if}

<style lang="scss">
  div {
    text-align: center;
  }

  form {
    display: flex;
    flex-flow: column;
    gap: 4rem;
    width: 100%;
  }

  button {
    align-self: start;
  }
</style>
