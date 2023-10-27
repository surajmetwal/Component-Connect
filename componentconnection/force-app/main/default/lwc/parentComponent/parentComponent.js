import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    // empId=1001;
    // //querySelector is calling the elements in JS
    //   myParentCall(){
    //       alert('in Parent');
    //       this.template.querySelector('c-child-component').childComponentMethod();
    //   }

// status=false;
// myModel(){
//     this.status=true;
// }

parentcall(){
    alert('Hiii in Parent');
}
}