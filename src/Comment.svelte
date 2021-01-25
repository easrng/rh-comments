<script>
  export let comment;
</script>

<div class="comment">
  <div class="userinfo">
    <a href={"https://routinehub.co/user/"+encodeURIComponent(comment.user)} class="user">@{comment.user}</a>
    {#each comment.tags as tag}
      <span class={"tag tag-"+tag.toLowerCase()}>{tag}</span>
    {/each}
    <span class="date">{comment.date}</span>
  </div>
  <div class="body">{comment.body}</div>
  {#if comment.children.length>0}
    <div class="replies">
      {#each comment.children as reply}
        <svelte:self comment={reply} />
      {/each}
    </div>
  {/if}
</div>
