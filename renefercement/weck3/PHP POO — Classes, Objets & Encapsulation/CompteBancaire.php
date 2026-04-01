<?php
class CompteBancaire{
    private $titulaire;
    private $iban;
    private $solde;

    public function __construct($titulaire,$iban){
        $this->titulaire=$titulaire;
        $this->iban=$iban;
        $this->solde=0;
    }
    public function getTitilaire(){
        return $this->titulaire;
    }
    public function getIban(){
        return $this->iban;
    }
    public function getSolde(){
        return $this->solde;
    }
    public function deposer($montant){
        if($montant>0){
            $this->solde=$montant;
        }else{
            echo "le montant est negative";
        }
    }
    public function retirer($montant){
        if($montant>0 && ($this->solde-$montant)>=0){
            $this->solde=$this->solde-$montant;
            echo "solde Suffisant";
        }else{
            echo "le solde insuffisant";
        }
    }
    public function afficherInfos(){
        return "le titulaire est:".$this->titulaire."le iban ".$this->iban."le solde est : ".$this->solde;
    }
    
}