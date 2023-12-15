<script>
  let cars = [
    {
      name: "Ford",
      year: 2007,
    },
    {
      name: "Hyundai",
      year: 2010,
    },
  ];

  let carName = "";
  let carYear = "";
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(`${carName} ${carYear}`);
    console.log(carName);

    //validation
    if (carName.length > 6) {
      alert("You Car anme should be less than 6 characters.");
      return;
    }

    cars = [
      ...cars,
      {
        name: carName,
        year: carYear,
      },
    ];
  };
</script>

<section>
  <form id="formField" on:submit|preventDefault={submitHandler}>
    <div>
      <label>Car Name</label>
      <input type="text" bind:value={carName} name="fname" />
    </div>
    <div>
      <label>Car Year</label>
      <input type="text" bind:value={carYear} name="year" />
    </div>
    <button>Submit</button>
  </form>
</section>

<section>
  <table>
    <tr>
      <th> Name </th>
      <th>year</th>
    </tr>
    {#each cars as { name, year }}
      <tr>
        <td>{name}</td>
        <td>{year}</td>
      </tr>
    {/each}
  </table>
</section>
