<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\BatteryProduct;
use Illuminate\Support\Facades\DB;

class BatteryProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $data = DB::table('battery_products')
            ->join('model_cars','model_cars.id','battery_products.carId')
            ->join('battery_models','battery_models.id','battery_products.batteryId')
            ->join('fuel_cars','fuel_cars.id','battery_products.fuelId')
            ->join('locations','locations.id','battery_products.locationId')
            ->join('battery_companies','battery_companies.id','battery_models.battery_id')
            ->join('make_cars','make_cars.id','model_cars.make_id')
            ->select(DB::raw('make_cars.name, model_cars.name,battery_products.*,battery_models.batteryModel_name,battery_models.image,battery_models.desc,fuel_cars.name,locations.location,battery_companies.name,make_cars.name as makename,model_cars.name as modelname'))
            ->get();
           
             return response()->json($data, 200);
        } catch (\Exception  $thh) {
            if ($errorCode === 1062) { // Duplicate Entry error code
                return response()->json(['error'=>'Duplicate Entry '.$request->make], 200);
            }
            else{
                return response()->json(['error'=>'Something is Wrong '.$request->make], 200);
            }
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getProductsByMakeModelFuelLocationId(Request $request)
    {
        $makeName = $request->makeName;
        $modelName = $request->modelName;
        $fuelName = $request->fuelName;
        $locationName = $request->locationName;
        try {
            //$data =[];
            $makeData  = DB::table('make_cars')->where('name',$makeName)->get(['id','name']);
            $modelData  = DB::table('model_cars')->where('name',$modelName)->get(['id','name']);
            $fuelData  = DB::table('fuel_cars')->where('name',$fuelName)->get(['id','name']);
            $locationData  = DB::table('locations')->where('location',$locationName)->get(['id','location']);
    
            $productData = DB::table('battery_products')->where([['carId',$modelData[0]->id],['fuelId',$fuelData[0]->id],['locationId',$locationData[0]->id]])
            ->join('battery_models','battery_models.id','battery_products.batteryId')
            ->join('battery_companies','battery_companies.id','battery_models.battery_id')
            ->get(['battery_products.id','carId','fuelId','batteryId','batteryModel_name','locationId','desc','image','name','price','priceWithExchange','priceWithOutExchange']);
            if($productData[0]->id){
                return response()->json(['success'=>$productData], 200);
            }
            /* foreach ($productData as $p) {
                $mapData = DB::table('battery_models')
                ->join('battery_companies','battery_companies.id','battery_models.battery_id')->where('battery_models.id',$p->batteryId)->get(['batteryModel_name','desc','image','name']);
                array_push($data,$mapData);
                }     */ 
     
            //$array =  $productData->concat($data);
           
        } catch (\Throwable $th) {
            return response()->json(['error'=>'No Data Found'], 200);
        }
       
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
            $batteryProduct = new BatteryProduct();
            $batteryProduct->carId = $request->modelid;
            $batteryProduct->fuelId = $request->fuelid;
            $batteryProduct->batteryId = $request->battery;
            $batteryProduct->locationId = $request->locationid;
            $batteryProduct->price = $request->price;
            $batteryProduct->priceWithExchange = $request->withExchangeprice;
            $batteryProduct->priceWithOutExchange = $request->withOutExchangeprice;
            try {
                $dataExists = DB::table('battery_products')->where([['carId',$request->modelid],['fuelId',$request->fuelid],['batteryId', $request->battery],['locationId',$request->locationid]])->get();

                if($dataExists[0]->id){
                    return response()->json(['error'=>'Duplicate Entry '], 200);
                }
            } catch (\Throwable $th) {
                 $batteryProduct->save();
                 return response()->json(['message'=>'success'], 200);
            }
          
            //return $dataExists[0]->id;
            /* if($dataExists[0]->id){
                return response()->json(['error'=>'Duplicate Entry '.$request->make], 200);
            }
            else{
                $batteryProduct->save();
                return response()->json(['message'=>'success'], 200);
            } */
        } catch (\Exception  $th) {
            $errorCode  = $th->errorInfo[1];
            if ($errorCode === 1062) { // Duplicate Entry error code
                return response()->json(['error'=>'Duplicate Entry '.$request->make], 200);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\BatteryProduct  $batteryProduct
     * @return \Illuminate\Http\Response
     */
    public function show(BatteryProduct $batteryProduct)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BatteryProduct  $batteryProduct
     * @return \Illuminate\Http\Response
     */
    public function edit(BatteryProduct $batteryProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BatteryProduct  $batteryProduct
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BatteryProduct $batteryProduct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BatteryProduct  $batteryProduct
     * @return \Illuminate\Http\Response
     */
    public function destroy(BatteryProduct $batteryProduct)
    {
        //
    }
}
