import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponentBingBongComponent } from './demo-component-bing-bong.component';

describe('DemoComponentBingBongComponent', () => {
  let component: DemoComponentBingBongComponent;
  let fixture: ComponentFixture<DemoComponentBingBongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoComponentBingBongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoComponentBingBongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
