import { Component, OnInit } from '@angular/core';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-expocomercial',
  templateUrl: './expocomercial.page.html',
  styleUrls: ['./expocomercial.page.scss'],
})
export class ExpocomercialPage implements OnInit {

  constructor(
    private photoViewer: PhotoViewer,
    private file: File
  ) { }

  ngOnInit() {
  } 
  
  viewPhoto(img:string) {
    let imageName = img;
    console.log(imageName);
    const ROOT_DIRECTORY = this.file.dataDirectory;
    const downloadFolderName = 'tmppaao';
    console.log(ROOT_DIRECTORY);
    
    this.photoViewer.show(this.file.applicationDirectory + "www/assets/img/"+imageName, "Plano");

    // //Create a folder in memory location
    // this.file.createDir(ROOT_DIRECTORY, downloadFolderName, true)
    //   .then((entries) => {
 
    //     //Copy our asset/img/logo.jpg to folder we created
    //     this.file.copyFile(this.file.applicationDirectory + "www/assets/img/", imageName, ROOT_DIRECTORY + downloadFolderName + '//', imageName)
    //       .then((entries) => {
 
    //         this.photoViewer.show(ROOT_DIRECTORY + downloadFolderName + "/" + imageName, '¿Quieres compartir?', {share: true});
            
    //        })
    //       .catch((error) => {
    //         alert('1 error ' + JSON.stringify(error));
    //       });
    //   })
    //   .catch((error) => {
    //     alert('2 error' + JSON.stringify(error));
    //   });
  }

}
