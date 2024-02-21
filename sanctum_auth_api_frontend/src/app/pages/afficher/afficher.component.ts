import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../../services/dataservice.service';
import { ActivatedRoute } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-afficher',
  standalone: true,
  imports: [NgFor],
  templateUrl: './afficher.component.html',
  styleUrl: './afficher.component.css'
})
export class AfficherComponent implements OnInit {
  contacts:any= [];
  constructor(private dataservice:DataserviceService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts(){
    this.dataservice.getAllContacts().subscribe(res=>{
      this.contacts=res.data;
    })
  }
}
