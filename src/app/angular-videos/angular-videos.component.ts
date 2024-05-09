import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-videos',
  templateUrl: './angular-videos.component.html',
  styleUrls: ['./angular-videos.component.css']
})
export class AngularVideosComponent implements OnInit {
  panelOpenState = false;
  
  classesArray = [
    {
      titleName: "HTML & CSS",
      classesList: [
        "class 1", "class 2"
      ]
    },
    {
      titleName: "JS",
      classesList: [
        "class 1", "class 2"
      ]
    },
    {
      titleName: "Project session",
      classesList: [
        "class 1", "class 2"
      ]
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
