const p1 = new Promise(resolve => {
  setTimeout(() => {
    console.log('Async operation 1...');
  }, 2000);
});

const p2 = new Promise(resolve => {
  setTimeout(() => {
    console.log('Async operation 2...');
    resolve(2);
  }, 2000);
});

//returns the value of the first completed promise
Promise.race([p1, p2])
  .then(result => console.log(result))
  .catch(err => console.log('Error', err.message));

//returns an array with all the completed promises. displays an error if just one promise is rejected
Promise.all([p1, p2])
  .then(result => console.log(result))
  .catch(err => console.log('Error', err.message));
