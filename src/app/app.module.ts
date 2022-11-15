import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './components/main/main.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ChildComponent } from './components/two-way-binding/child/child.component';
import { TwoWayBindingServiceComponent } from './components/two-way-binding-service/two-way-binding-service.component';
import { Child1Component } from './components/two-way-binding-service/child1/child1.component';
import { Child2Component } from './components/two-way-binding-service/child2/child2.component';
import { ApiGetComponent } from './components/api-get/api-get.component';
import { ApiPostComponent } from './components/api-post/api-post.component';
import { LifecycleChildComponent } from './components/lifecycle/lifecycle-child/lifecycle-child.component';
import { MockapiService } from './service/mockapi.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    LifecycleComponent,
    TwoWayBindingComponent,
    ChildComponent,
    TwoWayBindingServiceComponent,
    Child1Component,
    Child2Component,
    ApiGetComponent,
    ApiPostComponent,
    LifecycleChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      MockapiService, { dataEncapsulation: false }
)
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
