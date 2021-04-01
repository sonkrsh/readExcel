<?php

namespace App\Http\Controllers;

use App\Models\BatteryModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class BatteryModelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    { 
        try {
        $data = DB::table('battery_companies')
        ->join('battery_models','battery_companies.id','battery_models.battery_id')
        ->orderBy('battery_models.id', 'desc')
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
    public function create()
    {
        return response()->json('Mill Gya', 200);
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
            if ($request->hasFile('file')){
                $data = new BatteryModel();
                $data->battery_id =   $request->input("batteryCompany");
                $data->batteryModel_name = $request->input("batteryModel");
                $data->image = $request->file('file')->store('images');
                $data->save();
                return response()->json(['message'=>'success'], 200);
                 
            }
          
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
     * @param  \App\Models\BatteryModel  $batteryModel
     * @return \Illuminate\Http\Response
     */
    public function show(BatteryModel $batteryModel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BatteryModel  $batteryModel
     * @return \Illuminate\Http\Response
     */
    public function edit(BatteryModel $batteryModel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BatteryModel  $batteryModel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BatteryModel $batteryModel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BatteryModel  $batteryModel
     * @return \Illuminate\Http\Response
     */
    public function destroy(BatteryModel $batteryModel)
    {
        //
    }
}
