export default function titleToSlug(title) {
  return title
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
}
