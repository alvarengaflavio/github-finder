import { UserResults } from "../components/users/UserResults";

export const Home = () => {
  return (
    <>
      <h1 className="text-6xl">Welcome</h1>
      {/* SEARCH COMPONENT */}
      <UserResults />
    </>
  );
};
