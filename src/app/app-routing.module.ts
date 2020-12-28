import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyRoutePreloadingStrategy } from './core/providers/lazy-route.preloading.strategy';
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => HomeModule
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule)
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: LazyRoutePreloadingStrategy
  })],
  exports: [RouterModule],
  providers: [LazyRoutePreloadingStrategy]
})
export class AppRoutingModule { }
