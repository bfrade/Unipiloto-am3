angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('home', {
      url: '/page1',
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl'
    })
        
      
    
      
        
    .state('cards', {
      url: '/page2',
      templateUrl: 'templates/cards.html',
      controller: 'cardsCtrl'
    })
        
      
    
      
        
    .state('forms', {
      url: '/page3',
      templateUrl: 'templates/forms.html',
      controller: 'formsCtrl'
    })
        
      
    
      
        
    .state('toggle', {
      url: '/page4',
      templateUrl: 'templates/toggle.html',
      controller: 'toggleCtrl'
    })
        
      
    
      
        
    .state('actionSheet', {
      url: '/page5',
      templateUrl: 'templates/actionSheet.html',
      controller: 'actionSheetCtrl'
    })
        
      
    
      
        
    .state('modal', {
      url: '/page6',
      templateUrl: 'templates/modal.html',
      controller: 'modalCtrl'
    })
        
      
    
      
        
    .state('popup', {
      url: '/page7',
      templateUrl: 'templates/popup.html',
      controller: 'popupCtrl'
    })
        
      
    
      
        
    .state('event', {
      url: '/page8',
      templateUrl: 'templates/event.html',
      controller: 'eventCtrl'
    })
        
      
    
      
        
    .state('cameraTabDefaultPage', {
      url: '/page10',
      templateUrl: 'templates/cameraTabDefaultPage.html',
      controller: 'cameraTabDefaultPageCtrl'
    })
        
      
    
      
        
    .state('cartTabDefaultPage', {
      url: '/page11',
      templateUrl: 'templates/cartTabDefaultPage.html',
      controller: 'cartTabDefaultPageCtrl'
    })
        
      
    
      
        
    .state('cloudTabDefaultPage', {
      url: '/page12',
      templateUrl: 'templates/cloudTabDefaultPage.html',
      controller: 'cloudTabDefaultPageCtrl'
    })
        
      
    
      
        
    .state('cheks', {
      url: '/page13',
      templateUrl: 'templates/cheks.html',
      controller: 'cheksCtrl'
    })
        
      
    
      
        
    .state('range', {
      url: '/page14',
      templateUrl: 'templates/range.html',
      controller: 'rangeCtrl'
    })
        
      
    
      
        
    .state('radio', {
      url: '/page15',
      templateUrl: 'templates/radio.html',
      controller: 'radioCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/page1');

});