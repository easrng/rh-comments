<script>
  import Comment from './Comment.svelte';
  export let comment;
</script>

<div class="comment">
  <p>{comment.body}</p>
  {#if comment.children.length>1}
    <div class="replies">
      {#each comment.children as reply}
        <:Self comment={reply} />
    	{/each}
    </div>
  {/if}
</div>
