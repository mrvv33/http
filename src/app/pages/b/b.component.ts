import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrl: './b.component.css'
})
export class BComponent implements OnInit{
  jsonPlaceHolderService: any;
  ngOnInit(): void {
    this.jsonPlaceHolderService.getPostList(1,10).subscribe((x: any)=>{
      console.log(x);
    })

}}
