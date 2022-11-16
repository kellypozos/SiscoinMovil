import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
const url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cart=[];

  constructor(private http: HttpClient) { }

  getCart(){
    return this.cart;
  }

  addProduct(resp){
    this.cart.push(resp);
  }
  removeCart(){
    this.cart = [];
  }
  insertar(compras){

   return this.http.post(`${url}compras`, compras);
  }
  mandar(data: any) {
    return this.http.post(`${environment.url}compras`, data);
  }

 
}
