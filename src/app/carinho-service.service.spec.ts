import { TestBed } from '@angular/core/testing';

import { CarinhoServiceService } from './carinho-service.service';

describe('CarinhoServiceService', () => {
  let service: CarinhoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarinhoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
