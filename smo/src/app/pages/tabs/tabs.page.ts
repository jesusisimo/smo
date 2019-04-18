import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {
  slideOpts = {
		effect: 'cube',
    speed: 700,
    autoplay:true,
		loop:true
	  };
}
