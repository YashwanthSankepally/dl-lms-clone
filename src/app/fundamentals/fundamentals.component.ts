import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-fundamentals',
  templateUrl: './fundamentals.component.html',
  styleUrls: ['./fundamentals.component.css']
})
export class FundamentalsComponent implements OnInit {

 selectedVideoUrl: string = '';
 sanitizedVideoUrl: SafeResourceUrl = '';
 videoSelcted:boolean = false;
 selectedVideoTitle: string = '';

  HTML_Classes = [
    { videoTitle: "How to start?", videoURL: "https://www.youtube.com/embed/UliFPiijpdI?si=2eEs8MoyUshIs9Kg" },
    { videoTitle: "Html for beginners", videoURL: "https://www.youtube.com/embed/N_fXUhMtKVo?si=fERXxR8Gv_ejxPjy" },
    { videoTitle: "Lists", videoURL: "https://www.youtube.com/embed/-KsumKFEZiM?si=Ze3X1V-hYoBJPTjF" },
    { videoTitle: "Tables", videoURL: "https://www.youtube.com/embed/YaTwkIumJxg?si=83cUnzLN_6RSHh13" },
    { videoTitle: "Entities", videoURL: "https://www.youtube.com/embed/81BOlnWTjzk?si=xC9rFjVKOFJhs4tG" },
    { videoTitle: "Anchor Tag", videoURL: "https://www.youtube.com/embed/76JmaqvFCnk?si=-MOiDdmjz_cCWnxZ" },
    { videoTitle: "Image Tag", videoURL: "https://www.youtube.com/embed/4pFFGVCUHis?si=X-OFIVal_nAQQPsu" },
    { videoTitle: "Block Level ELements", videoURL: "https://www.youtube.com/embed/-qWxjJwsXO4?si=km0vCZ1O3ry1p6ez" },
    { videoTitle: "Div Tag", videoURL: "https://www.youtube.com/embed/hjhZ_rbM58Q?si=ZSroe7Sr3UGsufH5" },
    { videoTitle: "HTML Forms", videoURL: "https://www.youtube.com/embed/3QFDIkxB-aY?si=CyFHso9TYJ8qVOAD" },
    { videoTitle: "Audio & Video", videoURL: "https://www.youtube.com/embed/Sn5kKU5WuLo?si=ClsjYsEdIIC0OXjc" },
    { videoTitle: "Summary tag", videoURL: "https://www.youtube.com/embed/nzKFDmUEi40?si=mw_KdkRhqMREGP2f" },
    { videoTitle: "iframe tag", videoURL: "https://www.youtube.com/embed/aK12VwhHH9s?si=KXW_xEwS37WC1QEO" },
    { videoTitle: "Data List tag", videoURL: "https://www.youtube.com/embed/vxNSLrHNdis?si=JnDEnjG3OL1rMXyB" },
    { videoTitle: "Google Maps in HTML", videoURL: "https://www.youtube.com/embed/tgr1gdZM0G4?si=vqqJ7A_bh10Lhnax" },
    { videoTitle: "favicon in HTML", videoURL: "https://www.youtube.com/embed/X5GElzlh6UQ?si=W7DWwBhNQ2UBZROt" },
    { videoTitle: "HTML Forms fieldset tag", videoURL: "https://www.youtube.com/embed/h-EyP9evP5o?si=biuZai2wNdfwIMgW" },
    { videoTitle: "Custom FOnts in HTML", videoURL: "https://www.youtube.com/embed/901TLaPA-JA?si=tnvlzXBRz12gH9vX" },
    { videoTitle: "HTML Form method GET vs POST", videoURL: "https://www.youtube.com/embed/ryqbqSfLVM4?si=A72ZEToGtm8MUuO4" },
    { videoTitle: "VS Code shortcuts", videoURL: "https://www.youtube.com/embed/5FUK-8IdfQ0?si=mapKrK2FogqIqkDQ" },
    { videoTitle: "HTML Interview Questions", videoURL: "https://www.youtube.com/embed/q7mIoFPd0Mo?si=GD2tOUlIM3qt6KH_" },
    { videoTitle: "Usefull websites for frontend", videoURL: "https://www.youtube.com/embed/3dwBNBvDDWo?si=e3gXm7wYxGNO6Hwi" }
  ]

