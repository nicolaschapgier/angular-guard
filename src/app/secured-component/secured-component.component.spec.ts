import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuredComponentComponent } from './secured-component.component';

describe('SecuredComponentComponent', () => {
  let component: SecuredComponentComponent;
  let fixture: ComponentFixture<SecuredComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuredComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecuredComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
