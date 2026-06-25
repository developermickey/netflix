import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
]);

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;

        dispatch(
          addUser({
            uid,
            email,
            displayName,
          })
        );
      } else {
        dispatch(removeUser());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  return <RouterProvider router={appRouter} />;
};

export default Body;