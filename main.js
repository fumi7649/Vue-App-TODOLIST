// ここから書いてください


class Task{
  constructor(name,discription){
      this.name = name;
  }
}

var app = new Vue({
  el : "#app",
  data:{
      tasks : [],
      taskName : "",
  },
  methods: {
      isTaskEmpty : function(){
          if(this.taskName === "")return true;
          else false;
      },
      createTask : function(){
          let task = new Task(this.taskName);
          this.tasks.push(task);
          this.taskName = "";
      },
      deleteTask : function(i){
          this.tasks.splice(i, 1);
      }
      
  }
})