<?php

namespace App\Http\Controllers;

use App\Models\GlassCategory;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GlassCategoryController extends Controller
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

            if ($request->hasFile('glass_image_url')) {
                $glass = new GlassCategory();
                $glass->glass_category_name =  $request->input("glass_category_name");
                $glass->glass_features = $request->input("fields");

                $imageName = $request->file('glass_image_url')->store('1j95u7hm-dUkDHsixnlf30OG5qoZgtkul', 'google');
                $url = Storage::disk('google')->url($imageName);
                $glass->glass_image_url = $url;
                $glass->save();
                return response()->json(['message' => "Added SuccesFully", 'code' => 200], 200);
            }
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
     * @param  \App\Models\GlassCategory  $glassCategory
     * @return \Illuminate\Http\Response
     */
    public function show(GlassCategory $glassCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\GlassCategory  $glassCategory
     * @return \Illuminate\Http\Response
     */
    public function edit(GlassCategory $glassCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\GlassCategory  $glassCategory
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, GlassCategory $glassCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\GlassCategory  $glassCategory
     * @return \Illuminate\Http\Response
     */
    public function destroy(GlassCategory $glassCategory)
    {
        //
    }
}
