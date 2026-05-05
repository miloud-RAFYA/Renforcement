<?php
// 1.1 Exercices guidés
// 1
$prenom='miloud';
$age=22;
// 3. Affichez : "Bonjour, je m'appelle [prénom] et j'ai [âge] ans."
echo "Bonjour, je m'appelle ".$prenom." et j'ai ".$age." ans.";
// Exercice 2 — Condition if/else
$age = 16;
if ($age >= 18) {
echo "Majeur";
} else {
echo "Mineur";
}
// Exercice 3 — Boucle for
for ($i=0;$i<10;$i++){
    echo $i."";
}
// 2. Introduction à la POO — Analogie

interface loiso{
    public function tit();
}
abstract class animal implements loiso{
    protected $name;
    protected $age;
    protected $ville;

    public abstract function dog();
}
class gig extends animal {
public function tit(){

}
 public  function dog(){

 }
}