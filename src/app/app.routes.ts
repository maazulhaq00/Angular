import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';

export const routes: Routes = [
    {
        path: "",
        component: DataBindingComponent
    },    
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "about",
        component: AboutComponent
    },    
    {
        path: "db",
        component: DataBindingComponent
    },    
    {
        path: "structural",
        component: StructuralDirectivesComponent
    }
];
