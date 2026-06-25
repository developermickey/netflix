import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  // Redux store se user data
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        navigate("/");
      });
  };

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <div className="fixed top-0 left-0 z-50 flex h-24 w-full items-center justify-between bg-gradient-to-b from-black px-10 text-white">
      <img
        className="w-48"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix logo"
      />

      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <img
              className="h-8 w-8 rounded-md"
              src="https://i.pinimg.com/474x/1b/71/b8/1b71b85dd741ad27bffa5c834a7ed797.jpg"
              alt="User Icon"
            />

            <p className="font-medium">{user.displayName || "User"}</p>

            <button
              onClick={handleSignOut}
              className="rounded bg-red-600 px-4 py-2 font-semibold hover:bg-red-700"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleLogin}
            className="rounded bg-red-600 px-4 py-2 font-semibold hover:bg-red-700"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;