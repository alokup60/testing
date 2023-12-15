<script>
  import { data } from "$lib/store";
  import { get } from "svelte/store";

  function myfanc() {
    data.set({
      name: "Anshul",
      speed: "200",
      version: 0,
      website: "google.com",
    });
  }
</script>

<section>
  <p>
    The <code>{$data.name}</code> package is {$data.speed} fast. Download version
    {$data.version} from
    <a href="https://www.npmjs.com/package/{$data.name}">npm</a>
    and <a href={$data.website}>learn more here</a>
  </p>
  <button on:click={myfanc}>click</button>
</section>
