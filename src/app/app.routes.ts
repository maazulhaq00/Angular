import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';

export const routes: Routes = [
    {
        path: "",
        component: AttributeDirectiveComponent
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
    },    
    {
        path: "todo",
        component: TodoListComponent
    },    
    {
        path: "attribute",
        component: AttributeDirectiveComponent
    }
];
