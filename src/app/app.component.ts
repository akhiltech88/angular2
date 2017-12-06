import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './products.service';
import { appService } from './app.service';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl:'app/app.component.html',
 /* template: '
   <ul>
      <li><a [routerLink] = "['/Product']">Product</a></li>
      <li><a [routerLink] = "['/Inventory']">Inventory</a></li>
   </ul>
   <router-outlet></router-outlet>',*/
  providers: [ProductService]
})
export class AppComponent  {
	appTitle: string = 'Welcome';
	name = 'Akhil'; 
	appList: any[] = [ {
      "ID": "1",
      "Name" : "One",
	  "url": 'app/img/images_download.jpg'
   },
   {
      "ID": "2",
      "Name" : "Two",
	  "url": 'app/img/images_download2.jpg'
   } ];
   iproducts: IProduct[];
   constructor(private _product: ProductService) {
   }
   
   ngOnInit() : void {
      this._product.getproducts()
      .subscribe(iproducts => this.iproducts = iproducts);
   }
   /*
   getData() {
    return this.http.get('https://api-v3.mojepanstwo.pl/dane/wojewodztwa')
        .map(response => response = response.json());
}

ngOnInit() {
    this.appService.getData().subscribe(data => {
        this.data = data;
    });
}

OR

headers: Headers = new Headers({ 'Something': 'Something' });

getData() {
    return this.http.get('https://api-v3.mojepanstwo.pl/dane/wojewodztwa', {
        headers: this.headers
    })
        .map(response => response = response.json());
}

ngOnInit() {
    this.appService.getData().subscribe(data => {
        this.data = data;
    });
}
   */
}
