import * as v from "./js/variables.js";
import { getUsers, errorMessage } from "./js/functions.js";

v.form.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = v.search.value.split(" ").join("");
  if (!user) {
    errorMessage("Input cannot be blank");
  } else {
    getUsers(user);
    v.form.reset();
  }
});
