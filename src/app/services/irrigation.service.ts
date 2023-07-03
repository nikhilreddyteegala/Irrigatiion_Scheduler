import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080';

@Injectable({
    providedIn: 'root'
})
export class IrrigationService {

    constructor(private http: HttpClient) { }

    

    postRegistrationDetails(data :any): any {
       return this.http.post(`${baseUrl}/${'registration'}`,data)
        .toPromise()
        .then(response => response as any)
        .catch(this.handleError);
    }

    postLoginDetails(data :any): any{
        return this.http.post(`${baseUrl}/${'login'}`,data)
        .toPromise()
        .then(response => response as any)
        .catch(this.handleError)

    }
    forgotpassword(data:any): any {
        return this.http.post(`${baseUrl}/${'forgotpassword'}`,data)
        .toPromise()
        .then(response => response as any)
        .catch(this.handleError);
    }

    newpassword(data : any) : any {
        return this.http.post(`${baseUrl}/${'newpassword'}`,data)
        .toPromise()
        .then(response => response as any)
        .catch(this.handleError);
    }

    accountDetails(data : any) :any {
        return this.http.post(`${baseUrl}/${'accountDetails'}`,data)
        .toPromise()
        .then(response => response as any)
        .catch(this.handleError);
    }

    getTableData(data : any): Promise<any> {
        return this.http.post<any>(`${baseUrl}/${'getData'}`,data)
            .toPromise()
            .then(response => response as any)
            .catch(this.handleError);
    }
    getFieldData( data : any): Promise<any> {
        return this.http.post<any>(`${baseUrl}/${'getfieldData'}`,data)
            .toPromise()
            .then(response => response as any)
            .catch(this.handleError);
    }

    geteditFieldData(data : any): Promise<any> {
        return this.http.post<any>(`${baseUrl}/${'geteditfieldData'}`,data)
        .toPromise()
        .then(response => response as any)
        .catch(this.handleError);
    }

    postData(data:any): any {
        this.http.post(`${baseUrl}/${'store'}`,data)
        .toPromise()
        .then(response => response as any)
        .catch(this.handleError);
    }

    posteditData(data:any): any {
        this.http.post(`${baseUrl}/${'editfieldData'}`,data)
        .toPromise()
        .then(response => response as any)
        .catch(this.handleError);
    }

    postOwnDate(data : any) : any {
        this.http.post(`${baseUrl}/${'postOwnDate'}`,data)
        .toPromise()
        .then(response => response as any)
        .catch(this.handleError);
    }

    postDeleteData(data:any): any {
        this.http.post(`${baseUrl}/${'delete'}`,data)
        .toPromise()
        .then(response => response as any)
        .catch(this.handleError);

    }

    usereditoptions(data:any) : any {
        return this.http.post<any>(`${baseUrl}/${'useredit'}`,data)
        .toPromise()
        .then(response => response as any)
        .catch(this.handleError)
    }

    // getAllData():any {
    //     return this.http.get<any>(`${baseUrl}/${'hello'}`)
    // }

    // getAllData(): Promise<any> {
    //     return this.http.get(`${baseUrl}/${'nik'}`)
    //         .toPromise()
    //         .then(response => response as any)
    //         .catch(this.handleError);
    // }

    private handleError(error: any): Promise<Array<any>> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}