import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCmp } from './master-cmp';

describe('MasterCmp', () => {
  let component: MasterCmp;
  let fixture: ComponentFixture<MasterCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterCmp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
