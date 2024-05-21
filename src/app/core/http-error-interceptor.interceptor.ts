import { HttpInterceptorFn } from '@angular/common/http';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('httpErrorInterceptor');
  // Clone the request and add the authorization header
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer 123456789`
    }
  });
  console.log('authReq', authReq);
  return next(authReq);
};
