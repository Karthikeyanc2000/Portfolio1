import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { trigger, state, style, transition, animate } from '@angular/animations'; // Import the animation modules


@Component({
  selector: 'app-certification',
  templateUrl: './certification.component.html',
  styleUrls: ['./certification.component.css'],



  animations: [
    trigger('slideIn', [
      state('in', style({ transform: 'translateY(0)', opacity: 1 })),
      transition('void => *', [
        style({ transform: 'translateY(100%)', opacity: 0 }),
        animate('1s ease')
      ]),
    ]),
  ],




})
export class CertificationComponent {



  isThirdPage = false;

  constructor(private route: ActivatedRoute) {
    this.route.url.subscribe((segments) => {
      const lastSegment = segments[segments.length - 1];
      if (lastSegment && lastSegment.path === 'Certification') { // Ensure 'Certification' with a capital 'C'
        this.isThirdPage = true;
      }
    });
  }


}
