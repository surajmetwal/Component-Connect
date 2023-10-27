import { LightningElement ,api} from 'lwc';

export default class ChildComponent extends LightningElement {
        //api Public reactive 
        // @api mydatapass;
 
        // @api childComponentMethod(){
        //     alert('In child');
        // }

        status=false;
        myModalData(){
        this.status=true;
        }
        childMethod(){
            this.status=false;
            const calldata=new CustomEvent('donjo');
            this.dispatchEvent(calldata);
        }
}