export const CreateValidationMessage = (message: string): string => {
  console.log(message);
  switch (message) {
    case "Invalid login credentials":
      return "Email or password is incorrect.";
    case "Password should be at least 8 characters.":
      return "Password must be at least 8 characters long.";
    default:
      return "An unexpected error occured. Please try again.";
  }
};
