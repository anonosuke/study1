import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { TwoWayBindingServiceComponent } from './components/two-way-binding-service/two-way-binding-service.component';
import { ApiGetComponent } from './components/api-get/api-get.component';
import { ApiPostComponent } from './components/api-post/api-post.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';

const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'twowaybinding', component: TwoWayBindingComponent },
  { path: 'twowaybindingservice' , component: TwoWayBindingServiceComponent},
  { path: 'apiget', component: ApiGetComponent },
  { path: 'apipost', component: ApiPostComponent },
  { path: 'lifecycle', component: LifecycleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
