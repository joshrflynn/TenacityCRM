export const CreateValidationMessage = (message: string): string => {
  switch (message) {
    case "Invalid login credentials":
      return "Email or password is incorrect.";
    default:
      return "An unexpected error occured. Please try again";
  }
};
