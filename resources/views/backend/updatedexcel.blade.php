<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Updated Excel</title>
</head>
<body>
    <div style="color:blue" class="h3">Updated Excel</div>
    @foreach ($details as $user)
    <div style="border: solid 1px">
        <p>This is user {{ $user['Product_Category']}}</p>
    </div>

    @endforeach
</body>
</html>
