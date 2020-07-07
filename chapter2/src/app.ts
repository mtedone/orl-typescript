let userInput: unknown;

const button = document.querySelector('button');
if (button) {
  button.addEventListener('click', (e) => {
    console.log(e.target);
  });
}
