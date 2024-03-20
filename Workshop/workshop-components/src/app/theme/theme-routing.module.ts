import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "../main/main.component";
import { AddThemeComponent } from "./add-theme/add-theme.component";

const route: Routes = [{ path: 'themes', component: MainComponent }, { path: 'add-theme', component: AddThemeComponent }]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class ThemeRoutingModule { }