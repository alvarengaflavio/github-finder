import React from "react";
import PropTypes from "prop-types";
import { RepoItem } from "./RepoItem";

export const Repos = ({ repos }) => {
  return (
    <div className="rounded-lg shadow-lg card bg-base-100">
      <div className="card-body">
        <h2 className="text-3x-l my-4 font-bold card-title justify-center md:justify-start">
          Latest Repositories
        </h2>
        {repos.map((repo) => (
          <RepoItem repo={repo} key={repo.id} />
        ))}
      </div>
    </div>
  );
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};
