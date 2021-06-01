export const gitHubRepositoryData = [
  {
    "sha": "11b4a9b9d70bc6c3c4fbbdda56d25848faa122fb",
    "node_id": "MDY6Q29tbWl0MzcyMTIxOTY1OjExYjRhOWI5ZDcwYmM2YzNjNGZiYmRkYTU2ZDI1ODQ4ZmFhMTIyZmI=",
    "commit": {
      "author": {
        "name": "Ángel D Barrios",
        "email": "angeldbarriosg11@gmail.com",
        "date": "2021-05-30T09:17:15Z"
      },
      "committer": {
        "name": "Ángel D Barrios",
        "email": "angeldbarriosg11@gmail.com",
        "date": "2021-05-30T09:17:15Z"
      },
      "message": "building use cases",
      "tree": {
        "sha": "1cb5b445f25affbc2d123777364bc58c890f20cf",
        "url": "https://api.github.com/repos/angeldbarrios/git-commit/git/trees/1cb5b445f25affbc2d123777364bc58c890f20cf"
      },
      "url": "https://api.github.com/repos/angeldbarrios/git-commit/git/commits/11b4a9b9d70bc6c3c4fbbdda56d25848faa122fb",
      "comment_count": 0,
      "verification": {
        "verified": false,
        "reason": "unsigned",
        "signature": null,
        "payload": null
      }
    },
    "url": "https://api.github.com/repos/angeldbarrios/git-commit/commits/11b4a9b9d70bc6c3c4fbbdda56d25848faa122fb",
    "html_url": "https://github.com/angeldbarrios/git-commit/commit/11b4a9b9d70bc6c3c4fbbdda56d25848faa122fb",
    "comments_url": "https://api.github.com/repos/angeldbarrios/git-commit/commits/11b4a9b9d70bc6c3c4fbbdda56d25848faa122fb/comments",
    "author": {
      "login": "angeldbarrios",
      "id": 29008696,
      "node_id": "MDQ6VXNlcjI5MDA4Njk2",
      "avatar_url": "https://avatars.githubusercontent.com/u/29008696?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/angeldbarrios",
      "html_url": "https://github.com/angeldbarrios",
      "followers_url": "https://api.github.com/users/angeldbarrios/followers",
      "following_url": "https://api.github.com/users/angeldbarrios/following{/other_user}",
      "gists_url": "https://api.github.com/users/angeldbarrios/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/angeldbarrios/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/angeldbarrios/subscriptions",
      "organizations_url": "https://api.github.com/users/angeldbarrios/orgs",
      "repos_url": "https://api.github.com/users/angeldbarrios/repos",
      "events_url": "https://api.github.com/users/angeldbarrios/events{/privacy}",
      "received_events_url": "https://api.github.com/users/angeldbarrios/received_events",
      "type": "User",
      "site_admin": false
    },
    "committer": {
      "login": "angeldbarrios",
      "id": 29008696,
      "node_id": "MDQ6VXNlcjI5MDA4Njk2",
      "avatar_url": "https://avatars.githubusercontent.com/u/29008696?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/angeldbarrios",
      "html_url": "https://github.com/angeldbarrios",
      "followers_url": "https://api.github.com/users/angeldbarrios/followers",
      "following_url": "https://api.github.com/users/angeldbarrios/following{/other_user}",
      "gists_url": "https://api.github.com/users/angeldbarrios/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/angeldbarrios/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/angeldbarrios/subscriptions",
      "organizations_url": "https://api.github.com/users/angeldbarrios/orgs",
      "repos_url": "https://api.github.com/users/angeldbarrios/repos",
      "events_url": "https://api.github.com/users/angeldbarrios/events{/privacy}",
      "received_events_url": "https://api.github.com/users/angeldbarrios/received_events",
      "type": "User",
      "site_admin": false
    },
    "parents": [
      {
        "sha": "dac7201fe2b5ad64a605dc367ae8c8c4b73a2f87",
        "url": "https://api.github.com/repos/angeldbarrios/git-commit/commits/dac7201fe2b5ad64a605dc367ae8c8c4b73a2f87",
        "html_url": "https://github.com/angeldbarrios/git-commit/commit/dac7201fe2b5ad64a605dc367ae8c8c4b73a2f87"
      }
    ]
  },
];

export const gitRemote = { 
  gitUsername: 'angeldbarrios', 
  gitRepository: 'git-commit' 
};


// find a better name for this
export const finalCommitsData =  gitHubRepositoryData.map(commit => {
  return {
    sha: commit.sha,
    author: commit.commit.author,
    message: commit.commit.message,
    url: commit.commit.url,
  };
});