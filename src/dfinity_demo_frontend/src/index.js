import { greet } from "./hooks/index";

window.onload = function () {
  const button = document.getElementById("button");

  button.addEventListener("click", async () => {
    const result = await greet();

    console.log("result", result);

    document.getElementById("result").innerHTML = result;
  });
};
