import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';
import { Auto } from 'src/app/models/auto';
import{AutoService} from '../../services/auto.service';

declare var M :any;

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css'],
  providers : [AutoService]
})
export class AutosComponent implements OnInit {

  autos:any=[];
  auto=new Auto();
  constructor(public autoService: AutoService) { 
    this.getAutos();
  }

  

  ngOnInit(): void {
  }

  addAuto(form? : NgForm){
    if(form.value._id){
      this.autoService.putAuto(this.auto).subscribe(res=>{
        this.limpiarForm(form);
        M.toast({html: "Auto actualizado"});
        this.getAutos();
        
      });
    }else{
      this.autoService.postAuto(this.auto).subscribe(res=>{
        M.toast({html: "Auto guardado"});
        this.getAutos();
        this.limpiarForm(form);
      });
    }
    
  }

  getAutos(){
    this.autoService.getAutos().subscribe(res=>{
      this.autos=res[1];
    });
  }

  editarAuto(auto: Auto){
    this.auto=auto;
  }

  eliminarAuto(_id: string){
    if (confirm('Seguro que quiere eliminar?')) {
      this.autoService.deleteAuto(_id).subscribe(res=>{
        this.getAutos();
        M.toast({html: "Auto eliminado"});
    });
    }
  }

limpiarForm(form? : NgForm){
  if(form){
    form.reset();
    this.autoService.selectedAuto=new Auto();
  }
}
}
