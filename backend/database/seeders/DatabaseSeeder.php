<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // $user = User::factory()->create([
        //     'first_name' => 'پویا',
        //     'last_name' => 'غضنفری نیا',
        //     'email' => 'pimp.puma.13@gmail.com',
        // ]);
        // $categories = Category::factory(count: 30)->create();
        // Post::factory(30)->for($user, 'author')->for($categories, 'category')->create();

        Category::factory(count: 30)->create();

        User::factory(count: 30)->create();

        Post::factory(count: 30)->create();
    }
}
