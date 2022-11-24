import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LadingPageComponent } from './lading-page.component';

describe('LadingPageComponent', () => {
  let component: LadingPageComponent;
  let fixture: ComponentFixture<LadingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LadingPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LadingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
