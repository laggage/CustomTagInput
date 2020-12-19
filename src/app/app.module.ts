import { DefaultLayoutComponent } from './layout/default-layout/default-layout/default-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveFormDemoComponent } from './pages/reactive-form-demo/reactive-form-demo.component';
import { TemplateDrivenFormDemoComponent } from './pages/template-driven-form-demo/template-driven-form-demo.component';
import { RouterModule } from '@angular/router';
import { TagInputModule } from 'src/app/modules/tag-input/tag-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormDemoComponent,
    TemplateDrivenFormDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    TagInputModule,
    RouterModule.forRoot([
      { path: '', component: DefaultLayoutComponent, loadChildren: () => import('./layout/default-layout/default-layout.module').then(x => x.DefaultLayoutModule) }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
