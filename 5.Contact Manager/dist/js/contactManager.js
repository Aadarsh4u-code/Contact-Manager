const uId = Math.random().toString().slice(2,11);

if( localStorage.getItem('contacts') == undefined){
  localStorage.setItem('contacts', '[]');
}

function submitContact(e){
  e.preventDefault();
  let name = document.getElementById('cName').value;
  let number = document.getElementById('cNumber').value;
  let contacts = JSON.parse(localStorage.getItem('contacts'));
  
  let contact = {
    id: uId,
    name: name,
    phone: number
  }; 

  contacts.unshift(contact);
  localStorage.setItem('contacts', JSON.stringify(contacts));

  document.getElementById('cName').value = "";
  document.getElementById('cNumber').value ="";
  location.reload();
}

let result = "";
let contacts = JSON.parse(localStorage.getItem('contacts'));

for( i = 0; i < contacts.length; i++){
  result += `<div class="contact-item">
      <i class="far fa-user fa-2x color-primary"></i>
      <div class="contact-item-info">
        <h4>${contacts[i].name}</h4>
        <p>${contacts[i].phone}</p>
      </div>
      <i class="fas fa-times-circle fa-2x color-primary" 
      onClick="deleteContact('${contacts[i].id}')"></i>
      </div>`;
}
document.getElementsByClassName('contact-body')[0].innerHTML = result;

function deleteContact(id){
  let contacts = JSON.parse(localStorage.getItem('contacts'));

  contacts = contacts.filter( function(contact){
    return (contact.id != id);
  });

  localStorage.setItem('contacts', JSON.stringify(contacts));
  location.reload();
}

