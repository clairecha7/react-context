import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [userState, setUserState] = useState({
    Claire: true,
    Gunnar: true,
    Ibrahim: true,
    Justin: true,
    Baran: true,
    Noah: true,
    Jason: true,
    Shawaz: true,
    Edanur: true,
    Mehmet: true,
    Musi: true,
    Olga: true,
  });

  const randomUserChange = () => {
    const keys = Object.keys(userState);
    const randomNum = Math.floor(Math.random() * keys.length);
    const newUserState = { ...userState };
    newUserState[keys[randomNum]] = !newUserState[keys[randomNum]];
    setUserState(newUserState);
  };

  return (
    <UserContext.Provider value={{ userState, randomUserChange }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
