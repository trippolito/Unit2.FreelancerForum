const freelancers = [
  { name: "Dr. Slice", occupation: "gardener", startingPrice: 25 },
  { name: "Dr. Pressure", occupation: "programmer", startingPrice: 51 },
  { name: "Prof. Possibility", occupation: "teacher", startingPrice: 43 },
  { name: "Prof. Prism", occupation: "teacher", startingPrice: 81 },
  { name: "Dr. Impulse", occupation: "teacher", startingPrice: 43 },
  { name: "Prof. Spark", occupation: "programmer", startingPrice: 76 },
  { name: "Dr. Wire", occupation: "teacher", startingPrice: 47 },
  { name: "Prof. Goose", occupation: "driver", startingPrice: 72 },
];

let sumAllFreelancers = 0;
const liArray = [];

const infoBox = document.createElement("div");

const h1MainTitle = document.createElement("h1");
const h3AvPrice = document.createElement("h3");
const h2AvFree = document.createElement("h2");
const hireBoard = document.createElement("div");
const listHeader = document.createElement("h3");
const ulFree = document.createElement("ul");

h1MainTitle.innerHTML = "Freelancer Finder";
h3AvPrice.innerHTML = "";
h2AvFree.innerHTML = "Available Freelancers";
listHeader.innerHTML = "Freelancers";

document.body.appendChild(infoBox);
document.body.appendChild(hireBoard);
infoBox.appendChild(h1MainTitle);
infoBox.appendChild(h3AvPrice);
infoBox.appendChild(h2AvFree);
hireBoard.appendChild(listHeader);
hireBoard.appendChild(ulFree);

for (let i = 0; i < freelancers.length; i++) {
  const element = freelancers[i];
  console.log(element);
  sumAllFreelancers += element.startingPrice;
  liArray[i] = document.createElement("li");
  liArray[i].innerHTML = `${element.name}, ${element.occupation},  $${element.startingPrice}/hr`;
  ulFree.appendChild(liArray[i]);
}

const averagePrice = sumAllFreelancers / freelancers.length;
h3AvPrice.innerHTML = `The average price for hiring a Dev is $${averagePrice.toFixed(2)}/hr`;



const containerDiv = document.createElement("div");


containerDiv.style.maxWidth = "800px";
containerDiv.style.margin = "20px auto";
containerDiv.style.border = "2px solid black";
containerDiv.style.borderRadius = "8px";
containerDiv.style.display = "flex";
containerDiv.style.flexDirection = "column";
containerDiv.style.alignItems = "center";
containerDiv.style.backgroundColor = "lightgrey";


document.body.appendChild(containerDiv);
containerDiv.appendChild(infoBox);
containerDiv.appendChild(hireBoard);

h1MainTitle.style.color = "blue";
h2AvFree.style.color = "blue";
h3AvPrice.style.color = "red";
listHeader.style.color = "red";

