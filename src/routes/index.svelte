<script lang="ts">
  import { links } from "$lib/data";
</script>

<ol>
  {#each links as { href, title }}
    <li><a {href}>{title}</a></li>
  {/each}
</ol>
