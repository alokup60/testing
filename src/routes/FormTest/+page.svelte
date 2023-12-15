<script>
  const formValues = {
    name: "",
    pfSummary: "",
    country: "",
    jobLocation: [],
  };
</script>

<section>
  <div>
    {JSON.stringify(formValues, null, 2)}
  </div>
  <form>
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
    <div>
      <label for="jobLocation">Job Location</label>
      <select
        name="jobLocation"
        id="jobLocation"
        bind:value={formValues.jobLocation}
        multiple
      >
        <option value="">Select Job location</option>
        <option value="india">India</option>
        <option value="australia">Australia</option>
        <option value="usa"> USA </option>
      </select>
    </div>
  </form>
</section>
