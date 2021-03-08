/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnalyticsService } from './@core/utils/analytics.service';
import { SeoService } from './@core/utils/seo.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService, private seoService: SeoService, private UsersService: UsersService, private router:Router) {
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.seoService.trackCanonicalChanges();
    if (!this.UsersService.loggedIn()){
      this.router.navigate(['/auth/login']);
    }
    
  }
}
