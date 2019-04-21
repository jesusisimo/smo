import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
{
  path: 'tabs',
  component: TabsPage,
  children: [
  {
    path: 'notificaciones',
    children: [
    {
      path: '',
      loadChildren: '../notificaciones/notificaciones.module#NotificacionesPageModule'
    }
    ]
  },
  {
    path: 'principal',
    children: [
    {
      path: '',
      loadChildren: '../principal/principal.module#PrincipalPageModule'
    },
    {
      path: 'programa',
      loadChildren: '../programa/programa.module#ProgramaPageModule'
    },
    {
      path: 'buscador',
      loadChildren: '../buscador/buscador.module#BuscadorPageModule'
    },
    {
      path: 'esquema',
      loadChildren: '../esquema/esquema.module#EsquemaPageModule'
    },
    {
      path: 'carteles',
      loadChildren: '../carteles/carteles.module#CartelesPageModule'
    },
    {
      path: 'videos',
      loadChildren: '../videos/videos.module#VideosPageModule'
    },
    {
      path: 'actividades',
      loadChildren: '../actividades/actividades.module#ActividadesPageModule'
    },
    {
      path: 'ponentes',
      loadChildren: '../ponentes/ponentes.module#PonentesPageModule'
    },
    {
      path: 'bienvenida',
      loadChildren: '../bienvenida/bienvenida.module#BienvenidaPageModule'
    },
    {
      path: 'expocomercial',
      loadChildren: '../expocomercial/expocomercial.module#ExpocomercialPageModule'
    },
    {
      path: 'patrocinadores',
      loadChildren: '../patrocinadores/patrocinadores.module#PatrocinadoresPageModule'
    },
    {
      path: 'circuito',
      loadChildren: '../circuito/circuito.module#CircuitoPageModule'
    },
    {
      path: 'agenda',
      loadChildren: '../agenda/agenda.module#AgendaPageModule'
    },
    {
      path: 'congresistas',
      loadChildren: '../congresistas/congresistas.module#CongresistasPageModule'
    }
    ]
  },
  {
    path: 'tab3',
    children: [
    {
      path: '',
      loadChildren: '../tab3/tab3.module#Tab3PageModule'
    }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/principal',
    pathMatch: 'full'
  }
  ]
},
{
  path: '',
  redirectTo: '/tabs/principal',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [
  RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
