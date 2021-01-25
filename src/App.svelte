<script>
  import { onMount } from "svelte";
  import Comment from './Comment.svelte';
  let rhid=new URLSearchParams(location.search).get("rhid")
  export let comments;
  export let commentLink="https://routinehub.co/shortcut/"+encodeURIComponent(rhid)+"/#:~:text=Feedback,-Leave";

  onMount(async () => {
    const res = await fetch("/api/comments.js?id="+encodeURIComponent(rhid));
    const newComments = await res.json();
    comments = newComments;
    let main=document.querySelector("main");
    new ResizeObserver(()=>window.parent.postMessage({commentHeight:main.getBoundingClientRect().height},"*")).observe(m)
  });
</script>

<main>
  <a href={commentLink} class="button">Post a comment</a>
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
