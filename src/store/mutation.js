export default{
    nextQuestion(state,num){
        console.log(state,num);
        if(state.itemNum+1>state.answerid.length){
            alert("请选择你的答案！");
            return;

        }
        state.itemNum = num;

    },
    writeAnswer(state,id){
        let {itemNum,answerid} = state;
        if(itemNum+1==answerid.length){
               state.answerid.splice(itemNum,1,id);
        }else{
            state.answerid.push(id);
        }

        console.log(state);
    },
    submit(state){
       state.complete = true;
    }
}