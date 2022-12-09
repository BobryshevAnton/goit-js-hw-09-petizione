import Notiflix from 'notiflix';

const form = document.querySelector('.form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  for (let i = 0; i < amount.value; i += 1) {
    let stepPass = Number(delay.value) + Number(step.value) * i;
    let position = i + 1;
    createPromise(position, stepPass)
      .then(value => {
        Notiflix.Notify.success(value);
      })
      .catch(value => {
        Notiflix.Notify.failure(value);
      });
    // .finally(value => {
    //   Notiflix.Notify.info(`✅ Fulfilled promise`);
    // });
  }
});
function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
}
