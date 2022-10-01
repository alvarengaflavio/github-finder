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
    blog,
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
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="relative rounded-lg shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt={"picure of " + name} />
              </figure>
              <div className="card-body ">
                <h2 className="card-title mb-0 absolute left-1/12 bottom-1/5">
                  {name}
                </h2>
                <p className="font-normal text-sm absolute left-1/12  bottom-1/6">
                  {"/" + login}
                </p>
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
              <div className="mt-4 card-actions"></div>
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline mt-1"
              >
                Visit Github Profile
              </a>

              <div className="w-full rounded-lg shadow-md bg-base-100 stats flex flex-wrap overflow-hidden ">
                {location && (
                  <div className="stat">
                    <div className="stat-title text-lg">Location</div>
                    <div className="text-base stat-value -mt-1">{location}</div>
                  </div>
                )}

                {blog && (
                  <div className="stat -mt-8">
                    <div className="stat-title text-lg">Website</div>
                    <div className="text-base stat-value -mt-1">
                      <a href={blog} target="_blank" rel="noreferrer">
                        {blog}
                      </a>
                    </div>
                  </div>
                )}

                {twitter_username && (
                  <div className="stat -mt-8">
                    <div className="stat-title text-lg">Twitter</div>
                    <div className="text-base stat-value -mt-1">
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats overflow-hidden flex flex-wrap md:flex-nowrap">
          <div className="stat sm:basis-1/2">
            <div className="stat-figure text-secondary">
              <FaUsers className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Followers</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {followers}
            </div>
          </div>

          <div className="stat sm:basis-1/2">
            <div className="stat-figure text-secondary">
              <FaUserFriends className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Following</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {following}
            </div>
          </div>

          <div className="stat sm:basis-1/2">
            <div className="stat-figure text-secondary">
              <FaCodepen className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Repos</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_repos}
            </div>
          </div>

          <div className="stat sm:basis-1/2">
            <div className="stat-figure text-secondary">
              <FaStore className="text-3xl md:text-5xl" />
            </div>
            <div className="stat-title pr-5">Public Gists</div>
            <div className="stat-value pr-5 text-3xl md:text-4xl">
              {public_gists}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
