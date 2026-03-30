import { Routes } from '@angular/router';
import { Pricing } from './pricing/pricing';
import { App } from './app';
import { Home } from './home/home';
import { Bookkeeping } from './bookkeeping/bookkeeping';
import { Cfo } from './cfo/cfo';
import { Payroll } from './payroll/payroll';
import { Tax } from './tax/tax';
import { RdTax } from './rd-tax/rd-tax';
import { Backoffice } from './backoffice/backoffice';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Blogs } from './blogs/blogs';
import { CaseStudy } from './case-study/case-study';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'pricing', component: Pricing },

    { path: 'about-us', component: About },
    { path: 'contact-us', component: Contact },
    { path: 'case-study', component: CaseStudy },
    { path: 'blogs', component: Blogs },

    { path: 'services/bookkeeping', component: Bookkeeping },
    { path: 'services/cfo-advisory', component: Cfo },
    { path: 'services/payroll-hr', component: Payroll },
    { path: 'services/tax', component: Tax },
    { path: 'services/rd-tax-credit', component: RdTax },
    { path: 'services/back-office', component: Backoffice },

    { path: '**', redirectTo: 'home' }
];
