import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiService {

  private apiUrl = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {
  }

  public getAllDrinks(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/drinks`);
  }

  public getAllFood(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/food`);
  }

  public getAllDesserts(): Observable<any> {
    return this.httpClient.get(`${this.apiUrl}/desserts`);
  }

}
