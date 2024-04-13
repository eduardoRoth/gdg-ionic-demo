import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonList, IonCardSubtitle, IonCardContent, IonFooter, IonButton, IonChip, IonAvatar, IonInput, IonButtons, IonSpinner } from '@ionic/angular/standalone';
import { Personaje, PersonajesService } from '../personajes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonButtons, IonInput, IonAvatar, IonChip, IonButton, IonFooter, IonCardContent, IonCardSubtitle, IonList, IonLabel, IonItem, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit {
  private readonly personajesService = inject(PersonajesService)
  personajes: Personaje[] = [];
  pagina: number = 1;
  cargando: boolean = false;
  
  constructor() {}

  ngOnInit(): void {
    this.personajesService.cargar(1).subscribe(
      (listado) => {
        this.personajes = listado;
      }
    );
  }

  cargarPorPagina(event: CustomEvent){
    this.cargando = true;
    const paginaSeleccionada = event.detail.value;
    this.personajesService.cargar(paginaSeleccionada).subscribe(
      (listado) => {
        this.personajes = listado;
        this.cargando = false;
      }
    )
  }
}
