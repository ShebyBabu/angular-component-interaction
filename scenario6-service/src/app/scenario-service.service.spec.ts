import { TestBed } from '@angular/core/testing';

import { ScenarioServiceService } from './scenario-service.service';

describe('ScenarioServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScenarioServiceService = TestBed.get(ScenarioServiceService);
    expect(service).toBeTruthy();
  });
});
