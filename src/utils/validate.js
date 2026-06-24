export const checkValidate = (name, email, password) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(
    email,
  );

  const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(
    password,
  );

  if (name !== "" && name.trim().length < 3) {
    return "Name must be at least 3 characters";
  }

  if (!isEmailValid) {
    return "Email is not valid";
  }

  if (!isPasswordValid) {
    return "Password must contain at least 8 characters, 1 uppercase, 1 lowercase and 1 number";
  }

  return null;
};