  CSS_Classes = [
    { videoTitle: "CSS tutorial for beginners", videoURL: "https://www.youtube.com/embed/1gKm9R_5lsE?si=qe5Nv5KJdpCUCCyQ" },
    { videoTitle: "CSS Selectors", videoURL: "https://www.youtube.com/embed/KYGH4f5YLEs?si=mxE-XkDdEjKy8rPy" },
    { videoTitle: "Pseudo Elements", videoURL: "https://www.youtube.com/embed/u4DYjkEinw4?si=PsYrw7EY61O7JnxP" },
    { videoTitle: "Attribute Selectors", videoURL: "https://www.youtube.com/embed/N_sUYLU-ANI?si=odbXkWWgwyE6iSl4" },
    { videoTitle: "Pseudo Class", videoURL: "https://www.youtube.com/embed/JFrrQXt_4Jc?si=axRkJ_Au5fZce0rT" },
    { videoTitle: "CSS Box Model", videoURL: "https://www.youtube.com/embed/8DGFfKnTey4?si=GSS3Y0UPY8Rqp8B_" },
    { videoTitle: "CSS Position Absolute", videoURL: "https://www.youtube.com/embed/UOPthZvCb9s?si=PBlgHqLrarkS-ypi" },
    { videoTitle: "CSS Units", videoURL: "https://www.youtube.com/embed/zTH86M8KkOU?si=2l5BwnNZi7eOiHdV" },
    { videoTitle: "CSS Box Sizing", videoURL: "https://www.youtube.com/embed/zTH86M8KkOU?si=lBZz_gHmaol0QLhX" },
    { videoTitle: "CSS Colors", videoURL: "https://www.youtube.com/embed/fsQFamCe4SU?si=aXxrw6k5CGFRIedV" },
    { videoTitle: "CSS Float", videoURL: "https://www.youtube.com/embed/kIOfscFjF8w?si=p0ClGTwRD6xF8Uwr" },
    { videoTitle: "CSS z index", videoURL: "https://www.youtube.com/embed/DwMB1DksfKw?si=7tK5wkfkCWjhEvp8" },
    { videoTitle: "CSS Flexbox", videoURL: "https://www.youtube.com/embed/KBHeypHgv_0?si=VjphhHGGTm8hIAGj" },
    { videoTitle: "CSS Box Shadow ", videoURL: "https://www.youtube.com/embed/ButajZO42Io?si=JUowcPGaHvOQ53dZ" },
    { videoTitle: "CSS Gradient", videoURL: "https://www.youtube.com/embed/9pwjpONzlhA?si=NFoKnFBMF1yTKSQO" },
    { videoTitle: "CSS Gradient text", videoURL: "https://www.youtube.com/embed/0ZdnKtvda4I?si=-YtqQOouGm1bWTeM" },
    { videoTitle: "CSS Transition", videoURL: "https://www.youtube.com/embed/YewVz3Bzolk?si=UaDGNMOc7F_N-Tbf" },
    { videoTitle: "CSS Transformations", videoURL: "https://www.youtube.com/embed/NpOUheL1-aM?si=HqcR-p0FVH8F_Ebz" },
    { videoTitle: "icons", videoURL: "https://www.youtube.com/embed/hVXbHkl04rI?si=cOyjDT7Tj137Af0s" },
    { videoTitle: "Google Fonts in HTML", videoURL: "https://www.youtube.com/embed/dc8BC8AI4u0?si=-kOe3H312-srWOq9" },
    { videoTitle: "CSS Variables", videoURL: "https://www.youtube.com/embed/ENJ_Ggfn0-0?si=DrtKDEnmZ8lFBf3J" },
    { videoTitle: "CSS Media Queries", videoURL: "https://www.youtube.com/embed/_uFiLcNryB0?si=Bk_NZofNJkA6vZ9T" },
    { videoTitle: "CSS Grid Tutorial", videoURL: "https://www.youtube.com/embed/iwimB21o6as?si=J90WfScQrsrxQWEf" },
    { videoTitle: "CSS Grid Layout", videoURL: "https://www.youtube.com/embed/KlAbJr0QW4s?si=KnNjjIEIC7GkXsWV" },
    { videoTitle: "CSS Animations", videoURL: "https://www.youtube.com/embed/-RQujyP0IoA?si=skLADeQnkhdsXEig" },
    { videoTitle: "CSS Loading Animation", videoURL: "https://www.youtube.com/embed/-RQujyP0IoA?si=skLADeQnkhdsXEig" },
    { videoTitle: "CSS Interview Questions", videoURL: "https://www.youtube.com/embed/OhKRdRZjwX0?si=QVYH1_f_zADPvbTU" },
    { videoTitle: "CSS display property", videoURL: "https://www.youtube.com/embed/MyJAyX7j3yc?si=VFDYWAmXyeCdIfVb" },
    { videoTitle: "CSS Position Absolute", videoURL: "https://www.youtube.com/embed/OnFc6fJZKWI?si=Lx8ikUNdjijSKdL2" },
    { videoTitle: "CSS nth- child and nth-of -type pseudo classes", videoURL: "https://www.youtube.com/embed/P0DldzWF-zQ?si=67vksnI64Epjkr-2" },
    { videoTitle: "CSS Cheat Sheet", videoURL: "https://www.youtube.com/embed/3F_po29sKPs?si=eSpQPuOP4ZAJnE5e" },
  ]

