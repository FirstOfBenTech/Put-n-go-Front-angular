import { Component, OnInit } from '@angular/core';
import { MesBoutiquesApiService } from '../../service/mes-boutiques-api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-boutique',
  templateUrl: './view-boutique.component.html',
  styleUrls: ['./view-boutique.component.css']
})
export class ViewBoutiqueComponent implements OnInit{
  idRoute:any;
  boutiqueData:any;
  constructor(private apiMesBoutiques:MesBoutiquesApiService,private activeRoute:ActivatedRoute){}
ngOnInit(): void {
  this.idRoute=this.activeRoute.snapshot.paramMap.get('id');
  this.apiMesBoutiques.getBoutique(this.idRoute).subscribe(response=>{
    this.boutiqueData=response;
   })
}


}
