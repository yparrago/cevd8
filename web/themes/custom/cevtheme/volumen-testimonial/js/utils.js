/**
 * Convert text to web Freidly
 * @param {String} text
 * @returns String
 */
function slugify(text) {
  const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;";
  const to = "aaaaaeeeeeiiiiooooouuuunc------";

  const newText = text
    .split("")
    .map((letter, i) =>
      letter.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
    );

  return newText
    .toString() // Cast to string
    .toLowerCase() // Convert the string to lowercase letters
    .trim() // Remove whitespace from both sides of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-y-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}


function getRandomInt(max) {
  max = Math.floor(Math.random() * max);
  return max;
}