  JS_Classes = [
    { videoTitle: "JavaScript (JS) for beginners", videoURL: "https://www.youtube.com/embed/R4MMtTLUZp4?si=SNciG02ZHFxBeuja" },
    { videoTitle: "Road map to learn JavaScript", videoURL: "https://www.youtube.com/embed/_DTwrzHWtjI?si=Zzc0K2hrtGa9oV-w" },
    { videoTitle: "Variables", videoURL: "https://www.youtube.com/embed/aZPkq7giw9o?si=lKDVmlc3sR41zWxP" },
    { videoTitle: "Data Types", videoURL: "https://www.youtube.com/embed/hIGspfjkgQY?si=CCYZhSecYqXGDP7_" },
    { videoTitle: "Operators", videoURL: "https://www.youtube.com/embed/wRqNUcM7Qvc?si=JDvfX2koxdnAFvha" },
    { videoTitle: "Ternary Operator", videoURL: "https://www.youtube.com/embed/YFBBjj8UOmc?si=JhK3H34nT38wAiIQ" },
    { videoTitle: "If else", videoURL: "https://www.youtube.com/embed/T-3k6n4nUWQ?si=YsaEW1qgLTsoSwUq" },
    { videoTitle: "Type Conversion", videoURL: "https://www.youtube.com/embed/XUvQfhkHGXw?si=jxR1y7qkbfbhKk1e" },
    { videoTitle: "Loops", videoURL: "https://www.youtube.com/embed/VrWuAEbu2BU?si=65w6Z_LEZnSceluk" },
    { videoTitle: "For of loop", videoURL: "https://www.youtube.com/embed/LC1ClqfjrRQ?si=SkEGkuF77MH5lDMk" },
    { videoTitle: "Template Literal", videoURL: "https://www.youtube.com/embed/n3rYHNU20mU?si=ZMu0Y5sLC_PBy23Z" },
    { videoTitle: "Arrays", videoURL: "https://www.youtube.com/embed/-YawXd1ItO8?si=JuqIJYJ-SZuwq6mF" },
    { videoTitle: "Functions in JS", videoURL: "https://www.youtube.com/embed/ICrky_07nf8?si=nnUAP82ELky2sPT7" },
    { videoTitle: "Types of functions", videoURL: "https://www.youtube.com/embed/onFn8EA0bs0?si=5n66D0aQKSsY_7xM" },
    { videoTitle: "Scope in JS", videoURL: "https://www.youtube.com/embed/TAsZMfaH7CI?si=BFBu_sjfYBZrheEt" },
    { videoTitle: "Default Parameters", videoURL: "https://www.youtube.com/embed/jFWxDP62Xhw?si=6mcdWoJ2lsnhvOlz" },
    { videoTitle: "For Each loop", videoURL: "https://www.youtube.com/embed/fD1Fyfm8TZc?si=5IhjeMDoUmBMrwI3" },
    { videoTitle: "Set in JS", videoURL: "https://www.youtube.com/embed/rAkJxoXEIg4?si=I82CQ8xh_o2y6iRN" },
    { videoTitle: "Objects in JS", videoURL: "https://www.youtube.com/embed/xFKIbAtD79g?si=xy1SNK5oW4alel6U" },
    { videoTitle: "Console Methods in JS", videoURL: "https://www.youtube.com/embed/fgnxiY0sO50?si=R1lGEGekv5Q3Hyv-" },
    { videoTitle: "Document Object Modal (DOM)", videoURL: "https://www.youtube.com/embed/kwIRIG9ZF_c?si=dngYFEhc3sM5h48f" },
    { videoTitle: "DOM Manipulation 1", videoURL: "https://www.youtube.com/embed/VbSJJsb6dLE?si=x3Sdsd7B3igMCKVU" },
    { videoTitle: "DOM Manipulation 2", videoURL: "https://www.youtube.com/embed/UJ2u8rnlVTE?si=1dRQHzXPNYIBhQzQ" },
    { videoTitle: "Modal Windows in JS", videoURL: "https://www.youtube.com/embed/Tczzr9WeN2Q?si=_oqz8dwNJEbqBIa-" },
    { videoTitle: "Events and Events Handling", videoURL: "https://www.youtube.com/embed/nDBh4dggbcw?si=pD2FHp6MXlVd5L9c" },
    { videoTitle: "Set Timeout function", videoURL: "https://www.youtube.com/embed/AsN9uNLwzmk?si=wH83azzgNWe7UWQ3" },
    { videoTitle: "map() method", videoURL: "https://www.youtube.com/embed/ZD1FStN0oso?si=WeGdoNgbvQ4CEDJr" },
    { videoTitle: "filter() method", videoURL: "https://www.youtube.com/embed/XIhfz6kFPIk?si=RGwyxmXMH3A4MnlI" },
    { videoTitle: "reduce() method", videoURL: "https://www.youtube.com/embed/8MQu8yhDn-Q?si=Kw-86TysEwBS-gY7" },
    { videoTitle: "finde(), any() & every() methods ", videoURL: "https://www.youtube.com/embed/W0_pv8cc_aA?si=HfsjQVNaXz9HcBwU" },
    { videoTitle: "Spread Operator", videoURL: "https://www.youtube.com/embed/pkDnAPQlabg?si=8RCitScHtrtqQsHA" },
    { videoTitle: "Full playlist (Click Play next button ('⏯️') to play next video)", videoURL: "https://www.youtube.com/embed/videoseries?si=zCdUgJIk6K94Yei0&amp;list=PLzdWZT-ZJD08NwOPGEGzy9jg5wwe_Wylj" },
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
