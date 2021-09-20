<?php

namespace App\Http\Controllers\Services;

namespace App\Http\Services;

use Google\Client;
use Google\Service\Sheets;
use Google\Service\Sheets\ValueRange;
use App\Http\Controllers\Controller;
use Google\Service\Sheets\Sheet;
use Illuminate\Http\Request;

class googleSheetService
{
    public $client, $service, $documentId, $range;

    public function __construct()
    {
        $this->client = $this->getClient();
        $this->service = new Sheets($this->client);
        $this->documentId = '18h8yDqX9KGCEupt47NA4fcppJ-RwuVOTpBCAkUZfflc';
        $this->range = 'A:Z';
    }
    public function getClient()
    {
        $client = new Client();
        $client->setApplicationName('demoSheet');
        $client->setRedirectUri('http://localhost:3000/googlesheet');
        $client->setScopes(Sheets::SPREADSHEETS);
        $client->setAuthConfig('credentials.json');
        $client->setAccessType('offline');
        return $client;
    }

    public function readSheet()
    {
        $doc = $this->service->spreadsheets_values->get($this->documentId, $this->range);
        return $doc;
    }
}