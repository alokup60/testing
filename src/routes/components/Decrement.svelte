<script>
  import { count } from "$lib/store";

  const decrement = () => {
    count.update((n) => n - 1);
  };
</script>

<button on:click={decrement}> - </button>
