import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PlanetaService } from '../service/planeta.service';

@Component({
  selector: 'app-planeta',
  templateUrl: './planeta.component.html',
  styleUrls: ['./planeta.component.css']
})
export class PlanetaComponent implements OnInit {
  planeta$: Observable<any> = new Observable<any>();
  constructor(private activateRoute: ActivatedRoute,	
    private planetaService: PlanetaService) { }
    
    ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  cargarPlaneta(): any {
	
    return this.planetaService.getPlaneta(this.activateRoute.snapshot.params['id']);
		
  }
	
}

