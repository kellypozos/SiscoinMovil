import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {  ModalController } from '@ionic/angular';
import { ProductoModalPage } from 'src/app/producto-modal/producto-modal.page';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-car',
  templateUrl: './car.page.html',
  styleUrls: ['./car.page.scss'],
})
export class CarPage  {
  
selectedItems = [];
total = 0 ;
  producto: any;

constructor(
  private modalCtrl: ModalController,
  private cartService: CartServiceService,
  private router: Router,
  public alertController: AlertController, 
  ){

  }
  ngOnInit(){
    let items = this.cartService.getCart();
    let selected = {};

    for(let obj of items){
      selected[obj.id] = {...obj, count: 1};
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    console.log("items",this.selectedItems);
    this.total = this.selectedItems.reduce((a, b) => a +(b.quantity * b.price), 0);
  }
  remove(){
    this.cartService.removeCart();
    this.router.navigate(["/home"]);
  }
  insertar(item){
    let c = 0;
    let hoy = new Date();
    let fechaHoy = hoy.getFullYear() + '-' + String(hoy.getMonth() + 1).padStart(2, '0') + '-' + String(hoy.getDate()).padStart(2, '0');
    for(c; c<10; c++){
    const compras = {
      id_producto: this.selectedItems[c].id,
      fecha: fechaHoy,
      metodopago: 'debito',
      pagototal: this.selectedItems[c].Total
    };
    console.log(compras)
    this.cartService.insertar(compras)    .subscribe((response) => {
      console.log(response);
    });
    this.alert("Felicidades", "Realizaste tu compra");
    this.cartService.removeCart();
   
    this.router.navigate(["/home"]);

  }

    

    
  /*   console.log(this.selectedItems[0])
    console.log(this.producto); */

  }
  async alert(header: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }
  mandar(event: Event) {
    event.preventDefault();
    console.log(this.producto.id);
    if (this.producto.valid) {
      this.cartService.mandar(this.producto.value).subscribe(
        resp => {
          this.router.navigateByUrl('login');
        }, error => {
        }
      )
    } else {
    }
  }
 /*    const compras = {
      id_compras: this.compras[index].id,



    }; */
}