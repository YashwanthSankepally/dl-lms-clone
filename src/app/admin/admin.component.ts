import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  displayCourses: boolean = false;
  selectedCourse: any = null; // Update type to `any` to store the selected course object
  errorMessage: string | null = null;
  youTubeUrl: string = '';
  displayUsers:boolean = false;
  searchTerm: string = '';
  filteredCourses: any[] = [];

  coursesArray = [
    {
      courseName: "Adv Java - 2303 - 7 AM",
      tutor: "Manish",
      courseTabs: {
        Tab1: "Course Info", Tab2: "Modules", Tab3: "Projects", Tab4: "Resources", Tab5: "Enrolled", Tab6: "Resume"
      },
      Modules: "10",
      formInput: '',
    },
    {
      courseName: "Adv Java - 2401 - 9 AM",
      tutor: "Manish",
      courseTabs: {
        Tab1: "Course Info", Tab2: "Modules", Tab3: "Projects", Tab4: "Resources", Tab5: "Enrolled", Tab6: "Resume"
      },
      Modules: "8",
      formInput: '',
    },
    {
      courseName: "AWS - 2302 - 9 AM",
      tutor: "Sai Krishna",
      courseTabs: {
        Tab1: "Course Info", Tab2: "Modules", Tab3: "Projects", Tab4: "Resources", Tab5: "Enrolled", Tab6: "Resume"
      },
      Modules: "12",
      formInput: '',
    },
    {
      courseName: "React - 2406 - 9 AM",
      tutor: "Sai Kumar",
      courseTabs: {
        Tab1: "Course Info", Tab2: "Modules", Tab3: "Projects", Tab4: "Resources", Tab5: "Enrolled", Tab6: "Resume"
      },
      Modules: "6",
      formInput: '',
    },
    {
      courseName: "Angular - 2404 - 10 AM",
      tutor: "Manideep",
      courseTabs: {
        Tab1: "Course Info", Tab2: "Modules", Tab3: "Projects", Tab4: "Resources", Tab5: "Enrolled", Tab6: "Resume"
      },
      Modules: "5",
      formInput: '',
    },
  ]

  constructor() { }

  ngOnInit(): void { }

  courses() {
    this.displayCourses = true;
    this.displayUsers = false;
  }

  addCourse(event: MouseEvent) {
    event.stopPropagation();
    // Your logic for adding a course goes here
    
    console.log(localStorage.setItem("key", this.youTubeUrl))
  }

  selectCourse(course: any) {
    this.selectedCourse = course;
  }

  validateYouTubeUrl(url: string): boolean {
    const regex = /^(https?\:\/\/)?(www\.youtube\.com|youtu\.?be)\/.+$/;
    return regex.test(url);
  }

  saveLink() {
    if (this.selectedCourse && this.validateYouTubeUrl(this.selectedCourse.formInput)) {
      console.log("Valid YouTube URL:", this.selectedCourse.formInput);
      // Store the valid YouTube URL. Implementation depends on your requirements.
      this.youTubeUrl = this.selectedCourse.formInput;
      this.errorMessage = null;
    } else {
      this.errorMessage = "Link is not valid";
    }
  }

  addUsers() {
    this.displayUsers = true;
    this.displayCourses = false;
  }

  filterCourses(searchTerm: string) {
    this.filteredCourses = this.coursesArray.filter(course =>
      course.courseName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
