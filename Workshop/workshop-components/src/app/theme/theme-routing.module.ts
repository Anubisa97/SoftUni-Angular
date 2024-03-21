import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { AddThemeComponent } from "./add-theme/add-theme.component";
import { HomeComponent } from "../home/home.component";
import { CurrentThemeComponent } from "./current-theme/current-theme.component";

const route: Routes = [{ path: 'themes', children: [{ path: '', pathMatch: 'full', component: MainComponent }, { path: ':themeId', component: CurrentThemeComponent }] }
    , { path: 'add-theme', component: AddThemeComponent }, { path: 'home', component: HomeComponent }]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class ThemeRoutingModule { }