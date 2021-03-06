<!DOCTYPE>
<html ng-app>
	<head>
		<title>PUP NLP - Software</title>
		<link rel="stylesheet" type="text/css" href="foundation/css/foundation.min.css">
		<link rel="stylesheet" type="text/css" href="font-awesome/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" href="src/css/main.css">
		<link rel="stylesheet" type="text/css" href="animate.css">
		<script src="jquery/jquery.min.js"></script>
		<script type="text/javascript" src="foundation/js/foundation.min.js"></script>
	</head>
	<body>
		<script type="text/javascript">
			var users = {{ $users }}
			var tools = {{ $tools }};
			var authUser = {{ Auth::user() }};
			var notifications = {{ Auth::user()->unreadNotifications }};
		</script>
		<script type="text/javascript" src="src/js/main.js"></script>
	</body>
</html>
