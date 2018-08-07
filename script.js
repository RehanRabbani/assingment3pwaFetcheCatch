if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  }
  function getData(){
      console.log("testing");
      fetch("https://api.github.com/users/octocat/followers ")
      .then(function(response){
          return response.json()
      })
      .then(function(users){
          console.log("data from network",users);
      })
      .catch(function(error){
          console.log("notworking");
      })
  
  caches.match("https://api.github.com/users/octocat/followers").then(function(response){
      if(!response)
      {
          console.log("no data");
      }
      return response.json();
  })
  .then(function(data){
      console.log("data from cache",data);
  })
  .catch(function(){
      console.log("error");
  })
  }