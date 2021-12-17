export function validateSize(value) {
  if (value.length < 8) return false;
  else return true;
}
export function validateNumber(value) {
  if (/\d+/.test(value)) return true;
  else return false;
}
export function validateSpecialChar(value) {
  if (/[|\\/~^:,;?!&%$@*{}+]/.test(value)) return true;
  else return false;
}
export function validateMinuscule(value) {
  if (/[a-z]/.test(value)) return true;
}
export function validateMajuscule(value) {
  if (/[A-Z]/.test(value)) return true;
}
export function CompareMdps(value1, value2) {
  if (value1 === value2 && value1 !== "" && value2 !== "") return true;
  else return false;
}
