import { useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import GithubContext from "../contexts/github/GithubContext";
import { LoadingSpinner } from "../components/layout/LoadingSpinner";
import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";

export const User = () => {
  const { user, getUser, isLoading } = useContext(GithubContext);

  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            back to search
          </Link>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt={"picure of " + name} />
              </figure>
              <div className="card-body justify-end items-start text-left">
                <h2 className="card-title mb-0">{name}</h2>
                <p className="font-normal text-sm">{"/" + login}</p>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title justify-center">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p className="mt-2">{bio}</p>
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outine mt-2"
              >
                Visit Github Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
