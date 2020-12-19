import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cti-template-driven-form-demo',
  templateUrl: './template-driven-form-demo.component.html',
  styleUrls: ['./template-driven-form-demo.component.less']
})
export class TemplateDrivenFormDemoComponent implements OnInit {
  tags: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
