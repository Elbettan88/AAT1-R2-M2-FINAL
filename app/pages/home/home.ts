import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [RouterLink, FormsModule, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  searchTerm = '';

  regions = [
    { name: 'África', icon: '🌍', countries: 54 },
    { name: 'América', icon: '🌎', countries: 35 },
    { name: 'Asia', icon: '🌏', countries: 48 },
    { name: 'Europa', icon: '🏰', countries: 44 },
    { name: 'Oceanía', icon: '🏝️', countries: 14 },
  ];

  featuredCountries = [
    {
      flag: '🇲🇽',
      name: 'México',
      capital: 'Ciudad de México',
      population: '128 millones',
      region: 'América',
      code: 'MEX',
    },
    {
      flag: '🇫🇷',
      name: 'Francia',
      capital: 'París',
      population: '67 millones',
      region: 'Europa',
      code: 'FRA',
    },
    {
      flag: '🇯🇵',
      name: 'Japón',
      capital: 'Tokio',
      population: '125 millones',
      region: 'Asia',
      code: 'JPN',
    },
    {
      flag: '🇧🇷',
      name: 'Brasil',
      capital: 'Brasilia',
      population: '215 millones',
      region: 'América',
      code: 'BRA',
    },
    {
      flag: '🇿🇦',
      name: 'Sudáfrica',
      capital: 'Ciudad del Cabo',
      population: '60 millones',
      region: 'África',
      code: 'ZAF',
    },
    {
      flag: '🇦🇺',
      name: 'Australia',
      capital: 'Canberra',
      population: '26 millones',
      region: 'Oceanía',
      code: 'AUS',
    },
  ];

  goToSearch() {
    if (this.searchTerm.trim()) {
      // Navegar a lista de países con el término de búsqueda
      // Se puede implementar con Router cuando esté configurado
      console.log('Buscar:', this.searchTerm);
    }
  }

  goToRegion(region: string) {
    console.log('Navegar a región:', region);
  }
}
