import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { User } from '../../user';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
user=new User();
  constructor(private dataservice:DataserviceService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.register();
    
  }

  register(){
    this.dataservice.register(this.user).subscribe(res=>{
      this.user=res;
    })
  }
  
  
}
