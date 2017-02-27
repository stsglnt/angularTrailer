import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieComponent } from './components/movies/movies.component';
import { BannerComponent } from './components/banner/banner.component';
 

const appRoutes: Routes = [
     {
         path: 'movie/:id',
         component: BannerComponent
     },
     {
         path: '',
         redirectTo: 'movie/263115',
         pathMatch: 'full'
     },
     {
         path: 'movie',
         redirectTo: 'movie/263115',
         pathMatch: 'full'
     }
 ];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);