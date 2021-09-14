import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @Input() set appDropdown(isClicked: boolean) {
    if (!isClicked) {
      this.vcRef.createEmbeddedView(this.tempRef)
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private tempRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
