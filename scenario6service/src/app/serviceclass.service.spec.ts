import { TestBed } from '@angular/core/testing';

import { ServiceclassService } from './serviceclass.service';

describe('ServiceclassService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceclassService = TestBed.get(ServiceclassService);
    expect(service).toBeTruthy();
  });
});
