import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MODULES_ROUTES } from './common/routes';

const routes: Routes = [
  {
    path: MODULES_ROUTES.public,
    loadChildren: () => import('./modules/public/public.module').then(m => m.PublicModule)
  },
  {
    path: MODULES_ROUTES.signIn,
    loadChildren: () => import('./modules/signin/signin.module').then(m => m.SigninModule),
    canLoad: [AuthGuard]
  },
  {
    path: MODULES_ROUTES.signUp,
    loadChildren: () => import('./modules/signup/signup.module').then(m => m.SignUpModule),
    canLoad: [AuthGuard]
  },
  {
    path: MODULES_ROUTES.home,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
