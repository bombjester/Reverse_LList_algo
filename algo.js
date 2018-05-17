var reverseList = function(head) {
    var array = [];
    var answer = [];
    if(head){
        var index = head;
        while(index != null){
           
           array.push(index.val)
                index = index.next
            
        }
    }
    
    for(var i = array.length-1; i >= 0; i--){
        answer.push(array[i]);
    }
    return answer;
};