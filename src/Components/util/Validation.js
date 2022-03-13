export default function valiadtion(cardnum,cvv){
     
    var valid_int= 0;
    var valid_start= 0;

    var cvv_valid_int = 0;
    var cvv_valid_start = 0;


    if(cardnum.charAt(0)=="0")
        {
            valid_start++
        }

    for(var i=0; i<cardnum.length;i++){
        if(cardnum.charAt(i)!="1" ||cardnum.charAt(i)!="2" ||cardnum.charAt(i)!="3" ||cardnum.charAt(i)!="4" ||cardnum.charAt(i)!="5" ||cardnum.charAt(i)!="6" ||cardnum.charAt(i)!="7" ||cardnum.charAt(i)!="8" ||cardnum.charAt(i)!="9" || cardnum.charAt(i)!="0")
        {
            valid_int++
        }
    }


    if(cvv.charAt(0)=="0")
    {
        cvv_valid_start++
    }

    for(var i=0; i<cvv.length;i++){
        if(cvv.charAt(i)!="1" ||cvv.charAt(i)!="2" ||cvv.charAt(i)!="3" ||cvv.charAt(i)!="4" ||cvv.charAt(i)!="5" ||cvv.charAt(i)!="6" ||cvv.charAt(i)!="7" ||cvv.charAt(i)!="8" ||cvv.charAt(i)!="9" || cvv.charAt(i)!="0")
        {
            cvv_valid_int++
        }
    }

    if(valid_start>0 || cardnum.length!=16 || cvv.length!=3){
        return false
    }
    else{
        return true
    }

 }