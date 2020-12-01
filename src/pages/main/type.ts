export type GitCommit = {
  sha?: string;
  node_id?: string;
  url?: string;
  html_url?: string;
  comments_url?: string;
  author?: GitAuthor;
  committer: GitCommitter;
  parents: any[];
  message?: string;
  commit?: GitCommit;
};

export type GitBaseUser = {
  email?: string;
  name?: string;
  date?: string;
};

export type GitCommitter = GitBaseUser & {
  login?: string;
  id?: string;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin: boolean;
};

export type GitAuthor = GitBaseUser & {
  login?: string;
  id?: string;
  node_id?: string;
  avatar_url?: string;
  gravatar_id?: string;
  url?: string;
  html_url?: string;
  followers_url?: string;
  following_url?: string;
  gists_url?: string;
  starred_url?: string;
  subscriptions_url?: string;
  organizations_url?: string;
  repos_url?: string;
  events_url?: string;
  received_events_url?: string;
  type?: string;
  site_admin: boolean;
};
