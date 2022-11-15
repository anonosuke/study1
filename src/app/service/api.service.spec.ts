import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ApiService);
  });

  it('getの返り値を確認する', () => {
    service.apiGet('/user-agent').subscribe((response :any) => expect(response).toContain({
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
      }))
  });

  it('postの返り値を確認する', () => {
    service.apiPost('/api/users', {name: 'au',job: 'member'}).subscribe((response: any) => {
      expect(response).toContain('au member 692 2022-11-15T00:24:29.850Z')
    })
  });
});
