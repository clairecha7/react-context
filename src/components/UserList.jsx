import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const UserList = () => {
  const { userState, randomUserChange } = useContext(UserContext);

  useEffect(() => {
    const interval = setInterval(randomUserChange, 500);
    return () => clearInterval(interval);
  }, [userState]);

  return (
    <div>
      <h1>User List</h1>
      {Object.keys(userState).map((name, i) => {
        return <p key={i}>{`${name} : ${userState[name] ? "🟢" : "🔴"}`}</p>;
      })}
    </div>
  );
};

export default UserList;
