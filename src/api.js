const budge = {
  bronze: 10,
  silver: 20,
  gold:  30
};
const user = {
  display_name: "Kishan",
  reputation: 1233,
  badge_counts: budge,
  profile_image: "https://www.gravatar.com/avatar/89927e2f4bde24991649b353a37678b9?s=128&d=identicon&r=PG"
};

let array = [];
const totalCount = 5;
for(let i=0;i<totalCount; i++){
  array.push(user);
}

export default () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve(array)
    }, 3000)
  })
}
