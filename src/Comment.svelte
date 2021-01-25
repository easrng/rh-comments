<script>
  export let comment;
</script>

<div class="comment">
  <p>{comment.body}</p>
  {#if comment.children.length>0}
    <div class="replies">
      {#each comment.children as reply}
        <svelte:self comment={reply} />
      {/each}
    </div>
  {/if}
</div>
