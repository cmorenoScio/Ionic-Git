import { Injectable } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Injectable({
  providedIn: 'root'
})
export class FlashLightService {

  constructor(private flashlight: Flashlight) { }

  turnFlash(){
    this.flashlight.toggle();
  }
}
