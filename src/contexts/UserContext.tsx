"use client";
import {
  ActionDispatch,
  createContext,
  ReactNode,
  useEffect,
  useReducer,
} from "react";

const STORAGE_KEY = "userContextContent";

type User = {
  name: string;
  token: string;
};

const initialState: User = {
  token: "fsfse", //temos que utilizar o persist para esse token
  name: "Jean",
};

type SetNameAction = {
  type: "SET_NAME";
  payload: {
    name: string;
  };
};

type SetTokenAction = {
  type: "SET_TOKEN";
  payload: {
    token: string;
  };
};

type UserActions = SetTokenAction | SetNameAction;

const userReducer = (user: User, action: UserActions) => {
  switch (action.type) {
    case "SET_TOKEN":
      user = { ...user, token: action.payload.token };
      break;
    case "SET_NAME":
      user = { ...user, name: action.payload.name };
      break;
  }

  return user;
};

type UserContextType = null | {
  user: User;
  dispatch: ActionDispatch<[action: UserActions]>;
};
export const UserContext = createContext<UserContextType>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const storedUser =
    typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
  const parsedUser: User = storedUser ? JSON.parse(storedUser) : initialState;
  const [user, dispatch] = useReducer(userReducer, parsedUser);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
/*
https://alunos.b7web.com.br/curso/reactjs/controle-de-acesso
minuto 8:25
*/
