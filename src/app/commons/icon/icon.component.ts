import { Component, Input, OnInit, inject } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry, MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'svg-icon',
  standalone: true,
  imports: [MatIconModule],
  template: 
  `<img [src]="'assets/svg/'+ this.icon+'.svg'" [alt]="icon" />`,
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit{
  constructor(private iconRegistry: MatIconRegistry,private sanitizer: DomSanitizer){}

  @Input()
  icon!: string;

  ngOnInit(): void {
    this.iconRegistry.addSvgIcon(
      this.icon, 
      this.sanitizer.bypassSecurityTrustHtml('assets/svg/'+ this.icon+'.svg'));
  }
}
