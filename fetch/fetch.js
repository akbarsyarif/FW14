const url = "https://jsonplaceholder.typicode.com/users";
let fetchName = document.querySelector(".big-container");
let removeBtn = document.getElementById("button");

const getInfo = () => {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.forEach((user) => {
        const fullName = user.name;
        const userEmail = user.email;
        const userPhone = user.phone;

        let newCard = document.createElement("section");
        newCard.className = `card-container`;
        newCard.innerHTML = `
        <div class="card">
          <p class="name">Name: ${fullName}</p>
          <p class="email">Email: ${userEmail}</p>
          <p class="phone">Phone Number: ${userPhone}</p>
        </div>`;

        fetchName.appendChild(newCard);
        removeBtn.remove();
      });
    })
    .catch((error) => console.error(error));
};
