console.log("Script running..");
document.querySelector('.cr').style.display='none';
document.querySelector('.triangle').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sideBarGo');
    if(document.querySelector('.sidebar').classList.contains('sideBarGo')){
        document.querySelector('.tr').style.display='inline';
        document.querySelector('.cr').style.display='none';
    }else{
        document.querySelector('.tr').style.display='none';
        setTimeout(() => {
            document.querySelector('.cr').style.display='inline';
        }, 300);
        
    }
})
