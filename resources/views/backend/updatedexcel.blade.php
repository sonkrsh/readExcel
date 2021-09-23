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
    <table border="1">
        <tr>
            <th>Product Category</th>
            <th>Inventory</th>
            <th>October Requirement</th>
            <th>Order Placed</th>
            <th>Delivered</th>
        </tr>
        @foreach ($details as $user)
        <tr>
            <td> {{ $user['Product_Category']}}</td>
            <td> {{ $user['Inventory']}}</td>
            <td> {{ $user['Requirement']}}</td>
            <td> {{ $user['Order_Placed']}}</td>
            <td> {{ $user['Dilivered']}}</td>
        </tr>
        @endforeach

    </table>


</body>
</html>
