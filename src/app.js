/**
 * Created by glenn on 11.08.16.
 */

/* global angular:true */

import './app.css';
import appModule from './app.module';

angular.bootstrap(
  document.querySelector('#app'),
  [appModule.name],
);
