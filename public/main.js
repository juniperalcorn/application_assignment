fetch(`http://localhost:3000/quote`, {
  headers: {
    "Access-Control-Allow-Origin" : "*", 
  }
})
.then(r => r.json())
.then(data => {
  document.getElementById("quote").innerText = data.quote;
})
.catch(err=>console.log(err));