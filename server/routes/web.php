<?php

use Illuminate\Support\Facades\Route;

// Rotas web vazias para desativar a página de boas-vindas padrão do Laravel
Route::get('/', function () {
    return response()->json(['message' => 'API está funcionando']);
});