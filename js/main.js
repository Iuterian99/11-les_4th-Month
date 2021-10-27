const elElementList = document.querySelector(".movie-list");
const elTemplate = document.querySelector("#movie__template").content;


function renderElem(arr, element) {
  element.innerHTML = null;

  const elementFragement = document.createDocumentFragment();

  arr.forEach((el) => {
    elementTamplate = elTemplate.cloneNode(true);

    elementTamplate.querySelector(".movie-img").src = el.avatar;
    elementTamplate.querySelector(".movie-img").alt = el.first_name + " cover";
    elementTamplate.querySelector(".movie-name").textContent = "Name: " + el.first_name;
    elementTamplate.querySelector(".movie-email").textContent = "Email: " + el.email;

    elementFragement.appendChild(elementTamplate);
  });
  element.appendChild(elementFragement);
}


;
(async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const datas = await response.json();
    renderElem(datas.data, elElementList);
  } catch (error) {

  }

})()

// {id: 1, email: 'george.bluth@reqres.in', first_name: 'George', last_name: 'Bluth', avatar: 'https://reqres.in/img/faces/1-image.jpg