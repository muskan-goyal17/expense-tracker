import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'expense-tracker';
  constructor(public authService:AuthService){}
  ngOnInit(): void {
   (window as any).dataLayer = (window as any).dataLayer || [];
    function gtag(...args: any[]) {
      (window as any).dataLayer.push(args);
    }

    gtag('js', new Date());
    gtag('config', 'GTM-W3GBB79F');
    const localToken=localStorage.getItem('LEAD_ID');
    if(localToken){
      this.authService.authAfterReferesh(true,localToken);
    }
  }
}
