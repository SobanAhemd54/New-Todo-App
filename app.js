var inp = document.getElementById('input');
var addbtn1 =document.getElementById('addbtn');
function addbtn() {
    var ol = document.getElementById('oldiv');
    // var ol = document.getElementById('ol')
    if(inp.value === ''){
    addbtn1.style.display=none;
    }

    var licreat = document.createElement('li');
    var litext = document.createTextNode(inp.value)
    ol.appendChild(licreat);
    licreat.appendChild(litext)
    console.log(licreat)
    
    // delete Button
    var delbtn = document.createElement('button');

    var deltext = document.createTextNode('Delete');
    delbtn.setAttribute('class','delbtn')
    delbtn.appendChild(deltext);
    delbtn.setAttribute('onclick', 'delbtn(this)');
    licreat.appendChild(delbtn);
    inp.value = '';
   
    // Edit btn
    var Edit = document.createElement('button');
    var Edittext = document.createTextNode('Edit');

    Edit.appendChild(Edittext);
    licreat.appendChild(Edit);

    Edit.setAttribute('onclick', 'Editbtn2(this)');
    
}

function deleteall() {
    
    var ol = document.getElementById('ol');
    ol.innerHTML = '';
  }
function delbtn(element) {
    var a = element.parentNode;
    a.remove();
}

var main = document.getElementById('main1');

function Editbtn2(ele) {
    var a = ele.parentNode.firstChild.nodeValue;
    inp.value = a;

    // okbtn
    var okbtn = document.createElement('button');
    var oktext = document.createTextNode('Ok');
    okbtn.appendChild(oktext);
    
    // okbtn.setAttribute('onclick','okbtn1()')
    main.appendChild(okbtn);

   okbtn.onclick = function(){
        var newval = inp.value
        ele.parentNode.firstChild.nodeValue  = newval;

        okbtn.remove();

        inp.value = ' ';
    }
    
}

