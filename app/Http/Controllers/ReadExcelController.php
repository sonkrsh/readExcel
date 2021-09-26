<?php

namespace App\Http\Controllers;


use App\Mail\updatedExcel;
use App\Models\ReadExcel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Services\googleSheetService;
use Illuminate\Support\Facades\Mail;

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
    public function sendMail(Request $request)
    {

        try {
            $users = ['sonkrsh@gmail.com', 'mailsenda2z2@gmail.com'];

            foreach ($users as $uniqueuser) {
                Mail::to($uniqueuser)->cc('shubhamkumar@gomechanic.in')->send(new updatedExcel($request->all()));
            }

            return response()->json(['message' => 'Mail Send Successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Message Not Send'], 400);
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
        $data = (new googleSheetService())->readSheet($request);

        if ($data['values']) {
            return  response()->json($data['values']);
        } else {
            return  response()->json($data);
        }
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