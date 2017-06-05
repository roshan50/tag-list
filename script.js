// (function(){
//
// })()

 function add_tag(){
   var value = document.querySelector(".tag-add--input").value;
   var list = document.querySelector('.tag-list');
	 var template = '<li class="tag-list--item"><img class="item--remove" src="./_assets/imgs/delete.png" onclick="remove_tag(this)"><label class="item--value">'+value+'</label></li>';

   list.innerHTML += template;

  //  document.querySelector(".item--remove").addEventListener("click", function(){
  //     var RemoveItem= this.parentNode;
  //     alert(RemoveItem.parentNode.innerHTML);
  //     RemoveItem.parentNode.removeChild(RemoveItem);
  //  });
 }

function remove_tag(img) {
    var RemoveItem = img.parentNode;
    RemoveItem.parentNode.removeChild(RemoveItem);
}
