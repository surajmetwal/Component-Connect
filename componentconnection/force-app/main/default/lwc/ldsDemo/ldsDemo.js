import { LightningElement } from 'lwc';
import data1 from '@salesforce/schema/Account';
import data2 from '@salesforce/schema/Account.Name';
import data3 from '@salesforce/schema/Account.Phone';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class LdsDemo extends LightningElement {
    objectApiName=data1;
    fieldNames=[data2,data3];
    method1(){
        const t=new ShowToastEvent({
            title:'Account added'
        });
          
         this.dispatchEvent(t);
    }
}