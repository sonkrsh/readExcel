<?php

namespace App\Http\Controllers;

use App\Models\GlassPrice;
use Illuminate\Http\Request;

class GlassPriceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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

            $glass = new GlassPrice();
            $glass->model_id =  $request->modelid;
            $glass->fuel_id = $request->fuelid;
            $glass->location_id = $request->locationid;
            $glass->discount_price = $request->discount_price;
            $glass->original_price = $request->original_price;
            $glass->glass_category_id = $request->glass_category;
            $glass->save();
            return response()->json(['message' => "Added SuccesFully", 'code' => 200]);
        } catch (\Exception  $th) {
            $errorCode  = $th->errorInfo[1];
            if ($errorCode === 1062) { // Duplicate Entry error code
                return response()->json(['error' => 'Duplicate Entry ' . $request->make], 200);
            }
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\GlassPrice  $glassPrice
     * @return \Illuminate\Http\Response
     */
    public function show(GlassPrice $glassPrice)
    {
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GlassPrice  $glassPrice
     * @return \Illuminate\Http\Response
     */
    public function edit(GlassPrice $glassPrice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GlassPrice  $glassPrice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GlassPrice $glassPrice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GlassPrice  $glassPrice
     * @return \Illuminate\Http\Response
     */
    public function destroy(GlassPrice $glassPrice)
    {
        //
    }
}
