import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rd-tax',
  imports: [CommonModule,
    FormsModule
  ],
  templateUrl: './rd-tax.html',
  styleUrl: './rd-tax.scss',
})
export class RdTax {
  wages = 0;
  contractors = 0;
  rdPercentage = 100;

  credit: number | null = null;

  calculate() {

    // Step 1: Apply R&D % to wages
    const qualifiedWages = this.wages * (this.rdPercentage / 100);

    // Step 2: Contractors only 65% eligible
    const qualifiedContractors = this.contractors * 0.65;

    // Step 3: Total QRE
    const totalQRE = qualifiedWages + qualifiedContractors;

    // Step 4: Apply credit rate (~10%)
    this.credit = totalQRE * 0.10;
  }

}
