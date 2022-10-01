let calculate = document.getElementById('calcu');
calculate.addEventListener('click', ()=>{
   let BoyName = document.getElementById('BoyName').value
   let GirlName = document.getElementById('GirlName').value
   let Age = document.getElementById('number').value 
    if(BoyName && GirlName && Age !=""){
        document.getElementById('input').style.display = 'none'
        document.getElementById('loadingimg').innerHTML = `<img src="index.gif" id="calculation">`
        document.getElementById('loading').style.display = 'flex'
        let result
        // let massage
        setTimeout(()=>{
            let tempnum = randomIntFromInterval(1, 100);
            console.log(tempnum);
            result = tempnum
            let finalresult = BoyName+" & "+GirlName+" Love "+result+" % "+"Only"
            document.getElementById('output').innerText = finalresult
            // document.getElementById('outputmassage').innerText = massage
            document.getElementById('loading').style.display = 'none'
            document.getElementById('result').style.display = 'flex'
        }, 5000);
    }
    else{
        alert('Please Fill all Data to Calculate')
    }
})

let retry = document.getElementById('retry');
retry.addEventListener('click', ()=>{
    document.getElementById('result').style.display = 'none'
    document.getElementById('input').style.display = 'flex'
});

// version updating
let Current_version = 2.4
let Final_version ="Version : "+Current_version
document.getElementById('version').innerText = Final_version


// Functions 
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }