import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './header/language/language.component';
import { AvataruserComponent } from './header/avataruser/avataruser.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './services/auth.service';
import { LanguageService } from './services/language.service';
import { UserService } from './services/user.service';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    LanguageComponent,
    AvataruserComponent,
    HeaderComponent
  ],
  exports: [
    LanguageComponent,
    AvataruserComponent,
    HeaderComponent,
    AuthService,
    LanguageService,
    UserService
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild(),
  ]
})
export class CoreModule { }
