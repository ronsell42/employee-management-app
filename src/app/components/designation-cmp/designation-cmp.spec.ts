import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignationCmp } from './designation-cmp';

describe('DesignationCmp', () => {
  let component: DesignationCmp;
  let fixture: ComponentFixture<DesignationCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesignationCmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignationCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
