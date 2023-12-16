<script>
  import Nested from "./Nested.svelte";

  let num = 4;
  $: dblNum = num * 2;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
  <h2 style="font-weight: bold; color: red; font-size:large">
    This is Home Page
  </h2>
  <p>Num: {num}</p>
  <p>Doubled: {dblNum}</p>
  <div>
    <button on:click={() => num++}>Increment</button>
    <button on:click={() => (num = 0)}>Reset</button>
  </div>
  <Nested x="20" />
  <a href="/PropsObj">click me</a>
  <a href="/Form">Go to Form</a>
  <a href="/SelectForm">Select Form </a>
  <a href="/FormTest">Testing</a>
  <a href="/Store">Store</a>
  <!-- <a href="/ContextApi">Context Api</a> -->
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
