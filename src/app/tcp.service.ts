import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tcp } from './tcp';


@Injectable({
  providedIn: 'root'
})
export class TcpService {

  constructor(private http: HttpClient) { }


}
