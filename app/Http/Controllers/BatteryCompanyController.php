<?php

namespace App\Http\Controllers;

use App\Models\BatteryCompany;
use Illuminate\Http\Request;

class BatteryCompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $BatteryData = BatteryCompany::orderBy('id', 'DESC')->get();
            return response()->json($BatteryData, 200);
        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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
            $data = new BatteryCompany();
            $data->name =  $request->battery;
            $data->save();
            return response()->json(['message'=>'success'], 200);
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
     * @param  \App\Models\BatteryCompany  $batteryCompany
     * @return \Illuminate\Http\Response
     */
    public function show(BatteryCompany $batteryCompany)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\BatteryCompany  $batteryCompany
     * @return \Illuminate\Http\Response
     */
    public function edit(BatteryCompany $batteryCompany)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\BatteryCompany  $batteryCompany
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, BatteryCompany $batteryCompany)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\BatteryCompany  $batteryCompany
     * @return \Illuminate\Http\Response
     */
    public function destroy(BatteryCompany $batteryCompany)
    {
        //
    }
}
