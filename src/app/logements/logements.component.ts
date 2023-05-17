import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LogementService } from '../logement.service';
import { logement } from '../models/logement.model';




@Component({
  selector: 'app-logements',
  templateUrl: './logements.component.html',
  styleUrls: ['./logements.component.scss']
})
export class LogementsComponent implements OnInit{
  data!: logement[];

  constructor(
    private apiService: LogementService
  ){}
  ngOnInit(): void {
  
    this.apiService.getData().subscribe((response) => {
      this.data = response;
    })
      
    }
     
    
    

}

