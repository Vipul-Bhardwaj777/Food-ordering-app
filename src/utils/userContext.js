import { createContext } from "react";

const userContext = createContext({
  loginUser: "Guest",
});

export default userContext;
