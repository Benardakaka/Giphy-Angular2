// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  TrendingUrl: 'https://api.giphy.com/v1/gifs/trending?api_key=iXnp72e4U2TNlfyWd2Wj9IHLxBiTKbMM&limit=20&rating=g',
  SearchUrl: 'https://api.giphy.com/v1/gifs/search?api_key=iXnp72e4U2TNlfyWd2Wj9IHLxBiTKbMM'

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
