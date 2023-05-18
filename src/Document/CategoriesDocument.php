<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Class CategoriesDocument
 *
 * Represents a category document.
 *
 * @MongoDB\Document(collection="categories")
 */
class CategoriesDocument
{
    /**
     * @MongoDB\Id(strategy="INCREMENT")
     * @Groups("category")
     * @var int|null
     */
    private $id;

    /**
     * @MongoDB\Field(type="string")
     * @Groups("category")
     * @var string|null
     */
    private $category;

    /**
     * Get the ID of the category.
     *
     * @return int|null The ID of the category, or null if it hasn't been set.
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get the category name.
     *
     * @return string|null The category name, or null if it hasn't been set.
     */
    public function getCategory(): ?string
    {
        return $this->category;
    }

    /**
     * Set the category name.
     *
     * @param string $category The category name to set.
     * @return void
     */
    public function setCategory(string $category)
    {
        $this->category = $category;
    }
}

?>
