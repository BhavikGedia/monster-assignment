import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from 'src/app/home/user.model';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
  userForm!: FormGroup;
  @Input() userData!: IUser;
  @Input() isView!:boolean;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
    if(this.isView){
      this.userForm.patchValue({
        username : this.userData.name,
        email : this.userData.email,
        address : {
          city : this.userData.address?.city,
          zipcode : this.userData.address?.zipcode,
        },
        phone : this.userData.phone,
        website : this.userData.website,
      })
      this.userForm.disable();
    } else{
      //do Add functionality
    }
    

  }

  createForm(){
    this.userForm = new FormGroup({
      username : new FormControl(null, [Validators.required]),
      email : new FormControl(null, [Validators.required]),
      address : new FormGroup({
        city : new FormControl(null),
        zipcode : new FormControl(null),
      }),
      phone : new FormControl(null, [Validators.required]),
      website : new FormControl(null),
    });
  }
  onSubmit(){
    console.log();
    
  }
}
