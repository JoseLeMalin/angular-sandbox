import { TestBed } from "@angular/core/testing";
import { HttpInterceptorFn, provideHttpClient } from "@angular/common/http";
import { httpErrorInterceptor } from "./http-error-interceptor.interceptor";
import {
  HttpClientTestingModule,
  HttpTestingController,
  provideHttpClientTesting,
} from "@angular/common/http/testing";

describe("httpErrorInterceptor", () => {
  const httpTestingController: HttpTestingController =
    TestBed.inject<HttpTestingController>(HttpTestingController);
  // const httpClient = TestBed.inject<HttpClient>(HttpClient);

  const interceptor: HttpInterceptorFn = (req, next) =>
    TestBed.runInInjectionContext(() => httpErrorInterceptor(req, next));

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [httpErrorInterceptor, provideHttpClient(), provideHttpClientTesting()],
    });
    // httpTestingController = TestBed.inject<HttpTestingController>(HttpTestingController);
    // console.log(httpTestingController);
    //
    // httpClient = TestBed.inject<HttpClient>(HttpClient);
    // console.log(httpClient);
  });
  afterEach(() => {
    httpTestingController.verify();
  });
  it("should be created", () => {
    expect(interceptor).toBeTruthy();
  });
  it("Should trigger a request and the interceptor", () => {
    const baseUrl: string = "https://jsonplaceholder.typicode.com/todos/1";
    // const httpTesting = TestBed.inject<HttpInterceptorFn>(httpErrorInterceptor);
    // const httpTesting = TestBed.inject(HttpTestingController);
    const req = httpTestingController.expectOne(baseUrl, "Request to load the configuration");

    expect(req.request.method).toBe("GET");
    // expect(req.request.method).toBe("GET");
    expect(interceptor).toHaveBeenCalled();
  });
  // it("should be created", () => {
  //   const baseUrl: string = "https://jsonplaceholder.typicode.com/todos/1";
  //   // const httpTesting = TestBed.inject<HttpInterceptorFn>(httpErrorInterceptor);
  //   const httpTesting = TestBed.inject(HttpTestingController);
  //
  //   const config$ = httpTesting.getConfig<Config>();
  //   const req = httpTesting.expectOne(baseUrl, "Request to load the configuration");
  //   const configPromise = firstValueFrom(config$);
  //   expect(req.request.method).toBe("GET");
  //   // Flushing the request causes it to complete, delivering the result.
  //   // req.flush();
  //   // We can then assert that the response was successfully delivered by the `ConfigService`:
  //   expect(await configPromise).toEqual(DEFAULT_CONFIG);
  //   // Finally, we can assert that no other requests were made.
  //   httpTesting.verify();
  // });
});
