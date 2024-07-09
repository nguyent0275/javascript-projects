import * as v from "./variables.js";

// GET USERS
export const getUsers = async function (username) {
  const response = await fetch(v.API_URL + username);
  const data = await response.json();
  console.log(data);

  if (!response.ok) errorMessage("User not found");

  displayData(data);
  getRepos(username);
};

export const errorMessage = function (msg) {
  v.profile.innerHTML = "";
  document.querySelector(".hide").style.display = "none";
  return (v.repos.innerHTML = `<p class="alert alert-danger">
                ${msg}
              </p>`);
};

const displayData = function (user) {
  const html = `<img
                src="${user.avatar_url}"
                alt="${user.name}"
                class="img-thumbnail rounded-circle"
              />
              <h2>${user.name}</h2>
              <p>${user.login}</p>
              <div class="d-grid">
                <a href="${user.html_url}" target="_blank"class="btn btn-outline-secondary">View Profile</a>
              </div>
              <p class="pt-2">
                <span>${user.followers} Followers</span>
                <span>${user.following} Following</span>
              </p>
              <p>${user.public_repos}</p>
              <p><i class="fas fa-marker-alt"></i>${user.location}</p> `;

  v.profile.innerHTML = html;
};

const getRepos = async function (username) {
  const response = await fetch(v.API_URL + username + "/repos");
  const data = await response.json();
  console.log(data);

  displayRepos(data);
};

const displayRepos = function (repoData) {
  console.log(repoData);
  let repo_data = repoData.map((repo) => {
    return `<span class="repo border border-rounded p-3">
                <a href="${repo.html_url}" target="_blank" rel="noopener">${repo.name}</a>
                <p>
                  <strong>Stars: ${repo.stargazers_count} |</strong>
                  <strong>Watchers: ${repo.watchers_count} |</strong>
                  <strong>Forks: ${repo.forks_count} </strong>
                </p>
            </span>`;
  });
  v.repos.innerHTML = repo_data.slice(0, 8).join("");
  document.querySelector(".hide").style.display = "block";
};
