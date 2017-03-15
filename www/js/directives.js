angular.module('app.directives', [])





        .directive('ionCheckout', function ($rootScope, sharedCartService, $firebaseArray, fireBaseData) {

            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    $scope.addresses = $firebaseArray(fireBaseData.refUser().child(user.uid).child("address"));
                    $scope.user_info = user;
                }
            });

            var link = function (scope, element, attr) {
                scope.$watch(function () {
                    scope.userinfo = $scope.user_info;
                    scope.isLoggedIn = true;
                    scope.total = sharedCartService.total_amount;
                });
            };
            return {
                restrict: 'AEC',
                templateUrl: 'templates/partials/checkout-form.html',
                scope: {
                    userinfo: '='
                },
                link: link
            };
        })


        .directive('ionCheckoutFooter', function ($rootScope, $location, $ionicHistory, $ionicPlatform,$firebaseArray , sharedCartService,fireBaseData,CheckoutValidation) {

            firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                    $scope.addresses = $firebaseArray(fireBaseData.refUser().child(user.uid).child("address"));
                    $scope.user_info = user;
                }
            });

            var link = function (scope, element, attr) {
                scope.$watch(function () {
                     scope.userinfo = $scope.user_info;
                    scope.total = sharedCartService.total_amount;
                });
                element.addClass('bar bar-footer bar-positive');



            };
            return {
                restrict: 'AEC',
                templateUrl: 'templates/partials/checkout-footer.html',
                link: link
            };
        })


        .directive('checkoutName', function ($timeout, CheckoutValidation) {
            var link = function (scope, element, attr) {
                var iconfn = element.children()[1].children[1];
                var iconln = element.children()[2].children[1];
                scope.onFirstNameBlur = function () {
                    angular.element(iconfn).addClass('ion-loading-d');
                    $timeout(function () {
                        if (!CheckoutValidation.validateName(scope.userinfo.firstName)) {
                            angular.element(iconfn).removeClass('ion-loading-d');
                            angular.element(iconfn).addClass('ion-close-round').css({color: '#ED303C'});
                            return;
                        } else {
                            angular.element(iconfn).removeClass('ion-loading-d');
                            angular.element(iconfn).addClass('ion-checkmark-round').css({color: '#1fda9a'});
                        }
                    }, 300);
                };
                scope.onFirstNameFocus = function () {
                    angular.element(iconfn).removeClass('ion-checkmark-round ion-close-round').css({color: '#333'});
                };
                scope.onLastNameBlur = function () {
                    angular.element(iconln).addClass('ion-loading-d');
                    $timeout(function () {
                        if (!CheckoutValidation.validateName(scope.userinfo.lastName)) {
                            angular.element(iconln).removeClass('ion-loading-d');
                            angular.element(iconln).addClass('ion-close-round').css({color: '#ED303C'});
                            return;
                        } else {
                            angular.element(iconln).removeClass('ion-loading-d');
                            angular.element(iconln).addClass('ion-checkmark-round').css({color: '#1fda9a'});
                        }
                    }, 300);
                };
                scope.onLastNameFocus = function () {
                    angular.element(iconln).removeClass('ion-checkmark-round ion-close-round').css({color: '#333'});
                };
            };
            return {
                restrict: 'AE',
                scope: {
                    userinfo: '=',
                },
                link: link,
                templateUrl: 'templates/partials/checkout-name.html'
            };
        })


        .directive('checkoutAccount', function ($timeout, CheckoutValidation) {
            var link = function (scope, element, attr) {
                var icone = element.children()[1].children[1];
                var iconp = element.children()[2].children[1];
                scope.onEmailBlur = function () {
                    angular.element(icone).addClass('ion-loading-d');
                    $timeout(function () {
                        if (!CheckoutValidation.validateEmail(scope.userinfo.email)) {
                            angular.element(icone).removeClass('ion-loading-d');
                            angular.element(icone).addClass('ion-close-round').css({color: '#ED303C'});
                            return;
                        } else {
                            angular.element(icone).removeClass('ion-loading-d');
                            angular.element(icone).addClass('ion-checkmark-round').css({color: '#1fda9a'});
                        }
                    }, 300);
                };
                scope.onEmailFocus = function () {
                    angular.element(icone).removeClass('ion-checkmark-round ion-close-round').css({color: '#333'});
                };
                scope.onPasswordBlur = function () {
                    angular.element(iconp).addClass('ion-loading-d');
                    $timeout(function () {
                        if (!CheckoutValidation.validateName(scope.userinfo.password)) {
                            angular.element(iconp).removeClass('ion-loading-d');
                            angular.element(iconp).addClass('ion-close-round').css({color: '#ED303C'});
                            return;
                        } else {
                            angular.element(iconp).removeClass('ion-loading-d');
                            angular.element(iconp).addClass('ion-checkmark-round').css({color: '#1fda9a'});
                        }
                    }, 300);
                };
                scope.onPasswordFocus = function () {
                    angular.element(iconp).removeClass('ion-checkmark-round ion-close-round').css({color: '#333'});
                };
            };
            return {
                restrict: 'AE',
                scope: {
                    userinfo: '=',
                },
                link: link,
                templateUrl: 'templates/partials/checkout-account.html'
            };
        })


        .directive('checkoutAddress', function ($timeout, CheckoutValidation) {
            var link = function (scope, element, attr) {
                var icona = element.children()[1].children[1];
                var iconc = element.children()[3].children[1];
                var icons = element.children()[4].children[1];
                var iconz = element.children()[5].children[1];
                scope.onAddressBlur = function () {
                    angular.element(icona).addClass('ion-loading-d');
                    $timeout(function () {
                        if (!CheckoutValidation.validateName(scope.userinfo.addressLineOne)) {
                            angular.element(icona).removeClass('ion-loading-d');
                            angular.element(icona).addClass('ion-close-round').css({color: '#ED303C'});
                            return;
                        } else {
                            angular.element(icona).removeClass('ion-loading-d');
                            angular.element(icona).addClass('ion-checkmark-round').css({color: '#1fda9a'});
                        }
                    }, 300);
                };
                scope.onAddressFocus = function () {
                    angular.element(icona).removeClass('ion-checkmark-round ion-close-round').css({color: '#333'});
                };
                scope.onCityBlur = function () {
                    angular.element(iconc).addClass('ion-loading-d');
                    $timeout(function () {
                        if (!CheckoutValidation.validateName(scope.userinfo.city)) {
                            angular.element(iconc).removeClass('ion-loading-d');
                            angular.element(iconc).addClass('ion-close-round').css({color: '#ED303C'});
                            return;
                        } else {
                            angular.element(iconc).removeClass('ion-loading-d');
                            angular.element(iconc).addClass('ion-checkmark-round').css({color: '#1fda9a'});
                        }
                    }, 300);
                };
                scope.onCityFocus = function () {
                    angular.element(iconc).removeClass('ion-checkmark-round ion-close-round').css({color: '#333'});
                };
                scope.onStateBlur = function () {
                    angular.element(icons).addClass('ion-loading-d');
                    $timeout(function () {
                        if (!CheckoutValidation.validateName(scope.userinfo.state)) {
                            angular.element(icons).removeClass('ion-loading-d');
                            angular.element(icons).addClass('ion-close-round').css({color: '#ED303C'});
                            return;
                        } else {
                            angular.element(icons).removeClass('ion-loading-d');
                            angular.element(icons).addClass('ion-checkmark-round').css({color: '#1fda9a'});
                        }
                    }, 300);
                };
                scope.onStateFocus = function () {
                    angular.element(icons).removeClass('ion-checkmark-round ion-close-round').css({color: '#333'});
                };
                scope.onZipBlur = function () {
                    angular.element(iconz).addClass('ion-loading-d');
                    $timeout(function () {
                        if (!CheckoutValidation.validateZipcode(scope.userinfo.zipcode)) {
                            angular.element(iconz).removeClass('ion-loading-d');
                            angular.element(iconz).addClass('ion-close-round').css({color: '#ED303C'});
                            return;
                        } else {
                            angular.element(iconz).removeClass('ion-loading-d');
                            angular.element(iconz).addClass('ion-checkmark-round').css({color: '#1fda9a'});
                        }
                    }, 300);
                };
                scope.onZipFocus = function () {
                    angular.element(iconz).removeClass('ion-checkmark-round ion-close-round').css({color: '#333'});
                };
                scope.onCountryBlur = function () {
                    angular.element(icons).addClass('ion-loading-d');
                    $timeout(function () {
                        if (!CheckoutValidation.validateName(scope.userinfo.country)) {
                            angular.element(icons).removeClass('ion-loading-d');
                            angular.element(icons).addClass('ion-close-round').css({color: '#ED303C'});
                            return;
                        } else {
                            angular.element(icons).removeClass('ion-loading-d');
                            angular.element(icons).addClass('ion-checkmark-round').css({color: '#1fda9a'});
                        }
                    }, 300);
                };
                scope.onCountryFocus = function () {
                    angular.element(icons).removeClass('ion-checkmark-round ion-close-round').css({color: '#333'});
                };
            };
            return {
                restrict: 'AE',
                scope: {
                    userinfo: '=',
                },
                link: link,
                templateUrl: 'templates/partials/checkout-address.html'
            };
        })


        .directive('input', function ($timeout) {
            return {
                restrict: 'E',
                scope: {
                    'returnClose': '=',
                    'onReturn': '&'
                },
                link: function (scope, element, attr) {
                    element.bind('keydown', function (e) {
                        if (e.which == 13) {
                            if (scope.returnClose) {
                                //console.log('return-close true: closing keyboard');
                                element[0].blur();
                            }
                            if (scope.onReturn) {
                                $timeout(function () {
                                    scope.onReturn();
                                });
                            }
                        }
                    });
                }
            }
        });

/*
 .directive('ionProductImage', function($timeout, $ionicModal, $ionicSlideBoxDelegate) {
 var link = function(scope, element, attr) {
 scope.closeModal = function() {
 scope.modal.hide();
 scope.modal.remove();
 };
 element.on('click', function(){
 $ionicModal.fromTemplateUrl('templates/partials/cart-image-modal.html', {
 animation: 'slide-left-right',
 scope: scope
 })
 .then(function(modal){
 scope.modal = modal;
 scope.modal.show();
 $timeout( function() {
 $ionicSlideBoxDelegate.update();
 });
 });
 });
 };
 return {
 restrict: 'A',
 link: link,
 scope: '='
 };
 })
 */


