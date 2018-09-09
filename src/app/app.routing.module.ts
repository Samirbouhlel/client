import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ProduitResolver} from './produit/produit.resolver';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import { UserResolver } from './user/user.resolver';


export const appRoutes: Routes=[
{path:'',redirectTo:'/home',pathMatch:'full'},

{path:'login',component:LoginComponent},
{path:'home',component:HomeComponent,
children:[
    {path:'produit',component:ProduitComponent,resolve: {produits: ProduitResolver},outlet:'contentOutlet'},
    {path:'dashboard',
    component:DashboardComponent,
    outlet:'contentOutlet'},
    {path:'user',
    component:UserComponent, 
    resolve: {
        users: UserResolver
      },
      outlet:'contentOutlet'}]
}

]
@NgModule({
imports:[
    RouterModule.forRoot(appRoutes,{enableTracing:false})
],
exports:[RouterModule ],
providers: [ProduitResolver,UserResolver]
})
export class AppRoutingModule{

}