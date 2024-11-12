import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWebtoonComponent } from './add-webtoon.component';

describe('AddWebtoonComponent', () => {
  let component: AddWebtoonComponent;
  let fixture: ComponentFixture<AddWebtoonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWebtoonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWebtoonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
