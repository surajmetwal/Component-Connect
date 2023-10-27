import { LightningElement, wire } from 'lwc';

import list from '@salesforce/apex/pagenation.getAcc';


export default class Pagenation extends LightningElement {

  //  limit;
    
totalac;
  
  visibleac;
  
  @wire(list)
  
  wiredlist({data,error}){
     
   if(data){
      
      this.totalac=data;
            console.log(this.totalac);
    
        }
if(error){
          
  console.error(error);
    
    }

    }

 
   // getlimit(event){
   
 //     this.limit=event.target.value;
    // }
 
    listhandler(event) {
  
      this.visibleac=[...event.detail.records]
        
        console.log(event.detail.records);
    }

}