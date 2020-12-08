import { TestBed } from '@angular/core/testing';

import { ProdutoDevolucaoService } from './produto-devolucao.service';

describe('ProdutoDevolucaoService', () => {
  let service: ProdutoDevolucaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoDevolucaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
