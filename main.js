
    // Your web app's Firebase configuration
   
    var Config = {
      apiKey: "",
      authDomain: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: "428566382480",
      appId: "",
      measurementId: ""
    };
    // Initialize Firebase
    firebase.initializeApp(Config);
   
   // Reference messages collection
  var messagesRef = firebase.database().ref(' MENTION YOUR DATABASE COLLECTION NAME');
  
  
    //function to fetch Firebase RTDB data
    getData();  
  
  function getData() 
  {
      firebase.database().ref('MENTION YOUR DATABASE COLLECTION NAME').once('value', function (snapshot)
      {	snapshot.forEach(function(childSnapshot)
          {
              var childKey = childSnapshot.key;
              var childData = childSnapshot.val();
              
              
              var table = document.getElementById("myTable");
              var row = table.insertRow(1);   //insert a new  <tr> at postion 1 
              
			  //created 3 <td> in the current <td>
			  var cell1 = row.insertCell(0);   
              var cell2 = row.insertCell(1);
              var cell3 = row.insertCell(2);
              
              // adding data  to the  row from databse 
              cell1.innerHTML = childData['name'];
              cell2.innerHTML = childData['email'];
              cell3.innerHTML = childData['phone'];  //here 'name' 'email' 'phone' are   keys from my database   =====>make sure to replace with yours 
              
  
  
  
          })
      })
	  
  }  
	  
  
  
