<script>
  const formValues = {
    name: "",
    pfSummary: "",
    country: "",
    remoteWork: false,
    skillset: [],
    yearsOfExp: "",
  };

  const submitHandler = () => {
    console.log(formValues);
  };
</script>

<section>
  <div>
    {JSON.stringify(formValues, null, 2)}
  </div>
  <form on:submit|preventDefault={submitHandler}>
    <div>
      <label for="name">Name</label>
      <input type="text" name="name" id="name" bind:value={formValues.name} />
    </div>
    <div>
      <label for="pf">Profile Summary</label>
      <input
        type="textarea"
        name="pf"
        id="pf"
        bind:value={formValues.pfSummary}
      />
    </div>
    <div>
      <label for="country">Country</label>
      <select name="country" id="country" bind:value={formValues.country}>
        <option value="">Select Country</option>
        <option value="india">India</option>
        <option value="australia">Australia</option>
        <option value="usa"> USA </option>
      </select>
    </div>

    <!-- //single checkbox -->
    <div>
      <input
        type="checkbox"
        id="remoteWork"
        bind:checked={formValues.remoteWork}
      />
      <label for="remoteWork">Remote Work</label>
    </div>

    <!-- multiple checkbox -->
    <div>
      <label>Skill Set</label>
      <input
        type="checkbox"
        id="html"
        value="html"
        bind:group={formValues.skillset}
      />
      <label for="html">HTML</label>
      <input
        type="checkbox"
        id="css"
        value="css"
        bind:group={formValues.skillset}
      />
      <label for="css">CSS</label>
      <input
        type="checkbox"
        id="js"
        value="js"
        bind:group={formValues.skillset}
      />
      <label for="js">JS</label>
    </div>

    <div>
      <label>Experience</label>
      <input
        type="radio"
        id="0-2"
        value="0-2"
        bind:group={formValues.yearsOfExp}
      />
      <label for="0-2">0-2</label>
      <input
        type="radio"
        value="3-5"
        id="3-5"
        bind:group={formValues.yearsOfExp}
      />
      <label for="3-5">3-5</label>
      <input
        type="radio"
        value="5-7"
        id="5-7"
        bind:group={formValues.yearsOfExp}
      />
      <label for="5-7">5-7</label>
    </div>

    <button>Submit</button>
  </form>
</section>
