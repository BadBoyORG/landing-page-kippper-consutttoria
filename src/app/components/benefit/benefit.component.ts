import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefit',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './benefit.component.html',
  styleUrl: './benefit.component.css',
})
export class BenefitComponent {
  @Input({ required: true }) imageUrl: string = '';
  @Input() imageAlt: string = '';
  @Input() titleText: string = '';
  @Input() pText: string = '';
}
