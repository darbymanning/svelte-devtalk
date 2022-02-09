<script lang="ts">
  import type { AuthorQuery } from "$lib/queries/schema";

  export let author: AuthorQuery["author"];
</script>

<img src={author.picture.url} alt={author.name} />
{author.name}
<span class="author-title">{author.title}</span>
<p>{author.biography}</p>

<h2>This guy has written some sweet stuff.</h2>
{#each author.posts as post}
  <article>
    <a href={post.slug}>
      <h3>{post.title}</h3>
    </a>
  </article>
{/each}

<style lang="scss">
  img {
    border-radius: 50%;
    width: 10rem;
  }

  p {
    font-size: 1.5rem;
    text-align: center;
  }

  .author-title {
    font-size: 1.2rem;
    letter-spacing: 0.2em;
    margin: 1rem 0;
    text-transform: uppercase;
  }
</style>
