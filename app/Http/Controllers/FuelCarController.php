<?php

namespace App\Http\Controllers;

use App\Models\FuelCar;
use Illuminate\Http\Request;

class FuelCarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $fuelData = FuelCar::orderBy('id', 'DESC')->get();
            return $fuelData;
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
            $fuelCar = new FuelCar();
            $fuelCar->name = $request->fuel;
            $fuelCar->save();
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
     * @param  \App\Models\FuelCar  $fuelCar
     * @return \Illuminate\Http\Response
     */
    public function show(FuelCar $fuelCar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FuelCar  $fuelCar
     * @return \Illuminate\Http\Response
     */
    public function edit(FuelCar $fuelCar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FuelCar  $fuelCar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FuelCar $fuelCar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FuelCar  $fuelCar
     * @return \Illuminate\Http\Response
     */
    public function destroy(FuelCar $fuelCar)
    {
        //
    }
}
