function IsCode(qn){
    // checks whether is there code in question  mardkdown if yes reurn True else return false
    //console.log("isCode",qn) 
    var start;
    var end;
    var is_code=false
    for(var i=0;i<qn.length-3;i++){
        const f=qn[i]+qn[i+1]+qn[i+2]
        //console.log(f)
        if (f=="```"){
            // console.log("got start",f,i)
            start=i
            break
        }
    }
    if(start!==undefined){
        for(var i=start+1;i<qn.length-2;i++){
            const f=qn[i]+qn[i+1]+qn[i+2]
            //console.log(f)
            if (f=="```"){
                //console.log("got end",f,i)
                end=i
                break
            }
        }

    }
    
        return [start,end]
    
    
    // console.log("start,end ",start,end)
    



}
export default IsCode