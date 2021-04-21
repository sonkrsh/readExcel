<?php

namespace App\Http\Controllers;

use App\Models\AddImages;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AddImagesController extends Controller
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
            /* $myArr = []; */
            if ($request->hasFile('file')){
                $data = new AddImages();
                $data->type =   $request->input("type");
                $imageName = $request->file('file')->store('1QB_vQjqRYY4yOMWRDZ9KfIHPXttXuckj','google');
                $url = Storage::disk('google')->url($imageName);
                $data->url = $url;
                $data->save(); 
                return response()->json(['message'=>"Added SuccesFully"], 200);
                 
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
     * @param  \App\Models\AddImages  $addImages
     * @return \Illuminate\Http\Response
     */
    public function show(AddImages $addImages)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\AddImages  $addImages
     * @return \Illuminate\Http\Response
     */
    public function edit(AddImages $addImages)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\AddImages  $addImages
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, AddImages $addImages)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\AddImages  $addImages
     * @return \Illuminate\Http\Response
     */
    public function destroy(AddImages $addImages)
    {
        //
    }
}
