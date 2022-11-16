import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {

  productos: any;
  textoBuscar = '';

  constructor(private serviceProducto: ProductoService, private modalController: ModalController) { }

  ngOnInit() {
    this.getProductos();
  }

  buscar(event) {
    this.textoBuscar = event.detail.value;
  }

  getProductos() {
    this.serviceProducto.getAll().subscribe(
      resp => {
        this.productos = resp;
      }, error => {
        console.log("no se pudo conectar a los cupones")
      }
    );
  }

  cerrarModal() {
    this.modalController.dismiss();
  }

}
