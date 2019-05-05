class addShop{
    constructor () {
     
        this.name=document.querySelector("#inputName");
        this.price=document.querySelector("#inputPrice");
        this.num=document.querySelector("#inputNum");
        this.btn=document.querySelector("#addShop-btn");
        this.handleAddBtn=document.querySelector("#handleAdd");
        this.init();
        
    }
    init () {
       
        this.btn.onclick = () =>{

             
            let price = this.price.value,
             num = this.num.value,
             name = this.name.value;
           if(name==="" || price==="" || num===""){
                alert("输入不能为空");
                return;
           }
           tools.ajaxGetPromise("api/v1/addShop.php",{name,price,num}).then( date =>{
                if(date.res_Code===1){
                
                    alert(date.res_message);
                    
                    this.name.value =  this.price.value = this.num.value = "";
                    
                    $('#addModal').modal('hide');
                    rendershop.render();
               }
                
            
            });

        
        }

       

    }




}
new addShop();