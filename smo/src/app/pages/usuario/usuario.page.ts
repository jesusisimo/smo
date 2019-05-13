import { Component, OnInit } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { UsuarioService } from 'src/app/services/usuario.service';
import { AjustesService } from 'src/app/services/ajustes.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  avatars = [
    {
      img: 'av-1.png',
      seleccionado: true
    },
    {
      img: 'av-2.png',
      seleccionado: false
    },
    {
      img: 'av-3.png',
      seleccionado: false
    },
    {
      img: 'av-4.png',
      seleccionado: false
    },
    {
      img: 'av-5.png',
      seleccionado: false
    },
    {
      img: 'av-6.png',
      seleccionado: false
    },
    {
      img: 'av-7.png',
      seleccionado: false
    },
    {
      img: 'av-8.png',
      seleccionado: false
    },
  ];

  avatarSlide = {
    slidesPerView: 3.5
  };
  usuario: IUsuario = {};
  avatarActual = "av-1.png";
  constructor(private _us: UsuarioService,
    private _as: AjustesService) {
  }

  async ngOnInit() {
    this.usuario = await this._us.getUsuario();

    this.avatars.forEach(avatar => avatar.seleccionado = false);
    for (const avatar of this.avatars) {
      if (avatar.img === this.usuario.avatar) {
        avatar.seleccionado = true;
        break;
      }
    }
    if(this.usuario.email_c=="1"){
      this.usuario.email_c="true";
    }else{
      this.usuario.email_c="false";
    }
    if(this.usuario.telefono_c=="1"){
      this.usuario.telefono_c="true";
    }else{
      this.usuario.telefono_c="false";
    }
    if(this.usuario.institucion_c=="1"){
      this.usuario.institucion_c="true";
    }else{
      this.usuario.institucion_c="false";
    }
    console.log(this.usuario);
  }

  seleccionarAvatar(avatar) {
    this.avatars.forEach(av => av.seleccionado = false);
    avatar.seleccionado = true;
    this.usuario.avatar = avatar.img;
  }

  logout() {
    this._us.logout();
  }



  async actualizar(fActualizar: NgForm) {
    if (fActualizar.invalid) { return; }
    const actualizado = await this._us.actualizarUsuario(this.usuario);
    if (actualizado) {
      this._as.presentToast('Registro actualizado');
    } else {
      this._as.presentToast('No se pudo actualizar');
    }

  }



}
