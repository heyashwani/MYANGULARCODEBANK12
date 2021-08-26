import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickCrouselComponent } from './slick-crousel.component';

describe('SlickCrouselComponent', () => {
  let component: SlickCrouselComponent;
  let fixture: ComponentFixture<SlickCrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlickCrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlickCrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
