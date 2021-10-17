import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth/auth.module';
import { AngularFireModule } from '@angular/fire/';

import { environment } from '../environments/environment';

@NgModule({

})


@NgModule({
  declarations: [],

  imports: [
      CommonModule, 
      AngularFireModule.initializeApp(environment.firebase)
        ],
  exports: [AngularFireModule, AngularFireAuthModule],
})
export class AppFirebaseModule { }
