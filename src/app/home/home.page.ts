import { FlashLightService } from './../services/flash-light.service';
import { RouterModule, Router } from '@angular/router';
import { GitServiceService } from './../services/git-service.service';
import { Component } from '@angular/core';
import { ToastServiceService } from '../services/toast-service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  username: string;
  info : any;
  constructor(
    private GitService : GitServiceService, 
    private Router : Router, 
    private Toast : ToastServiceService, 
    private Flash : FlashLightService){ } 

  searchUser() {
    this.GitService.getGitUser(this.username).subscribe(data => {
      this.info = data;
      this.GitService.ObtainedUser = data;
      this.Router.navigate(['/user-result']);
    }, err => this.Toast.presentToast());
  }

  LightOn(){
    this.Flash.turnFlash();
  }
}
