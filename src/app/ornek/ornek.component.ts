import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-ornek',
  templateUrl: './ornek.component.html',
  styleUrl: './ornek.component.css'
})
export class OrnekComponent implements OnInit {
 post:Post| undefined;
 constructor(private jsonPlaceHolderService:JsonplaceholderService){}
 
 
  ngOnInit(): void {
    this.jsonPlaceHolderService.getPost(200).subscribe({
     next:(x)=> console.log(x.body),
     error:(e:Error)=>console.warn(`Hata: ${e.message}`),
     complete:()=>console.log("istek tamamlandı")
    })
  }

}
