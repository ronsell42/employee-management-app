import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesCmp } from './roles-cmp';

describe('RolesCmp', () => {
  let component: RolesCmp;
  let fixture: ComponentFixture<RolesCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesCmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
