<?php

declare(strict_types=1);

namespace Database\Factories;

use App\Enums\Status;
use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    protected $model = Post::class;

    public function definition(): array
    {
        return [
            'title' => $sentence = $this->faker->sentence(),
            'status' => Status::PUBLISHED,
            'summary' => $description = $this->faker->text(120),
            'body' => $this->faker->paragraphs(
                nb: $this->faker->numberBetween(
                    int1: 5,
                    int2: 10,
                ),
                asText: true,
            ),
            'meta' => [
                'title' => $sentence,
                'description' => $description,
                'author' => 'Pouya Puma',
            ],
            'category_id' => Category::inRandomOrder()->first()->id,
            'user_id' => User::inRandomOrder()->first()->id,
            'is_active' => true,
            'slug' => $this->faker->unique()->slug(4)
        ];
    }
}
