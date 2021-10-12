<?php

namespace App\Http\Controllers;

use App\Models\EmailUsers;
use Illuminate\Http\Request;

class EmailUsersController extends Controller
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
        $data = new EmailUsers();
        $data->to = $request->to;
        $data->cc = $request->cc;
        $data->bcc = $request->bcc;
        $data->save();
        return response()->json(['message' => 'success'], 200);
        return $request;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\EmailUsers  $emailUsers
     * @return \Illuminate\Http\Response
     */
    public function show(EmailUsers $emailUsers)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\EmailUsers  $emailUsers
     * @return \Illuminate\Http\Response
     */
    public function edit(EmailUsers $emailUsers)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\EmailUsers  $emailUsers
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, EmailUsers $emailUsers)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\EmailUsers  $emailUsers
     * @return \Illuminate\Http\Response
     */
    public function destroy(EmailUsers $emailUsers)
    {
        //
    }
}