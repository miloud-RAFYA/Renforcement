<?php
class Task {
    private $id;
    private $description;
    private $estimatedHoure;
 

    private function __construct($id,$description,$estimatedHoure){
        $this->id=$id;
        $this->description = $description;
        $this->estimatedHoure= $estimatedHoure;

    }
    public static function creerTask($id,$description,$estimatedHoure){
        return new Task($id,$description,$estimatedHoure);
        
    }
    public function getId(){
        return $this->id;
    }
    public function getDescription(){
        return $this->description;
    }
    public function getEstimatedHoure(){
        return $this->estimatedHoure;
    }

    public function isBig($threshold){
        if($this->estimatedHoure > $threshold){
            return true;
        }else{
            return false;
        }
    }

}
class Project{
    private $title;
    private $dailyRate;
    private $tasks=[];
     
    public function __construct($title,$dailyRate){
         $this->title=$title;
         $this->dailyRate=$dailyRate;
    }
    public function addTask($id,$description,$estimatedHoure){
        $task=Task::creerTask($id,$description,$estimatedHoure);
        array_push($this->tasks,$task);
    }
    public function getTasks(){
        return $this->tasks;
    }
    public function calculerTotalHoure(){
        $some=0;
       foreach ($this->tasks as $task) {
           $somme+=$task->estimatedHoure;
        }
        return $somme;
    }
    public function calculeTotalWithBuffer($bufferPercent = 10){
          return $this->calculerTotalHoure() * (1+$bufferPercent/100);
    }
    public function calculateBudget(){
        return $this->calculeTotalWithBuffer()*$this->dailyRate/8;
    }
    public function getBigtasks($threshold){
       foreach($this->tasks as $task){
        $task->isBig($threshold);
       }
    }



}