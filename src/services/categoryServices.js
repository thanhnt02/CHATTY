export const getCategoryList = async () => {
  const response = await fetch("http://localhost:3002/category");
  const result = await response.json();
  return result;
}