<?php

namespace App\Http\Controllers;

use App\Models\ReadExcel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Services\googleSheetService;

class ReadExcelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return DB::table('read_excels')->orderBy('id', 'DESC')->first();
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

        $data = null;
        if ($request->ongetCall) {
            $data = (new googleSheetService())->readSheet($request);
        } else {
            $data = (new googleSheetService())->readSheet($request);
            $sheetName = new ReadExcel();
            $sheetName->sheet_name = $request->sheetName;
            $sheetName->save();
        }
        return  response()->json($data['values']);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\ReadExcel  $readExcel
     * @return \Illuminate\Http\Response
     */
    public function show(ReadExcel $readExcel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\ReadExcel  $readExcel
     * @return \Illuminate\Http\Response
     */
    public function edit(ReadExcel $readExcel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\ReadExcel  $readExcel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, ReadExcel $readExcel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\ReadExcel  $readExcel
     * @return \Illuminate\Http\Response
     */
    public function destroy(ReadExcel $readExcel)
    {
        //
    }
}