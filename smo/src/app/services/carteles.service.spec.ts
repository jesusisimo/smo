import { TestBed } from '@angular/core/testing';

import { CartelesService } from './carteles.service';

describe('CartelesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartelesService = TestBed.get(CartelesService);
    expect(service).toBeTruthy();
  });
});
