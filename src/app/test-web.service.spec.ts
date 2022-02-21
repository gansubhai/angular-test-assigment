import { TestBed } from '@angular/core/testing';

import { TestWebService } from './test-web.service';

describe('TestWebService', () => {
  let service: TestWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
