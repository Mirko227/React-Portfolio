export const addToRefs = <T extends HTMLElement>(
  el: T | null,
  array: React.MutableRefObject<T[]>
): void => {
  if (el && array && !array.current.includes(el)) {
    array.current.push(el);
  }
};

export const calculateAge = (dateOfBirth : string) => {
  const today = new Date();
  const birthDate = new Date(dateOfBirth);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--;
  }
  return age;
}

export const getCSSVariableValue = (variable: string) => {
  return getComputedStyle(document.documentElement).getPropertyValue(
    variable
  );
};