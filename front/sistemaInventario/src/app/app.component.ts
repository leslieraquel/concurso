import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sistemaInventario';

    products = [
    {
      name: 'Producto 1',
      description: 'Descripción del producto 1',
      price: 29.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Producto 2',
      description: 'Descripción del producto 2',
      price: 49.99,
      image: 'https://via.placeholder.com/150'
    },
    {
      name: 'Producto 3',
      description: 'Descripción del producto 3',
      price: 19.99,
      image: 'https://via.placeholder.com/150'
    }
  ];
  displayedColumns: string[] = ['name', 'description', 'price'];
  dataSource = new MatTableDataSource(this.products);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addToCart(product: any) {
    console.log('Agregado al carrito:', product);
    // Aquí podrías agregar lógica para manejar un carrito real
  }
}
