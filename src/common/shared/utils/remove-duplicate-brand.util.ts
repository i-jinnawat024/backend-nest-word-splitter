export function removeDuplicateBrand(input: string): string {
  const tokens = input.trim().split(/\s+/);
  if (tokens.length > 1 && tokens[0].toLowerCase() === tokens[1].toLowerCase()) {
    tokens.splice(1, 1);
  }
  return tokens.join(' ');
}