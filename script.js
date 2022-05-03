const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?type=single";
// const text =
//   "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum nostrum saepe quas magni pariatur suscipit similique asdasdasdasdasdasdasdas officia. Est voluptas expedita quam ipsa eveniet laborum dolore rem deleniti dignissimos eum.";

const getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};

btn.addEventListener("click", getJoke);
getJoke();
