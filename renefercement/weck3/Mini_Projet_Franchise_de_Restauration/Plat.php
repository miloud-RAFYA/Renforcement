<?php
abstract class  Plat
{
    protected $id;
    protected $nom;
    protected $prixBase;
    protected $calories;
    public function __construct($id, $nom, $prixBase, $calories)
    {
        $this->id = $id;
        $this->nom = $nom;
        $this->prixBase = $prixBase;
        $this->calories = $calories;
    }
    public function setPrixBase($prix){
        if($prix > 0)
        $this->prixBase=$prix;
    }
    public function getDescription(){

    }
    public function getPrixBase(){
        return $this->prixBase;
    }
    public function getNam(){
        return $this->nom;
    }
}
