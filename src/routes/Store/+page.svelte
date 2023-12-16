<script>
  import { count } from "$lib/store";
  import Incrementer from "../components/Incrementer.svelte";
  import Decrement from "../components/Decrement.svelte";
  import Reset from "../components/Reset.svelte";

  let count_val;

  count.subscribe((val) => {
    count_val = val;
  });
</script>

<h1>The count is {count_val}</h1>

<Incrementer />
<Decrement />
<Reset />
