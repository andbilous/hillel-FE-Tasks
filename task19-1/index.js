  let reposList = document.querySelector('#repos');
  let repos = [];
  fetch('https://api.github.com/orgs/hillel-front-end')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      fetch(data.repos_url)
        .then(response => response.json())
        .then(data => {
          repos = Array.from(data);
        }).then(() => {
          repos.forEach((repo) => {
            let reposListRow = document.createElement('tr');
            let repoName = document.createElement('td');
            repoName.innerHTML = repo.name;
            reposListRow.appendChild(repoName);
            let defBranch = document.createElement('td');
            defBranch.innerHTML = repo.default_branch;
            reposListRow.appendChild(defBranch);
            let lastUpdate = document.createElement('td');
            lastUpdate.innerHTML = repo.updated_at;
            reposListRow.appendChild(lastUpdate);
            fetch(repo.languages_url)
              .then(response => response.json())
              .then(data => {
                let repoLangs = document.createElement('td');
                repoLangs.innerHTML = Object.keys(data);
                reposListRow.appendChild(repoLangs);
              })
            reposList.appendChild(reposListRow);
          });
        });
    })