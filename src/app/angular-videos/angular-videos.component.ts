import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-angular-videos',
  templateUrl: './angular-videos.component.html',
  styleUrls: ['./angular-videos.component.css']
})
export class AngularVideosComponent implements OnInit {

  selectedVideoUrl: string = '';
  sanitizedVideoUrl: SafeResourceUrl = '';
  videoSelcted:boolean = false;
  selectedVideoTitle: string = '';
 
   angularIntroduction = [
     { videoTitle: "Introduction to Angular", videoURL: "https://www.youtube.com/embed/WL6pRGm_lNs?si=bitXtigyQc86XhrX" },
     { videoTitle: "Road Map to Angular", videoURL: "https://www.youtube.com/embed/J0qBMwPzndo?si=y2vN3def3Pt1ISQP" },
     { videoTitle: "How to install Angular", videoURL: "https://www.youtube.com/embed/wVS5K-tbgro?si=4a9SItK2IsjvVmZ6" },
     { videoTitle: "Component in Angular", videoURL: "https://www.youtube.com/embed/09BNTkzvfwQ?si=_jPMgjPl5VElwEy8" },
     { videoTitle: "Angular Project Structure", videoURL: "https://www.youtube.com/embed/oQubBh9To40?si=9jWOCoE7pVIXxmCO" }
   ]
 
   dataBinding = [
     { videoTitle: "Data Binding", videoURL: "https://www.youtube.com/embed/jtBKWMaGOoM?si=5uxvb7kvAKVnCVEK" },
     { videoTitle: "String Interpolation", videoURL: "https://www.youtube.com/embed/l_YbENkxJVI?si=WyJVvFc2hMHhus9h" },
     { videoTitle: "Property Binding", videoURL: "https://www.youtube.com/embed/HXtox9M_pig?si=offWTbA-OKxFR6JY" },
     { videoTitle: "Class Binding", videoURL: "https://www.youtube.com/embed/9IAZOFtk3H8?si=wuU1K_OOL20fUZkR" },
     { videoTitle: "Style Binding", videoURL: "https://www.youtube.com/embed/leXjfssgz6k?si=Me6hi1OGkzJjJphc" },
     { videoTitle: "Event Binding", videoURL: "https://www.youtube.com/embed/WnzxPwKIyOw?si=YrWVqOSl2R8U3hP_" },
     { videoTitle: "Two Binding", videoURL: "https://www.youtube.com/embed/yE7be587M64?si=hOv70chJnDhhbwQp" },

   ]
 
   DirectivesAndPipes = [
     { videoTitle: "Directives", videoURL: "https://www.youtube.com/embed/TJXD5Gtzjr4?si=2TSnmmqVSM9VICBc" },
     { videoTitle: "NgIf in Angular", videoURL: "https://www.youtube.com/embed/ZulxhLbBJyM?si=s2nwMHJZHnCkUp98" },
     { videoTitle: "NgFor", videoURL: "https://www.youtube.com/embed/JIebLgnW8O4?si=zrISASBoV2idaE48" },
     { videoTitle: "NgSwitch", videoURL: "https://www.youtube.com/embed/JIebLgnW8O4?si=D6QPxEryhfQOOAp_" },
     { videoTitle: "Pipe", videoURL: "https://www.youtube.com/embed/dwa9hELZVRk?si=1Q3oiB_qFDDKHKww" },
     { videoTitle: "Custome Pipe", videoURL: "https://www.youtube.com/embed/T3NeDhKGsMo?si=15qD4L6tqOX4eW_f" },
     { videoTitle: "Template reference variable", videoURL: "https://www.youtube.com/embed/thv1u9wSObI?si=eN912m5I9PkEumjU" }
   ]

   Decorators = [
    { videoTitle: "Parent and Child Components", videoURL: "https://www.youtube.com/embed/SwRey-RaZ4I?si=0PqA8QO62n25T5at" },
    { videoTitle: "Component Communication", videoURL: "https://www.youtube.com/embed/-rNYq7eJDhc?si=iJxnOxsekaAoHiBv" },
    { videoTitle: "Input Decorator", videoURL: "https://www.youtube.com/embed/IczQX_YaH7Y?si=929hovg0PRev2JM5" },
    { videoTitle: "Output Decorator", videoURL: "https://www.youtube.com/embed/x3MAb2RQurw?si=7nU8UIX5O5dEqrNr" },
    { videoTitle: "Child to Parent Communication", videoURL: "https://www.youtube.com/embed/JGKh0cuoZcA?si=3D4MTREq6zg-iKAU" },
    { videoTitle: "View Child Decorator", videoURL: "https://www.youtube.com/embed/JGKh0cuoZcA?si=kVuC7WB-smTHHvgH" },
    { videoTitle: "DOM Manipulation in Angular", videoURL: "https://www.youtube.com/embed/27vntD1lJSw?si=5KeJ61uuz4JVID5e" },
    { videoTitle: "viewChild vs viewChildren decorators", videoURL: "https://www.youtube.com/embed/ZhiucUMEeHk?si=G3HeXhDn-C4cCxBt" },
  ]

  RoutesAndServices = [
    { videoTitle: "Routing in Angular", videoURL: "https://www.youtube.com/embed/LH10rAEUm_Q?si=-eAHBUAbOEVdUu5i" },
    { videoTitle: "Services in Angular", videoURL:"https://www.youtube.com/embed/u48LdeLqhUU?si=EZQaVu4rZEpAl1Pb" },
    { videoTitle: "Route Parameters", videoURL: "https://www.youtube.com/embed/bQ_FuewK7tM?si=nG5-JMsIEJoo_VJX" },
    { videoTitle: "Query Parameters", videoURL: "https://www.youtube.com/embed/HvXkUFUijVA?si=AO1Yxjm-T9fBsG-9" },
    { videoTitle: "Route Navigation without anchor tag", videoURL: "https://www.youtube.com/embed/JQEHEonrrao?si=9pHDOIUOdrb34dtT" },
    { videoTitle: "Child Routing", videoURL: "https://www.youtube.com/embed/YpB0q65kjek?si=zBjFzDjeSo1xMWMV" },
    { videoTitle: "Full Playlist", videoURL: "https://www.youtube.com/embed/videoseries?si=5UwwjL9C-l5OYTTc&amp;list=PLzdWZT-ZJD08nIY0WPevCXLZWR310EMWX" }
  ]
 
   constructor(private sanitizer: DomSanitizer) { }
 
   ngOnInit(): void {
   }
 
   get displayTabs(): boolean {
     return !!this.selectedVideoUrl;  // Returns true if selectedVideoUrl is not an empty string
   }
 
   selectClass(item: any): void {
     this.selectedVideoUrl = item.videoURL;
     this.selectedVideoTitle = item.videoTitle;
     this.sanitizedVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.selectedVideoUrl);
   }
 
   sanitizedUrl(url: string): SafeResourceUrl {
     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
   }
 
}
