/**
 * Created by karanbir on 25/11/15.
 */
    angular
        .module('smartApp')
        .controller('ToolbarCtrl', ToolbarCtrl);

function ToolbarCtrl($scope, User, $state){
    this.isAuthenticated =  false;
    this.isLoginOrForgot = false;

    switch($state.current.data){
        case 'login':
            this.isLoginOrForgot = true;
            break;
        case 'forgot':
            this.isLoginOrForgot = true;
            break;

    }

    if(User.isAuthenticated()){
        this.isAuthenticated = true;
        this.user = User.getUser()
    }
    $scope.forgot = function(){
        $state.go('forgot');
    };
}

