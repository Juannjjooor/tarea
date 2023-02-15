const input = document.querySelectorAll("input");
const addBtn = document.querySelectorAll(".btn-add");
const ul = document.querySelectorAll("ul");
const empty = document.querySelectorAll(".empty");

for(let i = 0; i < addBtn.length; i++) {
  addBtn[i].addEventListener("click", (e) => {
    e.preventDefault();
  
    const text = input[i].value;
  
    if (text !== "") {
  
     
      const li = document.createElement("li");
      
      var nodo = document.getElementById('template');
      var clone = nodo.cloneNode(true);
      clone.style.display='block';
      document.getElementsByClassName('texto').innerText = text;

      clone.getElementsByClassName('btn-1')[0].addEventListener('click', (e) => {
        e.preventDefault()

      });
      
      li.appendChild(clone);
    
      li.appendChild(addDeleteBtn());
      ul[i].appendChild(li);
      
      input[i].value = "";
      
      empty[i].style.display = "none";
    }
  });
}

function addDeleteBtn() {
  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);
    //12
    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteBtn;
}







