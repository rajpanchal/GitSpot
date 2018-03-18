
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {
      ok = this.responseText;
      var objj = JSON.parse(ok);
      document.getElementById('demo-1').innerHTML = "Login-ID : " + objj.login;
      document.getElementById('demo-2').innerHTML = "Number of public repos : " + objj.public_repos;
      document.getElementById('demo-3').innerHTML = "Following : "+objj.following;
      document.getElementById('demo-4').innerHTML = "Followers : "+objj.followers; 
      document.getElementById('profileimg').src=objj.avatar_url;
      var xhttp2 = new XMLHttpRequest();
      xhttp2.onreadystatechange = function(){
        if(this.status == 404){
          document.getElementById('demo-1').innerHTML = "Sorry, username doesn't exist.";
        }
      }
    }
    else if(this.status == 404){
      document.getElementById('demo-1').innerHTML = "Sorry, username entered doesn't exist";
    }
  };
  var x = document.getElementById('username').value;
  xhttp.open("GET", "https://api.github.com/users/"+x, true);
  xhttp.send();
}
