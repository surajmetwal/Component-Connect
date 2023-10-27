import { LightningElement,api } from 'lwc';


export default class PagenationMain extends LightningElement {

totalrec;

currentpage=1;

recsize=5;

get records(){
 
   return this.visiblerec;
}

// @api 
// 
set recordsize(data)
{
//    
 if(data){
// 
        this.recsize=data;
//    
 }
// }
 
 @api 
    
set records(data){
     
   if(data){
       
     this.totalrec=data;
   
         this.visiblerec=data.slice(0,this.recsize);
     
       this.totalpage=Math.ceil(data.length/this.recsize);
    
        this.updaterec();
       
 }
    }

  
  get disabledPrev(){
    
    return this.currentpage<=1;
 
   }
   
 get disabledNext(){
   
     return this.currentpage>=this.totalpage;
    
}

   
 previousMeth(){
  
      if(this.currentpage>1 ){
    
        this.currentpage=this.currentpage-1;
        
    this.updaterec();

   
     }

    }
  
  nextMeth(){
   
     if(this.currentpage<this.totalpage ){
       
     this.currentpage=this.currentpage+1;
       
     this.updaterec();

    
    }

    }
  
  updaterec(){
   
     const start=(this.currentpage-1)*this.recsize;
    
    const end=this.recsize*this.currentpage;
    
    this.visiblerec= this.totalrec.slice(start,end);
     
   this.dispatchEvent(new CustomEvent('update',{
            detail:{
                records:this.visiblerec
            }
        }))
    }
}