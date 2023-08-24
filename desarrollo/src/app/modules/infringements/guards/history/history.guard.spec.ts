import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { historyGuard } from './history.guard';

describe('historyGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => historyGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
