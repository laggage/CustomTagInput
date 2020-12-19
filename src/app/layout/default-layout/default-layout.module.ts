import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { TemplateDrivenFormDemoComponent } from './../../pages/template-driven-form-demo/template-driven-form-demo.component';
import { ReactiveFormDemoComponent } from './../../pages/reactive-form-demo/reactive-form-demo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'reactive', component: ReactiveFormDemoComponent },
      { path: 'template-driven', component: TemplateDrivenFormDemoComponent },
      { path: '', redirectTo: 'reactive' }
    ]),
  ],
  exports: [DefaultLayoutComponent],
})
export class DefaultLayoutModule {}
