import { TestBed } from '@angular/core/testing';

import { CountProductService } from './count-product.service';

describe('CountProductService', () => {
  let service: CountProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
