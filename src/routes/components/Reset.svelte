<script>
  import { count } from "$lib/store";

  const reset = () => {
    count.set(0);
  };
</script>

<button on:click={reset}>Reset</button>
