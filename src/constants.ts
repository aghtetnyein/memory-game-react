const Numbers4x4 = Array(8)
  .fill(0)
  .map((_, index) => index + 1)
  .concat(
    Array(8)
      .fill(0)
      .map((_, index) => index + 1)
  )
  .sort(() => Math.random() - 0.5);

const Numbers6x6 = Array(18)
  .fill(0)
  .map((_, index) => index + 1)
  .concat(
    Array(18)
      .fill(0)
      .map((_, index) => index + 1)
  )
  .sort(() => Math.random() - 0.5);

const Icons4x4 = [
  "cat",
  "burger",
  "fish",
  "carrot",
  "seedling",
  "candyCone",
  "iceCream",
  "egg",
  "cat",
  "burger",
  "fish",
  "carrot",
  "seedling",
  "candyCone",
  "iceCream",
  "egg",
].sort(() => Math.random() - 0.5);

const Icons6x6 = [
  "cat",
  "burger",
  "fish",
  "carrot",
  "seedling",
  "candyCone",
  "iceCream",
  "egg",
  "car",
  "rocket",
  "wine",
  "hat",
  "umbrella",
  "crown",
  "guitar",
  "drum",
  "battery",
  "dog",
  "cat",
  "burger",
  "fish",
  "carrot",
  "seedling",
  "candyCone",
  "iceCream",
  "egg",
  "car",
  "rocket",
  "wine",
  "hat",
  "umbrella",
  "crown",
  "guitar",
  "drum",
  "battery",
  "dog",
].sort(() => Math.random() - 0.5);

export { Numbers4x4, Numbers6x6, Icons4x4, Icons6x6 };
