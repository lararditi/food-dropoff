//Function to render your items


function renderItems(grid) {
  // The `ul` where the items will be inserted
  const gridList = document.getElementById("grid");
  const listItem = document.createElement("div");
  listItem.classList.add('actual-grid')
  let ManhattanTrue = [];
  let ManhattanFalse = [];
  let BrooklynTrue = [];
  let BrooklynFalse = [];
  let QueensTrue = [];
  let QueensFalse = [];
  let BronxTrue = [];
  let BronxFalse = [];

  grid.forEach(function (item) {
    if (item.Manhattan == false) {
      Manhattanelse.push(item);
    } else if (item.Manhattan == true) {
      ManhattanTrue.push(item);
    }
  
  
    if (item.Brooklyn == false) {
      Brooklynelse.push(item);
    } else if (item.Brooklyn == true) {
     BrooklynTrue.push(item);
    }
  
    if (item.Queens == false) {
      Queenselse.push(item);
    } else if (item.Queens == true) {
     QueensTrue.push(item);
    }

    if (item.Bronx == false) {
      Bronxelse.push(item);
    } else if (item.Bronx == true) {
     BronxTrue.push(item);
    }
  

    // “template literals”
    const itemDetails = `
				<div class="data-container ${item.Borough}">
					<div class="data-point" style="">
						<h2 id="all">${item.Borough}</h2>
            <p><em>NTA Name: ${item.NTAName}</p>
						<p><em>Site Name: ${item.SiteName}</p>
						
					</div>
				</div>
			`;

    listItem.insertAdjacentHTML("beforeend", itemDetails); // Which can we then insert

    // You can build logic from your data, too
    if (item.indifferent) {
      // If this is `false`
      listItem.classList.add("indifferent"); // Add this class to the whole `li`
    }


    
  });

    const noisyDetails = document.createElement("p");
    listItem.appendChild(noisyDetails);

    gridList.append(listItem); // Then add the whole `li` into the `ul`
   ;
 }


// Fetch gets your JSON file.
fetch("data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    // And passes the data to the function, above!
    renderItems(response); 
  });
