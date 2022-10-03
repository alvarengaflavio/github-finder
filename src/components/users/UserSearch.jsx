import { useState, useContext } from "react";
import { searchUsers } from "../../contexts/github/GithubActions";
import GithubContext from "../../contexts/github/GithubContext";
import AlertContext from "../../contexts/alert/AlertContext";

export const UserSearch = () => {
  const [text, setText] = useState(() => "");
  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitText = text.trim();

    if (submitText === "") {
      setAlert("Please enter a text", "error");
      return;
    }

    // @todo search users
    dispatch({ type: "SET_LOADING" });

    const responseUsers = await searchUsers(submitText);

    dispatch({
      type: "GET_USERS",
      payload: responseUsers,
    });

    setText(() => "");
  };

  const handleClear = () => {
    if (users.length > 0) dispatch({ type: "CLEAR_USERS" });
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
