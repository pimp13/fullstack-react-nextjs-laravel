<?php

declare(strict_types=1);

namespace App\Enums;

enum Status: string
{
    case DRAFT = "draft";
    case EDITORIAL = "editorial";
    case PUBLISHED = "published";

}
