import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ResourcesComponent } from './resources/resources.component';

const routes: Routes = [
  {path: 'banner', component: BannerComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'body', component: BodyComponent},
  {path: 'resources', component: ResourcesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
