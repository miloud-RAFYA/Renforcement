<?php
class Animal{
    public $nom;
    public $race;
    public $couleur;

    public function __construct($nom,$race){
         $this->nom=$nom;
         $this->race=$race;
    }

    public function parle(){
        echo $this->nom."dit:Grr!";
    }
    public function decrire(){
           echo $this->nom."race".$this->race."couleur".$this->couleur;
    }
}
$animal1=new Animal('Rex','Chien');
$animal2=new Animal('Mimi','Chat');

$animal1->parle();
$animal2->parle();

$animal1->nom;
// 4. Quiz de validation
// b)
// b)
// c)
// b)
// c)

class Voiture{
   public $marque;
   public $modele;
   public $annee ;

   public function __construct($marque,$modele,$annee){
    $this->marque=$marque;
    $this->modele=$modele;
    $this->annee=$annee;
   }
   public function demarrer(){
    echo"[".$this->marque."]"."[".$this->modele."] demarre!"."<br>";
   }
}
$voiture1=new Voiture('toyota','A','2020');
$voiture2=new Voiture('rono','B','2020');

$voiture1->demarrer();
$voiture2->demarrer();

