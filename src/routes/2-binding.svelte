<script lang="ts">
  let count = 0;
</script>

<input type="range" bind:value={count} max="100" />

<nav>
  <button on:click={() => count--}>-</button>
  {count}
  <button on:click={() => count++}>+</button>
</nav>

<style lang="scss">
  input[type="range"] {
    margin-bottom: 5rem;
  }

  nav {
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 5rem 10rem 5rem;
    text-align: center;
  }

  button {
    background: rgba(white, 0.1);
    height: 5rem;
    width: 5rem;

    &:focus-visible {
      outline: 2px solid rgba(white, 0.3);
    }

    &:active {
      background: rgba(white, 0.2);
    }
  }
</style>
