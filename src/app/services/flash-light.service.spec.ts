import { TestBed } from '@angular/core/testing';

import { FlashLightService } from './flash-light.service';

describe('FlashLightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlashLightService = TestBed.get(FlashLightService);
    expect(service).toBeTruthy();
  });
});
