



   var quant =document.getElementById('quant')
 var btn =document.getElementById('btn')
  var para =document.getElementById('para')
 var txt =document.getElementById('txt')
 var select = document.getElementById('select')
 var num=0
 btn.addEventListener('click',()=>{
    
    para.innerHTML ="Loading ....."
     var time = setInterval(()=>{
        if(num===5){
            clearInterval(time)
            alert('time out')}
         para.innerHTML =` quiz finish after 5s now time is ${num++}s`
         
     },1000)
    
    }
   
 )
 