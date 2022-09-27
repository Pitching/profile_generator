const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let personality = {
  name: "",
  activity: "",
  listen: "",
  mealFav: "",
  favDish: "",
  sport: "",
  superpower: ""
};

rl.question('What\'s your name? ', (inp) => {
  personality.name = inp;
  rl.question('What\'s an activity you like doing? ', (inp) => {
    personality.activity = inp;
    rl.question('What music do you listen to? ', (inp) => {
      personality.listen = inp;
      rl.question('Which meal is your favourite? ', (inp) => {
        personality.mealFav = inp;
        rl.question('What is your favourite dish? ', (inp) => {
          personality.favDish = inp;
          rl.question('Which sport is your absolute favourite? ', (inp) => {
            personality.sport = inp;
            rl.question('What is your superpower? ', (inp) => {
              personality.superpower = inp;
              process.stdout.write(`${personality.name} loves listening to ${personality.listen} while ${personality.activity}, devouring ${personality.favDish} for ${personality.mealFav}, prefers ${personality.sport} over any other sport, and their superpower is ${personality.superpower}\n`);
              rl.close();
            });
          });
        });
      });
    });
  });
  if (inp === '\u0003') {
    process.exit();
  }
});