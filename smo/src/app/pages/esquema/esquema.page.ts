import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-esquema',
  templateUrl: './esquema.page.html',
  styleUrls: ['./esquema.page.scss'],
})
export class EsquemaPage implements OnInit {
  slideOpts = {
    zoom: true
      };
    
   options: DocumentViewerOptions = {
    title: 'My PDF'
  }
  constructor(private document: DocumentViewer) { }

  
  

  ngOnInit() {
    this.document.viewDocument('../../assets/25-May-2019-Sábado_Saturday.pdf', 'application/pdf', this.options);
  }

}
