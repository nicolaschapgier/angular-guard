import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotsecuredComponent } from './notsecured.component';

describe('NotsecuredComponent', () => {
  let component: NotsecuredComponent;
  let fixture: ComponentFixture<NotsecuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotsecuredComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotsecuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
