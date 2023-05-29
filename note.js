var form = document.getElementById("frm");
var ftitle=document.getElementById("i1");
var fbody=document.getElementById("i2");
var tab=document.getElementById("tab");
var search=document.getElementById("serchbtn");

var notecount =0;
var newnote;

window.onload = updatetable;

function updatetable(){
    if(notecount>0)
    tab.style.display='';
    else
    tab.style.display='none';
}

form.addEventListener('submit',addnote);
search.addEventListener('keyup',searching);
tab.addEventListener('click',removenote);
tab.addEventListener('click',viewnote);



function addnote(e){
    e.preventDefault();
    console.log("Submited");
    if(ftitle.value=='' || fbody.value=='')
    alert("Please Enter values for the form ");
    
    else{
        var tr =document.createElement('tr');
        tr.className='items';

        var td1=document.createElement('td');
        td1.appendChild(document.createTextNode(ftitle.value));
        var span = document.createElement('span');
        span.className='span';
        span.style.display='none';
        span.appendChild(document.createTextNode(fbody.value));
        td1.appendChild(span);


        var td2=document.createElement('td');
        var vbtn=document.createElement('button');
        vbtn.setAttribute('id','vbtn');
        vbtn.appendChild(document.createTextNode('view'));
    	td2.appendChild(vbtn);


        var td3=document.createElement('td');
        var dbtn=document.createElement('button');
        
        dbtn.setAttribute('id','dbtn');
        dbtn.appendChild(document.createTextNode('Delete'));
    	td3.appendChild(dbtn);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        notecount++;

        tab.appendChild(tr);

        updatetable();

        console.log(tr);
    }


    
    
}





function searching(e){
    var searchtxt=e.target.value.toLowerCase();
    console.log(searchtxt);
    var tlist=document.getElementsByClassName("items");
    var tlistarray=Array.from(tlist);
    console.log(tlistarray);

    tlistarray.forEach(function(items){
        var notetitle=items.firstElementChild.firstChild.textContent;

        if(notetitle.toLocaleLowerCase().indexOf(searchtxt) != -1){
            items.style.display='';
        }
        else
            items.style.display='none';

    }
    )
}

function removenote(e){
    if(e.target.id == 'dbtn'){
        if(confirm("Are you sure to delete note ? ")){
            var ele=e.target.parentElement.parentElement;
            tab.removeChild(ele);
            notecount--;
            updatetable();
        }
    }
    

}
function viewnote(e){
    if(e.target.id == 'vbtn'){
        var recoad= e.target.parentElement.parentElement;
        var rtitle = recoad.firstChild.firstChild.textContent;
        var rbody = recoad.firstChild.lastChild.textContent;

        ftitle.value = rtitle;

        fbody.value = rbody;



    }
}