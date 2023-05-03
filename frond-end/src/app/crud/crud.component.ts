import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
  StudentArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;
 
  stname: string ="";
  course: string ="";
  currentStudentID = "";
 
  constructor(private http: HttpClient )
  {
    this.getAllStudent();
  }
 
  ngOnInit(): void {
  }
 
  getAllStudent()
  {
    this.http.get("https://localhost:7290/api/Student/GetStudent")
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.StudentArray = resultData;
    });
  }
 
  register()
  {
  
    let bodyData = {
      "stname" : this.stname,
      "course" : this.course,
    
    };
 
    this.http.post("https://localhost:7290/api/Student/AddStudent",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully")
        this.getAllStudent();
    });
  }
 
  setUpdate(data: any)
  {
   this.stname = data.stname;
   this.course = data.course;
  
 
   this.currentStudentID = data.id;
  }
 
  UpdateRecords()
  {
    let bodyData =
    {
      "stname" : this.stname,
      "course" : this.course,
    };
    
    this.http.patch("https://localhost:7290/api/Student/UpdateStudent"+ "/"+ this.currentStudentID,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Updateddd")
        this.getAllStudent();
      
    });
  }
  save()
  {
    if(this.currentStudentID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }      
 
  }
 
 
  setDelete(data: any)
  {
    this.http.delete("https://localhost:7290/api/Student/DeleteStudent"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Deletedddd")
        this.getAllStudent();
    });
  }
}
