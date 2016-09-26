angular.module("myapp",[])
    .controller("ctrl",["$scope",function($scope){
        $scope.shangpin = [
            {id:1,name:"衣服",jiage:200,shuliang:50,zjiaqian:function(){
                return this.num*this.jiage}},
            {id:2,name:"裤子",jiage:100,shuliang:10,zjiaqian:function(){
                return this.num*this.jiage}},
            {id:3,name:"鞋子",jiage:150,shuliang:20,zjiaqian:function(){
                return this.num*this.jiage}},
            {id:4,name:"衬衣",jiage:110,shuliang:70,zjiaqian:function(){
                return this.num*this.jiage}},
            {id:5,name:"袜子",jiage:20,shuliang:50,zjiaqian:function(){
                return this.num*this.jiage}},
            {id:6,name:"手套",jiage:30,shuliang:30,zjiaqian:function(){
                return this.num*this.jiage}},
        ];
        $scope.zjiaqian=function(){
            var num=0;
            for(var i=0;i<$scope.shangpin.length;i++){
                num+=parseInt($scope.shangpin[i].jiage*$scope.shangpin[i].shuliang)
            }
            return num;
        };
        $scope.zshuliang=function(){
            var num=0;
            for(var i=0;i<$scope.shangpin.length;i++){
                num+=parseInt($scope.shangpin[i].shuliang)
            }
            return num;
        };
        $scope.del=function(id){
            for(var i=0;i<$scope.shangpin.length;i++){
                if($scope.shangpin[i].id==id){
                    $scope.shangpin.splice($scope.shangpin[i],1)
                }
            }
        };
        $scope.jian=function(id){
            for(var i=0;i<$scope.shangpin.length;i++){
                if($scope.shangpin[i].id==id){
                    if($scope.shangpin[i].shuliang==0){
                         return
                    }
                    $scope.shangpin[i].shuliang--;
                }
            }
        };
        $scope.jia=function(id){
            for(var i=0;i<$scope.shangpin.length;i++){
                if($scope.shangpin[i].id==id){
                    $scope.shangpin[i].shuliang++;
                }
            }
        };
        var one=document.getElementsByClassName("one")[0];
        $scope.clear=function(){
            $scope.shangpin=[];
            one.style.display="block"
            one.style.borderTop=0;
            one.style.bottom="483px"
        };
        $scope.type="shuliang";
        $scope.orderType="";
        $scope.order=function(type){
            $scope.type=type;
            if($scope.orderType=="-"){
                $scope.orderType=""
            }else{
                $scope.orderType="-"
            }
        }

    }])
    //.filter("slice",function(){
    //           return  function(obj,num1,num2){
    //        return obj.slice(num1,num2)
    //        }
    //})