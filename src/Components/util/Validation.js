export default function valiadtion(cardnum,cvv){
     
    var valid_int= 0;
    var valid_start= 0;

    var cvv_valid_int = 0;
    var cvv_valid_start = 0;


    if(cardnum.charAt(0)=="0")
        {
            valid_start++
        }

    if(isNaN(cardnum)){
        valid_int++
    }


    if(cvv.charAt(0)=="0")
    {
        cvv_valid_start++
    }

    if(isNaN(cvv)){
        cvv_valid_int++
    }

    if(valid_start>0 || cardnum.length!=16 || cvv.length!=3 || valid_int>0 || cvv_valid_int>0){
        return false
    }
    else{
        return true
    }

 }