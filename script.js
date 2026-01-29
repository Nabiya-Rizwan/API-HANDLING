let wrapper = document.getElementById("album-wrapper");
let user
let userAlbums = async () => {

  console.log("Hello World To All Devs");
  try {
    await fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(  data => user = data)
console.log(user);

    user.map((value) => {
      wrapper.innerHTML += `
                <div class="card" style="width: 18rem;">
              
  <div class="card-body">
    <h5 class="card-title">${value.title}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">${value.userId}</h6>
    <p class="card-text">${value.id}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
`
    })
  } catch (error) {
    // console.log(error.message);
    console.log(error.message);
    

  }



}
userAlbums()