import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../core/auth/auth.guard';
import { HomeComponent } from './home.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './singup/singup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
        {
            path: '',
            component: SignInComponent,
        },
        {
            path: 'signup',
            component: SignUpComponent,
        },
    ]
  },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes) //todos os modulos que for criar em uma lazy load, tem que ser "forchild"
    ],
    exports: [ RouterModule ]
})
export class HomeRoutingModule { }

