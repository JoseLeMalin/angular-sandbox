import { TestBed } from '@angular/core/testing';

import { MapSandboxEsriService } from './map-sandbox-esri.service';

describe('MapSandboxEsriService', () => {
  let service: MapSandboxEsriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapSandboxEsriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
