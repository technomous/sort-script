const courses = [
  {
    name: "React",
    price: "2.7",
  },
  {
    name: "Angular",
    price: "1.7",
  },
  {
    name: "MERN",
    price: "3.7",
  },
  {
    name: "C++",
    price: "2.9",
  },
];


function genList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach(course => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    const name = document.createTextNode(course.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");
    const price = document.createTextNode("$" + course.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);


  })
}

window.addEventListener("load", genList());

const button = document.querySelector(".sort-btn")

button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price)
  genList()

})