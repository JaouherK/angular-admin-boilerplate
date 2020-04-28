import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent {

  appName: string;
  fillerNav = [
    {
      icon: 'home',
      label: 'Dashboard',
      component: 'dashboard'
    },
    {
      label: '404',
      component: '404'
    },
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.appName = 'Admin Boilerplate';
  }

  mobileQuery: MediaQueryList;
  userInitials = 'JK';
  username = 'jaouher';


  redirect(element: string) {
    this.router.navigate(['/' + element]);
  }

  logOut(event: any) {
    console.log('Logging out' + event);
  }
}
