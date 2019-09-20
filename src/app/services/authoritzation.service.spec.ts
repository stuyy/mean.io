import { TestBed } from '@angular/core/testing';

import { AuthoritzationService } from './authoritzation.service';

describe('AuthoritzationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthoritzationService = TestBed.get(AuthoritzationService);
    expect(service).toBeTruthy();
  });
});
