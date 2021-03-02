import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from 'src/app/models/user/user.model';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./../inscription.component.css', './type.component.css']
})
export class TypeComponent implements OnInit {

  ortho: boolean = false;

  user: User;

  registerForm = new FormGroup({
    nom: new FormControl(''),
    email: new FormControl(''),
    motdepasse: new FormControl(''),
    ville: new FormControl('')
  });

  constructor(private route: ActivatedRoute, private userService: UserService) { 
    this.route.paramMap.subscribe(params => {
			if (params.get('type') === 'ortho') {
				this.ortho = true;
			}
    });
  }

  ngOnInit() {
    const newUser = new User();
    console.log(1, newUser);
    newUser.id = null;
    newUser.email = null;
    newUser.lastname = null;
    newUser.firstname = null;
    newUser.birthdate = null;
    newUser.latitude = null;
    newUser.longitude = null;
    newUser.city = null;
    newUser.zipcode = null;
    newUser.password = null;
    newUser.role = null;
    newUser.profilePicture = null;
    newUser.speechtherapist = null;
    console.log(2, newUser);
    this.user = newUser;
    console.log(3, this.user);
  }

  singUp() {
    console.log(4, this.user);
    this.user.firstname = this.registerForm.get('nom').value.split(' ').slice(-1).join(' ');
    this.user.lastname = this.registerForm.get('nom').value.split(' ', 1).join(' ');;
    this.user.email = this.registerForm.get('email').value;
    this.user.password = this.registerForm.get('motdepasse').value;
    this.user.city = this.registerForm.get('ville').value;
    console.log(5, this.user);
    if (this.ortho = true) {
      this.user.role = 'ortho'
    } else {
      this.user.role = 'user'
    }
    this.userService.singUp(this.user , ['/accueil']);
  }

}
