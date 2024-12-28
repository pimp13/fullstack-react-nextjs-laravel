<?php

namespace App\Http\Controllers\Api;

use App\Enums\Status;
use App\Http\Controllers\Controller;
use App\Http\Resources\Api\PostResource;
use App\Models\Post;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = cache()->remember('latest_all_posts', 900, function () {
            return Post::latest()->get();
        });
        return PostResource::collection(
            resource: $posts
        );
    }

    public function store(Request $request): JsonResponse
    {
        $validator = $request->validate([
            "title" => "required|string|min:4|max:191",
            "body" => "required|string|min:4|max:255",
            "summary" => "required|string|min:4|max:191",
            "status" => "nullable|string|min:4|max:191",
        ]);
        $requests = $request->all();
        $requests['user_id'] = 1;
        $response = Post::create($requests);
        return response()->json($response);
    }

    public function show(Post $post)
    {
        return new PostResource(
            resource: $post
        );
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
