//STEP 1
// favMovies = ['Goodfellas', 'Joe Dirt', 'Tommy Boy', 'Gran Turino', 'V for Vendetta'];
// console.log(favMovies[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = 'GoodFellas';
// movies[1] = 'Joe Dirt';
// movies[2] = 'Tommy Boy';
// movies[3] = 'Gran Turino';
// movies[4] = 'V for Vendetta';
// console.log(movies[0]);

//STEP 3
// let movies = new Array(5);
// movies[0] = 'GoodFellas';
// movies[1] = 'Joe Dirt';
// movies[2] = 'Star Wars';
// movies[3] = 'Tommy Boy';
// movies[4] = 'Gran Turino';
// movies[5] = 'V for Vendetta';
// console.log(movies.length);

//STEP 4
// let movies = [];
// movies[0] = 'GoodFellas';
// movies[1] = 'Joe Dirt';
// movies[2] = 'Star Wars';
// movies[3] = 'Tommy Boy';
// movies[4] = 'Gran Turino';
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = [];
// movies[0] = 'GoodFellas';
// movies[1] = 'Joe Dirt';
// movies[2] = 'Star Wars';
// movies[3] = 'Tommy Boy';
// movies[4] = 'Gran Turino';
// movies[5] = 'V for Vendetta';
// movies[6] = 'Predator';
// for (const movie in movies) {
//     console.log(movies[movie]);
// };

//STEP 6
// let movies = [];
// movies[0] = 'GoodFellas';
// movies[1] = 'Joe Dirt';
// movies[2] = 'Star Wars';
// movies[3] = 'Tommy Boy';
// movies[4] = 'Gran Turino';
// movies[5] = 'V for Vendetta';
// movies[6] = 'Predator';
// for (const movie of movies) {
//     console.log(movie);
// };

//STEP 7
// let movies = [];
// movies[0] = 'GoodFellas';
// movies[1] = 'Joe Dirt';
// movies[2] = 'Star Wars';
// movies[3] = 'Tommy Boy';
// movies[4] = 'Gran Turino';
// movies[5] = 'V for Vendetta';
// movies[6] = 'Predator';
// for (const movie of movies) {
//     movies.sort();
//     console.log(movie);
// };

//STEP 8
// let movies = [];
// let leastFavMovies = [];

// movies[0] = 'GoodFellas';
// movies[1] = 'Joe Dirt';
// movies[2] = 'Star Wars';
// movies[3] = 'Tommy Boy';
// movies[4] = 'Gran Turino';
// movies[5] = 'V for Vendetta';
// movies[6] = 'Predator';
// leastFavMovies[0] = 'Trolls';
// leastFavMovies[1] = 'Wolf\'s Creek';
// leastFavMovies[2] = 'Requiem For A Dream';

// console.log(`Movies I like:`)
// console.log('');
// for (const movie of movies) {
//     console.log(`${movie}`);
// };

// console.log('')
// console.log(`Movies I Regret Watching:`)
// console.log('');
// for (const movie of leastFavMovies) {
//     console.log(`${movie}`);
// };

//STEP 9
// let movies = [];
// let leastFavMovies = [];

// movies[0] = 'GoodFellas';
// movies[1] = 'Joe Dirt';
// movies[2] = 'Star Wars';
// movies[3] = 'Tommy Boy';
// movies[4] = 'Gran Turino';
// movies[5] = 'V for Vendetta';
// movies[6] = 'Predator';
// leastFavMovies[0] = 'Trolls';
// leastFavMovies[1] = 'Wolf\'s Creek';
// leastFavMovies[2] = 'Requiem For A Dream';

// let newMoviesArray = movies.concat(leastFavMovies);
// console.log(newMoviesArray.sort().reverse())

//STEP 10
// let movies = [];
// let leastFavMovies = [];

// movies[0] = 'GoodFellas';
// movies[1] = 'Joe Dirt';
// movies[2] = 'Star Wars';
// movies[3] = 'Tommy Boy';
// movies[4] = 'Gran Turino';
// movies[5] = 'V for Vendetta';
// movies[6] = 'Predator';
// leastFavMovies[0] = 'Trolls';
// leastFavMovies[1] = 'Wolf\'s Creek';
// leastFavMovies[2] = 'Requiem For A Dream';

// let newMoviesArray = movies.concat(leastFavMovies);
// console.log(newMoviesArray.findIndex(newMoviesArray => newMoviesArray === 'Requiem For A Dream'));

//STEP 11
// let movies = [];
// let leastFavMovies = [];

// movies[0] = 'GoodFellas';
// movies[1] = 'Joe Dirt';
// movies[2] = 'Star Wars';
// movies[3] = 'Tommy Boy';
// movies[4] = 'Gran Turino';
// movies[5] = 'V for Vendetta';
// movies[6] = 'Predator';
// leastFavMovies[0] = 'Trolls';
// leastFavMovies[1] = 'Wolf\'s Creek';
// leastFavMovies[2] = 'Requiem For A Dream';

// let newMoviesArray = movies.concat(leastFavMovies);

// console.log(newMoviesArray.indexOf('GoodFellas'));

//STEP 12
// let movies = [];
// let leastFavMovies = [];

// movies[0] = 'GoodFellas';
// movies[1] = 'Joe Dirt';
// movies[2] = 'Star Wars';
// movies[3] = 'Tommy Boy';
// movies[4] = 'Gran Turino';
// movies[5] = 'V for Vendetta';
// movies[6] = 'Predator';
// leastFavMovies[0] = 'Trolls';
// leastFavMovies[1] = 'Wolf\'s Creek';
// leastFavMovies[2] = 'Requiem For A Dream';

// let newMoviesArray = movies.concat(leastFavMovies);
// let lastMovie = newMoviesArray.find((value, index) => {
//     return value >= newMoviesArray[7]; 
// });
// console.log(lastMovie);

//STEP 13

//STEP 14

//STEP 15

//STEP 16

//STEP 17