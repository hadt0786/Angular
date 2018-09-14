import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GithubPostserviceService } from '../github-postservice.service';



@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css']
})
export class GitComponent implements OnInit {

  followers: any[];

  constructor(private postService: GithubPostserviceService, private route:ActivatedRoute) { }


  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        console.log(params);
        let id = +params.get('id');
        console.log("The ID is" + id);

        

      });
}
}