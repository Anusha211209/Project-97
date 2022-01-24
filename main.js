function save(){
   note = document.getElementById("user_note").value;
   localStorage.setItem("note", note);
   document.getElementById("user_note").value = "";

   note_title = document.getElementById("user_note_title").value;
   localStorage.setItem("note_title", note_title);
   document.getElementById("user_note_title").value = "";
}

function get_note(){
    
    note_title = localStorage.getItem("note_title", note_title);
    document.getElementById("note_head").innerHTML = note_title;
 
    note = localStorage.getItem("note", note);
    document.getElementById("notes").innerHTML = note;
}