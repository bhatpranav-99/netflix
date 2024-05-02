
let plus = document.querySelector('.plus');
let ans = document.querySelector('.answer');
let question = document.querySelectorAll('.question');


// var flag=false;
// plus.addEventListener('click',()=>{
//     flag = !flag;
//     if(flag){
    
//         ans.style.display="block";
//         plus.innerHTML="x";
//         // ans.style.animationName="slideDown";
//     }
//     if(!flag){
        
//         // ans.style.animationName="slideUp";
//          ans.style.display="none";
//          plus.innerHTML="+";
         
//     }
// });


question.forEach((el,index)=>{
    el.addEventListener('click',()=>{
        el.nextElementSibling.style.display = "block";
        el.querySelector('span').innerHTML ='-';

        question.forEach((el2,ind)=>{
            if(ind!=index){
                el2.nextElementSibling.style.display = "none";
                el2.querySelector('span').innerHTML ='+';
            }
        })
    })
})






