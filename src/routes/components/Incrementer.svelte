<script>
  import { count } from "$lib/store";

  const incrementer = () => {
    count.update((n) => n + 1);
  };
</script>

<button on:click={incrementer}> + </button>
