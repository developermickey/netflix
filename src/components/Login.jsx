import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = async (e) => {
    e.preventDefault();

    const nameValue = !isSignInForm ? name.current.value : "";
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = checkValidate(nameValue, emailValue, passwordValue);

    if (message) {
      setErrorMessage(message);
      return;
    }

    try {
      if (!isSignInForm) {
        // SIGN UP
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );

        await updateProfile(userCredential.user, {
          displayName: nameValue,
        });

        console.log("User Signed Up:", userCredential.user);
        navigate("/browse");
      } else {
        // SIGN IN
        const userCredential = await signInWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );

        console.log("User Signed In:", userCredential.user);
        navigate("/browse");
      }

      setErrorMessage(null);
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setErrorMessage("Email already exists.");
          break;
        case "auth/invalid-email":
          setErrorMessage("Invalid email address.");
          break;
        case "auth/weak-password":
          setErrorMessage("Password should be at least 6 characters.");
          break;
        case "auth/user-not-found":
          setErrorMessage("User not found.");
          break;
        case "auth/wrong-password":
          setErrorMessage("Incorrect password.");
          break;
        case "auth/invalid-credential":
          setErrorMessage("Invalid email or password.");
          break;
        default:
          setErrorMessage(error.message);
      }
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div className="relative min-h-screen w-full">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a565a928-abda-47bd-860a-55be00b7fefc/web/IN-en-20260615-TRIFECTA-perspective_7ffb95f0-7b86-4dfa-9920-7f5651418d65_large.jpg"
          alt="background"
        />
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Header */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Form */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20">
        <form
          onSubmit={handleButtonClick}
          className="w-full max-w-md rounded-md bg-black/55 px-8 py-10 text-white shadow-2xl backdrop-blur-sm"
        >
          <h1 className="mb-8 text-3xl font-bold">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <div className="space-y-4">
            {!isSignInForm && (
              <input
                type="text"
                ref={name}
                placeholder="Full Name"
                className="h-14 w-full rounded-md border border-zinc-600 bg-zinc-800/80 px-4 text-white outline-none transition focus:border-white focus:bg-zinc-700 placeholder:text-zinc-400"
              />
            )}

            <input
              type="email"
              ref={email}
              placeholder="Email address"
              className="h-14 w-full rounded-md border border-zinc-600 bg-zinc-800/80 px-4 text-white outline-none transition focus:border-white focus:bg-zinc-700 placeholder:text-zinc-400"
            />

            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="h-14 w-full rounded-md border border-zinc-600 bg-zinc-800/80 px-4 text-white outline-none transition focus:border-white focus:bg-zinc-700 placeholder:text-zinc-400"
            />

            {errorMessage && (
              <p className="text-sm font-medium text-red-500">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="h-12 w-full rounded-md bg-red-600 text-lg font-semibold transition hover:bg-red-700"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>

          <div className="mt-8 text-zinc-400">
            {isSignInForm ? (
              <p>
                New to Netflix?{" "}
                <span
                  onClick={toggleSignInForm}
                  className="cursor-pointer font-medium text-white hover:underline"
                >
                  Sign up now
                </span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span
                  onClick={toggleSignInForm}
                  className="cursor-pointer font-medium text-white hover:underline"
                >
                  Sign in now
                </span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;