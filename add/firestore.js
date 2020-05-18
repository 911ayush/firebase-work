 var firebaseConfig = {
    apiKey: "AIzaSyBdeYTpmkVd-GJ6RUbdlR5HNVTGdK9ObSs",
    authDomain: "aajto-c729c.firebaseapp.com",
    databaseURL: "https://aajto-c729c.firebaseio.com",
    projectId: "aajto-c729c",
    storageBucket: "aajto-c729c.appspot.com",
    messagingSenderId: "1083464764398",
    appId: "1:1083464764398:web:9c2aef002f894168939cff",
    measurementId: "G-DX68868CD8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const firestore = firebase.firestore();
function show(doc){
alert(doc.data().cost);
}  



  const form = document.querySelector('#form-message')

  form.addEventListener('submit', (e) => {
	e.preventDefault();
        	firestore.collection("city").doc(form.city.value).set({
      created:"yes"
    })
    .then(() => {
		console.log("Success sent");
		
		})
    .catch(error => {
		console.error(error);
		window.alert(error.message);
		});
                firestore.collection("city").doc(form.city.value).collection("services").doc(form.service.value).set({
    created:"yes"
    })
    .then(() => {
		console.log("Success sent");
	
		})
    .catch(error => {
		console.error(error);
		window.alert(error.message);
		});
        firestore.collection("city").doc(form.city.value).collection("services").doc(form.service.value).collection("service").doc(form.type_service.value).set({
    created:"yes"
    })
    .then(() => {
		console.log("Success sent");
		
		})
    .catch(error => {
		console.error(error);
		window.alert(error.message);
		});
	firestore.collection("city").doc(form.city.value).collection("services").doc(form.service.value).collection("service").doc(form.type_service.value).set({
       cost:form.cost.value,
       description:form.description.value,
       id:form.id.value,
       name:form.type_service.value
    })
    .then(() => {
		console.log("Success sent");
		
		})
    .catch(error => {
		console.error(error);
		window.alert(error.message);
		});
        firestore.collection("city").doc(form.city.value).collection("detail").doc("ZONE").set({
     zone:form.city_detail.value
    })
    .then(() => {
		console.log("Success sent");
		window.alert("Thank you for your feedback!");
		})
    .catch(error => {
		console.error(error);
		window.alert(error.message);
		});
	

form.reset();
 })

function check(){
let citiesRef = firestore.collection("city").doc("bhopal").collection("services").doc("electrician").collection("service");
citiesRef.get()
  .then(snapshot => {
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }  

    snapshot.forEach(doc => {
show(doc);
      console.log(doc.id, '=>', doc.data());
    });
  })
  .catch(err => {
    console.log('Error getting documents', err);
  });
}
