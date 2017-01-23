(function (angular) {
	'use strict';
	var myapp = angular.module('myTodoMVC', ['ngRoute']);


	/*控制器*/
	myapp.controller('mainControll', ['$scope', '$location', function ($scope, $location) {
		/*文本框模型*/
		$scope.text = '';


		/*任务列表模型*/
		/*每一个任务结构{id：1，text：‘学习’，completed:true}*/
		$scope.todos = [
			{id: 0.1556, text: '学习', completed: true},
			{id: 0.445, text: '学习2', completed: false},
			{id: 0.343, text: '学习3', completed: false},
			{id: 0.324, text: '学习4', completed: false},
		];
		/*添加todo*/

		$scope.add = function () {
			if (!$scope.todos.text) {
				return;
			}
			$scope.todos.push({id: Math.random(), text: $scope.text, completed: false});
			$scope.text = '';
		}

		/*删除*/
		$scope.remove = function (id) {
			for (var i = 0; i < $scope.todos.length; i++) {
				if ($scope.todos[i].id === id) {
					$scope.todos.splice(i, 1);
					break;
				}


			}
		}


		/*删除 完成项*/
		$scope.clear = function () {
			var arr = [];

			for (var i = 0; i < $scope.todos.length; i++) {
				if (!$scope.todos[i].completed) {
					arr.push($scope.todos[i]);
				}
			}
			$scope.todos = arr;

		}


		// 是否有完成项

		$scope.haveCompleted = function () {

			for (var i = 0; i < $scope.todos.length; i++) {
				if ($scope.todos[i].completed === true) {
					return true;
				}


			}
			return false;

		}


		//	编辑
		$scope.isEditingId = -1;
		$scope.editing = function (id) {
			$scope.isEditingId = id;
		}

		$scope.save = function () {
			$scope.isEditingId = -1;
		}


		/*全选*/
		var now = true;
		$scope.selectAll = function () {
			for (var i = 0; i < $scope.todos.length; i++) {
				$scope.todos[i].completed = now;
			}
			now = !now;
		}

		// $scope.sletctor = {completed: false};
		$scope.$location = $location;
		// console.log($location.hash());

		$scope.$watch('$location.hash()', function (now, old) {

			switch (now) {
				case '/completed' :
					$scope.sletctor = {completed: true};
					break;

					case '/active' :
					$scope.sletctor = {completed: false};
					break;

				default:
					$scope.sletctor = {};
			}


		})


		/*Completed*/
		// var arr2 = [];
		// $scope.Completed = function () {
		//
		// 	for (var i = 0; i < $scope.todos.length; i++) {
		// 		if ($scope.todos[i].completed === true) {
		// 			arr2.push($scope.todos[i]);
		// 		}
		// 	}
		// 	$scope.todos = arr2;
		// }

	}])


})(angular);
