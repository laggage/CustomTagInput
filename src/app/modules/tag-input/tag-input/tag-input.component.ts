import {
  Component,
  ElementRef,
  forwardRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'cti-tag-input',
  templateUrl: './tag-input.component.html',
  styleUrls: ['./tag-input.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TagInputComponent),
      multi: true,
    },
  ],
})
export class TagInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('tagInputEl', { read: ElementRef }) tagInputEl: ElementRef<HTMLInputElement>;
  tags: string[] = [];
  disabled = false;
  tagInput = '';
  isInputting = false;

  private _onChange = (_: string[]) => {};
  private _onTouch = () => {};

  constructor() {}

  writeValue(obj: any): void {
    if (obj instanceof Array && obj.every((x) => typeof x === 'string')) {
      this.tags = obj;
    }
  }
  registerOnChange(fn: any): void {
    this._onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouch = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit(): void {}

  onKeyDown(event: KeyboardEvent) {
    // 回车键键值: 13
    if (event.key.toLowerCase() === 'enter' || event.key === ',') {
      this.emitTags();
    }
  }

  onBlur = () => {
    this.emitTags();
  };

  onClick() {
    this.isInputting = !this.isInputting;
    let timer = setTimeout(() => {
      this.tagInputEl.nativeElement.focus();
      clearTimeout(timer);
      timer = undefined;
    }, 20);
  }

  private emitTags() {
    if (!this.tags.includes(this.tagInput) && this.tagInput) {
      this.tags.push(this.tagInput);
      this._onChange(this.tags);
    }
    this.tagInput = '';
    this.isInputting = false;
    this._onTouch();
  }
}
