const myList = new Vue ({
  el:'#todoList',
  data:{
    array: [],
    inputMother:'',
    imageLogo:'img/boolean.png',
    backgroundColor: 'lightgreen',

  },
  methods:{
    saveInput: function(){
      this.array.push(this.inputMother)
    },
    leave: function(del){
      this.array.splice(del , 1 )
    },
    changeColor: function(a , b){
      if(a.includes(b)){
        return {'backgroundColor' : 'green'}

      }

    }
  }
})

document.addEventListener('keydown' , function (e){
  if(e.key == 'Enter'){
    myList.saveInput()
  }
})
