import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { User } from '../../user';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  user=new User();
  constructor(private dataservice:DataserviceService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.login();
  }

  login(){
    this.dataservice.login(this.user).subscribe(res=>{
      this.user=res;
    })
  }
}
