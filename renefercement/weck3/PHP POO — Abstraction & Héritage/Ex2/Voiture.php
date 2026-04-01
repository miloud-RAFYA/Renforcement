<?php
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
