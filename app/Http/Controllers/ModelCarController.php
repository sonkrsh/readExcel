<?php

namespace App\Http\Controllers;

use App\Models\ModelCar;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ModelCarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $data = DB::table('make_cars')
            ->join('model_cars','make_cars.id','model_cars.make_id')
            ->orderBy('model_cars.id', 'desc')
            ->select(DB::raw('make_cars.*, model_cars.*,make_cars.name as makename'))
            ->get();
             return response()->json($data, 200);
        } catch (\Exception  $th) {
            $errorCode  = $th->errorInfo[1];
            if ($errorCode === 1062) { // Duplicate Entry error code
                return response()->json(['error'=>'Duplicate Entry '], 200);
            }
            else{
                return response()->json(['error'=>'Something is Wrong '], 200);
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
            $makeCar = new ModelCar();
            $makeCar->name = $request->model;
            $makeCar->make_id = $request->make;
            $makeCar->save();
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
     * @param  \App\Models\ModelCar  $modelCar
     * @return \Illuminate\Http\Response
     */
    public function show(ModelCar $modelCar)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ModelCar  $modelCar
     * @return \Illuminate\Http\Response
     */
    public function edit(ModelCar $modelCar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ModelCar  $modelCar
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ModelCar $modelCar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ModelCar  $modelCar
     * @return \Illuminate\Http\Response
     */
    public function destroy(ModelCar $modelCar)
    {
        //
    }
}
