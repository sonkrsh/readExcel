<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Accessories | Procurement Performance Report | October Month</title>
    <style>
       table, td, th {
        border: 1px solid black;
        padding: 6px;
        }
        table {

        border-collapse: collapse;
        }
    </style>
</head>
<body>
    <div>
        <p>Hi Hitesh,<br>Please find below PPR:</p>
        <p style="font-weight: bold">   Category Wise Procurement:</p>
    </div>

    <table >
        <tr>
            <th>Product Category</th>
            <th>Inventory</th>
            <th>October Requirement</th>
            <th>Order Placed</th>
            <th>Delivered</th>
        </tr>

        @foreach ($details as $user)
        <tr>
            @isset ($user['Product_Category'])
            <td> {{ $user['Product_Category']}}</td>
            <td> {{ $user['Inventory']}}</td>
            <td> {{ $user['Requirement']}}</td>
            <td> {{ $user['Order_Placed']}}</td>
            <td> {{ $user['Dilivered']}}</td>
            @endisset
        </tr>
        @endforeach
    </table>
    <div style="padding-top: 3rem">
        @foreach ($details as $user)
            @isset ($user['orderPlacedPercentage'])
            <div style="border: solid 1px;width: 50%">
                <span style="border-right: 1px solid;padding-right: 2rem">Order Placed Percentage </span> <span style="padding-left: 2rem"> {{$user['orderPlacedPercentage']}}%</span>
            </div>
            @endisset
        @endforeach
        <div style="padding-top: 3rem">
            <table>
                <tr>
                    <th>Days</th>
                    <th>1-10</th>
                    <th>11-20 </th>
                    <th>21-30 </th>

                </tr>

                @foreach ($details as $user)
                <tr>
                    @isset ($user['oneToTen'])
                    <td> Target</td>
                    <td> {{ $user['oneToTen']}}</td>
                    <td> {{ $user['elevenToTwenty']}}</td>
                    <td> {{ $user['twentyOneToThirty']}}</td>
                    @endisset
                </tr>
                <tr>
                    @isset ($user['achievedOneToTen'])
                    <td> Achieved</td>
                    <td> {{ $user['achievedOneToTen']}}</td>
                    <td> {{ $user['achievedEleventToTwenty']}}</td>
                    <td> {{ $user['achievedTwentyOneToThirty']}}</td>
                    @endisset
                </tr>
                @endforeach
            </table>
            <ol style="padding-top: 1rem">
                <li>
                  October Requirement = Include Website + Offline + Amazon + Flipkart
                  Requirement
                </li>
                <li>Inventory: No Of Goods we have in our Warehouse</li>
                <li>Orders Placed: Requirements Shared With Vendors.</li>
                <li>
                  Delivered: quantity of Goods Which Successfully delivered at our
                  warehouse.
                </li>
                <li>Order Place % = Sum Order Placed / Sum October Requirement</li>
              </ol>
        </div>
    </div>




</body>
</html>
