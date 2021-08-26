import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlCrouselComponent } from './owl-crousel.component';

describe('OwlCrouselComponent', () => {
  let component: OwlCrouselComponent;
  let fixture: ComponentFixture<OwlCrouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwlCrouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlCrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
