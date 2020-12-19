import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cti-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.less'],
})
export class ReactiveFormDemoComponent implements OnInit {
  fromGroup: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.fromGroup = this.initForm();
  }

  control(key: 'tags') {
    return this.fromGroup.get(key);
  }

  initForm() {
    return this.fb.group({
      tags: [
        [], // initial form value
        [Validators.required]
      ],
    });
  }
}
