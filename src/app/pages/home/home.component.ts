import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  photoCover:string = "https://disneyplusbrasil.com.br/wp-content/uploads/2021/07/Series-Marvel-Disney-Plus-1024x576.jpg"
  contentTitle:string = ""
  contentDescription: string = ""
  
  constructor () {}
  ngOnInit(): void {
      
  }

}
