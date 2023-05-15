<?php

namespace App\Document;

use Doctrine\ODM\MongoDB\Mapping\Annotations as MongoDB;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @MongoDB\Document(collection="categories")
 */
class CategoriesDocument
{
    /**
     * @MongoDB\Id(strategy="INCREMENT")
     * @Groups("category")
     */
    private $id;

    /**
     * @MongoDB\Field(type="string")
     * @Groups("category")
     */
    private $category;

    /**
     * Get the value of id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Get the value of category name
     */
    public function getCategory(): ?string
    {
        return $this->category;
    }

    /**
     * Get the value of category name
     */
    public function setCategory(string $category)
    {
        $this->category = $category;
    }
}

?>
