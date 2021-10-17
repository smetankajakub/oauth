import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppFirebaseModule } from './app-firebase.module';
import { AppMaterialModule } from './app-material.module';
import { AppRoutingModule } from './app-routing.module';
import { CreateComponent } from './components/create/create.component';
import { FeedComponent } from './components/feed/feed.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    FeedComponent,
    HeaderComponent,
    ProfileCardComponent,
  ],
  imports: [
    AppFirebaseModule,
    AppMaterialModule,
    AppRoutingModule,
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}