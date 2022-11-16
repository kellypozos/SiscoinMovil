import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { timer } from 'rxjs';
import { ProductoService } from 'src/app/services/producto.service';
import { PopoverComponent } from 'src/app/components/popover/popover.component';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { CartServiceService } from 'src/app/services/cart-service.service';
@Component({
  selector: 'app-cards-promociones',
  templateUrl: './cards-promociones.component.html',
  styleUrls: ['./cards-promociones.component.scss'],
})
export class CardsPromocionesComponent implements OnInit {

  textoBuscar = '';


  @Input() info: any;
  option = {
    initialSlide: 1,
    loop: true,
    slidesPerView: 1.5,
    centeredSlides: true,
    spaceBetween: 15,
  }
  quantity: number;
  price: number;
  total: number;
  productos: any;
  id: any;
  nombre: any;
  precio: any;
  LikeValue: number =0;

  constructor(private serviceProducto: ProductoService, private serviceCart: CartServiceService,
    public popCtrl: PopoverController, private modalController: ModalController,
    ) { }

    /* constructor2(){
      this.LikeValue = 0;
      } */
 /*  ngAfterViewInit(): void {
    timer(2000).subscribe(
      t => {
        this.perfil();
      }
    );
  } */
  ngOnInit() {
  //   // this.serviceProducto.getAll().subscribe(resp => {
  //   //   this.productos = resp;
  //   //   //console.log(this.productos)
  //   //   this.id = this.productos.id_producto;
  //   //   this.nombre = this.productos.producto;
  //   //   this.precio = this.productos.precio_v;
  // })
  //   console.log(this.precio)
     this.quantity =1
     this.price = 3
     this.total = this.price
     
  }
  
  handleLike(){
    this.LikeValue++;
   }

addCart(id_producto: any,quantity){
  // console.log(id_producto)
  // this.serviceProducto.getOne(id_producto).subscribe(() => {
  //   this.productos = this.productos.filter(std => std.id_producto !== id_producto);
  // });
  console.log("valor de id",id_producto)
   this.serviceProducto.getOne(id_producto).subscribe(resp => {
    this.productos = resp; 
    this.productos = {
     "id": this.productos.id_producto,
     "quantity": quantity,
     "name":this.productos.producto,
     "price":this.productos.precio_v,
     "Total": this.total = this.productos.precio_v * this.quantity
   }
   this.serviceCart.addProduct(this.productos)
   console.log("valor de productos:",this.productos)
  })

}
/*   perfil() {
    let user: any = JSON.parse(sessionStorage.getItem('usuario'));
    if (!user.id_clientesmovil) {
      Swal.fire({
        title: 'Información de usuario incompleta',
        text: "Para ofrecerte la mejor experiencia dentro de nuestra aplicación, actualiza la información de tu usuario en la sección de Peril",
        heightAuto: false,
        showCancelButton: false,
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'Aceptar'
      })
    }
  }
  bu */scar(event) {
    this.textoBuscar = event.detail.value;
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
