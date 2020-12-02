import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from '../../services/cliente.service';

declare var M:any;

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
  providers:[ClienteService]
})

export class ClienteComponent implements OnInit {

  clientes:any=[];
  cliente=new Cliente();

  constructor(public clienteService:ClienteService) {
    this.getClientes();
   }

  ngOnInit(): void {
  }

  addCliente(form?:NgForm){
    if (form.value._id) {
      this.clienteService.putCliente(this.cliente).subscribe(res=>{
        this.limpiarForm(form);
        M.toast({html: "Cliente Actualizado"});
        this.getClientes();
      });
    }else{
      this.clienteService.postCliente(this.cliente).subscribe(res=>{
        this.getClientes();
        M.toast({html: "Cliente guardado"});
        this.limpiarForm();
      })
    }
  }

  getClientes(){
    this.clienteService.getClientes().subscribe(res=>{
      this.clientes=res[1];
    });
  }

  editarCliente(cliente: Cliente){
    this.cliente=cliente;
  }

  eliminarCliente(_id:string){
    if (confirm('Seguro que quiere eliminar este cliente?')) {
      this.clienteService.deleteCliente(_id).subscribe(res=>{
        this.getClientes();
        M.toast({html: "Cliente eliminado"});
      });
    }
  }

  limpiarForm(form?:NgForm){
    if (form) {
      form.reset();
      this.clienteService.selectedCliente=new Cliente();
    }
  }
}
