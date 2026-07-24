import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  regions = [
    { name: 'África', icon: '🌍', countries: 54 },
    { name: 'América', icon: '🌎', countries: 35 },
    { name: 'Asia', icon: '🌏', countries: 48 },
    { name: 'Europa', icon: '🏰', countries: 44 },
    { name: 'Oceanía', icon: '🏝️', countries: 14 },
  ];

  featuredCountries = [
    { flag: '🇲🇽', name: 'México', capital: 'Ciudad de México', population: '128 millones', region: 'América', code: 'MEX' },
    { flag: '🇫🇷', name: 'Francia', capital: 'París', population: '67 millones', region: 'Europa', code: 'FRA' },
    { flag: '🇯🇵', name: 'Japón', capital: 'Tokio', population: '125 millones', region: 'Asia', code: 'JPN' },
    { flag: '🇧🇷', name: 'Brasil', capital: 'Brasilia', population: '215 millones', region: 'América', code: 'BRA' },
    { flag: '🇿🇦', name: 'Sudáfrica', capital: 'Ciudad del Cabo', population: '60 millones', region: 'África', code: 'ZAF' },
    { flag: '🇦🇺', name: 'Australia', capital: 'Canberra', population: '26 millones', region: 'Oceanía', code: 'AUS' },
  ];
}
