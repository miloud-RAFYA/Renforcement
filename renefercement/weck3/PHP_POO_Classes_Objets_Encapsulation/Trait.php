<?php

trait CalculeAge{
    public  function calcule($anneDenaisance){
        $dateActuille=date('Y');
        return $dateActuille - $anneDenaisance;
    }
}class Personne{
    private $anneDenaisance;
    use calculeAge;
    public function __construct($anneDenaisance){
        $this->anneDenaisance=$anneDenaisance;
    }
    public function getAge(){
        return $this->calcule($this->anneDenaisance);
    }
}
$per=new Personne(2000);
echo $per->getAge();