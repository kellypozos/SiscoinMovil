import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ProductoService } from 'src/app/services/producto.service';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {
  @Input() info: any;



  productos: any;
  textoBuscar = '';
  valueSelected: string = "inicio";
  quantity: number;
  price: number;
  total: number;

  ngOnInit(): void {
    console.log(this.info)
    this.getProductos();
  
    this.quantity =1
    this.price = 3
    this.total = this.price
  }



  segmentChanged(event: CustomEvent) {
    this.valueSelected = event.detail.value;
    console.log(event.detail.value);
  }


  constructor(private serviceProducto: ProductoService,
    public popCtrl: PopoverController, private modalController: ModalController,
    private router: Router) { }


  async openPopover(ev: any) {
    //console.log("popver");
    const popover = await this.popCtrl.create({
      component: PopoverComponent,
      cssClass: 'my-popover-class',
      event: ev,
    })

    popover.onDidDismiss().then(data => console.log(data))
    return await popover.present();
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }

  getProductos() {
    this.serviceProducto.getAll().subscribe(
      resp => {
        this.productos = resp;
      }, error => {
        console.log("no se pudo conectar a los productos")
      }
    )
  }
  cerrarModal() {
    this.modalController.dismiss();
  }

//carrito
openCar(){
  this.router.navigate(['/car']);
}

addItem(){
  if(this.quantity > 0){
      this.quantity += 1;
      this.total = this.price * this.quantity;
      console.log("quantityAdd",this.quantity)
      console.log("price", this.price)
  }
}
restItem(){
  if(this.quantity > 1){
      this.quantity -= 1;
      this.total = this.price * this.quantity;
      console.log("quantityRest", this.quantity)
  }

}
}
