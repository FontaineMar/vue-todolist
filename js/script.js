const myList = new Vue ({
  el:'#todoList',
  data:{
    array: [],
    arrayPref: [],
    inputMother:'',
    imageLogo:'img/boolean.png',
    changeColor: 'important',

  },
  methods:{
    saveInput: function(){
      this.array.push(this.inputMother)
    },
    leave: function(del){
      this.array.splice(del , 1 )
    },
    color: function(){
    this.changeColor
    }

  }
})

document.addEventListener('keydown' , function (e){
  if(e.key == 'Enter'){
    myList.saveInput()
  }
})
