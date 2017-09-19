
import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './adminLayout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { LoginGuard} from './login.guard';

export const AppRoutes: Routes = [
  {
      path: '',
      component: AdminLayoutComponent,
      canActivate:[LoginGuard],
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
      canActivate:[LoginGuard]
  },
    {
      path: 'login',
      component: LoginComponent
    }
];
