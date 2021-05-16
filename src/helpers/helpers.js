export function forceInt(input) {
  try {
    return parseInt(input, 10);
  } catch {
    return 0;
  }
}
