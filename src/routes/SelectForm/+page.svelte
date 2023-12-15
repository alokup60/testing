<script>
  let questions = [
    {
      id: 1,
      text: `Where did you go to school?`,
    },
    {
      id: 2,
      text: `What is your mother's name?`,
    },
    {
      id: 3,
      text: `What is another personal fact that an attacker could easily find with Google?`,
    },
  ];
  let selected;
  let answer = "";

  const submitHandler = (e) => {
    console.log(`object ${selected.id}: ${selected.text} with ${answer}`);
    // console.log(e.target.value);
  };
</script>

<section>
  <form on:submit|preventDefault={submitHandler}>
    <select bind:value={selected} on:change={() => (answer = "")}>
      {#each questions as { id, text }}
        <option value={id}>{text}</option>
      {/each}
    </select>

    <input type="text" bind:value={answer} />
    <button>Submit</button>
  </form>
</section>
