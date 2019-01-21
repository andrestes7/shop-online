import{ ModuleWithProviders} from '@angular/core';
import{ RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ContactComponent} from './contact/contact.component';

export const appRoutes: Routes =[
    {path:'',redirectTo: 'home',pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'products',component: ProductsComponent},
    {path: 'contact',component: ContactComponent},
    {path: '""',redirectTo: 'home',pathMatch:'full' }

];
export const RoutingModule: ModuleWithProviders  = RouterModule.forRoot(appRoutes);
