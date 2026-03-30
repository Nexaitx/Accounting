import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  imports: [CommonModule],
  templateUrl: './pricing.html',
  styleUrl: './pricing.scss',
})
export class Pricing {
activeTab: string = 'bookkeeping'; // default

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
