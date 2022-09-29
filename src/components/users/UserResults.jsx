import { useContext, useEffect } from "react";
import GithubContext from "../../contexts/github/GithubContext";
import { LoadingSpinner } from "../layout/LoadingSpinner";
import { UserItem } from "./UserItem";

export const UserResults = () => {
  const { users, isLoading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};
