const edge = require('edge')
const clrMethod = edge.func({
    assemblyFile: './native/Edge_test.dll',
    typeName: 'Edge_test.Class1',
    methodName: 'Concat' // This must be Func<object,Task<object>>
})
const concatResult = document.getElementById('concatResult');
clrMethod({first: 'aaa', second: 'bb'}, function (error, result) {
    if (!error) {
        concatResult.innerHTML = result;
    }
})

const logView = document.getElementById('logView')
const callingCallback = edge.func({
    assemblyFile: './native/Edge_test.dll',
    typeName: 'Edge_test.Class1',
    methodName: 'CallingCallback' // This must be Func<object,Task<object>>
})

const startTimerBtn = document.getElementById('startTimerBtn')
startTimerBtn.onclick = function () {
    callingCallback({
        //The timer in c# will call this function.
        callback: function (obj, func) {
            logView.innerHTML += `${obj.a} ${obj.b}<br/>`
        }
    }, function (error, result) {
        //do nothing
    })

    startTimerBtn.onclick = function () {
    }
}
