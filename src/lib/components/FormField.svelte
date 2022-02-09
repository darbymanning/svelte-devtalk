<script lang="ts">
  export let label;
</script>

<div>
  <span>{label}</span>
  <slot />
</div>

<style lang="scss">
  div {
    display: flex;
    flex-flow: column;
    gap: 1rem;

    span {
      font-size: 1rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }
  }
</style>
