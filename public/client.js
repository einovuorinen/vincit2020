console.log('Client-side code running');

const button = document.getElementById('myButton');
let points = 20;
button.addEventListener('click', function(e) {
  console.log('button was clicked');
  
  

  if (points > 0) fetch('/clicked', {method: 'PUT'})
    .then(function(response) {
      if(response.ok) {
        points -= 1
        console.log(`Click was recorded. You have ${points} points left.`);
        response.text().then(function(data){
            console.log(data)
        })
        return;
      }
      throw new Error('Request failed.');
    })
    .catch(function(error) {
      console.log(error);
    }); else console.log('äijäl ei oo pisteit')
});