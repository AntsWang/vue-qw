export default {
    clearAnswer(state) {
        state.answerid = [];
        state.itemNum = 0;
        state.totalScore = 0;
    },
    nextQuestion(state, num) {
        console.log(state, num);
        if (state.itemNum + 1 > state.answerid.length) {
            alert("请选择你的答案！");
            return;

        }
        state.itemNum = num;

    },
    writeAnswer(state, id) {
        let { itemNum, answerid } = state;
        if (itemNum + 1 == answerid.length) {
            state.answerid.splice(itemNum, 1, id);
        } else {
            state.answerid.push(id);
        }

        console.log(state);
    },
    submit(state, router) {
        console.log(state, router.push);
        let { correctAnswer, answerid, totalScore } = state;
        answerid.map((item) => {
            if (correctAnswer.includes(item)) {
                totalScore = totalScore + 20;
            }
        });
        state.totalScore = totalScore;
        router.replace('score');
    }
}