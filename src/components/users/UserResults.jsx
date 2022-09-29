import { useEffect, useState } from "react";
import { LoadingSpinner } from "../layout/LoadingSpinner";

export const UserResults = () => {
  const [users, setUsers] = useState(() => []);
  const [isloading, setIsloading] = useState(() => true);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${import.meta.env.VITE_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    setUsers(() => data);
    setIsloading(() => false);
  };

  if (isloading) return <LoadingSpinner />;

  return (
    <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {users.map((user, i) => (
        <h3 key={i}>{user.login}</h3>
      ))}
    </div>
  );
};
