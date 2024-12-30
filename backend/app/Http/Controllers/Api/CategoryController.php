<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\CategoryRequest;
use App\Http\Resources\Api\CategoryResource;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::latest()->get();
        // return CategoryResource::collection(resource: $categories);
        return Response::json(
            data: $categories,
            status: 200
        );
    }

    public function store(CategoryRequest $request)
    {
        $inputs = $request->all();
        $newCategory = Category::create($inputs);
        return Response::json(
            data: $newCategory,
            status: 201
        );
    }

    public function show(string $id)
    {
        //
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
