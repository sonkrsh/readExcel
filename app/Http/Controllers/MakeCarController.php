<?php

namespace App\Http\Controllers;

use App\Models\MakeCar;
use Illuminate\Http\Request;

class MakeCarController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $makeData = MakeCar::orderBy('id', 'DESC')->get();
            return $makeData;
        } catch (\Throwable $th) {
            //throw $th;
        }
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        try {
            $makeCar = new MakeCar();
            $makeCar->name = $request->make;
            $makeCar->save();
            return response()->json(['message'=>'success'], 200);
        } catch (\Exception  $th) {
            $errorCode  = $th->errorInfo[1];
            if ($errorCode === 1062) { // Duplicate Entry error code
                return response()->json(['error'=>'Duplicate Entry '.$request->make], 200);
            }
        }
       
    }

  
    public function show(MakeCar $makeCar)
    {
        //
    }

    
    public function edit(MakeCar $makeCar)
    {
        //
    }

   
    public function update(Request $request, MakeCar $makeCar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\MakeCar  $makeCar
     * @return \Illuminate\Http\Response
     */
    public function destroy(MakeCar $makeCar)
    {
        //
    }
}
