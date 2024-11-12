import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebtoonListComponent } from './webtoon-list.component';

describe('WebtoonListComponent', () => {
  let component: WebtoonListComponent;
  let fixture: ComponentFixture<WebtoonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebtoonListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebtoonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
