const form=document.querySelector('form');
const img=document.getElementById('image');
const detail=document.getElementById('detail');
form.addEventListener('submit',function(e)
{
    e.preventDefault();
    const name=document.getElementById('name').value;
    const dob=(document.getElementById('dob').value);
    const a=dob.split('-');
    const display=document.getElementById('result');
    display.innerHTML=dob;
    if((parseInt(a[1])==3 && parseInt(a[2])>=21)||(parseInt(a[1])==4 && parseInt(a[2])<=19))
    {
    
    result.innerHTML=name+" you are an aries";
    img.src="aries.jpg";
    }
    else if((parseInt(a[1])==4 && parseInt(a[2])>=20)||(parseInt(a[1])==5 && parseInt(a[2])<=20))
    {
        result.innerHTML=name+" you are a Taurus";
        img.src="taurus.jpg";
    }
    else if((parseInt(a[1])==5 && parseInt(a[2])>=21)||(parseInt(a[1])==6 && parseInt(a[2])<=20))
    {
        result.innerHTML=name+" you are a Gemini";
        img.src="gemini.jpg";
    }
    else if((parseInt(a[1])==6 && parseInt(a[2])>=21)||(parseInt(a[1])==7 && parseInt(a[2])<=22))
    {
        result.innerHTML=name+" you are a Cancer";
        img.src="cancer.jpg";
    }
    else if((parseInt(a[1])==7 && parseInt(a[2])>=23)||(parseInt(a[1])==8 && parseInt(a[2])<=22))
    {
        result.innerHTML=name+" you are a Leo";
        img.src="leo.jpg";
    }
    else if((parseInt(a[1])==8 && parseInt(a[2])>=23)||(parseInt(a[1])==9 && parseInt(a[2])<=22))
    {
        result.innerHTML=name+" you are a Virgo";
        img.src="virgo.jpg";
    }
    else if((parseInt(a[1])==9 && parseInt(a[2])>=23)||(parseInt(a[1])==10 && parseInt(a[2])<=22))
    {
        result.innerHTML=name+" you are a Libra";
        img.src="libra.jpg";
    }
    else if((parseInt(a[1])==10 && parseInt(a[2])>=23)||(parseInt(a[1])==11 && parseInt(a[2])<=21))
    {
        result.innerHTML=name+" you are a Scorpio";
        img.src="scorpio.jpg";
    }
    else if((parseInt(a[1])==11 && parseInt(a[2])>=22)||(parseInt(a[1])==12 && parseInt(a[2])<=21))
    {
        result.innerHTML=name+" you are a Saggitarius";
        img.src="saggitarius.jpg";
    }
    else if((parseInt(a[1])==12 && parseInt(a[2])>=22)||(parseInt(a[1])==1 && parseInt(a[2])<=19))
    {
        result.innerHTML=name+" you are a Capricorn";
        img.src="capricorn.jpg";
    }
    else if((parseInt(a[1])==1 && parseInt(a[2])>=20)||(parseInt(a[1])==2 && parseInt(a[2])<=18))
    {
        result.innerHTML=name+" you are an Aquarius";
        img.src="aquarius.jpg";
    }
    else{
        result.innerHTML=name+" you are a Pisces"
        img.src="pisces.jpg";

    }


});