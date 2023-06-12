<!doctype html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css">
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="niceCountryInput.js"></script>
    <h1>Filterable Country & Continent Picker Demos</h1>
    <link rel="stylesheet" type="text/css" href="niceCountryInput.css">
    <style>
    body { font-family: 'Roboto'; background-color: #fafafa; }
    h3 { margin: 1.5rem auto; }
    .container { margin: 150px auto; }
</style>
</head>

<body>
<div id="jquery-script-menu">
<div class="jquery-script-center">
<div class="jquery-script-clear"></div>
</div>
</div>
        <div class="container">

<h1>Filterable Country & Continent Picker Demos</h1>
    <h3>With flags:</h3>
        <div class="niceCountryInputSelector" style="width: 300px;" data-selectedcountry="US" data-showspecial="false" data-showflags="true" data-i18nall="All selected"
            data-i18nnofilter="No selection" data-i18nfilter="Filter" data-onchangecallback="onChangeCallback" />
        </div>
        </div>




    <script>
        function onChangeCallback(ctr){
            console.log("The country was changed: " + ctr);
            //$("#selectionSpan").text(ctr);
        }

        $(document).ready(function () {
            $(".niceCountryInputSelector").each(function(i,e){
                new NiceCountryInput(e).init();
            });
        });
    </script>
</div>
</body>
</html>
