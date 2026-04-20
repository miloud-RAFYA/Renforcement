<?php
abstract class Vehicule{
    protected $marque;
    protected $modele;
    protected $annee;
    protected $prixBase;

    public function __construct($marque,$modele,$annee,$prixBase){
        $this->marque=$marque;
        $this->modele=$modele;
        $this->annee=$annee;
        $this->prixBase=$prixBase;
    }
    abstract public function getPrixFinal();
    abstract public function getDescription();

}

class VOiture extends Vehicule
{
    private $fraisMiseEnRoute = 150;
    public function __construct($marque,$modele,$annee,$prixBase){
           parent::__construct($marque,$modele,$annee,$prixBase);
    }
    public function getPrixFinal() {
        return $this->prixBase+$this->fraisMiseEnRoute;
    }
    public function getDescription() {
          return "la marque de voiture est :".$this->marque."de modele ".$this->modele."de l'annee ".$this->annee;
    }
}

class Camionnete extends vehicule {
    private $chargeUtile;
    public function __construct($marque,$modele,$annee,$prixBase,$chargeUtile){
          parent::__construct($marque,$modele,$annee,$prixBase);
          $this->chargeUtile=$chargeUtile;
    }
      public function getPrixFinal(){
        return $this->prixBase + $this->chargeUtile*0.10;
      }
     public function getDescription(){
          return "la marque de camionnete est :".$this->marque."de modele ".$this->modele."de l'annee ".$this->annee;
     }
}

class Moto extends Vehicule
{
    private $remiseAncienne = 0.05;
    public function __construct($marque,$modele,$annee,$prixBase){
        parent::__construct($marque,$modele,$annee,$prixBase);
    }
    public function getPrixFinal(){
           if($this->annee < 2020){

            return $this->prixBase - ($this->prixBase*0.05);
           }
     }
     public function getDescription(){
          return "la marque de Moto est :".$this->marque."de modele ".$this->modele."de l'annee ".$this->annee;
     }
}
