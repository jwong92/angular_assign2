import { TestBed, inject } from '@angular/core/testing';

import { JWeatherService } from './j-weather.service';

describe('JWeatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JWeatherService]
    });
  });

  it('should be created', inject([JWeatherService], (service: JWeatherService) => {
    expect(service).toBeTruthy();
  }));
});
