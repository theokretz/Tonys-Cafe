import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryLinksComponent } from './gallery-links.component';

describe('GalleryLinksComponent', () => {
  let component: GalleryLinksComponent;
  let fixture: ComponentFixture<GalleryLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryLinksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GalleryLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
