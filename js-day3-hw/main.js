/* Function to get input value of season and round to call API to display as a table */

async function getRacer() {
  const seasonInput = document.getElementById("season").value;
  const roundInput = document.getElementById("round").value;

  try {
    // Call API 
    const response = await fetch(
      `https://ergast.com/api/f1/${seasonInput}/${roundInput}/driverStandings.json`
    );
    const data = await response.json();
    console.log(data);

    // Indexing into API
    const driverStandings =
      data.MRData.StandingsTable.StandingsLists[0].DriverStandings;

    // Creating const for both #dataTable and tbody to overwrite content
    const tableBody = document.querySelector("#dataTable tbody");

    // Setting const tableBody to empty string
    tableBody.innerHTML = "";
    
    // .forEach() method which calls on the driverStandings' array and for each element in the array, the arrow function is executed with driver parameter
    driverStandings.forEach((driver) => {
      const row = `
      <tr>
        <td>${driver.position}</td>
        <td>${driver.Driver.givenName + " " + driver.Driver.familyName}</td>
        <td>${driver.Driver.nationality}</td>
        <td>${driver.Constructors[0].name}</td>
        <td>${driver.points}</td>
        <td>${driver.wins}</td>
      </tr>
    `;
    // Add const row into tableBody's innerHTML 
      tableBody.innerHTML += row;
    });
  } catch (error) {
    console.log(error);
  }
}

