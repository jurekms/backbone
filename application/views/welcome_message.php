<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Backbone</title>
</head>
<body>



<div id="usersList"></div>

<div id="userDetail"></div>

  <script id="templateUser" type="text/template">
  <span><%= username %></span>
  <strong><%= first_name %></strong>
  </script>

  <script id="templateDetailView" type="text/template">
  <h1> SZCEGÓŁY </h1>
  <span><%= first_name +  "  " + last_name %></span>
   </br>
  <strong><%= username %></strong>
  </script>




<script src="../../assets/jquery.js"></script>
<script src="../../assets/underscore.js"></script>
<script src="../../assets/backbone.js"></script>
<script src="../../js/scripts.js"></script>

</body>
</html>
