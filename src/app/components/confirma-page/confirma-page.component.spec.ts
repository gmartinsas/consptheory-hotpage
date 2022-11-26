import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaPageComponent } from './confirma-page.component';

describe('ConfirmaPageComponent', () => {
  let component: ConfirmaPageComponent;
  let fixture: ComponentFixture<ConfirmaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmaPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
