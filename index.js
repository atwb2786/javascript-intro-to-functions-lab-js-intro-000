
function shout(string) {
  return string.toUpperCase();
}

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
  return 'I can\'t hear you!';
} else if (string === string.toUpperCase()) {
    return 'YES INDEED!';
  }
}
