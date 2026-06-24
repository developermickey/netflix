import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidate } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handlebuttonClick = async (e) => {
    e.preventDefault();

    const nameValue = !isSignInForm ? name.current.value : "";
    const emailValue = email.current.value;
    const passwordValue = password.current.value;

    const message = checkValidate(nameValue, emailValue, passwordValue);
    setErrorMessage(message);

    if (message) return;

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
      } else {
        // SIGN IN
        const userCredential = await signInWithEmailAndPassword(
          auth,
          emailValue,
          passwordValue
        );

        console.log("User Signed In:", userCredential.user);
      }

      setErrorMessage(null);
    } catch (error) {
      setErrorMessage(error.message);
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
          onSubmit={handlebuttonClick}
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
              type="text"
              ref={email}
              placeholder="Email address"
              className="h-14 w-full rounded-md border border-zinc-600 bg-zinc-800/80 px-4 text-white outline-none transition focus:border-white focus:bg-zinc-700 placeholder:text-zinc-400"
            />

            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="h-14 w-full rounded-md border border-zinc-600 bg-zinc-800/80 px-4 text-white outline-none transition focus:border-white focus:bg-zinc-700 placeholder:text-zinc-400"
            />

            {errorMessage && (
              <p className="text-sm font-medium text-red-500">
                {errorMessage}
              </p>
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