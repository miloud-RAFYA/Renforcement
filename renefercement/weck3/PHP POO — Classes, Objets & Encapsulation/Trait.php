<?php

trait CalculeAge{
    public function calcule($anneDenaisance){
        return date('y-m-d')-$anneDenaisance;
    }
}class Personne{
    // use alcule;
}