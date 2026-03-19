export const validateText = (text) => {
  if (!text || typeof text !== "string") {
    return "Invalid input";
  }

  if (text.trim().length === 0) {
    return "Text cannot be empty";
  }

  return null;
};