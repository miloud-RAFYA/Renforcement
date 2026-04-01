<?php
class Produit{
    private $nom;
    private $prix;
    private $stock;

    public function __construct($nom,$prix,$stock){
        $this->nom=$nom;
        $this->prix=$prix;
        $this->stock=$stock;
    }
    public function getNom(){
      return $this->nom;
    }
    public function getPrix(){
        return $this->prix;
    }
    public function getStock(){
        $this->stock;
    }
    public function setNom($nom){
        $this->nom=$nom;
    }
    public function setPrix($prix){
        if($prix>=0){
            $this->prix=$prix;
        }else{
            echo "le prix et negative ou insuffisant";
        }

    }
    public function setStock($stock){
        if($stock>0){
            $this->stock=$stock;
        }else {
            echo "le stock n'est pas vide ";
        }
    }
    public function afficher(){
        return "[nom]".$this->nom."[prix]".$this->prix."stock".$this->stock;
    }
}
$produit1=new Produit('nom',20,10);
$produit2=new Produit('anas',30,25);
$produit1->afficher();
$produit2->afficher();

$produit1->setPrix(-5);

$produit1->getNom();
$produit1->getPrix();




