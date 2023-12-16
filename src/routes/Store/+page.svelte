<script>
  import { count } from "$lib/store";
  import Incrementer from "../components/Incrementer.svelte";
  import Decrement from "../components/Decrement.svelte";
  import Reset from "../components/Reset.svelte";
</script>

<h1>The count is {$count}</h1>

<Incrementer />
<Decrement />
<Reset />
