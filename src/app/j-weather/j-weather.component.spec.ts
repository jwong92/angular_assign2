import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JWeatherComponent } from './j-weather.component';

describe('JWeatherComponent', () => {
  let component: JWeatherComponent;
  let fixture: ComponentFixture<JWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
