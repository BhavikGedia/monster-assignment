import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { IUser } from 'src/app/home/user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  userForm!: FormGroup;
  @Input() userData!: IUser;
  @Input() isView!:boolean;

  constructor(private dataService:DataService, private router:Router) { }

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
      phone : new FormControl(null, [Validators.required, Validators.pattern(/^\d{10}$/)]),
      website : new FormControl(null),
    });
  }
  onSubmit(){
    if(this.userForm.invalid) return
    let user = {...this.userForm.value};
    this.dataService.postData(user).subscribe(res => {
    this.router.navigate(['home']);
    },err => {
      console.log(err);
    })
    
  }
}
