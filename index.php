<!doctype html>
<html lang="en" ng-app="testApp">
<head>
	<meta charset="utf-8">
	<title>Test App</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="http://netdna.bootstrapcdn.com/bootswatch/3.0.0/flatly/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="/css/style.css">
	<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
	<!--[if lt IE 9]>
		<script src="../assets/js/html5shiv.js"></script>
	<![endif]-->
</head>
<body>

    <div class="container">

    	<h1><a href="/#/" >The Test App</a></h1>

		<div ng-view></div>

		<div id="push"></div>

	</div>

	<footer id="footer">
		<div class="container">
		<p class="muted credit">
			<a href="/#/the-task">The Task</a> by <a href="http://elsmore.me">Elsmore</a>.</p>
		</div>
	</footer>

	<!-- JS -->
	<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.js" ></script>
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script type="text/javascript" src="http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
	<script type="text/javascript" src="/js/app.js" ></script>
	<script type="text/javascript" src="/js/controllers.js" ></script>
	<script type="text/javascript" src="/js/institution.js" ></script>
	<script type="text/javascript" src="http://ejohn.org/files/pretty.js" ></script>
</body>
</html>