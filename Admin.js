//https://crudcrud.com/api/164dc1dac4a3478fa23a1a9c1c7aa28f

let addbutton = document.getElementById('btm');
addbutton.addEventListener('click', addData);

window.onload=()=>{
      axios.get("https://crudcrud.com/api/164dc1dac4a3478fa23a1a9c1c7aa28f/Adminpage")
   .then((response)=>{
      for(var i=0;i<response.data.length;i++)
      DisplayData(response.data[i]);
        })
   .catch(err=>console.log(err));
}

function addData(e){
    e.preventDefault();
   var price = document.getElementById("fprice").value;
   var product = document.getElementById("fproduct").value;
   var category = document.getElementById("fcategory").value;
   
   let obj = { price: price, product: product, category: category};
axios.post("https://crudcrud.com/api/164dc1dac4a3478fa23a1a9c1c7aa28f/Adminpage",obj)
.then(res=>{
   DisplayData(res.data);
     })
  .catch(err=>{console.log(err)
});
}

function DisplayData(data){
const parentul=document.getElementById(data.category);

var li = document.createElement('li');
   li.id= data._id;
   li.className='p-1 list-group-item'
   li.textContent=data.price+'-'+data.product+'-'+data.category;
   
   // adding a delete button

var newdeltebtn = document.createElement('input');
newdeltebtn.type="button";
   newdeltebtn.className= 'btn btn-danger btn-sm float-right delete';
   newdeltebtn.value='X';
   newdeltebtn.onclick=()=>{
      removedata(data._id,data.category);
   }
   li.appendChild(newdeltebtn);
   console.log(parentul);
   parentul.appendChild(li);
}

function removedata(id,itemcategory){
let lielement=document.getElementById(itemcategory);
      let liitem= document.getElementById(id);
      lielement.removeChild(liitem);
   axios.delete(`https://crudcrud.com/api/164dc1dac4a3478fa23a1a9c1c7aa28f/Adminpage/${id}`)
.then(res=>{
   console.log(res);   
})
  .catch(err=>
    {
        console.log(err);
    }
   )

}