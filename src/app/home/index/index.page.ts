import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';
import { NgForm } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { LanguageComponent } from 'src/app/core/header/language/language.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
})
export class IndexPage implements OnInit {

  public uid: string;
  public nameUser: string;

  constructor(
    private authSvc: AuthService, 
    private userSvc: UserService, 
    private popoverCtrl: PopoverController, 
    private router: Router) { }

  ngOnInit() {
    this.authSvc.getUserAuth().subscribe(user => {
      this.uid = user.uid;
      this.getName(this.uid);
    })
  }

  async openLanguagePopover(ev){
    const popover = await this.popoverCtrl.create({
      component: LanguageComponent,
      event: ev,
      mode: 'ios'
    });
    await popover.present();
  }

  getName(uid) {
    this.userSvc.getOneUser(uid).subscribe(user => {
      this.nameUser = user.name
    })
  }

  
  // guardarCambios(userForm: NgForm): void {
    
  //   this.userSvc.addUser(userForm.value);
  //   this.uid = userForm.value.uid;
  //   this.router.navigate(['home/index', this.uid])

  //   // console.log(userForm.value.uid);
  //   userForm.resetForm();
    
  // }

  salir(){
    this.authSvc.logout();
  }
}
