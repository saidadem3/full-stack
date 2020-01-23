const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve(1);
    reject(
      new Error(
        'this error message is stored in the error object and is displayed by calling the message property of err'
      )
    );
  }, 2000);
});

//then returns the result
//catch returns the result
p.then(result => console.log('Result', result)).catch(err =>
  console.log('Error:', err.message)
);
