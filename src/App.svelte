<script>
  import { onMount } from "svelte";
  import Comment from './Comment.svelte';
  export let comments;

  onMount(async () => {
    const res = await fetch("/api/comments.js?id=6565");
    const newComments = await res.json();
    comments = newComments;
  });
</script>

<main>
  <h1>Comments</h1>
  <div class="comments">
    {#if !comments}
      Loading comments...
    {:else}
      {#each comments as comment}
        <Comment {comment} />
    	{/each}
    {/if}
  </div>
</main>
