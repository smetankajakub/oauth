import {
    AngularFireAuthGuard,
    redirectUnauthorizedTo,
  } from '@angular/fire/compat/auth-guard';
  import { NgModule } from '@angular/core';
  import { Routes, RouterModule } from '@angular/router';
  
  import { BASE, CREATE, FEED } from '../app/consts/router.consts';
  import { CreateComponent } from './components/create/create.component';
  import { FeedComponent } from './components/feed/feed.component';
  
  const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo([FEED]);
  
  const routes: Routes = [
    {
      path: BASE,
      redirectTo: `/${FEED}`,
      pathMatch: 'full',
    },
    {
      path: FEED,
      component: FeedComponent,
    },
    {
      path: CREATE,
      component: CreateComponent,
      canActivate: [AngularFireAuthGuard],
      data: { authGuardPipe: redirectUnauthorizedToLogin },
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}