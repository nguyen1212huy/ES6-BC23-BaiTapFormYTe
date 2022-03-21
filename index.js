document.querySelector('#signup-form .actions ul li:last-child a').onclick = function
() {
   var arrInput = document.querySelectorAll('.fieldset-content input, select');
    console.log('arrInput',arrInput);

   let infoNguoiDung = {};
   for (let input of arrInput) {
       let {value,id} = input;
       console.log(id,value);
       infoNguoiDung = {...infoNguoiDung, [id]:value};
   }
   console.log('infoNguoiDung', infoNguoiDung);

   let contentHTML = '';
   for (let key in infoNguoiDung) {
    console.log("key", infoNguoiDung[key])
    contentHTML += `
        <tr>
            <td>${key}</td>
            <td>${infoNguoiDung[key]}</td>
        </tr>
    `
   }
   document.querySelector('tbody').innerHTML= contentHTML;
}