
import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './adminLayout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './authguard';

export const AppRoutes: Routes = [
  {
      path: '',
      component: AdminLayoutComponent,
      canActivate:[AuthGuard],
      children: 
      [
        {
          path: 'admin',
          loadChildren: 'app/admin/admin.module#AdminModule'
        } 
      ]
  },
 {
      path: 'user',
      component: UserComponent,
      canActivate:[AuthGuard]
  },
    {
      path: 'login',
      component: LoginComponent
    }
];
