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
  //   let val = cars[1];
  //   let email = "";
  //   let password = "";
  //   let age = "";
  //   let yes = false;

  //   const submitHandler = (event) => {
  //     // event.preventDefault();

  //     const formField = document.getElementById("formField");
  //     const data = new FormData(formField);
  //     for (var [key, value] of data.entries()) {
  //       console.log(key, value);
  //     }
  //     console.log(data.entries());
  //     // console.log(event.target.value);
  //     // console.log(`${fname}`);

  //     // console.log(`${name} is your email is ${email} your age is ${age}`);

  //     // console.log(formData);
  //     // console.log(formData.name);
  //     // event.target.reset();
  //   };

  let carName = "";
  let carYear = "";
  const submitHandler = (e) => {
    console.log(`${carName} ${carYear}`);
    console.log(carName);
    // cars = [{ ...cars, carName: "name" }];
    cars.push(carName);
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

<!-- <div>
      <label for="email">Email</label>
      <input type="email" bind:value={email} id="text-field" />
    </div>
    <div>
      <label for="password">Password</label>
      <input type="text" bind:value={password} id="text-field" />
    </div>
    <div>
      <label for="password">Age</label>
      <input type="number" bind:value={age} id="text-field" />
      <input type="range" bind:value={age} min="20" max="50" />
    </div>
    <div>
      <input type="checkbox" bind:checked={yes} />
      <span>Accept terms & conditions</span>
    </div>
    <div>
      {yes
        ? "  Thank you. We will bombard your inbox and sell your personal details."
        : " Shut up"}
    </div> -->
<!-- </section> -->
