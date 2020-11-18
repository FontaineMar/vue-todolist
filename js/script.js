const myList = new Vue ({
  el:'#todoList',
  data:{
    array: [],
    inputMother:'',
    imageLogo:'img/boolean.png',
  },
  methods:{
    saveInput: function(){
      this.array.push({
        important: false,
        text: this.inputMother
      })
    },
    leave: function(del){
      this.array.splice(del , 1 )
    },


  }
})

document.addEventListener('keydown' , function (e){
  if(e.key == 'Enter'){
    myList.saveInput()
  }
})
