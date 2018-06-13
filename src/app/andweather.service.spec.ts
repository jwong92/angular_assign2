import { TestBed, inject } from '@angular/core/testing';

import { AndweatherService } from './andweather.service';

describe('AndweatherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AndweatherService]
    });
  });

  it('should be created', inject([AndweatherService], (service: AndweatherService) => {
    expect(service).toBeTruthy();
  }));
});
