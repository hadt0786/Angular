// import { Component, OnInit } from '@angular/core';
// import { GithubProfileserviceService } from '../service/githubprofile.service';
// import { ActivatedRoute } from '@angular/router';



// @Component({
//   selector: 'app-githubprofile',
//   templateUrl: './githubprofile.component.html',
//   styleUrls: ['./githubprofile.component.css']
// })
// export class GithubprofileComponent implements OnInit {

//   constructor(private profileService: GithubProfileserviceService, private route: ActivatedRoute) { }
//   profile: any[];
//   ngOnInit() {
//     this.profileService.getAll().subscribe(response => {
//       this.profile = response.json();
//       this.route.paramMap.subscribe(params => {
//         let id = +params.get('id');
//         console.log("The ID is " + id);
//       });



//     }
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubProfileserviceService } from '../service/githubprofile.service';


@Component({
  selector: 'app-githubprofile',
  templateUrl: './githubprofile.component.html',
  styleUrls: ['./githubprofile.component.css']
})
export class GithubprofileComponent implements OnInit {
  
  constructor(private route: ActivatedRoute, private postService:GithubProfileserviceService) { }

  ngOnInit() {
    
  }
  
}