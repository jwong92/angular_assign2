import { TestBed, inject } from '@angular/core/testing';

import { WeatherdetailsService } from './weatherdetails.service';

describe('WeatherdetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeatherdetailsService]
    });
  });

  it('should be created', inject([WeatherdetailsService], (service: WeatherdetailsService) => {
    expect(service).toBeTruthy();
  }));
});
