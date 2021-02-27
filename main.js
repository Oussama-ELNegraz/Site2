var nextButton = document.getElementById("next"),
    prevButton = document.getElementById("prev"),
    imgArray = Array.from(document.querySelectorAll("#container img")),
    numImg = imgArray.length,
    now = document.getElementById("now"),
    numa = document.getElementById("num"),
    currentImg = 1;
    


// Next and Previous
nextButton.onclick = next;
prevButton.onclick = prev;

function next() {
   if(nextButton.classList.contains("disabled")){
    return false;
   }else{
    currentImg++;
    check();
}}
function prev() {
    if(prevButton.classList.contains("disabled")){
       return false 
       }else{
        currentImg--;
        check();
}}

// image and bullets now 

function current() {
    imgArray[currentImg - 1].setAttribute('class','active');
    liList[currentImg - 1].setAttribute('class','active');
}

// create ul and li

var ul = document.createElement('ul');
ul.setAttribute("id","ull")
for (var i = 1; i<= numImg ;i++){
    var li =  document.createElement('li');
    li.setAttribute('id',i);
    li.textContent = i;
    ul.appendChild(li);
}
now.appendChild(ul);
var liList = Array.from(document.querySelectorAll("#ull li"));


// number in click li



for (var i = 0; i < liList.length; i++){
function numb() {
 var atr =   this.getAttribute('id');
 currentImg = parseInt(atr);
 check();
}
liList[i].onclick = numb;
}

//nuber now
 
function nu() {
    numa.textContent = " slide # " + currentImg + " of " + numImg;
}


// Remove active class

function re() {
   nu();
    imgArray.forEach(function (img) {
        img.classList.remove('active')
    });
    liList.forEach(function (img) {
        img.classList.remove('active')
    }); 
    
}

function check() {
    re();
    imgArray[currentImg - 1].setAttribute("class","active")
    liList[currentImg - 1].setAttribute("class","active")
    if (currentImg == 1){
        prevButton.classList.add("disabled")
    }else{
        prevButton.classList.remove("disabled")
    }
    if (currentImg == 5){
        nextButton.classList.add("disabled")
    }else{
        nextButton.classList.remove("disabled")
    }
}
check();


//class active in first

imgArray[0].setAttribute("class","active");
liList[0].setAttribute("class","active");
nu();
