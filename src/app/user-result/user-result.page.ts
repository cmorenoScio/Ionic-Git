import { Component, OnInit } from '@angular/core';
import { GitServiceService } from '../services/git-service.service';

@Component({
  selector: 'app-user-result',
  templateUrl: './user-result.page.html',
  styleUrls: ['./user-result.page.scss'],
})
export class UserResultPage implements OnInit {

  obtainedUserData :any;
  constructor(private GitService : GitServiceService){

  }
  ngOnInit() {
    this.obtainedUserData = this.GitService.ObtainedUser;
  }
}
