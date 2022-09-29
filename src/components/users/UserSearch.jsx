import { useState, useContext } from "react";
import GithubContext from "../../contexts/github/GithubContext";

export const UserSearch = () => {
  const [text, setText] = useState(() => "");
  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitText = text.trim();

    if (submitText === "") {
      alert("Please enter a text");
      return;
    }

    // @todo serach users
    searchUsers(submitText);
    setText(() => "");
  };

  const handleClear = () => {
    if (users.length > 0) clearUsers();
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text black"
                placeholder="Search"
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rouded-l-none w-36 btn btn-lg"
              >
                go
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg" onClick={handleClear}>
            Clear
          </button>
        </div>
      )}
      {/* Only shows the Clear btn if users has values */}
    </div>
  );
};
