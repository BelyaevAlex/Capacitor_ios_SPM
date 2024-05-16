import Echo from './app.js';

async function main(){
    const { value } = await Echo.echo({ value: 'Hello World!' });
    console.log('Response from native:', value);
}

document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("myButton");
    button.addEventListener("click", function() {
      main();
    });
  });